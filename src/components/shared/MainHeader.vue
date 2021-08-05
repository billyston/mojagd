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




                    <ul class="font-mojagd float-right">
                        <li><router-link to="" class="">Home</router-link></li>
                        <li><router-link to="" class="">About Us</router-link></li>
                        <li class="">
                            <router-link to="" class="">
                                <div class="flex items-center">
                                    <p>Directorate</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                                </div>
                            </router-link>
                            <div class="dropdown bg-white">
                                <div class="w-8/12 mx-auto px-1.5 py-10 text-mojagd-primary h-48">
                                    <h2>Directorate</h2>
                                </div>
                            </div>
                        </li>
                        <li class="">
                            <router-link to="" class="">
                                <div class="flex items-center">
                                    <p>Agencies</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                                </div>
                            </router-link>
                            <div class="dropdown bg-white">
                                <div class="w-8/12 mx-auto px-1.5 py-10 text-mojagd-primary h-48">
                                    <h2>Agencies</h2>
                                </div>
                            </div>
                        </li>
                        <li class="">
                            <router-link to="" class="">
                                <div class="flex items-center">
                                    <p>Projects</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                                </div>
                            </router-link>
                            <div class="dropdown bg-white">
                                <div class="w-8/12 mx-auto px-1.5 py-10 text-mojagd-primary h-48">
                                    <h2>Projects</h2>
                                </div>
                            </div>
                        </li>
                        <li class="">
                            <router-link to="" class="">
                                <div class="flex items-center">
                                    <p>Media Center</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                                </div>
                            </router-link>
                            <div class="dropdown bg-white">
                                <div class="w-8/12 mx-auto px-1.5 py-10 text-mojagd-primary h-48">
                                    <h2>Media Center</h2>
                                </div>
                            </div>
                        </li>
                        <li><router-link to="" class="">Contact Us</router-link></li>
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
ul {
  padding: 0;
  list-style: none;
  background: #ffffff no-repeat center;
  text-transform: uppercase;
}

ul li {
  display: inline-block;
  margin: 0;
  padding: 27px 0 27px 25px;
  font-size: 12px;
  color: #FFFFFF;
}

ul li a {
  display: block;
  color: #000;
  text-decoration: none;
  font-weight: bolder;
  cursor: pointer;
}


ul li a:hover {}

ul li div.dropdown {
  min-width: 150px;
  width: 100%;
  display: none;
  position: absolute;
  z-index: 999;
  left: 0;
}

ul li:hover div.dropdown {
  display: inline;
  left: 0;
  width: 100%;
  margin-top: 17px;
  padding: 0;
}

ul li div.dropdown li {
  display: inline;
  background: #FFFFFF;
}
</style>