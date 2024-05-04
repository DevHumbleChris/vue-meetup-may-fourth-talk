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
              class="grid grid-cols-1 gap-12 mt-6 text-base font-medium text-gray-500 list-none lg:mt-0 text-balance"
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
              </li>
              <li>
                <div>
                  <div>❖</div>
                  <p class="mt-5 text-lg text-black">Prebuilt integrations</p>
                </div>
                <div class="mt-2">
                  Join Lexingtøn Themes engineers and designers for a technical
                  look at Lexingtøn Themes Apps. You’ll hear directly from the
                  makers, get a full developer demo, and leave the session with
                  everything you need to get started.
                </div>
              </li>
              <li>
                <div>
                  <div>❖</div>
                  <p class="mt-5 text-lg text-black">Tools for every stack</p>
                </div>
                <div class="mt-2">
                  To achieve global net zero emissions by 2050, we need not only
                  to reduce emissions but also remove huge amounts of carbon
                  from the atmosphere and oceans. Learn more about Lexingtøn
                  Themes Climate’s work to build the world’s largest carbon
                  removal coalition and invest in the most promising early-stage
                  solutions.
                </div>
              </li>
              <li>
                <div>
                  <div>❖</div>
                  <p class="mt-5 text-lg text-black">Tools for every stack</p>
                </div>
                <div class="mt-2">
                  Banking-as-a-service (BaaS) has made it possible for any
                  company to easily offer financial services tailored to
                  customers’ specific needs. Hear from a range of businesses on
                  how they're using BaaS in radically different ways.
                </div>
              </li>
              <li>
                <div>
                  <div>❖</div>
                  <p class="mt-5 text-lg text-black">Tools for every stack</p>
                </div>
                <div class="mt-2">
                  Competing in the $5 trillion global ecommerce market requires
                  an international presence that doesn’t get lost in
                  translation. Join us as we traverse the globe to explore the
                  many benefits of offering localized, optimized payment
                  experiences that are achievable in minutes, not months.
                </div>
              </li>
              <li>
                <div>
                  <div>❖</div>
                  <p class="mt-5 text-lg text-black">Prebuilt integrations</p>
                </div>
                <div class="mt-2">
                  Join Lexingtøn Themes engineers and designers for a technical
                  look at Lexingtøn Themes Apps. You’ll hear directly from the
                  makers, get a full developer demo, and leave the session with
                  everything you need to get started.
                </div>
              </li>
              <li>
                <div>
                  <div>❖</div>
                  <p class="mt-5 text-lg text-black">Tools for every stack</p>
                </div>
                <div class="mt-2">
                  To achieve global net zero emissions by 2050, we need not only
                  to reduce emissions but also remove huge amounts of carbon
                  from the atmosphere and oceans. Learn more about Lexingtøn
                  Themes Climate’s work to build the world’s largest carbon
                  removal coalition and invest in the most promising early-stage
                  solutions.
                </div>
              </li>
              <li>
                <div>
                  <div>❖</div>
                  <p class="mt-5 text-lg text-black">Tools for every stack</p>
                </div>
                <div class="mt-2">
                  Banking-as-a-service (BaaS) has made it possible for any
                  company to easily offer financial services tailored to
                  customers’ specific needs. Hear from a range of businesses on
                  how they're using BaaS in radically different ways.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
