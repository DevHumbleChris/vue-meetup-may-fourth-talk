<script setup lang="ts">
import { type IAvatar } from "~/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import type { Profile } from "@prisma/client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { X } from "lucide-vue-next";
import { cn } from "~/lib/utils";

const { avatars, profileImg } = defineProps<{
  avatars: IAvatar[];
  profileImg: string;
  selectedAvatar: string;
  setSelectedAvartar: (avatar: string) => void;
}>();
</script>

<template>
  <div class="space-y-4 my-2">
    <h2 class="text-xl font-semibold text-center sm:text-left">
      Add an Avatar
    </h2>
    <div
      class="flex flex-col items-center sm:items-start sm:flex-row gap-5 sm:gap-10 max-w-md"
    >
      <div class="relative">
        <Avatar class="size-40 border-2">
          <AvatarImage
            :src="selectedAvatar ? selectedAvatar : profileImg"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <button
          v-if="selectedAvatar"
          @click="setSelectedAvartar('')"
          class="bg-rose-600 rounded-full p-1 absolute top-1 right-3 hover:bg-rose-400"
        >
          <X class="w-5 h-5 text-white" />
        </button>
      </div>
      <div class="w-full space-y-3">
        <Accordion type="single" collapsible class="w-full">
          <AccordionItem class="border-0" value="item-1">
            <AccordionTrigger class="hover:no-underline">
              Or choose one of our defaults
            </AccordionTrigger>
            <AccordionContent class="space-y-3">
              <div
                class="flex items-center gap-3 overflow-x-auto [&::-webkit-scrollbar]:h-[0.2rem] [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500"
              >
                <!-- onClick={() => funSetSelectedAvatar(avatar.imageUrl)} -->
                <Avatar
                  v-for="avatar in avatars"
                  :key="avatar.id"
                  @click="setSelectedAvartar(avatar.imageUrl)"
                  :class="
                    cn(
                      'border size-10 cursor-pointer hover:border-2 hover:border-emerald-500',
                      selectedAvatar === avatar.imageUrl &&
                        'border-emerald-500 border-2'
                    )
                  "
                >
                  <AvatarImage :src="avatar.imageUrl" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <p class="text-xs text-gray-500">
                Love the notion style avatars, get yours
                <a
                  href="https://notion-avatar.vercel.app/"
                  class="underline"
                  target="_blank"
                >
                  here
                </a>
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
</template>
