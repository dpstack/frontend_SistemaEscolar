const permisos = {
    'Administrador': [
        'gestionUsuarios',
        'gestionCursos',
        'gestionHorarios',
        'gestionCalificaciones',
        'gestionReportes',
        'configuracionSistema',
        'accesoCompleto'
    ],
    'Secretario': [
        'matriculaAlumnos',
        'gestionExpedientes',
        'gestionAsistencia',
        'comunicacionPadres',
        'gestionPagos',
        'reportesBasicos'
    ],
    'Profesor': [
        'gestionCursosPropio',
        'registroCalificaciones',
        'monitoreoAsistencia',
        'comunicacionAlumnosPadres',
        'accesoDatosAlumnos'
    ],
    'Alumno': [
        'verDatosAcademicos',
        'accederMaterial',
        'comunicacionProfesoresCompañeros',
        'verCalendario'
    ],
    'Tutor': [
        'monitoreoProgresoHijo',
        'comunicacionProfesores',
        'verCalendario',
        'justificarAusencias'
    ]
};

export const hasPermission = (rol, permiso) => {
    console.log(rol, permiso);
    return permisos[rol].includes(permiso) && permisos[rol];
}
