<template>

    <!-- Begin contents -->
    <div class="sticky top-0 z-40 flex bg-white shadow">
        <div class="w-8/12 mx-auto px-1.5">
            <div class="grid gap-5 grid-cols-12 items-center justify-between">

                <!-- Begin logo --->
                <div class="flex col-span-2 py-2.5 justify-start 2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden">
                    <router-link to="/" class="p-0 flex w-auto">
                        <img src="@/assets/images/logo.png" alt="" class="w-32">
                    </router-link>
                </div>
                <!-- End logo --->

                <!-- Begin search form -->
                <div class="2xl:col-span-10 xl:col-span-10 lg:col-span-10 md:col-span-12 sm:col-span-12 xs:col-span-12">
                    <ul class="menu text-mojagd-primary float-right">

                        <!-- Begin home -->
                        <li><router-link to="" class="">Home</router-link></li>
                        <!-- End home -->

                        <!-- Begin about -->
                        <li class="relative">
                            <router-link to="about" class="">
                                <div class="flex items-center">
                                    <p>About Us</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                                </div>
                            </router-link>
                            <div class="dropdown rounded-b bg-white w-48 absolute shadow">
                                <div class="">
                                    <ul class="">
                                        <li class="border-b w-full hover:bg-mojagd-primary hover:text-white"><router-link to="brief-history">Brief History</router-link></li>
                                        <li class="border-b w-full hover:bg-mojagd-primary hover:text-white"><router-link to="chief-director">Chief Director</router-link></li>
                                        <li class="rounded-b w-full hover:bg-mojagd-primary hover:text-white"><router-link to="past-ministers">Past Ministers</router-link></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <!-- End about -->

                        <!-- Begin directorate -->
                        <li class="relative">
                            <router-link to="directorate" class="">
                                <div class="flex items-center">
                                    <p>Directorate</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                                </div>
                            </router-link>
                            <div class="dropdown rounded-b bg-white w-56 absolute shadow">
                                <div class="">
                                    <ul class="">
                                        <li class="border-b w-full hover:bg-mojagd-primary hover:text-white"><router-link to="finance-and-administration">Finance And Administration</router-link></li>
                                        <li class="border-b w-full hover:bg-mojagd-primary hover:text-white"><router-link to="human-resource-development-and-management">HRD & M</router-link></li>
                                        <li class="border-b w-full hover:bg-mojagd-primary hover:text-white"><router-link to="policy-planning-budgets-monitoring-and-evaluation-directorate">PPBMED</router-link></li>
                                        <li class="rounded-b w-full hover:bg-mojagd-primary hover:text-white"><router-link to="research-statistics-and-information-management">RSIM</router-link></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <!-- End directorate -->

                        <!-- Begin agencies -->
                        <li class="relative">
                            <router-link to="agencies" class="">
                                <div class="flex items-center">
                                    <p>Agencies</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                                </div>
                            </router-link>
                            <div class="dropdown rounded-b bg-white w-72 absolute shadow">
                                <div class="">
                                    <ul class="">
                                        <li class="border-b w-full hover:bg-mojagd-primary hover:text-white"><router-link to="attorney-generals-department">Attorney-General’s Department</router-link></li>
                                        <li class="border-b w-full hover:bg-mojagd-primary hover:text-white"><router-link to="copyright-office">Copyright Office</router-link></li>
                                        <li class="border-b w-full hover:bg-mojagd-primary hover:text-white"><router-link to="council-for-law-reporting">Council for Law Reporting</router-link></li>
                                        <li class="border-b w-full hover:bg-mojagd-primary hover:text-white"><router-link to="economic-and-organised-crime-office">Economic and Organised Crime Office</router-link></li>
                                        <li class="border-b w-full hover:bg-mojagd-primary hover:text-white"><router-link to="general-legal-council">General Legal Council</router-link></li>
                                        <li class="border-b w-full hover:bg-mojagd-primary hover:text-white"><router-link to="law-reform-commission">Law Reform Commission</router-link></li>
                                        <li class="border-b w-full hover:bg-mojagd-primary hover:text-white"><router-link to="legal-aid-scheme">Legal Aid Scheme</router-link></li>
                                        <li class="rounded-b w-full hover:bg-mojagd-primary hover:text-white"><router-link to="registrar-generals-department">Registrar-General's Department</router-link></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <!-- End agencies -->

                        <!-- Begin projects -->
                        <li class="relative">
                            <router-link to="" class="">
                                <div class="flex items-center">
                                    <p>Projects</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                                </div>
                            </router-link>
                            <div class="dropdown rounded-b bg-white w-48 absolute shadow">
                                <div class="">
                                    <ul class="">
                                        <li class="rounded-b w-full hover:bg-mojagd-primary hover:text-white"><router-link to="legal-reforms">Legal Reforms</router-link></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <!-- End projects -->

                        <!-- Begin publication -->
                        <li class="relative">
                            <router-link to="" class="">
                                <div class="flex items-center">
                                    <p>Publication</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                                </div>
                            </router-link>
                            <div class="dropdown rounded-b bg-white w-48 absolute shadow">
                                <div class="">
                                    <ul class="">
                                        <li class="border-b w-full hover:bg-mojagd-primary hover:text-white"><router-link to="press-release">Press Releases</router-link></li>
                                        <li class="border-b w-full hover:bg-mojagd-primary hover:text-white"><router-link to="speeches">Speeches</router-link></li>
                                        <li class="rounded-b w-full hover:bg-mojagd-primary hover:text-white"><router-link to="downloads">Downloads</router-link></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <!-- End publication -->

                        <!-- Begin media center -->
                        <li class="relative">
                            <router-link to="" class="">
                                <div class="flex items-center">
                                    <p>Media Center</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                                </div>
                            </router-link>
                            <div class="dropdown rounded-b bg-white w-48 absolute shadow">
                                <div class="">
                                    <ul class="">
                                        <li class="border-b w-full hover:bg-mojagd-primary hover:text-white"><router-link to="latest-news">Latest News</router-link></li>
                                        <li class="rounded-b w-full hover:bg-mojagd-primary hover:text-white"><router-link to="latest-events">Latest Events</router-link></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <!-- End media center -->

                        <!-- Begin contact -->
                        <li><router-link to="contacts" class="">Contact Us</router-link></li>
                        <!-- End contact -->

                    </ul>
                </div>
                <!-- End search form -->

            </div>
        </div>
    </div>
    <!-- End contents -->

