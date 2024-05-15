import { MessageTwoTone, BarChartOutlined, FileTextTwoTone, DatabaseTwoTone } from '@ant-design/icons';

const icons = {
    FileTextTwoTone,
    DatabaseTwoTone,
    MessageTwoTone,
    BarChartOutlined
}

const secretario = {
    id: 'secretario',
    title: 'Secretario',
    type: 'group',
    children: [
        {
            id: 'matriculaAlumnos',
            title: 'Matricula de Alumnos',
            type: 'item',
            url: '/matriculaAlumnos',
            icon: icons.FileTextTwoTone
        },
        {
            id: 'gestionAsistencias',
            title: 'Gestion de Asistencias',
            type: 'item',
            url: '/gestionAsistencias',
            icon: icons.DatabaseTwoTone
        },
        {
            id: 'comunicacionPadres',
            title: 'Comunicación Padres',
            type: 'item',
            url: '/comunicacionPadres',
            icon: icons.MessageTwoTone
        },
        {
            id: 'reportesBasicos',
            title: 'Reportes Basicos',
            type: 'item',
            url: '/reportesBasicos',
            icon: icons.BarChartOutlined
        }
    ]
}

export default secretario;