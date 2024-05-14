const permisos = {
    'administrador': [
        'gestionUsuarios',
        'gestionCursos',
        'gestionHorarios',
        'gestionCalificaciones',
        'gestionReportes',
        'configuracionSistema',
        'accesoCompleto'
    ],
    'secretario': [
        'matriculaAlumnos',
        'gestionExpedientes',
        'gestionAsistencia',
        'comunicacionPadres',
        'gestionPagos',
        'reportesBasicos'
    ],
    'profesor': [
        'gestionCursosPropio',
        'registroCalificaciones',
        'monitoreoAsistencia',
        'comunicacionAlumnosPadres',
        'accesoDatosAlumnos'
    ],
    'alumno': [
        'verDatosAcademicos',
        'accederMaterial',
        'comunicacionProfesoresCompanieros',
        'verCalendario'
    ],
    'padre': [
        'monitoreoProgresoHijo',
        'comunicacionProfesores',
        'verCalendario',
        'justificarAusencias'
    ]
};

export const hasPermission = (rol, permiso) => {
    return permisos[rol].includes(permiso) && permisos[rol];
}
