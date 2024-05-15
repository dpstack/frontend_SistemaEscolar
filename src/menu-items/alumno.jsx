import { BookTwoTone, MessageTwoTone, CalendarTwoTone, DatabaseTwoTone } from '@ant-design/icons';

const icons = {
    DatabaseTwoTone,
    BookTwoTone,
    MessageTwoTone,
    CalendarTwoTone
}

const alumno = {
    id: 'alumno',
    title: 'Alumno',
    type: 'group',
    children: [
        {
            id: 'verDatosAcademicos',
            title: 'Datos Academicos',
            type: 'item',
            url: '/verDatosAcademicos',
            icon: icons.DatabaseTwoTone
        },
        {
            id: 'accederMaterial',
            title: 'Material Didactico',
            type: 'item',
            url: '/accederMaterial',
            icon: icons.BookTwoTone
        },
        {
            id: 'comunicacionProfesoresCompañeros',
            title: 'Chat de Clase',
            type: 'item',
            url: '/comunicacionProfesoresCompañeros',
            icon: icons.MessageTwoTone
        },
        {
            id: 'verCalendario',
            title: 'Ver Calendario',
            type: 'item',
            url: '/verCalendario',
            icon: icons.CalendarTwoTone
        }
    ]
}

export default alumno;