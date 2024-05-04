<script setup lang="ts">
import { Loader2 } from "lucide-vue-next";
import AddAvatar from "~/components/onboarding/AddAvatar.vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

import { Button } from "~/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { toast } from "vue3-toastify";

definePageMeta({
  middleware: ["protected"],
});

const user = useAuthenticatedUser();

const avatars = useState("avatars", () => [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dfa1yoc1v/image/upload/v1712216691/avatars/bqdsvfaq8doslal6q5s2.png",
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dfa1yoc1v/image/upload/v1712216692/avatars/hk2ysp5kiwhae9drznuu.png",
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dfa1yoc1v/image/upload/v1712216691/avatars/e0xiflr2u0bjfmz5ttms.png",
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dfa1yoc1v/image/upload/v1712216691/avatars/z0j1aibbao4td4xph0z1.png",
  },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/dfa1yoc1v/image/upload/v1712216691/avatars/ur2ufvmgclnjcugzar7f.png",
  },
  {
    id: 6,
    imageUrl:
      "https://res.cloudinary.com/dfa1yoc1v/image/upload/v1712216692/avatars/cqsil7kfkwudvpizuafq.png",
  },
  {
    id: 7,
    imageUrl:
      "https://res.cloudinary.com/dfa1yoc1v/image/upload/v1712216691/avatars/qhdofg89he0it7e5uhes.png",
  },
  {
    id: 8,
    imageUrl:
      "https://res.cloudinary.com/dfa1yoc1v/image/upload/v1712216691/avatars/slth8yqzcrk2mnp0xrpv.png",
  },
]);

const formSchema = toTypedSchema(
  z.object({
    username: z.string().regex(/^[a-zA-Z0-9_]{3,20}$/, {
      message: "Invalid Username!",
    }),
    location: z.string().regex(/^[a-zA-Z\s,-]+$/, {
      message: "Invalid Location",
    }),
  })
);

const form = useForm({
  validationSchema: formSchema,
});

const isSubmitting = computed(() => {
  return form.isSubmitting;
});

const isProceeding = useState("isProceeding", () => false);
const selectedAvatar = useState("selectedAvatar", () => "");

const imageUrl = computed(() => {
  return selectedAvatar.value ? selectedAvatar.value : profile.value?.imageUrl;
});

const { data: profile } = await useFetch("/api/profile", {
  watch: [user.value],
});

console.log(profile);

onBeforeMount(async () => {
  if (profile.value?.location && profile.value.username) {
    await navigateTo("/account/profile");
  }
});

const setSelectedAvartar = (avatar: string) => {
  selectedAvatar.value = avatar;
};

const onSubmit = form.handleSubmit(async (values) => {
  try {
    isProceeding.value = true;
    await $fetch("/api/profile/update", {
      method: "PATCH",
      body: {
        ...values,
        imageUrl: imageUrl.value,
      },
    });
    return await navigateTo("/account/profile");
  } catch (error: any) {
    const errorMessage = error.data?.message ?? error.message;
    toast.error(errorMessage, {
      theme: "colored",
    });
  } finally {
    isProceeding.value = false;
  }
});
</script>

<template>
  <section class="max-w-2xl mx-auto mt-5 space-y-4 p-5 md:p-0">
    <div class="space-y-3 text-center sm:text-left">
      <h1 class="text-4xl font-semibold">
        Welcome! Let&rsquo;s create your Profile
      </h1>
      <p class="text-base text-gray-500">Let others get to know you better!</p>
    </div>
    <div class="space-y-6">
      <AddAvatar
        :selectedAvatar="selectedAvatar"
        :avatars="avatars"
        :profileImg="profile?.imageUrl!"
        :setSelectedAvartar="setSelectedAvartar"
      />
      <!-- <AddLocation location="{location}" setLocation="{setLocation}" /> -->
      <form @submit="onSubmit" class="space-y-4">
        <FormField v-slot="{ componentField }" name="username">
          <FormItem>
            <FormLabel class="sm:text-base">Username</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="e.g johndoe"
                class="text-base border-x-0 border-t-0 rounded-none focus-within:border-emerald-400 focus-visible:ring-0 focus-visible:ring-ring shadow-none outline-none focus-visible:ring-offset-0"
                v-bind="componentField"
                :disabled="isSubmitting.value"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="location">
          <FormItem>
            <FormLabel class="sm:text-base">Location</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="e.g Nairobi"
                class="text-base border-x-0 border-t-0 rounded-none focus-within:border-emerald-400 focus-visible:ring-0 focus-visible:ring-ring shadow-none outline-none focus-visible:ring-offset-0"
                v-bind="componentField"
                :disabled="isSubmitting.value"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <div class="flex justify-end">
          <Button type="" submit :disabled="isProceeding" class="gap-x-2">
            <Loader2 v-if="isProceeding" class="animate-spin size-4" />
            <span v-else> Continue </span>
          </Button>
        </div>
      </form>
    </div>
  </section>
</template>
