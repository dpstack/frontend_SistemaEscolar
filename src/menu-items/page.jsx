// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Autenticación',
  type: 'group',
  children: [
    {
      id: 'login1',
      title: 'Inicio de sesión',
      type: 'item',
      url: '/login',
      icon: icons.LoginOutlined,
      target: false
    },
    {
      id: 'register1',
      title: 'Registro',
      type: 'item',
      url: '/register',
      icon: icons.ProfileOutlined,
      target: false
    }
  ]
};

export default pages;
