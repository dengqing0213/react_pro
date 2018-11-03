import Home from '@/components/Home';
import Kind from '@/components/Kind';
import User from '@/components/User';
import Cart from '@/components/Cart';

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/kind',
    component: Kind
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/user',
    component: User
  }
];

export default routes;
