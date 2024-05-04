<script setup lang="ts">
import Procedure from "~/components/homepage/Procedure.vue";
</script>

<template>
  <section>
    <div class="px-8 py-20 mx-auto md:px-12 lg:px-32 max-w-7xl">
      <div class="text-center">
        <h1
          class="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl text-balance"
        >
          Simplifying the intricate process of managing sessions,
          <span class="text-gray-600"
            >Lucia seamlessly integrates with your database.</span
          >
        </h1>
        <p
          class="w-1/2 mx-auto mt-4 text-base font-medium text-gray-500 text-balance"
        >
          Lucia is an auth library for your server that abstracts away the
          complexity of handling sessions. It works alongside your database to
          provide an API that's easy to use, understand, and extend.
        </p>
        <div
          class="flex flex-col items-center justify-center gap-2 mx-auto mt-8 md:flex-row"
        >
          <RouterLink
            to="/auth/signup"
            class="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 md:w-auto rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-label="Secondary action"
          >
            View Demo
          </RouterLink>
        </div>
        <dl class="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-3 text-balance">
          <div>
            <dt class="font-medium text-gray-900">
              Streamlined Authentication
            </dt>
            <dd class="mt-2 text-sm font-medium text-gray-500">
              Say goodbye to the hassle of session management complexities.
              Lucia handles it all, allowing you to focus on your core
              functionalities.
            </dd>
          </div>
          <div>
            <dt class="font-medium text-gray-900">
              Seamless Database Integration
            </dt>
            <dd class="mt-2 text-sm text-gray-500">
              Lucia effortlessly syncs with your database, ensuring smooth
              operations and data consistency.
            </dd>
          </div>
          <div>
            <dt class="font-medium text-gray-900">Intuitive API</dt>
            <dd class="mt-2 text-sm text-gray-500">
              Designed with simplicity in mind, Lucia's API is easy to grasp and
              a breeze to extend, empowering developers of all levels.
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <section>
      <div class="px-8 pt-6 pb-12 mx-auto md:px-12 max-w-7xl">
        <div class="w-full lg:col-span-2">
          <h1
            class="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-6xl text-balance"
          >
            In today's talk, we'll explore how Lucia makes implementing
            authentication a breeze.
          </h1>
        </div>
        <p class="mt-4 text-base font-medium text-gray-500 text-balance">
          Covering everything from traditional email/password authentication to
          seamless integration with multiple OAuth providers. So buckle up as we
          embark on a journey to streamline authentication in your applications,
          making it easier, more secure, and more user-friendly than ever
          before.
        </p>
      </div>
    </section>
    <Procedure />
  </section>
</template>
