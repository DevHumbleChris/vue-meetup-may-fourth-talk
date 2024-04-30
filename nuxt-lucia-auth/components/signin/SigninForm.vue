<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

import { Button } from "~/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2).max(50),
  })
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  console.log("Form submitted!", values);
});
</script>

<template>
  <form>
    <div class="space-y-3">
      <div>
        <label for="name" class="block mb-3 text-sm font-medium text-black">
          First name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Your name"
          class="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
        />
      </div>
      <div class="col-span-full">
        <label for="password" class="block mb-3 text-sm font-medium text-black">
          Password
        </label>
        <input
          id="password"
          class="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
          placeholder="Type password here..."
          type="password"
        />
      </div>
      <div class="col-span-full">
        <button
          type="submit"
          class="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
        >
          Sign in
        </button>
      </div>
    </div>
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
