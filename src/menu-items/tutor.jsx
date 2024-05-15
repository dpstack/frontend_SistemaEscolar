import { MonitorOutlined, MessageTwoTone, CalendarTwoTone, IssuesCloseOutlined } from '@ant-design/icons';

const icons = {
    MonitorOutlined,
    MessageTwoTone,
    CalendarTwoTone,
    IssuesCloseOutlined
}

const tutor = {
    id: 'tutor',
    title: 'Tutor',
    type: 'group',
    children: [
        {
            id: 'monitoreoProgresoHijo',
            title: 'Monitoreo de tu Hijo',
            type: 'item',
            url: '/monitoreoProgresoHijo',
            icon: icons.MonitorOutlined
        },
        {
            id: 'comunicacionProfesores',
            title: 'Comunicación profesores',
            type: 'item',
            url: '/comunicacionProfesores',
            icon: icons.MessageTwoTone
        },
        {
            id: 'verCalendario',
            title: 'Ver Calendario',
            type: 'item',
            url: '/verCalendario',
            icon: icons.CalendarTwoTone
        },
        {
            id: 'justificarAusencias',
            title: 'Justificar Ausencias',
            type: 'item',
            url: '/justificarAusencias',
            icon: icons.IssuesCloseOutlined
        }
    ]
}

export default tutor;