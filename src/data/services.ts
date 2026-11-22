export type ServiceIcon = 'scan' | 'target' | 'workflow' | 'messages' | 'book'

export type Service = {
  id: string
  icon: ServiceIcon
  title: string
  summary: string
  audience: string
  deliverable: string
}

export const services: Service[] = [
  {
    id: 'diagnostico',
    icon: 'scan',
    title: 'Diagnóstico de madurez en IA',
    summary:
      'Revisamos tus procesos, herramientas y capacidades para conocer dónde estás y qué conviene fortalecer antes de avanzar.',
    audience:
      'Pymes que quieren empezar con claridad y entender qué tan preparadas están para adoptar IA.',
    deliverable:
      'Un mapa de madurez con oportunidades, brechas y recomendaciones iniciales priorizadas.',
  },
  {
    id: 'casos-de-uso',
    icon: 'target',
    title: 'Identificación de casos de uso',
    summary:
      'Convertimos necesidades cotidianas en oportunidades concretas, evaluando el valor, la viabilidad y los riesgos de cada idea.',
    audience:
      'Equipos con varios retos en mente que necesitan elegir por dónde empezar.',
    deliverable:
      'Una cartera priorizada de casos de uso con criterios de valor, esfuerzo y riesgo.',
  },
  {
    id: 'automatizacion',
    icon: 'workflow',
    title: 'Automatización de procesos',
    summary:
      'Detectamos tareas repetitivas que pueden simplificarse con automatización y diseñamos un flujo adecuado para tu operación.',
    audience:
      'Negocios que repiten tareas manuales y quieren liberar tiempo para actividades de mayor valor.',
    deliverable:
      'Un diseño de proceso y un piloto funcional, acompañado de pautas para operarlo y revisarlo.',
  },
  {
    id: 'asistentes',
    icon: 'messages',
    title: 'Asistentes y chatbots para atención al cliente',
    summary:
      'Diseñamos asistentes que responden consultas frecuentes con información validada y derivan a una persona cuando hace falta.',
    audience:
      'Empresas que reciben preguntas recurrentes por sus canales de atención.',
    deliverable:
      'Un prototipo conversacional con contenidos revisados, límites definidos y ruta de escalamiento humano.',
  },
  {
    id: 'capacitacion',
    icon: 'book',
    title: 'Capacitación y gobernanza',
    summary:
      'Preparamos a tu equipo para usar herramientas de IA con criterio y acordamos reglas sencillas para cuidar los datos.',
    audience:
      'Líderes y colaboradores que necesitan pautas prácticas para un uso responsable.',
    deliverable:
      'Taller aplicado, guía de uso responsable y recomendaciones de gobernanza para tu organización.',
  },
]
