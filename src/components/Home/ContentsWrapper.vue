<template>

    <!-- Begin contents wrapper -->
    <div class="">

        <!-- Begin top nav bar -->
        <nav-bar></nav-bar>
        <!-- End top nav bar -->

        <!-- Begin top nav bar -->
        <main-header></main-header>
        <!-- End top nav bar -->

        <!-- Begin sliders section -->
        <slider-section></slider-section>
        <!-- End sliders section -->

        <!-- Begin welcome section -->
        <welcome-section></welcome-section>
        <!-- End welcome section -->

        <!-- Begin welcome section -->
        <policies-section></policies-section>
        <!-- End welcome section -->

        <!-- Begin events section -->
        <event-section></event-section>
        <!-- End events section -->

        <!-- Begin welcome section -->
        <latest-news-section></latest-news-section>
        <!-- End welcome section -->

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
    import SliderSection from "@/components/Home/SliderSection";
    import WelcomeSection from "@/components/Home/WelcomeSection";
    import PoliciesSection from "@/components/Home/PoliciesSection";
    import LatestNewsSection from "@/components/Home/EventSection";
    import EventSection from "@/components/Home/LatestNewsSection";
    import NewsletterSection from "@/components/Shared/NewsletterSection";
    import MainFooter from "@/components/Shared/MainFooter";

    export default
    {
        name: "ContentsWrapper",
        components: { NavBar, MainHeader, SliderSection, WelcomeSection, PoliciesSection, NewsletterSection, EventSection, LatestNewsSection, MainFooter }
    }
</script>

<style scoped>

</style>