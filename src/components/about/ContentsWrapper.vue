<template>

    <!-- Begin contents wrapper -->
    <div class="">

        <!-- Begin top nav bar -->
        <nav-bar></nav-bar>
        <!-- End top nav bar -->

        <!-- Begin top nav bar -->
        <main-header></main-header>
        <!-- End top nav bar -->


        <div class="h-96"></div>


        <!-- Begin newsletter section -->
        <newsletter-section></newsletter-section>
        <!-- End newsletter section -->

        <!-- Begin footer -->
        <main-footer></main-footer>
        <!-- End footer -->

    </div>
    <!-- End contents wrapper -->

</template>

<script>
    import NavBar from "@/components/shared/NavBar";
    import MainHeader from "@/components/shared/MainHeader";
    import NewsletterSection from "@/components/shared/NewsletterSection";
    import MainFooter from "@/components/shared/MainFooter";

    export default
    {
        name: "ContentsWrapper",
        components: { NavBar, MainHeader, NewsletterSection, MainFooter }
    }
</script>

<style scoped>

</style>