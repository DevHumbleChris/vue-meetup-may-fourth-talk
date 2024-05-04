<script setup lang="ts">
import { ChevronRight } from "lucide-vue-next";
import { Button } from "../ui/button";
</script>

<template>
  <section class="overflow-y-auto bg-white lg:h-svh">
    <div class="px-8 mx-auto md:px-12 max-w-7xl lg:flex">
      <div class="lg:w-1/2">
        <div class="top-0 pt-8 pb-16 lg:sticky">
          <div>
            <div class="lg:pr-24 md:pr-12 space-y-3">
              <div>
                <h1
                  class="text-4xl font-semibold tracking-tighter text-gray-900"
                >
                  🥇 First things, first 🚀
                </h1>
                <p
                  class="mt-4 text-base font-medium text-gray-500 text-balance"
                >
                  Before you begin, let's set up our database and middleware.
                  These are essential for smooth integration and functionality.
                  The database stores and manages data, while middleware
                  connects our frontend and backend for seamless communication.
                </p>
              </div>
              <Button
                variant="outline"
                class="font-medium text-gray-500 text-balance border-0 gap-x-3"
              >
                Procedure
                <ChevronRight class="size-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-1/2">
        <div class="flex-shrink-0">
          <div>
            <ul
              class="grid grid-cols-1 gap-6 mt-6 text-base font-medium text-gray-500 list-none lg:mt-0 text-balance"
              role="list"
            >
              <li>
                <div>
                  <div>❖</div>
                  <p class="mt-5 text-lg text-black">Database Setup</p>
                </div>
                <div class="mt-2">
                  A database is required for storing your users and sessions.
                  Lucia connects to your database via an adapter, which provides
                  a set of basic, standardized querying methods that Lucia can
                  use.
                </div>
                <div class="mt-2">
                  In this tutorial we are going to use
                  <a
                    href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-mysql"
                    class="text-emerald-500 font-medium inline underline"
                    target="_blank"
                    >Prisma</a
                  >, follow the link and set it up on your machine. We will be
                  using it alongside a relational database,
                  <span class="text-emerald-500 font-medium">MySQL</span>.
                </div>
              </li>
              <li>
                <div>
                  <div>❖</div>
                  <p class="mt-5 text-lg text-black">Database Schema</p>
                </div>
                <div class="mt-2">
                  After installing
                  <span class="text-emerald-500 font-medium">Prisma</span>, we
                  need to define the database schema. In this case we will
                  declare two important Models that Lucia will use,
                  <span class="text-emerald-500 font-medium">User</span> and
                  <span class="text-emerald-500 font-medium">Session</span>.
                  However we will add another Model,
                  <span class="text-emerald-500 font-medium">Profile</span> that
                  we will extend to our other models.
                </div>

                <a
                  href="https://github.com/DevHumbleChris/vue-meetup-may-fourth-talk/blob/main/nuxt-lucia-auth/prisma/schema.prisma"
                  target="_blank"
                  class="mt-1 text-xs hover:underline"
                  >shema.prisma</a
                >
              </li>
              <li>
                <div>
                  <div>❖</div>
                  <p class="mt-5 text-lg text-black">Prisma Adapter</p>
                </div>
                <div class="mt-2">
                  Since we will be using
                  <span class="text-emerald-500 font-medium">Prisma</span>. We
                  need to install the Prisma adapter and the Lucia package.
                </div>
                <div class="mt-2">
                  <div class="px-5 py-3 bg-gray-50">
                    <Shiki
                      lang="bash"
                      code="pnpm add @lucia-auth/adapter-prisma lucia"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>❖</div>
                  <p class="mt-5 text-lg text-black">
                    Additional Packages to install
                  </p>
                </div>
                <div class="mt-2">
                  For a successfull authentication with Lucia Auth, we will need
                  additional packages,
                  <a
                    href="https://arctic.js.org/"
                    target="_blank"
                    class="text-emerald-500 font-medium inline hover:underline"
                    >Artic</a
                  >
                  (Arctic is a TypeScript library that provides OAuth 2.0 and
                  OpenID Connect clients for major providers.) and
                  <a
                    href="https://oslo.js.org/"
                    target="_blank"
                    class="text-emerald-500 font-medium inline hover:underline"
                    >Oslo</a
                  >
                  (Oslo provides a bunch of auth utilities).
                </div>
                <div class="mt-2">
                  <div class="px-5 py-3 bg-gray-50">
                    <Shiki lang="bash" code="pnpm add oslo arctic" />
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>❖</div>
                  <p class="mt-5 text-lg text-black">Server Utils Auth File</p>
                </div>
                <div class="mt-2">
                  This is a crucial file where we will import Lucia and
                  initialize it with our Prisma Adapter. Additionally, it is
                  also the file where we will set up the OAuth providers with
                  the Artic package and export them.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
