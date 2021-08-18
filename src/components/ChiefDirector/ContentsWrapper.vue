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

        <!-- Begin profile -->
        <chief-profile></chief-profile>
        <!-- End profile -->

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
    import BreadCrumb from "@/components/ChiefDirector/BreadCrumb";
    import PageTitle from "@/components/ChiefDirector/PageTitle";
    import ChiefProfile from "@/components/ChiefDirector/ChiefProfile";
    import NewsletterSection from "@/components/Shared/NewsletterSection";
    import OurMission from "@/components/Shared/OurMission";
    import MainFooter from "@/components/Shared/MainFooter";

    export default
    {
        name: "ContentsWrapper",
        components: { NavBar, MainHeader, BreadCrumb, PageTitle, ChiefProfile, OurMission, NewsletterSection, MainFooter }
    }
</script>

<style scoped>

</style>