export type Article = {
  slug: string
  category: string
  date: string
  author: string
  title: string
  excerpt: string
  readTime: string
  paragraphs: string[]
}

export const articles: Article[] = [
  {
    slug: 'primeros-pasos-ia-pyme',
    category: 'Primeros pasos',
    date: '12 de noviembre de 2026',
    author: 'Equipo Guayas IA',
    title: 'Primeros pasos con inteligencia artificial en una pyme',
    excerpt:
      'Una buena iniciativa no empieza eligiendo una herramienta: empieza entendiendo qué necesita mejorar el negocio.',
    readTime: '4 min de lectura',
    paragraphs: [
      'La inteligencia artificial puede parecer un tema enorme, pero una pyme no necesita resolverlo todo de una vez. El primer paso es conversar con el equipo sobre tareas que toman tiempo, generan retrabajo o dificultan atender bien a los clientes.',
      'Después, conviene elegir un problema acotado y revisar qué información existe para abordarlo. Preguntas sencillas ayudan: ¿quién hace hoy esta tarea?, ¿qué pasa cuando hay una excepción?, ¿qué datos se usan y quién debe revisarlos?',
      'Con ese contexto, se puede comparar si una herramienta existente, una automatización o un piloto con IA tiene sentido. Definir desde el inicio cómo se revisarán los resultados evita confundir una demostración atractiva con una solución útil.',
      'Empezar pequeño no significa pensar en pequeño. Significa aprender con menos riesgo, escuchar a quienes harán el trabajo y decidir el siguiente paso con evidencia del propio proceso.',
    ],
  },
  {
    slug: 'como-elegir-que-automatizar',
    category: 'Procesos',
    date: '28 de octubre de 2026',
    author: 'Ana Morales',
    title: 'Cómo elegir qué automatizar primero',
    excerpt:
      'Repetición no es el único criterio. También importa el impacto, las excepciones y la claridad del proceso.',
    readTime: '3 min de lectura',
    paragraphs: [
      'Cuando hay muchas tareas repetitivas, es tentador automatizar la primera que aparece. Antes, conviene mirar cuánto afecta al trabajo diario y si el proceso tiene reglas que el equipo puede explicar con claridad.',
      'Un buen candidato suele tener pasos conocidos, información disponible y pocas excepciones difíciles. También debería resolver una necesidad concreta: evitar duplicar registros, ordenar solicitudes o preparar un borrador que alguien pueda revisar.',
      'No hace falta usar una fórmula complicada. El equipo puede comparar cada idea por beneficio esperado, esfuerzo de implementación, calidad de los datos y posibles consecuencias si el resultado falla.',
      'Finalmente, prueben el flujo con un grupo pequeño y acuerden quién revisa las salidas. Automatizar una parte manejable permite observar lo que cambia antes de extenderlo a toda la operación.',
    ],
  },
  {
    slug: 'datos-y-privacidad-al-usar-ia',
    category: 'Uso responsable',
    date: '15 de octubre de 2026',
    author: 'Diego Vera',
    title: 'Datos y privacidad: preguntas antes de usar IA',
    excerpt:
      'Antes de compartir información con una herramienta, identifica qué datos necesitas y quién debe poder verlos.',
    readTime: '5 min de lectura',
    paragraphs: [
      'Cada herramienta maneja la información de forma distinta. Antes de incorporar una al trabajo, revisa qué datos se introducirían, quién tendrá acceso y qué condiciones ofrece el proveedor sobre su tratamiento.',
      'Empieza por reducir lo que compartes. Si una tarea puede resolverse con datos generales o anonimizados, evita incluir nombres, contactos, documentos internos u otra información sensible que no sea necesaria.',
      'Define también reglas comprensibles para el equipo: qué herramientas están permitidas, qué tipo de información no debe copiarse y quién puede aprobar un uso nuevo. Si hay dudas, consulta a las personas responsables de datos y cumplimiento de tu organización.',
      'La privacidad no se resuelve con una sola configuración. Requiere revisar las prácticas de uso, el acceso a la información y la necesidad de supervisión a medida que el proyecto cambia.',
    ],
  },
  {
    slug: 'errores-comunes-al-implementar-ia',
    category: 'Implementación',
    date: '30 de septiembre de 2026',
    author: 'Equipo Guayas IA',
    title: 'Errores comunes al implementar inteligencia artificial',
    excerpt:
      'Una meta difusa, datos desordenados o poca participación del equipo pueden frenar una buena idea.',
    readTime: '4 min de lectura',
    paragraphs: [
      'Un error frecuente es comenzar por la herramienta y buscar después un problema que justificar. Ese orden suele llevar a pilotos que se ven bien en una presentación, pero no encajan con el día a día de las personas.',
      'También es común esperar que la IA resuelva procesos poco definidos. Si las instrucciones cambian según quién realiza la tarea, primero hay que documentar las variantes y acordar qué resultado se considera adecuado.',
      'Otro tropiezo es omitir a quienes usarán la solución. Su participación permite descubrir excepciones, riesgos y necesidades de capacitación que no siempre aparecen en una reunión de dirección.',
      'Por último, no conviene confundir probar con escalar. Un piloto necesita un objetivo, una persona responsable y criterios para decidir qué hacer con lo aprendido, incluso si la conclusión es detenerlo.',
    ],
  },
]
