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

const onSubmit = form.handleSubmit((values) => {
  console.log(values);
  toast.success("Form submitted!");
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
    <Button type="submit" class="w-full"> Sign in </Button>
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
