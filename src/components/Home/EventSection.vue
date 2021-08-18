<template>

    <!-- Begin contents -->
    <div class="bg-parallax-1 -mb-36 flex 2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden">
        <div class="w-8/12 mx-auto px-1.5 py-28">
            <div class="h-52 bg-white mb-28 border rounded">
                <div class="w-full">

                  <!-- Begin tab menu -->
                  <div class="rounded">
                      <ul class="flex font-bold">
                          <li class="w-full last:mr-0 cursor-pointer"><a class="text-sm text-center px-5 py-8 block leading-normal border-b" @click="toggleTabs(1)" v-bind:class="{'text-gray-600 bg-white' : tabs.openTab !== 1, 'text-mojagd-extra' : tabs.openTab === 1}">Projects</a></li>
                          <li class="w-full last:mr-0 cursor-pointer"><a class="text-sm text-center px-5 py-8 block leading-normal border-b" @click="toggleTabs(2)" v-bind:class="{'text-gray-600 bg-white' : tabs.openTab !== 2, 'text-mojagd-extra' : tabs.openTab === 2}">Press Releases</a></li>
                          <li class="w-full last:mr-0 cursor-pointer"><a class="text-sm text-center px-5 py-8 block leading-normal border-b" @click="toggleTabs(3)" v-bind:class="{'text-gray-600 bg-white' : tabs.openTab !== 3, 'text-mojagd-extra' : tabs.openTab === 3}">Downloads</a></li>
                      </ul>
                  </div>
                  <!-- End tab menu -->

                  <!-- Begin tab contents -->
                  <div class="relative rounded-b flex flex-col min-w-0 break-words bg-white w-full border-t">
                      <div class="flex-auto">
                          <div class="tab-content tab-space px-5">

                              <!-- Begin projects -->
                              <div v-bind:class="{ 'hidden': tabs.openTab !== 1, 'block': tabs.openTab === 1 }">
                                  <p class="p-10">Projects contents coming soon</p>
                              </div>
                              <!-- End projects -->

                              <!-- Begin press releases -->
                              <div v-bind:class="{ 'hidden': tabs.openTab !== 2, 'block': tabs.openTab === 2 }">
                                  <p class="p-10">Press Releases contents coming soon</p>
                              </div>
                              <!-- End press releases -->

                              <!-- Begin downloads -->
                              <div v-bind:class="{ 'hidden': tabs.openTab !== 3, 'block': tabs.openTab === 3 }">
                                  <p class="p-10">Downloads contents coming soon</p>
                              </div>
                              <!-- End downloads -->

                          </div>
                      </div>
                  </div>
                  <!-- End tab contents -->

                </div>
            </div>
        </div>
    </div>
    <!-- End contents -->

</template>

<script>
    import { reactive } from "vue";

    export default
    {
        name: "EventSection",

        setup()
        {
            const tabs = reactive({ openTab: 1 })
            const toggleTabs = ( tabNumber ) => { tabs.openTab = tabNumber }

            return { tabs, toggleTabs }
        }
    }
</script>

<style scoped>

</style>