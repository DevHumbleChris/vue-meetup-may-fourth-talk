<script setup lang="ts">
import SigninForm from "~/components/signin/SigninForm.vue";

useHead({
  titleTemplate: "%s - Signin",
});

const user = useUser();

watch(
  user,
  () => {
    if (user.value) {
      navigateTo("/account/profile");
    }
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <section>
    <div class="px-8 py-12 mx-auto md:px-12 xl:px-32 max-w-7xl">
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
                <a
                  href="/signin/google"
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
                </a>

                <a
                  href="/signin/github"
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
                </a>
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
            <SigninForm />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
