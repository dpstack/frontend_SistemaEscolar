// project import
import administrador from './admin';
import secretario from './secretario';
import profesor from './profesor';
import alumno from './alumno';
import tutor from './tutor';
import { useContext } from 'react';
import { UserContext } from 'contexts/UserContext';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = () => {

  const { user } = useContext(UserContext);

  let items = [];
  console.log(user)
  if (user && user.rol === 'Administrador') {
    items = [...[administrador], ...[secretario], ...[profesor], ...[alumno], ...[tutor]];
  } else if (user && user.rol === 'Secretario') {
    items = [...[secretario]];
  } else if (user && user.rol === 'Profesor') {
    items = [...[profesor]];
  } else if (user && user.rol === 'Alumno') {
    items = [...[alumno]];
  } else if (user && user.rol === 'Tutor') {
    items = [...[tutor]];
  }

  return { items };
};

export default menuItems;
