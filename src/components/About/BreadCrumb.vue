<template>

    <!-- Begin contents -->
    <div class="bg-white">
        <div class="w-8/12 mx-auto px-1.5">

            <!-- Begin breadcrumbs -->
            <div class="py-6">
                <ul class="inline-flex gap-3 text-sm font-bold text-mojagd-secondary">
                    <li class="flex justify-between items-center"><router-link to="#">Home</router-link> <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></li>
                    <li class="flex justify-between items-center"><router-link to="#">About Us</router-link> <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></li>
                </ul>
            </div>
            <!-- End breadcrumbs -->

        </div>
    </div>
    <!-- End contents -->

</template>

<script>
    export default
    {
        name: "PageHeader"
    }
</script>

<style scoped>

</style>