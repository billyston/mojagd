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

        <!-- Begin introduction -->
        <introduction></introduction>
        <!-- End introduction -->

        <!-- Begin our history -->
        <our-history></our-history>
        <!-- End our history -->

        <!-- Begin our history -->
        <our-objectives></our-objectives>
        <!-- End our history -->

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
    import BreadCrumb from "@/components/About/BreadCrumb";
    import PageTitle from "@/components/About/PageTitle";
    import Introduction from "@/components/About/Introduction";
    import OurHistory from "@/components/About/OurHistory";
    import OurObjectives from "@/components/About/OurObjectives";
    import OurMission from "@/components/Shared/OurMission";
    import NewsletterSection from "@/components/Shared/NewsletterSection";
    import MainFooter from "@/components/Shared/MainFooter";

    export default
    {
        name: "ContentsWrapper",
        components: { NavBar, MainHeader, BreadCrumb, PageTitle, Introduction, OurHistory, OurObjectives, OurMission, NewsletterSection, MainFooter }
    }
</script>

<style scoped>

</style>