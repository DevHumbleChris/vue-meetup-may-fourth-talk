<script setup lang="ts"></script>

<template>
  <section>
    <div class="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
        <div class="flex flex-col">
          <RouterLink to="/" class="mb-4">
            <img
              src="https://shuffle.dev/gradia-assets/logos/gradia-name-white.svg"
              alt="gradia"
            />
          </RouterLink>
          <h1
            class="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl"
          >
            Collaborating on single-page projects,
            <span class="text-gray-600">from any location</span>
          </h1>
          <p class="mt-4 text-base font-medium text-gray-500 text-pretty">
            A rapid approach to collaborate in staging and provisional settings.
          </p>
        </div>
        <div class="p-2 border bg-gray-50 rounded-3xl">
          <div class="p-10 bg-white border shadow-lg rounded-3xl">
            <div>
              <div class="space-y-2">
                <button
                  class="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  type="button"
                  aria-label="Sign in with Google"
                >
                  <Icon
                    name="logos:google-icon"
                    role="img"
                    class="md hydrated"
                    aria-label="logo google"
                  />
                  <span>Sign in with Google</span>
                </button>

                <button
                  class="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  type="button"
                  aria-label="Sign in with GitHub"
                >
                  <Icon
                    name="lucide:github"
                    role="img"
                    class="md hydrated"
                    aria-label="logo google"
                  />
                  <span>Sign in with GitHub</span>
                </button>
              </div>
              <div class="relative py-3">
                <div
                  class="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center">
                  <span class="px-2 text-sm text-black bg-white"
                    >Or continue with</span
                  >
                </div>
              </div>
            </div>
            <form>
              <div class="space-y-3">
                <div>
                  <label
                    for="name"
                    class="block mb-3 text-sm font-medium text-black"
                  >
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
                  <label
                    for="password"
                    class="block mb-3 text-sm font-medium text-black"
                  >
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
                  <RouterLink
                    class="text-blue-500 hover:text-black"
                    to="/auth/signup"
                  >
                    Sign up now
                  </RouterLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
