<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { toast } from "vue3-toastify";

import { Button } from "~/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Loader2 } from "lucide-vue-next";

const isSignin = useState("isSignin", () => false);

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email({
      message: "Invalid Email!",
    }),
    password: z.string().min(6, {
      message: "6 characters minimum",
    }),
  })
);

const form = useForm({
  validationSchema: formSchema,
});

const isSubmitting = computed(() => {
  return form.isSubmitting;
});

const onSubmit = form.handleSubmit(async (values) => {
  try {
    isSignin.value = true;
    const loggedUser = await $fetch("/api/signin", {
      method: "POST",
      body: {
        ...values,
      },
    });

    toast.success(`Welcome back, ${loggedUser.profile?.name}`, {
      theme: "colored",
    });

    await navigateTo("/account/profile");
  } catch (error: any) {
    const errorMessage = error.data?.message ?? error.message;
    toast.error(errorMessage, {
      theme: "colored",
    });
  } finally {
    isSignin.value = false;
  }
});
</script>

<template>
  <form @submit="onSubmit" class="space-y-2">
    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input
            type="email"
            placeholder="johndoe@example.com"
            class="block w-full h-12 px-4 py-2 text-zinc-700 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
            v-bind="componentField"
            :disabled="isSubmitting.value"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="password">
      <FormItem>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input
            type="password"
            placeholder="eg. mysecretkey"
            class="block w-full h-12 px-4 py-2 text-zinc-700 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
            v-bind="componentField"
            :disabled="isSubmitting.value"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button :disabled="isSignin" type="submit" class="w-full gap-x-1">
      <Loader2 v-if="isSignin" class="animate-spin size-4" />
      <span v-else>Sign in</span>
    </Button>
    <div class="mt-6">
      <p
        class="flex mx-auto text-sm gap-x-1 font-medium leading-tight text-center text-black"
      >
        <span class="block">Don't have an account?</span>
        <RouterLink class="text-blue-500 hover:text-black" to="/auth/signup">
          Sign up now
        </RouterLink>
      </p>
    </div>
  </form>
</template>
