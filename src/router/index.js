import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes =
[
    { path: '/', name: 'Home', component: Home },

    { path: '/About', name: 'About', component: () => import( '../views/About.vue') },
    { path: '/brief-history', name: 'BriefHistory', component: () => import( '../views/BriefHistory.vue') },
    { path: '/chief-director', name: 'ChiefDirector', component: () => import( '../views/ChiefDirector.vue') },
    { path: '/past-ministers', name: 'PastMinisters', component: () => import( '../views/PastMinisters.vue') },

    { path: '/directorate', name: 'Directorate', component: () => import( '../views/Directorate.vue') },
    { path: '/finance-and-administration', name: 'FinanceAndAdministration', component: () => import( '../views/FinanceAndAdministration.vue') },
    { path: '/human-resource-development-and-management', name: 'HRDAndM', component: () => import( '../views/HRDAndM.vue') },
    { path: '/policy-planning-budgets-monitoring-and-evaluation-directorate', name: 'PPBMED', component: () => import( '../views/PPBMED.vue') },
    { path: '/research-statistics-and-information-management', name: 'RSIM', component: () => import( '../views/RSIM.vue') },

    { path: '/Agencies', name: 'Agencies', component: () => import( '../views/Agencies.vue') },
    { path: '/attorney-generals-department', name: 'AttorneyGeneralsDepartment', component: () => import( '../views/AttorneyGeneralsDepartment.vue') },
    { path: '/copyright-office', name: 'CopyrightOffice', component: () => import( '../views/CopyrightOffice.vue') },
    { path: '/council-for-law-reporting', name: 'CouncilForLawReporting', component: () => import( '../views/CouncilForLawReporting.vue') },
    { path: '/economic-and-organised-crime-office', name: 'EconomicAndOrganisedCrimeOffice', component: () => import( '../views/EconomicAndOrganisedCrimeOffice.vue') },
    { path: '/general-legal-council', name: 'GeneralLegalCouncil', component: () => import( '../views/GeneralLegalCouncil.vue') },
    { path: '/law-reform-commission', name: 'LawReformCommission', component: () => import( '../views/LawReformCommission.vue') },
    { path: '/legal-aid-scheme', name: 'LegalAidScheme', component: () => import( '../views/LegalAidScheme.vue') },
    { path: '/registrar-generals-department', name: 'RegistrarGeneralsDepartment', component: () => import( '../views/RegistrarGeneralsDepartment.vue') },

    { path: '/legal-reforms', name: 'LegalReforms', component: () => import( '../views/LegalReforms.vue') },

    { path: '/press-release', name: 'PressRelease', component: () => import( '../views/PressRelease.vue') },
    { path: '/speeches', name: 'Speeches', component: () => import( '../views/Speeches.vue') },
    { path: '/downloads', name: 'Downloads', component: () => import( '../views/Downloads.vue') },

    { path: '/latest-news', name: 'LatestNews', component: () => import( '../views/LatestNews.vue') },
    { path: '/latest-events', name: 'LatestEvents', component: () => import( '../views/LatestEvents.vue') },

    { path: '/contacts', name: 'Contacts', component: () => import( '../views/Contacts.vue') },
]

const router = createRouter({
    history: createWebHistory( process.env.BASE_URL ),
    routes
})

export default router
