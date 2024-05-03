<script setup lang="ts">
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

const formSchema = toTypedSchema(
  z
    .object({
      fullname: z.string().regex(/^[a-zA-Z]+(?:\s+[a-zA-Z'-]+)+$/, {
        message: "Invalid Fullname",
      }),
      email: z.string().email({
        message: "Invalid Email!",
      }),
      password: z.string().min(6, {
        message: "6 characters minimum",
      }),
      confirmPassword: z.string().min(6, {
        message: "6 characters minimum",
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["password"],
    })
);

const form = useForm({
  validationSchema: formSchema,
});

const isSubmitting = computed(() => {
  return form.isSubmitting;
});

const isSignup = useState("isSignup", () => false);

const onSubmit = form.handleSubmit(async (values) => {
  try {
    isSignup.value = true;

    const userProfile = await $fetch("/api/signup", {
      method: "POST",
      body: {
        ...values,
      },
    });

    toast.success(`Welcome, ${userProfile.name}`, {
      theme: "colored",
    });

    await navigateTo("/account/profile");
  } catch (error: any) {
    const errorMessage = error.data?.message ?? error.message;
    toast.error(errorMessage, {
      theme: "colored",
    });
  } finally {
    isSignup.value = false;
  }
});
</script>

<template>
  <form @submit="onSubmit" class="space-y-2">
    <FormField v-slot="{ componentField }" name="fullname">
      <FormItem>
        <FormLabel>Full name</FormLabel>
        <FormControl>
          <Input
            type="text"
            placeholder="e.g John Doe"
            class="block w-full h-12 px-4 py-2 text-zinc-700 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
            v-bind="componentField"
            :disabled="isSubmitting.value"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
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
    <div class="grid lg:grid-cols-2 gap-2 sm:gap-5">
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
      <FormField v-slot="{ componentField }" name="confirmPassword">
        <FormItem>
          <FormLabel>Confirm Password</FormLabel>
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
    </div>
    <Button :disabled="isSignup" type="submit" class="w-full gap-x-1">
      <Loader2 v-if="isSignup" class="animate-spin size-4" />
      <span v-else>Create Account</span>
    </Button>
    <div class="mt-6">
      <p
        class="flex mx-auto gap-x-1 text-sm font-medium leading-tight text-center text-black"
      >
        <span class="block">Already have an account?</span>
        <RouterLink to="/auth/signin" class="text-blue-500 hover:text-black">
          Sign in now
        </RouterLink>
      </p>
    </div>
  </form>
</template>
