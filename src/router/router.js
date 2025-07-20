import { createRouter, createWebHistory } from "vue-router";
import homeview from "@/views/homeview.vue";
import ShopCollection from "@/views/ShopCollection.vue";
import AboutUs from '@/views/AboutUs.vue';
import SupportView from '@/views/SupportView.vue';
import FAQS from '@/views/FAQS.vue';
import ProductDetails from '@/views/ProductDetails.vue';
import CartView from '@/views/CartView.vue';
import wholeSale from '@/views/wholeSale.vue';
import ContactUs from '@/views/ContactUs.vue';
import TermsOfService from '@/views/TermsOfService.vue';
import RefundPolicy from '@/views/RefundPolicy.vue';
import LoginPage from "@/views/LoginPage.vue";
import CreateAccount from "@/views/CreateAccount.vue";


const routes = [
  {
    path: '/',
    component: homeview
  },
  {
    path: '/ShopCollection',
    component: ShopCollection, 
  },
  {
    path: '/AboutUs',
    component: AboutUs, 
  },
  {
    path: '/SupportView',
    component: SupportView, 
  },
  {
    path: '/FAQS',
    component: FAQS, 
  },
  {
    path: '/ProductDetails',
    component: ProductDetails, 
  },
  {
    path: '/CartView',
    component: CartView, 
  },
  {
    path: '/wholeSale',
    component: wholeSale, 
  },
  {
    path: '/ContactUs',
    component: ContactUs, 
  },
  {
    path: '/TermsOfService',
    component: TermsOfService, 
  },
  {
    path: '/RefundPolicy',
    component: RefundPolicy, 
  },
  {
    path: '/LoginPage',
    component: LoginPage, 
  },
  {
    path: '/CreateAccount',
    component: CreateAccount, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: 'active'
});


export default router;
