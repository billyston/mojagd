<template>

    <!-- Begin upper footer contents -->
    <footer class="bg-mojagd-primary 2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden">
        <div class="w-8/12 mx-auto px-1.5">
            <div class="py-20 text-gray-800">
                <div class="flex flex-col grid gap-6 grid-cols-5 mt-32">

                    <!-- Begin get app contents -->
                    <div class="">

                        <!-- Begin header -->
                        <router-link to="/" class="p-0 flex w-auto mb-5">
                            <img src="@/assets/images/logo-footer.png" alt="" class="w-36">
                        </router-link>
                        <!-- End header -->

                        <!-- Begin contents -->
                        <div class="">
                            <div class="inline-block">
                                <p class="text-gray-200 text-sm">An efficient and accessible system of justice exhibiting highest standards of professionalism and engendering a high degree of public trust and confidence</p>
                            </div>

                            <div class="my-3">
                            </div>
                        </div>
                        <!-- End contents -->

                    </div>
                    <!-- End get app contents -->

                    <!-- Begin customer service -->
                    <div class="">

                        <!-- Begin header -->
                        <div class="text-xs w-full text-gray-200 text-sm font-bold mb-6">Quick Links</div>
                        <!-- End header -->

                        <!-- Begin links -->
                        <div class="">
                            <router-link to="/" class="my-2 block text-gray-300 hover:text-mojagd-secondary text-sm font-medium duration-700">The Presidency</router-link>
                            <router-link to="/" class="my-2 block text-gray-300 hover:text-mojagd-secondary text-sm font-medium duration-700">EOCO</router-link>
                            <router-link to="/" class="my-2 block text-gray-300 hover:text-mojagd-secondary text-sm font-medium duration-700">The Judicial Service</router-link>
                            <router-link to="/" class="my-2 block text-gray-300 hover:text-mojagd-secondary text-sm font-medium duration-700">General Legal Council</router-link>
                            <router-link to="/" class="my-2 block text-gray-300 hover:text-mojagd-secondary text-sm font-medium duration-700">Parliament of Ghana</router-link>
                        </div>
                        <!-- End links -->

                    </div>
                    <!-- End customer service -->

                    <!-- Begin my account -->
                    <div class="">

                        <!-- Begin header -->
                        <div class="text-xs w-full text-gray-200 text-sm font-bold mb-6">About the Ministry</div>
                        <!-- End header -->

                        <!-- Begin links -->
                        <div class="">
                            <router-link to="/" class="my-2 block text-gray-300 hover:text-mojagd-secondary text-sm font-medium duration-700">Brief History</router-link>
                            <router-link to="/" class="my-2 block text-gray-300 hover:text-mojagd-secondary text-sm font-medium duration-700">The President</router-link>
                            <router-link to="/" class="my-2 block text-gray-300 hover:text-mojagd-secondary text-sm font-medium duration-700">The Minister</router-link>
                            <router-link to="/" class="my-2 block text-gray-300 hover:text-mojagd-secondary text-sm font-medium duration-700">Chief Director</router-link>
                            <router-link to="/" class="my-2 block text-gray-300 hover:text-mojagd-secondary text-sm font-medium duration-700">Past Ministers</router-link>
                        </div>
                        <!-- End links -->

                    </div>
                    <!-- End my account -->

                    <!-- Begin get to know us -->
                    <div class="">

                        <!-- Begin header -->
                        <div class="text-xs w-full text-gray-200 text-sm font-bold mb-6">Get to Know Us</div>
                        <!-- End header -->

                        <!-- Begin links -->
                        <div class="">
                            <router-link to="/about-mojagdonline" class="my-2 block text-gray-300 hover:text-mojagd-secondary text-sm font-medium duration-700">About MOJAGD</router-link>
                            <router-link to="/career" class="my-2 block text-gray-300 hover:text-mojagd-secondary text-sm font-medium duration-700">Career Opportunities</router-link>
                            <router-link to="/sell-on-mojagdonline" class="my-2 block text-gray-300 hover:text-mojagd-secondary text-sm font-medium duration-700">News and Events</router-link>
                            <router-link to="/blog" class="my-2 block text-gray-300 hover:text-mojagd-secondary text-sm font-medium duration-700">Agencies</router-link>
                            <router-link to="/invest-relation" class="my-2 block text-gray-300 hover:text-mojagd-secondary text-sm font-medium duration-700">Contact Us</router-link>
                        </div>
                        <!-- End links -->

                    </div>
                    <!-- End get to know us -->

                    <!-- Begin contact information -->
                    <div class="">

                        <!-- Begin header -->
                        <div class="text-xs w-full text-gray-200 text-sm font-bold mb-6">Contact Information</div>
                        <!-- End header -->

                        <!-- Begin links -->
                        <div class="">
                            <div class="flex">
                                <svg class="w-11 h-11 text-gray-200" fill="none" stroke="currentColor" viewBox="5 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                </svg>
                                <span class="text-gray-200">
                                    <p class="text-sm">Hotline Free 24/24</p>
                                    <p class="font-medium font-bold">0302 234 567</p>
                                </span>
                            </div>
                            <div class="flex mt-3">
                                <svg class="w-8 h-8 text-gray-200 mr-3" fill="none" stroke="currentColor" viewBox="2 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <span class="text-gray-200">
                                    <p class="text-sm">info@mojagd.com</p>
                                    <p class="text-sm">enquiries@mojagd.com</p>
                                </span>
                            </div>
                            <div class="mt-3">
                                <p class="text-gray-200 text-xs font-bold">Follow Us:</p>
                                <div class="mt-1">
                                    <router-link to="/" class="text-3xl text-white mr-3 hover:text-mojagd-secondary"><i class="fab fa-facebook-square"></i></router-link>
                                    <router-link to="/" class="text-3xl text-white mr-3 hover:text-mojagd-secondary"><i class="fab fa-twitter-square"></i></router-link>
                                    <router-link to="/" class="text-3xl text-white mr-3 hover:text-mojagd-secondary"><i class="fab fa-linkedin"></i></router-link>
                                    <router-link to="/" class="text-3xl text-white mr-3 hover:text-mojagd-secondary"><i class="fab fa-instagram"></i></router-link>
                                </div>
                            </div>
                        </div>
                        <!-- End links -->

                    </div>
                    <!-- End contact information -->

                </div>
            </div>
        </div>
    </footer>
    <!-- End upper footer contents -->

    <!-- Begin lower footer contents -->
    <footer class="bg-mojagd-extra 2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden">
        <div class="w-8/12 mx-auto px-1.5">
            <div class="py-20 flex flex-wrap flex-col grid gap-6 grid-cols-2">

                <!-- Begin about us -->
                <div class="text-gray-300">
                    <h1 class="font-bold mb-2">About The Office of The Attorney General And Ministry O Justice</h1>
                    <p class="text-sm text-gray-500">The Attorney General’s Department came into being in 1877.  It first started as the office of the Judicial Assessor, who was the Principal Legal Advisor to the Executive Council established in 1850 for the administration of the Gold Coast Colony. Then with the promulgation of the first Supreme Court Ordinance in 1876, which provided the framework... <router-link to="/" class="hover:text-gray-400 font-bold">Read more</router-link></p>
                </div>
                <!-- End about us -->

                <!-- Begin policies contents -->
                <div class="text-gray-300">
                    <h1 class="font-bold mb-2">User Policies</h1>
                    <p class="text-sm text-gray-500">
                        <router-link class="hover:text-mojagd-secondary mr-1.5" to="/user-agreement">Accessibility Statement,</router-link>
                        <router-link class="hover:text-mojagd-secondary mr-1.5" to="/privacy-policy">Privacy Policy,</router-link>
                        <router-link class="hover:text-mojagd-secondary mr-1.5" to="/terms-and-conditions">Terms of Use,</router-link>
                        <router-link class="hover:text-mojagd-secondary mr-1.5" to="/disputes-and-reports">Copyright Information</router-link>
                    </p>
                </div>
                <!-- End policies contents -->

            </div>
        </div>
    </footer>
    <!-- End lower footer contents -->

    <!-- Begin copyright -->
    <footer class="bg-mojagd-extra 2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden">
        <div class="w-8/12 mx-auto px-1.5">
            <div class="flex m-auto border-t border-gray-700 text-gray-600 text-sm flex-col">
                <div class="my-5">© Copyright. All Rights Reserved.</div>
            </div>
        </div>
    </footer>
    <!-- End copyright -->

</template>

<script>
    export default
    {
        name: "MainFooter",
    }
</script>

<style scoped>
</style>