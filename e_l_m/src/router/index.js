import goods from '@/components/goods/goods';
import ratings from '@/components/ratings/ratings';
import seller from '@/components/seller/seller';

export default {
  routes: [
    {path: '/goods', component: goods},
    {path: '/ratings', component: ratings},
    {path: '/seller', component: seller}
  ]
};

