import { MessageTwoTone, UngroupOutlined, CloudUploadOutlined, ExceptionOutlined, UsergroupAddOutlined } from '@ant-design/icons';

const icons = {
    UngroupOutlined,
    CloudUploadOutlined,
    ExceptionOutlined,
    MessageTwoTone,
    UsergroupAddOutlined
}

const profesor = {
    id: 'profesor',
    title: 'Profesor',
    type: 'group',
    children: [
        {
            id: 'gestionCursoPropio',
            title: 'Gestionar Curso Propio',
            type: 'item',
            url: '/gestionCursoPropio',
            icon: icons.UngroupOutlined
        },
        {
            id: 'registroCalificaciones',
            title: 'Registro de Calificaciones',
            type: 'item',
            url: '/registroCalificaciones',
            icon: icons.CloudUploadOutlined
        },
        {
            id: 'monitoreoAsistencia',
            title: 'Monitoreo de Asistencia',
            type: 'item',
            url: '/monitoreoAsistencia',
            icon: icons.ExceptionOutlined
        },
        {
            id: 'comunicacionAlumnosTutores',
            title: 'Chat con Alumnos y Tutores',
            type: 'item',
            url: '/comunicacionAlumnosTutores',
            icon: icons.MessageTwoTone
        },
        {
            id: 'accesoDatosAlumnos',
            title: 'Acceso a Datos de Alumnos',
            type: 'item',
            url: '/accesoDatosAlumnos',
            icon: icons.UsergroupAddOutlined
        }
    ]
};

export default profesor;
