import { MonitorOutlined, WechatWorkOutlined, CalendarTwoTone, IssuesCloseOutlined } from '@ant-design/icons';

const icons = {
    MonitorOutlined,
    WechatWorkOutlined,
    CalendarTwoTone,
    IssuesCloseOutlined
}

const administrador = {
    id: 'administrador',
    title: 'Administrador',
    type: 'group',
    children: [
        {
            id: 'gestionUsuarios',
            title: 'Gestion de Usuarios',
            type: 'item',
            url: '/gestionUsuarios',
            icon: icons.MonitorOutlined
        },
        {
            id: 'gestionCursos',
            title: 'Gestion de Cursos',
            type: 'item',
            url: '/gestionCursos',
            icon: icons.WechatWorkOutlined
        },
        {
            id: 'gestionHorarios',
            title: 'Gestion de Horarios',
            type: 'item',
            url: '/gestionHorarios',
            icon: icons.CalendarTwoTone
        },
        {
            id: 'gestionCalificaciones',
            title: 'Gestion de Calificaciones',
            type: 'item',
            url: '/gestionCalificaciones',
            icon: icons.IssuesCloseOutlined
        }
    ]
}

export default administrador;