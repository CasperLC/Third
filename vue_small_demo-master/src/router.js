import Vue from 'vue'
import Router from 'vue-router'
import AlbumsOverview from "./views/albums/AlbumsOverview";
import AlbumsCreate from "./views/albums/AlbumsCreate";
import AlbumsUpdate from "./views/albums/AlbumsUpdate";
import ShoesList from "./views/shoes/ShoesList";
import Frontpage from "./views/Frontpage";
import Productdetail from "./views/Productdetail";
import Front from "./views/Front";
import Product from "./views/Product";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Frontpage',
      component: Front
    },
    {
      path: '/productdetails/:id',
      name: 'productdetails',
      component: Product
    },
    {
      path: '/albums-update/:id',
      name: 'albums-update',
      component: AlbumsUpdate
    },
    {
      path: '/albums',
      name: 'albums',
      component: AlbumsOverview
    },
    {
      path: '/shoes',
      name: 'shoes',
      component: ShoesList
    },
 
  ]
})

