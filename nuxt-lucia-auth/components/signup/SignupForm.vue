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

const formSchema = toTypedSchema(
  z
    .object({
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

const onSubmit = form.handleSubmit((values) => {
  console.log("Form submitted!", values);
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
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit" class="w-full"> Create Account </Button>
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
