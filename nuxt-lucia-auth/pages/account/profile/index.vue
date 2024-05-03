<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";

definePageMeta({
  middleware: ["protected"],
});
</script>

<template>
  <section class="max-w-2xl mx-auto">
    <div class="pb-0 bg-white dark:bg-neutral-800 dark:border-neutral-700">
      <figure class="relative sm:p-5">
        <svg
          class="w-full sm:rounded-xl"
          preserveAspectRatio="none"
          width="1113"
          height="161"
          viewBox="0 0 1113 161"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_666_220723)">
            <rect x="0.5" width="1112" height="161" rx="12" fill="white" />
            <rect x="1" width="1112" height="348" fill="#D9DEEA" />
            <path
              d="M512.694 359.31C547.444 172.086 469.835 34.2204 426.688 -11.3096H1144.27V359.31H512.694Z"
              fill="#C0CBDD"
            />
            <path
              d="M818.885 185.745C703.515 143.985 709.036 24.7949 726.218 -29.5801H1118.31V331.905C1024.49 260.565 963.098 237.945 818.885 185.745Z"
              fill="#8192B0"
            />
            <defs>
              <clipPath id="clip0_666_220723">
                <rect x="0.5" width="1112" height="161" rx="12" fill="white" />
              </clipPath>
            </defs>
          </g>
        </svg>
        <div class="absolute bottom-0 sm:bottom-4 left-4 sm:left-10">
          <Avatar class="size-20">
            <AvatarImage
              src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
              alt="profile.name"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div class="flex items-end flex-col px-2">
          <p
            class="text-sm text-zinc-700 mt-1 font-semibold dark:text-zinc-200"
          >
            member.profile.name
          </p>
          <p class="text-xs text-zinc-500 font-normal dark:text-zinc-400">
            @member.profile.username
          </p>
        </div>
      </figure>
    </div>

    <div class="px-4 space-y-4">
      <div class="space-y-2">
        <h3 class="text-xs text-zinc-500 dark:text-zinc-400">Bio</h3>

        <p class="text-sm text-zinc-700 font-medium dark:text-zinc-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsam
          vitae, odit adipisci exercitationem nostrum a expedita veritatis nobis
          velit, cumque assumenda similique?
        </p>
      </div>

      <div className="space-y-2">
        <h3 class="text-xs text-zinc-500 dark:text-zinc-400">Location</h3>

        <p class="text-sm text-zinc-700 font-medium dark:text-zinc-200">
          {member.profile.location}
        </p>
      </div>

      <div class="space-y-2">
        <h3 class="text-xs text-zinc-500 dark:text-zinc-400">Email</h3>

        <p class="text-sm text-zinc-700 font-medium dark:text-zinc-200">
          {member.profile.email}
        </p>
      </div>

      <Button
        variant="outline"
        class="w-full hover:border-emerald-500 hover:bg-white hover:text-emerald-500 transition dark:hover:bg-transparent dark:hover:border-white dark:hover:text-white"
      >
        Sign out
      </Button>
    </div>
  </section>
</template>
