import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import RequestChange from '@/pages/RequestChange.vue';
import RosterPage from '@/pages/RosterPage.vue';
import LeavePlan from '@/pages/LeavePlan.vue';
import ConfigurationPage from '@/pages/ConfigurationPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/request', name: 'Request Change', component: RequestChange},
  { path: '/roster', name: 'Roster', component: RosterPage},
  { path: '/leave', name: 'Leave Plan', component: LeavePlan},
  { path: '/configuration', name: 'Configuration', component: ConfigurationPage},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