</template>

<script>
    export default
    {
        name: "SearchBar",
    }
</script>

<style scoped>
    .menu
    {
        padding: 0;
        list-style: none;
        /*background: #ffffff no-repeat center;*/
        text-transform: uppercase;
    }

    .menu li
    {
        display: inline-block;
        margin: 0;
        padding: 27px 0 27px 25px;
        font-size: 12px;
        /*color: #FFFFFF;*/
    }

    .menu li a
    {
        display: block;
        /*color: #000;*/
        text-decoration: none;
        font-weight: bolder;
        cursor: pointer;
    }


    .menu li a:hover
    {}

    .menu li div.dropdown
    {
        min-width: 150px;
        /*width: 100%;*/
        display: none;
        position: absolute;
        z-index: 999;
        left: 0;
    }

    .menu li:hover div.dropdown
    {
        display: inline;
        left: 0;
        /*width: 100%;*/
        margin-top: 17px;
        padding: 0;
    }

    .menu li div.dropdown li
    {
        padding: 12px 10px;
        font-size: 11px;
        /*display: inline;*/
        /*background: #FFFFFF;*/
    }

    .menu li div.dropdown li:hover
    {
        padding: 12px 10px;
        font-size: 11px;
        /*display: inline;*/
        /*background: #FFFFFF;*/
    }
</style>