export type CaseStudy = {
  id: string
  sector: string
  title: string
  challenge: string
  solution: string
  result: string
  initials: string
}

export const cases: CaseStudy[] = [
  {
    id: 'comercio',
    sector: 'Comercio',
    title: 'Una atención más ordenada para una tienda local',
    challenge:
      'El equipo respondía las mismas consultas sobre productos y disponibilidad en varios canales, mientras actualizaba la información manualmente.',
    solution:
      'Se organizó una base de respuestas frecuentes y se diseñó un asistente de consulta con revisión y derivación a una persona.',
    result:
      'El equipo obtuvo una forma más consistente de atender preguntas habituales y mantener el control sobre las respuestas.',
    initials: 'CO',
  },
  {
    id: 'logistica',
    sector: 'Logística',
    title: 'Más claridad en el seguimiento de solicitudes',
    challenge:
      'La información de novedades operativas llegaba en distintos formatos y requería una lectura manual para preparar actualizaciones internas.',
    solution:
      'Se probó un flujo que resume los reportes y los organiza para que el equipo los revise antes de compartirlos.',
    result:
      'Las novedades quedaron presentadas de manera más uniforme y el personal mantuvo la validación final.',
    initials: 'LO',
  },
  {
    id: 'turismo',
    sector: 'Turismo',
    title: 'Consultas de viaje con información al día',
    challenge:
      'Una operadora recibía preguntas repetidas sobre experiencias, horarios y recomendaciones previas a cada reserva.',
    solution:
      'Se estructuró la información de sus servicios y se creó un prototipo de asistente que orienta y deriva consultas específicas.',
    result:
      'Los viajeros encontraron la información básica en un solo lugar y el equipo pudo enfocarse en solicitudes personalizadas.',
    initials: 'TU',
  },
]

export const illustrativeCasesNotice = 'Casos ilustrativos con fines académicos'
