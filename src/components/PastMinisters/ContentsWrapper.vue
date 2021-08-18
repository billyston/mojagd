<template>

    <!-- Begin contents wrapper -->
    <div class="">

        <!-- Begin top nav bar -->
        <nav-bar></nav-bar>
        <!-- End top nav bar -->

        <!-- Begin top nav bar -->
        <main-header></main-header>
        <!-- End top nav bar -->

        <!-- Begin breadcrumb -->
        <bread-crumb></bread-crumb>
        <!-- End breadcrumb -->

        <!-- Begin page title -->
        <page-title></page-title>
        <!-- End page title -->

        <!-- Begin ministers -->
        <ministers></ministers>
        <!-- End ministers -->

        <!-- Begin our mission -->
        <our-mission></our-mission>
        <!-- End our mission -->

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
    import NavBar from "@/components/Shared/NavBar";
    import MainHeader from "@/components/Shared/MainHeader";
    import BreadCrumb from "@/components/PastMinisters/BreadCrumb";
    import PageTitle from "@/components/PastMinisters/PageTitle";
    import Ministers from "@/components/PastMinisters/Ministers";
    import OurMission from "@/components/Shared/OurMission";
    import NewsletterSection from "@/components/Shared/NewsletterSection";
    import MainFooter from "@/components/Shared/MainFooter";

    export default
    {
        name: "ContentsWrapper",
        components: { NavBar, MainHeader, BreadCrumb, PageTitle, Ministers, OurMission, NewsletterSection, MainFooter }
    }
</script>

<style scoped>

</style>