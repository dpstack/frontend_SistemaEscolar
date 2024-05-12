import { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import config from 'config';
import Swal from 'sweetalert2';

// material-ui
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';
import { FormControlLabel, MenuItem, Select, Switch } from '@mui/material';

// ============================|| JWT - REGISTER ||============================ //

export default function AuthRegister() {
  const [level, setLevel] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [roles, setRoles] = useState([]);
  const [estado, setEstado] = useState(true);
  const navigate = useNavigate();

  const handleChangeSwitch = (event) => {
    setEstado(event.target.checked);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  const handleRegister = async (values, { setErrors }) => {
    try {
      const response = await fetch(`${config.apiUrl}/usuarios/registro`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...values,
          estado: estado ? 'activo' : 'inactivo'
        })
      });
      if (response.ok) {
        const data = await response.json();
        Swal.fire({
          title: 'Éxito',
          text: "Usuario registrado correctamente",
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        navigate('/login', { replace: true });
      } else {
        const error = await response.json();
        setErrors(error);
      }

    } catch (error) {
      setErrors({ submit: "Ocurrió un error al registrar el usuario" });
      Swal.fire({
        title: 'Error',
        text: "Error al registrar usuario",
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });

    }
  }

  useEffect(() => {
    changePassword('');

    fetch(`${config.apiUrl}/roles`)
      .then(response => response.json())
      .then(data => setRoles(data))
      .catch((err) => console.error("Error al obtener roles", err));
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          nombre: '',
          apellido: '',
          correo_electronico: '',
          rol: '',
          estado: 'activo',
          contraseña: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          nombre: Yup.string().max(255).required('El nombre es requerido'),
          apellido: Yup.string().max(255).required('El apellido es requerido'),
          correo_electronico: Yup.string().email('El correo debe ser válido').max(255).required('El correo es requerido'),
          contraseña: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').max(255).required('La contraseña es obligatoria!'),
          rol: Yup.string().max(255).required('El rol es requerido')
        })}
        onSubmit={handleRegister}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="nombre-signup">Nombres</InputLabel>
                  <OutlinedInput
                    id="nombre-login"
                    type="nombre"
                    value={values.nombre}
                    name="nombre"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Francisco"
                    fullWidth
                    error={Boolean(touched.nombre && errors.nombre)}
                  />
                </Stack>
                {touched.nombre && errors.nombre && (
                  <FormHelperText error id="helper-text-nombre-signup">
                    {errors.nombre}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="apellido-signup">Apellidos</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.apellido && errors.apellido)}
                    id="apellido-signup"
                    type="apellido"
                    value={values.apellido}
                    name="apellido"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Garcia"
                    inputProps={{}}
                  />
                </Stack>
                {touched.apellido && errors.apellido && (
                  <FormHelperText error id="helper-text-apellido-signup">
                    {errors.apellido}
                  </FormHelperText>
                )}
              </Grid>
              {/* <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="company-signup">Company</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.company && errors.company)}
                    id="company-signup"
                    value={values.company}
                    name="company"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Demo Inc."
                    inputProps={{}}
                  />
                </Stack>
                {touched.company && errors.company && (
                  <FormHelperText error id="helper-text-company-signup">
                    {errors.company}
                  </FormHelperText>
                )}
              </Grid> */}
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Switch checked={estado} onChange={handleChangeSwitch} />}
                  label="Estado del Usuario"
                />
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="rol-signup">Rol</InputLabel>
                  <Select
                    fullWidth
                    id="rol-signup"
                    value={values.rol}
                    name="rol"
                    onChange={handleChange}
                    error={Boolean(touched.rol && errors.rol)}
                  >
                    {/* <MenuItem value="">Seleccionar rol</MenuItem> */}
                    {roles.map((rol) => (
                      <MenuItem key={rol.id} value={rol.id}>
                        {rol.nombre}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
                {touched.rol && errors.rol && (
                  <FormHelperText error id="helper-text-rol-signup">
                    {errors.rol}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="correo_electronico-signup">Correo Electrónico</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.correo_electronico && errors.correo_electronico)}
                    id="correo_electronico-login"
                    type="correo_electronico"
                    value={values.correo_electronico}
                    name="correo_electronico"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="test@gmail.com"
                    inputProps={{}}
                  />
                </Stack>
                {touched.correo_electronico && errors.correo_electronico && (
                  <FormHelperText error id="helper-text-correo_electronico-signup">
                    {errors.correo_electronico}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="contraseña-signup">Contraseña</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.contraseña && errors.contraseña)}
                    id="contraseña-signup"
                    type={showPassword ? 'text' : 'password'}
                    value={values.contraseña}
                    name="contraseña"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                      changePassword(e.target.value);
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle contraseña visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          color="secondary"
                        >
                          {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="*********"
                    inputProps={{}}
                  />
                </Stack>
                {touched.contraseña && errors.contraseña && (
                  <FormHelperText error id="helper-text-contraseña-signup">
                    {errors.contraseña}
                  </FormHelperText>
                )}
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" fontSize="0.75rem">
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2">
                  Por registrarte, aceptas nuestros &nbsp;
                  <Link variant="subtitle2" component={RouterLink} to="#">
                    Términos de servicio
                  </Link>
                  &nbsp; y &nbsp;
                  <Link variant="subtitle2" component={RouterLink} to="#">
                    Políticas de privacidad
                  </Link>
                </Typography>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <AnimateButton>
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                    Crear Cuenta
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
}
