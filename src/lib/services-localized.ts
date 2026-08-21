import { SERVICE_SLUG_ES } from "./i18n";
import type { Locale } from "./i18n";
import { services, type Service } from "./services";

type Overlay = Pick<
  Service,
  | "title"
  | "summary"
  | "description"
  | "content"
  | "sections"
  | "process"
  | "whatWeCheck"
  | "features"
  | "symptoms"
  | "whenToCall"
  | "duration"
  | "seoTitle"
  | "seoDescription"
  | "quickAnswer"
  | "keywords"
  | "faqs"
>;

const es: Record<string, Overlay> = {
  "engine-repair": {
    title: "Reparación de motores marinos",
    summary: "Motor interno y fuera de borda—primero diagnosticamos, luego reparamos lo que importa.",
    description:
      "Reparación de motores internos y fuera de borda para botes y yates en Fort Lauderdale y el sur de la Florida. No arranca, se calienta, pierde potencia, generadores—primero el diagnóstico, después las piezas.",
    content: [
      "¿Necesita un mecánico de yates o reparación de motores en Fort Lauderdale o cerca, en el sur de la Florida? Doctor Yachts es un mecánico náutico independiente: buscamos la falla de verdad antes de tirar piezas al problema. Center console, cabin cruiser, sport yacht o motor yacht—tratamos el motor como un sistema: combustible, aire, chispa/compresión, enfriamiento y controles.",
      "Arranques duros, sobrecalentamiento, pérdida de potencia, ralentí irregular y quejas de generador son llamadas de todos los días en Broward y Miami-Dade. El aire salado, el calor y el uso todo el año castigan pasajes de enfriamiento, conexiones y el sistema de combustible. Una visita seria separa “es la batería” de “es la bomba”, “es el flujo de agua” o “es trabajo más profundo”—para que no pague dos veces el mismo síntoma.",
      "Ofrecemos reparación móvil y en el muelle cuando el acceso lo permite, en marinas de Fort Lauderdale, muelles privados y vías cercanas. Muchos diagnósticos no necesitan travel lift. Si el trabajo pide sacarlo del agua, se lo decimos temprano. Presupuesto gratis del trabajo recomendado después del diagnóstico.",
    ],
    sections: [
      {
        heading: "Qué cubre de verdad la reparación de motor marino",
        body: [
          "No es “cambiar la pieza que se ve sucia”. En gasolina o diésel, el mismo no-arranque puede ser batería floja, un interlock de seguridad, combustible o un fallo de control. Empezamos por el historial: cuándo anduvo bien, qué cambió, alarmas, combustible y cómo se guarda el bote.",
          "En internos y sterndrive evaluamos enfriamiento de agua cruda, escapes donde aplica, carga en marcha y calidad de ralentí. En fuera de borda sumamos el chorrito (telltale), el acceso al cowl y los ítems de intervalo. El generador se piensa con carga: ¿aguanta el aire y la casa, o solo idle en el slip?",
        ],
        list: [
          "Diagnóstico de no-arranque y arranque duro",
          "Sobrecalentamiento y verificación de enfriamiento",
          "Pérdida de potencia, tirones y ralentí irregular",
          "Chequeos tipo Mercruiser / sterndrive",
          "Servicio diésel marino con hallazgos claros",
          "Generador y quejas de carga",
          "Trabajo de motor en el muelle cuando hay acceso y piezas",
        ],
      },
      {
        heading: "Interno vs fuera de borda: cambia el enfoque",
        body: [
          "El interno vive dentro del bote. Acceso, calor, escape y tubería de agua cruda cambian el diagnóstico. Una temperatura que solo sube a los 15 minutos puede ser restricción, termostato o intercambiador—no se ve en 30 segundos de idle.",
          "El fuera de borda pone el chorrito, la electrónica del cowl y la cola al frente. Muchos center consoles de Fort Lauderdale viven duro: pesca, corridas largas y sol entre fines de semana. Si lo que necesita es específico de fuera de borda, vea también la página de servicio de motor fuera de borda.",
        ],
      },
      {
        heading: "Por qué los motores fallan distinto en el sur de la Florida",
        body: [
          "La lógica de “una vez por temporada” del norte no alcanza aquí. El calor acelera fallas de batería y conexiones. La sal come tierras y hardware de enfriamiento. Estar parado entre fines de semana deja baterías sulfatadas, combustible pegajoso y el susto del sábado.",
          "Por eso el diagnóstico primero en Fort Lauderdale y el sur de la Florida verifica el sistema en condiciones reales—no adivina la pieza más popular del foro. Documentamos hallazgos para reventa, survey o el próximo yard.",
        ],
      },
      {
        heading: "Qué se lleva después de la visita",
        body: [
          "Más que un “creo que está bien” de palabra. Después del diagnóstico explicamos opciones en claro: arreglo de seguridad, reparación ahora, o mantenimiento si el bote todavía puede viajar. Presupuesto gratis del trabajo recomendado antes de piezas y mano de obra mayores.",
        ],
      },
    ],
    process: [
      { title: "Síntoma", detail: "Qué hace—o no hace—el bote, marina, slip, tipo de embarcación y trabajo reciente. Las fotos ayudan." },
      { title: "Acceso y agenda", detail: "Confirmamos acceso al muelle, parqueo y si el trabajo se puede hacer en el slip. Prioridad a no-arranques de seguridad cuando hay cupo." },
      { title: "Diagnóstico en sitio", detail: "Batería/carga, circuitos de seguridad, pistas de combustible, enfriamiento y comportamiento del motor." },
      { title: "Hallazgos y presupuesto", detail: "Opciones claras, qué es urgente vs opcional, y presupuesto gratis antes de piezas mayores. Se repara con su visto bueno." },
    ],
    whatWeCheck: [
      "Estado de la batería y voltaje en carga",
      "Calidad de arranque y pistas del starter",
      "Kill switch / neutro / interlocks",
      "Suministro de combustible básico",
      "Chorrito / temperatura",
      "Fugas visibles, correas, mangueras y escape",
      "Quejas de carga del generador, si aplica",
      "Códigos e historial cuando hay",
    ],
    features: [
      "Reparación de motor interno y fuera de borda",
      "Diagnóstico Mercruiser / sterndrive",
      "Pruebas de compresión y desempeño",
      "Enfriamiento, combustible y escape",
      "Servicio de generador y prueba de carga",
      "Móvil / en el muelle cuando hay acceso",
    ],
    symptoms: [
      "El bote no arranca o da arranque flojo",
      "Se calienta en idle o en marcha",
      "Pierde potencia, tira o anda irregular",
      "Humo, ruido raro u olor a combustible",
      "El generador no aguanta la casa",
      "Alarmas o check-engine",
    ],
    whenToCall:
      "Llame por reparación de motor cuando no arranca, corre caliente, pierde potencia o tira alarmas—sobre todo antes de un viaje. Un diagnóstico temprano en el muelle en Fort Lauderdale o el sur de la Florida a menudo evita remolque y daño más caro.",
    duration: "2–8 h típico",
    seoTitle: "Reparación de motores marinos | Mecánico de yates | Fort Lauderdale, FL",
    seoDescription:
      "Reparación de motores internos y fuera de borda en Fort Lauderdale y el sur de la Florida. Diagnóstico primero, servicio en el muelle. Presupuestos gratis — Doctor Yachts.",
    quickAnswer:
      "La reparación de motores marinos cubre no-arranques, sobrecalentamiento, pérdida de potencia y generadores en internos y fuera de borda. Doctor Yachts diagnostica primero en Fort Lauderdale y el sur de la Florida, y repara en el muelle cuando hay acceso. Presupuesto gratis antes de piezas mayores.",
    keywords: [
      "mecánico de yates Fort Lauderdale",
      "reparación de barcos Fort Lauderdale",
      "reparación de motores marinos",
      "mecánico náutico sur de la Florida",
      "reparación de motor fuera de borda",
    ],
    faqs: [
      { question: "¿Qué problemas de motor reparan?", answer: "Arranques duros, sobrecalentamiento, pérdida de potencia, fallas de combustible y enfriamiento, escape, marcha irregular y problemas de generador." },
      { question: "¿Trabajan fuera de borda e internos?", answer: "Sí. Gasolina y diésel internos, fuera de borda y muchos generadores de botes y yates." },
      { question: "¿Se puede reparar el motor en el muelle?", answer: "Muchos diagnósticos y reparaciones se cierran en el muelle cuando hay acceso y piezas. Si hay que sacarlo, se lo decimos temprano." },
      { question: "¿Dan presupuesto gratis?", answer: "Sí. Después de entender el síntoma y completar el diagnóstico, damos presupuesto gratis del trabajo recomendado." },
      { question: "¿Solo cambian piezas o diagnostican primero?", answer: "Primero diagnosticamos. Verificamos la ruta de la falla para que no pague piezas populares que no resuelven el síntoma." },
    ],
  },
  electrical: {
    title: "Reparación eléctrica de barcos",
    summary: "Carga, cableado, shore power—no se sale al agua con el sistema eléctrico flojo.",
    description:
      "Reparación eléctrica de barcos en Fort Lauderdale y el sur de la Florida: baterías, cargadores, inversores, shore power, tierras y distribución—diagnosticado como sistema, no como lotería de cambiar baterías.",
    content: [
      "Doctor Yachts hace reparación eléctrica de barcos en Fort Lauderdale, y en Miami y Palm Beach cuando se agenda. Baterías muertas, sin carga en marcha, trips de shore power, electrónicos que se apagan en carga y cortos intermitentes son trabajo de un mecánico náutico que trata el eléctrico como un camino completo.",
      "Las fallas intermitentes en aire salado y calor son las más difíciles. Costra verde en las tierras, terminales con resistencia, cargadores que fallan y consumos parásitos parecen “batería mala” hasta que se prueba bien la carga y la distribución.",
      "Servicio móvil y en el muelle cuando hay acceso. Mande fotos del tablero, el banco y el inlet de shore power cuando pida presupuesto—acelera el triaje.",
    ],
    sections: [
      {
        heading: "Qué incluye la reparación eléctrica",
        body: [
          "Rara vez es solo la batería. El banco tiene que aceptar carga, el cargador o alternador tiene que entregarla, cables y tierras tienen que pasar corriente sin caída excesiva, y los breakers tienen que proteger sin dispararse por gusto. Empezamos por el síntoma y caminamos el circuito.",
        ],
        list: [
          "Prueba de batería en carga (no solo voltaje en reposo)",
          "Comportamiento de cargador, inversor e inverter-charger",
          "Quejas de alternador / carga en marcha",
          "Inlet de shore power, cordón y breaker",
          "Distribución DC/AC",
          "Conexiones corroídas, tierras y caída de voltaje",
          "Consumo parásito cuando se mueren de noche",
        ],
      },
      {
        heading: "Por qué el eléctrico se multiplica en el sur de la Florida",
        body: [
          "La sal ataca tierras y conexiones. El calor estresa baterías y electrónica. Los botes modernos apilan thrusters, bancos grandes y paquetes de navegación en el mismo backbone. Un tierra de alta resistencia parece “electrónica mala” hasta que la caída de voltaje lo demuestra.",
        ],
      },
      {
        heading: "Cómo documentamos los hallazgos",
        body: [
          "Hallazgos en lenguaje claro: qué falló, qué está flojo y qué es opcional. Presupuesto gratis del trabajo recomendado. Las notas importan para survey, reventa y el próximo técnico—sobre todo después de un upgrade a litio.",
        ],
      },
    ],
    process: [
      { title: "Síntoma y fotos", detail: "¿Muerta de noche? ¿Trip en shore power? ¿Brownout con el thruster? Edad de baterías y fotos del tablero si las tiene." },
      { title: "Prueba del camino", detail: "En sitio: baterías en carga, fuentes de carga, caída en cables y distribución bajo carga real." },
      { title: "Causa raíz", detail: "Separamos “celda mala” de “cargador malo”, “tierra mala” y “demasiada carga para el calibre”." },
      { title: "Presupuesto y reparación", detail: "Presupuesto gratis. Se repara con aprobación—sin presión de piezas misteriosas." },
    ],
    whatWeCheck: [
      "Salud de la batería en carga",
      "Salida y perfiles del cargador",
      "Pistas de alternador / carga en marcha",
      "Inlet de shore power y aislamiento básico",
      "Tierras principales y conexiones de alta resistencia",
      "Caída de voltaje en corridas críticas",
      "Síntomas de breakers/fusibles",
      "Consumos parásitos cuando aplica",
    ],
    features: [
      "Servicio de batería, cargador e inversor",
      "Reparación de arneses",
      "Chequeos de shore power",
      "Distribución DC/AC",
      "Reparación eléctrica en el muelle",
      "Diagnóstico de tierras y caída de voltaje",
    ],
    symptoms: [
      "Baterías muertas después de unos días",
      "Arranque lento o no arranca",
      "Los electrónicos se apagan en carga",
      "El breaker de shore power se dispara",
      "Cargador / alternador no carga",
      "Olor a quemado o cables calientes (pare y llame)",
    ],
    whenToCall:
      "Reserve reparación eléctrica cuando las baterías se mueren, la carga es floja, el shore power se dispara o los electrónicos se apagan. Fallas intermitentes y olores a quemado piden diagnóstico pronto—no siga dando jump y esperando.",
    duration: "1–6 h típico",
    seoTitle: "Reparación eléctrica de barcos | Doctor Yachts | Fort Lauderdale, FL",
    seoDescription:
      "Reparación eléctrica de barcos en Fort Lauderdale y el sur de la Florida. Baterías, carga, shore power, tierras. Presupuestos gratis — Doctor Yachts.",
    quickAnswer:
      "La reparación eléctrica de barcos resuelve baterías muertas, carga floja, trips de shore power y cableado intermitente. Probamos el camino completo—baterías, cargadores, alternadores y tierras—en muelles de Fort Lauderdale y el sur de la Florida. Presupuesto gratis después del diagnóstico.",
    keywords: [
      "reparación eléctrica de barcos",
      "eléctrico marino Fort Lauderdale",
      "batería de bote se muere",
      "shore power problemas",
    ],
    faqs: [
      { question: "¿Por qué se me mueren las baterías del bote?", answer: "Consumos parásitos, cargador o alternador que falla, celdas malas, malas conexiones o perfil de carga incorrecto. Probamos el camino completo, no solo la batería." },
      { question: "¿Arreglan problemas de shore power?", answer: "Sí. Diagnosticamos inlet, cordón, aislamiento, breaker y distribución a bordo." },
      { question: "¿Instalan electrónica marina?", answer: "Nos enfocamos en la salud eléctrica, carga, distribución y fallas que mantienen la electrónica estable. Para paquetes grandes de pantallas podemos coordinar con un instalador especialista." },
      { question: "¿Puedo pasar a litio sin un chequeo?", answer: "No a ciegas. El litio pide perfiles de carga, protección y calibre correctos. Podemos ver si el sistema está listo." },
      { question: "¿Se puede hacer en mi marina?", answer: "Sí. Muchos diagnósticos eléctricos se cierran en el muelle en Fort Lauderdale y el sur de la Florida cuando hay acceso." },
    ],
  },
  cooling: {
    title: "Reparación del sistema de enfriamiento",
    summary: "Mantenga el motor fresco—impulsores, intercambiadores, flujo de agua cruda.",
    description:
      "Servicio de sistema de enfriamiento en Fort Lauderdale y el sur de la Florida. Sobrecalentamiento, poco flujo, intercambiadores tapados, impulsor—pare el daño antes de que un motor caliente se vuelva un motor caro.",
    content: [
      "El sobrecalentamiento es de las formas más rápidas de destruir un motor marino que todavía estaba sano. Doctor Yachts repara sistemas de enfriamiento en Fort Lauderdale y el sur de la Florida—agua cruda y circuito cerrado, impulsores, strainers, termostatos, intercambiadores, mangueras y flujo en las condiciones correctas.",
      "Si solo se calienta en crucero—o solo a los minutos—igual lo tratamos como caso de enfriamiento hasta que se demuestre lo contrario. Un chorrito débil en el fuera de borda es bandera roja, no curiosidad. Hierba, arena y crecimiento en Broward y Miami-Dade hacen del enfriamiento una realidad semanal.",
      "Muchos trabajos de impulsor, strainer, manguera y termostato se hacen en el muelle. Presupuesto gratis después del diagnóstico. Si ya se calentó, deje de correrlo y reserve antes del próximo viaje.",
    ],
    sections: [
      {
        heading: "Causas comunes de sobrecalentamiento",
        body: [
          "La mayoría es flujo de agua cruda restringido o un componente de temperatura que falló. El impulsor envejece—sobre todo después de estar parado. El strainer se tapa. Las mangueras se colapsan. El termostato se pega. El intercambiador se ensucia en internos.",
        ],
        list: [
          "Impulsor de agua cruda fallado",
          "Strainer o toma tapados",
          "Manguera colapsada o tapada",
          "Termostato pegado",
          "Intercambiador sucio (internos)",
          "Chorrito del fuera de borda débil o ausente",
          "Restricción de escape (grave—diagnóstico pronto)",
        ],
      },
      {
        heading: "Qué hacer cuando sube la temperatura",
        body: [
          "Baje carga. Si sigue subiendo, apague para proteger el motor. Revise el chorrito en muchos fuera de borda. En el muelle, mire el strainer si es seguro. No siga corriendo “un poquito caliente”.",
          "Después reserve el servicio de enfriamiento. Anote: ¿idle o crucero?, hierba reciente, historial de guarda y alarmas.",
        ],
      },
      {
        heading: "En el muelle vs haul-out",
        body: [
          "Impulsores, strainers, mangueras y muchos termostatos son buenos candidatos de muelle. El intercambiador complejo o el equipo que no se puede subir a bordo puede pedir taller. Se lo decimos temprano.",
        ],
      },
    ],
    process: [
      { title: "Pare el daño", detail: "Si sube la temperatura, baje carga y apague. Anote cuándo aparece el calor." },
      { title: "Flujo y restricción", detail: "Revisamos strainers, chorrito, impulsor, mangueras y temperatura en condiciones adecuadas." },
      { title: "Ruta de reparación", detail: "Impulsor, termostato, manguera, intercambiador o trabajo más profundo—con presupuesto gratis antes de piezas mayores." },
      { title: "Notas de prevención", detail: "Intervalos pensados para hierba, limo y patrones de guarda del sur de la Florida." },
    ],
    whatWeCheck: [
      "Strainer y patrón de tapado",
      "Impulsor y bomba de agua cruda",
      "Integridad de mangueras",
      "Pistas de termostato",
      "Intercambiador (internos, según acceso)",
      "Chorrito / descarga del fuera de borda",
      "Temperatura en idle vs carga cuando es seguro",
      "Alarmas e historial del motor",
    ],
    features: [
      "Diagnóstico de sobrecalentamiento",
      "Servicio de impulsor y agua cruda",
      "Inspección de intercambiador",
      "Termostato y mangueras",
      "Reparaciones de enfriamiento en el muelle",
      "Evaluación después de un sobrecalentamiento",
    ],
    symptoms: [
      "El gauge de temperatura sube",
      "Chorrito débil o ausente",
      "Vapor, olor a caliente o alarmas",
      "Solo se calienta en crucero",
      "El strainer se tapa una y otra vez",
      "Caliente después de estar parado",
    ],
    whenToCall:
      "Deje de correr si la temperatura sigue subiendo. Reserve enfriamiento después de cualquier sobrecalentamiento, chorrito débil o strainers que se tapan—antes de que el fin de semana se vuelva daño de motor.",
    duration: "1–5 h típico",
    seoTitle: "Sistema de enfriamiento | Doctor Yachts | Fort Lauderdale, FL",
    seoDescription:
      "Reparación del sistema de enfriamiento en Fort Lauderdale y el sur de la Florida. Sobrecalentamiento, impulsores, strainers. Presupuestos gratis — Doctor Yachts.",
    quickAnswer:
      "El servicio de sistema de enfriamiento atiende sobrecalentamiento por impulsor fallado, strainer tapado, termostato pegado o intercambiador sucio. Si la temperatura sigue subiendo, pare el motor. Doctor Yachts diagnostica en el muelle en Fort Lauderdale y el sur de la Florida. Presupuesto gratis.",
    keywords: [
      "sistema de enfriamiento bote",
      "sobrecalentamiento motor marino",
      "cambio de impulsor Fort Lauderdale",
      "intercambiador de calor marino",
    ],
    faqs: [
      { question: "¿Por qué se sobrecalienta el motor?", answer: "Impulsor fallado, strainer o intercambiador tapado, termostato pegado, manguera colapsada o toma restringida. Probamos flujo y temperatura en las condiciones correctas." },
      { question: "¿Pueden cambiar el impulsor en el muelle?", answer: "A menudo sí, cuando hay acceso y piezas. Muchos trabajos de agua cruda se hacen sin haul-out." },
      { question: "¿Cada cuánto se cambia el impulsor?", answer: "Muchos fabricantes piden inspección o cambio anual por horas. En agua con hierba o limo del sur de la Florida, revise más seguido—sobre todo antes de un viaje largo." },
      { question: "¿Puedo seguir si está solo un poquito caliente?", answer: "No apueste. “Un poquito caliente” puede ser daño serio. Si sigue subiendo, apague y agende enfriamiento." },
    ],
  },
  diagnostics: {
    title: "Diagnóstico de yates y botes",
    summary: "Diagnosticamos el problema con claridad—antes de que compre piezas que no necesita.",
    description:
      "Diagnóstico de yates de varios sistemas en Fort Lauderdale y el sur de la Florida. Motores, eléctrico, sentina y seguridad, con hallazgos por escrito y un mapa de reparación priorizado.",
    content: [
      "Doctor Yachts hace diagnóstico mecánico de varios sistemas para dueños de botes y yates en Fort Lauderdale, Miami y muelles del sur de la Florida. Úselo antes de temporada alta, después de una compra, cuando algo “a veces falla”, o después de que otro taller cambió piezas sin resolver el síntoma.",
      "Se lleva hallazgos claros y un mapa priorizado—no una factura vaga. Chequeos mecánicos pre-compra y apoyo en sea trial ayudan a ver la condición real. El diagnóstico de pretemporada le deja empezar el año listo, no a la defensiva.",
      "Es ideal cuando varios sistemas pueden estar metidos—carga vs starter, enfriamiento vs combustible, bomba de sentina vs cableado. Presupuesto gratis del trabajo recomendado después de la inspección.",
    ],
    sections: [
      {
        heading: "Qué incluye un diagnóstico de la embarcación",
        body: [
          "Es un chequeo estructurado de varios sistemas, no una mirada de cinco minutos. El alcance depende del bote, pero suele cubrir motores, eléctrico y carga, bombas de sentina y otros ítems mecánicos de seguridad y confiabilidad.",
        ],
        list: [
          "Calidad de marcha del motor y pistas de enfriamiento/combustible",
          "Línea base de batería y carga",
          "Bombas de sentina y float switch",
          "Chequeos de sistemas críticos según el tipo de bote",
          "Notas de acceso y siguientes pruebas",
          "Mapa de reparación priorizado con presupuesto gratis",
        ],
      },
      {
        heading: "Diagnóstico vs survey formal",
        body: [
          "Nosotros damos diagnóstico mecánico y de sistemas. El survey formal de seguro o compra lo hace un surveyor licenciado. Podemos complementar con hallazgos más profundos y sea trial cuando el bote necesita evaluación de sistemas con las manos en la máquina.",
        ],
      },
      {
        heading: "Cuándo el diagnóstico más ahorra",
        body: [
          "Fallas intermitentes, síntomas de varios sistemas, decisiones de compra y segundas opiniones después de cambiar piezas. Adivinar tres fines de semana de piezas sale más caro que un día estructurado de diagnóstico.",
        ],
      },
    ],
    process: [
      { title: "Definir el objetivo", detail: "Pre-compra, pretemporada, falla intermitente o segunda opinión—el alcance sigue el objetivo." },
      { title: "Inspección de varios sistemas", detail: "Motores, eléctrico/carga, sentina/bombas y sistemas según el tipo de embarcación." },
      { title: "Sea trial si hace falta", detail: "Chequeos en marcha cuando la falla solo aparece en carga o en temperatura." },
      { title: "Hallazgos por escrito", detail: "Mapa priorizado y presupuestos gratis de las reparaciones recomendadas." },
    ],
    whatWeCheck: [
      "Arranque y calidad de marcha",
      "Indicadores de enfriamiento e historial de calor",
      "Línea base de batería y carga",
      "Síntomas de shore power si los reporta",
      "Bombas de sentina y pistas de agua alta",
      "Fugas visibles y mangueras críticas",
      "Acceso a sistemas de seguridad",
      "Eventos intermitentes que cuente el dueño o capitán",
    ],
    features: [
      "Chequeos mecánicos pre-compra",
      "Inspecciones de salud pretemporada",
      "Apoyo en sea trial",
      "Informe de hallazgos por escrito",
      "Mapa de reparación priorizado",
      "Diagnóstico móvil / en el muelle",
    ],
    symptoms: [
      "Fallas intermitentes que nadie reproduce",
      "Va a comprar un bote o yate usado",
      "Chequeo de pretemporada",
      "Varios sistemas andan mal",
      "Segunda opinión después de cambiar piezas",
      "Preparando survey o un viaje largo",
    ],
    whenToCall:
      "Reserve un diagnóstico de yates antes de temporada alta, después de comprar, o cuando el problema es intermitente. Un chequeo estructurado es más rápido y barato que adivinar piezas varios fines de semana.",
    duration: "Medio día o día completo",
    seoTitle: "Diagnóstico de yates | Doctor Yachts | Fort Lauderdale, FL",
    seoDescription:
      "Diagnóstico de yates y botes en Fort Lauderdale y el sur de la Florida. Hallazgos por escrito, mapa de reparación, presupuestos gratis — Doctor Yachts.",
    quickAnswer:
      "El diagnóstico de yates inspecciona motores, eléctrico, sentina y seguridad, y entrega hallazgos por escrito con un mapa de reparación. Úselo antes de temporada, después de comprar, o cuando la falla es intermitente. Móvil en Fort Lauderdale y el sur de la Florida. Presupuesto gratis del trabajo recomendado.",
    keywords: [
      "diagnóstico de yates",
      "diagnóstico de barcos Fort Lauderdale",
      "inspección pre-compra bote Florida",
      "mecánico náutico diagnóstico",
    ],
    faqs: [
      { question: "¿Qué incluye el diagnóstico?", answer: "Chequeo de motores y sistemas relacionados, eléctrico y carga, sentina y bombas críticas, más hallazgos documentados y siguientes pasos." },
      { question: "¿Esto es un survey completo?", answer: "Damos diagnóstico mecánico y de sistemas. Para un survey formal podemos complementar a un surveyor licenciado con hallazgos más profundos y sea trial." },
      { question: "¿Se puede hacer en mi marina?", answer: "Sí. Muchos diagnósticos se cierran en el muelle en Fort Lauderdale y el sur de la Florida. El sea trial se agenda cuando hace falta probar en marcha." },
      { question: "¿Cuánto dura?", answer: "Normalmente medio día o día completo, según tamaño, acceso y si hay sea trial. Estimamos el tiempo al reservar." },
    ],
  },
  maintenance: {
    title: "Mantenimiento de yates y botes",
    summary: "Mantenimiento de rutina y de temporada para pasar tiempo en el agua—no esperando reparaciones.",
    description:
      "Mantenimiento de yates en Fort Lauderdale y el sur de la Florida: aceite, impulsores, zincs, correas, baterías y servicio de intervalo del fabricante, con bitácora clara.",
    content: [
      "Los dueños en Fort Lauderdale y el sur de la Florida pueden contar con Doctor Yachts para mantenimiento de yates alineado al intervalo del fabricante y a cómo usa el bote de verdad. El mantenimiento preventivo sale más barato que el no-arranque de emergencia la mañana del charter o del viaje familiar.",
      "El servicio típico incluye aceite y filtros, inspección/plan de impulsor, correas, zincs, fluidos, atención de enfriamiento, salud de batería/carga y pruebas de función. Las notas claras dejan el historial ordenado para reventa o survey.",
      "Reserve temprano el mantenimiento de fuera de borda o la puesta a punto de temporada—los calendarios del sur de la Florida se llenan antes de temporada alta. Para visitas de intervalo dedicadas, vea el servicio 100 horas y el servicio 300 horas. Presupuesto gratis de paquetes.",
    ],
    sections: [
      {
        heading: "Un ritmo práctico de mantenimiento en Florida",
        body: [
          "En uso de agua salada, el servicio anual es la base—luego se ajusta por horas y por qué tan duro corre el bote. Poco uso igual envejece combustible, baterías e impulsores. Estar parado puede ser más duro que correr.",
        ],
        list: [
          "Cada salida: sentina, switch de batería, fugas a la vista, chorrito",
          "Cada 50–100 horas o al año: aceite y filtros (según el manual)",
          "Al año: impulsor, zincs, correas, cables",
          "Pretemporada: prueba de batería, carga, seguridad, recorrido de sistemas",
          "Según pase: después de un encallamiento, sobrecalentamiento o guarda larga",
        ],
      },
      {
        heading: "Qué suele incluir una visita de mantenimiento",
        body: [
          "El alcance sigue el bote y las horas: aceite y filtros, gear lube en drives que lo pidan, impulsor y enfriamiento, zincs, correas, fluidos y eléctrico básico. El servicio de intervalo de fuera de borda sigue al fabricante, adaptado al agua salada. Para un intervalo dedicado, reserve servicio 100 horas o el más profundo servicio 300 horas.",
        ],
      },
      {
        heading: "Puesta a punto de temporada en el sur de la Florida",
        body: [
          "La commissioning de pretemporada no es teatro de invernada—es un pase de listo antes del uso fuerte. Cazamos baterías flojas, impulsores cansados y sentinas malas antes de que se vuelvan emergencias de sábado en Fort Lauderdale.",
        ],
      },
    ],
    process: [
      { title: "Horas e historial", detail: "Horas de motor, último servicio, tipo de bote y cómo lo usa (finde, pesca, crucero)." },
      { title: "Plan de servicio", detail: "Proponemos el intervalo más la realidad de agua salada—impulsores, zincs, baterías, enfriamiento." },
      { title: "Servicio en el muelle", detail: "Mantenimiento en la marina o muelle privado cuando hay acceso." },
      { title: "Bitácora", detail: "Qué se inspeccionó, qué se cambió y qué sigue—para su archivo." },
    ],
    whatWeCheck: [
      "Estado del intervalo de aceite y filtros",
      "Intervalo de impulsor / enfriamiento",
      "Zincs y puntos básicos de corrosión",
      "Correas y componentes visibles",
      "Salud de batería y carga",
      "Función de la bomba de sentina",
      "Niveles y pistas de fugas",
      "Ítems de lista de viaje del dueño",
    ],
    features: [
      "Servicio de aceite y filtros",
      "Mantenimiento de motor fuera de borda",
      "Impulsores, correas y zincs",
      "Puesta a punto de temporada",
      "Bitácora para reventa",
      "Chequeos de batería y carga",
    ],
    symptoms: [
      "Aceite / horas vencidas",
      "Necesita lista de pretemporada",
      "Historial desconocido en un bote usado",
      "Impulsores / zincs sin revisar este año",
      "Planea un viaje o crucero largo",
      "La batería “parece bien” pero no se ha probado",
    ],
    whenToCall:
      "Agende mantenimiento de yates por horas del fabricante, antes de temporada alta, y después de comprar un bote sin historial. El servicio anual de agua salada es la base en Fort Lauderdale y el sur de la Florida.",
    duration: "2–5 h típico",
    seoTitle: "Mantenimiento de yates | Doctor Yachts | Fort Lauderdale, FL",
    seoDescription:
      "Mantenimiento de yates y botes en Fort Lauderdale y el sur de la Florida. Aceite, fuera de borda, zincs, temporada. Presupuestos gratis — Doctor Yachts.",
    quickAnswer:
      "El mantenimiento de yates en Florida debe seguir las horas del fabricante más la realidad de agua salada—aceite y filtros, impulsores, zincs, correas y chequeos de temporada. Doctor Yachts hace mantenimiento programado en Fort Lauderdale y el sur de la Florida. Presupuesto gratis de paquetes.",
    keywords: [
      "mantenimiento de yates",
      "mantenimiento de barcos Fort Lauderdale",
      "servicio de motor fuera de borda",
      "servicio anual de bote Florida",
    ],
    faqs: [
      { question: "¿Cada cuánto debo darle servicio al bote?", answer: "Siga horas/tiempo del fabricante y ajuste por agua salada, guarda y qué tan duro corre. Recomendamos un calendario práctico cuando conozcamos la embarcación." },
      { question: "¿Ofrecen paquetes de temporada?", answer: "Sí. Puesta a punto de pretemporada, mantenimiento en temporada e invernada según el bote o yate." },
      { question: "¿Guardan récord de servicio?", answer: "Sí. Notas claras ayudan a reventa, survey y al próximo técnico. Documentamos qué se inspeccionó, cambió y recomendó." },
      { question: "¿Se puede hacer en mi muelle?", answer: "A menudo sí. Muchos ítems se cierran en el muelle en Fort Lauderdale y el sur de la Florida cuando hay acceso." },
      { question: "¿Hacen servicio 100 horas y 300 horas?", answer: "Sí. Son ofertas de primera: servicio 100 horas / anual de agua salada y el intervalo más profundo de 300 horas. Primero diagnosticamos; presupuesto antes de piezas extras." },
    ],
  },
  "hour-100": {
    title: "Servicio 100 horas",
    summary: "Servicio de intervalo del fabricante en el muelle, alrededor de 100 horas o uso anual en agua salada.",
    description:
      "Servicio 100 horas de botes y yates en Fort Lauderdale y el sur de la Florida: aceite y filtros, gear lube, impulsor y enfriamiento, zincs, correas, baterías, fluidos y bitácora. La visita que evita el no-arranque del sábado.",
    content: [
      "La mayoría de los manuales ponen un servicio serio cerca de las 100 horas—o una vez al año si corre menos horas en agua salada. Doctor Yachts hace el servicio 100 horas en el muelle en Fort Lauderdale y el sur de la Florida cuando hay acceso. Es mantenimiento náutico programado, no un dump de piezas: seguimos el intervalo, inspeccionamos lo que la sal y el calor castigan, y le decimos qué puede esperar.",
      "Una visita típica cubre aceite y filtros, gear lube donde el drive o la cola lo pidan, chequeo de impulsor y enfriamiento, zincs, correas, baterías y carga, niveles y pruebas de función que quedan en bitácora. Estar parado entre fines de semana igual envejece combustible, baterías e impulsores—“pocas horas” no es pase libre en Florida.",
      "Piense el servicio 100 horas como la visita que evita el no-arranque del sábado. Primero diagnosticamos. Si encontramos una falla que no es de intervalo—carga floja, enfriamiento restringido, un circuito de seguridad—se lo decimos y damos presupuesto gratis antes de piezas mayores.",
    ],
    sections: [
      {
        heading: "Qué incluye de verdad el servicio 100 horas",
        body: [
          "En el intervalo de 100 horas / anual la mayoría de los manuales ponen aceite, filtros y un recorrido de sistemas. En fuera de borda sumamos gear lube cuando toca, atención al chorrito y ítems del cowl. En internos y sterndrive, pistas de agua cruda, correas y fluidos accesibles. El alcance sigue el bote y el manual—no una factura única.",
        ],
        list: [
          "Aceite y filtros (según horas del fabricante / uso anual en sal)",
          "Gear lube en fuera de borda, sterndrive y transmisiones que lo pidan",
          "Inspección o plan de impulsor y chequeo de enfriamiento",
          "Zincs / ánodos y corrosión visible",
          "Correas, mangueras y niveles accesibles",
          "Prueba de batería y salud de carga",
          "Pruebas de función — sentina, kill circuits, marcha básica",
          "Bitácora escrita para su archivo",
        ],
      },
      {
        heading: "Por qué en Florida se pasa la ventana de 100 horas",
        body: [
          "El uso en el sur de la Florida es sal, calor y hierba todo el año—no una temporada de tres meses. Las horas se acumulan en fines de pesca y corridas cortas. Otros botes se quedan parados. Los dos patrones castigan enfriamiento, carga y combustible. Esperar a que falle es cómo el sábado se vuelve remolque.",
          "Si está vencido, reserve ya. Si está cerca del intervalo, le decimos qué toca vs qué es opcional. Vea también el mantenimiento de yates y el servicio 300 horas cuando el manual o las horas pidan trabajo más profundo.",
        ],
      },
      {
        heading: "Servicio 100 horas en el muelle vs la espera del dealer",
        body: [
          "Muchos ítems de intervalo se hacen bien en el muelle cuando el bote flota y hay acceso. A menudo se ahorra remolque y mínimo de yard. El dealer sigue siendo el camino correcto para garantía de fábrica—se lo decimos si encaja mejor.",
        ],
      },
    ],
    process: [
      { title: "Horas y último servicio", detail: "Horas de motor, último aceite/impulsor/zinc, tipo de bote y cómo lo usa. Una foto del horómetro ayuda." },
      { title: "Plan de intervalo", detail: "Alineamos la guía del fabricante al uso en agua salada—aceite, filtros, gear lube, enfriamiento, zincs, baterías." },
      { title: "Servicio en el muelle", detail: "Trabajo en la marina o muelle privado cuando hay acceso. Si algo ya anda mal, primero diagnosticamos." },
      { title: "Bitácora y siguiente intervalo", detail: "Qué se hizo, qué toca cerca de 300 horas o la próxima temporada, y presupuesto gratis de lo que encontramos." },
    ],
    whatWeCheck: [
      "Horómetro y notas del último servicio",
      "Estado del intervalo de aceite y filtros",
      "Condición del gear lube donde aplica",
      "Impulsor / chorrito o pistas de flujo",
      "Zincs y puntos visibles de ánodo",
      "Correas y mangueras accesibles",
      "Batería y carga",
      "Bomba de sentina y pruebas básicas de seguridad",
    ],
    features: [
      "Servicio de intervalo 100 horas / anual en agua salada",
      "Aceite, filtros y gear lube cuando toca",
      "Chequeo de impulsor y enfriamiento",
      "Zincs, correas y baterías",
      "Pruebas de función y bitácora",
      "Móvil / en el muelle en Fort Lauderdale y el sur de la Florida",
    ],
    symptoms: [
      "Cerca o pasado de 100 horas",
      "El servicio anual de agua salada está vencido",
      "No sabe la fecha del último servicio en un bote usado",
      "Lista de pretemporada antes del uso fuerte",
      "Quiere evitar el no-arranque del sábado",
      "Planea un fin de semana largo o un crucero",
    ],
    whenToCall:
      "Reserve el servicio 100 horas cuando el horómetro o el calendario digan que toca—sobre todo antes de temporada alta o un viaje. El uso anual en agua salada en Fort Lauderdale y el sur de la Florida es la base aunque las horas sean pocas.",
    duration: "2–5 h típico",
    seoTitle: "Servicio 100 horas | Doctor Yachts | Fort Lauderdale y el sur de la Florida",
    seoDescription:
      "Servicio 100 horas de botes y yates en Fort Lauderdale y el sur de la Florida. Aceite, filtros, impulsor, zincs, baterías. En el muelle. Presupuestos gratis — Doctor Yachts.",
    quickAnswer:
      "El servicio 100 horas es mantenimiento de intervalo en el muelle—aceite y filtros, gear lube, impulsor y enfriamiento, zincs, correas, baterías y bitácora. Doctor Yachts lo hace en Fort Lauderdale y el sur de la Florida para evitar el no-arranque del sábado. Primero diagnosticamos. Presupuesto gratis.",
    keywords: [
      "servicio 100 horas",
      "servicio 100 horas yate",
      "mantenimiento 100 horas Fort Lauderdale",
      "servicio anual de bote Florida",
    ],
    faqs: [
      { question: "¿Qué incluye el servicio 100 horas?", answer: "Por lo general aceite y filtros, gear lube donde aplica, chequeo de impulsor y enfriamiento, zincs, correas, baterías/carga, fluidos, pruebas de función y bitácora. El alcance sigue el bote y el intervalo—no un dump de piezas." },
      { question: "¿Lo necesito si casi no corrí el bote?", answer: "A menudo sí por calendario. El agua salada, el calor y estar parado envejecen combustible, baterías e impulsores aunque las horas sean pocas. El servicio anual es la base en Florida." },
      { question: "¿Se puede hacer en mi muelle?", answer: "Por lo general sí en Fort Lauderdale y el sur de la Florida cuando hay acceso. Muchos ítems de intervalo no necesitan travel lift." },
      { question: "¿En qué se diferencia del servicio 300 horas?", answer: "El de 100 horas es la visita regular. El de 300 horas es la inspección más profunda que muchos manuales ponen entre 250 y 300 horas. Recomendamos el que coincida con sus horas e historial." },
      { question: "¿Dan presupuesto antes de piezas extras?", answer: "Sí. Los ítems de intervalo se planean de entrada. Lo que no es rutina lleva presupuesto gratis antes de autorizar piezas y mano de obra mayores." },
    ],
  },
  "hour-300": {
    title: "Servicio 300 horas",
    summary: "El intervalo más pesado—inspección más profunda de enfriamiento, eléctrico y combustible alrededor de 250–300 horas.",
    description:
      "Servicio 300 horas de botes y yates en Fort Lauderdale y el sur de la Florida. Inspección más profunda en el muelle: atención a enfriamiento e intercambiador, chequeos eléctricos y de combustible más completos, e ítems que muchos manuales ponen a las 250–300 horas. Hallazgos antes de piezas.",
    content: [
      "Cerca de las 250–300 horas, la mayoría de los manuales dejan de llamarlo un simple cambio de aceite. Doctor Yachts ofrece el servicio 300 horas como la visita de intervalo más pesada—todavía en el muelle en Fort Lauderdale y el sur de la Florida cuando hay acceso. No es un dump de piezas. Inspeccionamos lo que las horas realmente estresan, documentamos hallazgos y cotizamos extras antes de que las compre.",
      "Espere más atención de enfriamiento (impulsor más pistas de intercambiador y agua cruda en internos), chequeos eléctricos y de carga más a fondo, inspección de combustible, e ítems de drive o cola que muchos fabricantes agrupan en este intervalo. Los twins y triples toman más tiempo; planificamos con honestidad.",
      "Si ya pasó las 300 horas, o compró un bote con récords flacos, esta visita es cómo deja de adivinar. Primero diagnosticamos. Presupuesto gratis del trabajo recomendado. Párerlo con el servicio 100 horas para no saltar del abandono a una factura de yard.",
    ],
    sections: [
      {
        heading: "Qué cubre el servicio 300 horas",
        body: [
          "Piénselo como una inspección más profunda más los fluidos de intervalo. El enfriamiento es más que una mirada: strainers, impulsor e intercambiador o pistas de agua cruda que solo aparecen con horas de verdad. El eléctrico se mira con carga. El combustible, separadores, suministro y olores/fugas según la plataforma.",
        ],
        list: [
          "Fluidos y filtros de intervalo más los ítems pesados de 250–300 horas",
          "Atención a enfriamiento e intercambiador (internos, según acceso)",
          "Impulsor y restricciones de agua cruda",
          "Eléctrico, carga y conexiones de alta resistencia",
          "Inspección de combustible (separadores, suministro, fugas/olor)",
          "Ítems de drive / cola y gear lube cuando tocan",
          "Pruebas de función y lista priorizada de hallazgos",
          "Presupuesto gratis antes de piezas que no son de intervalo",
        ],
      },
      {
        heading: "Cuándo el servicio 300 horas es la llamada correcta",
        body: [
          "El horómetro está cerca de 250–300, o se saltó un par de visitas de 100 horas. Se calienta solo después de una corrida larga. La carga “parece bien” pero nunca se probó en carga. Compró usado y la carpeta está flaca. Eso es conversación de 300 horas—no otra botella de aceite y una esperanza.",
        ],
      },
      {
        heading: "Sigue siendo en el muelle — sigue siendo diagnóstico primero",
        body: [
          "Un intervalo más pesado no significa haul-out automático. Muchas inspecciones de 300 horas se cierran en muelles de Fort Lauderdale y el sur de la Florida cuando hay acceso y piezas. Si el intercambiador o el trabajo pide equipo de taller, se lo decimos temprano.",
        ],
      },
    ],
    process: [
      { title: "Horas, historial y acceso", detail: "Horómetro, último servicio mayor, quejas de enfriamiento o eléctrico, marina y slip." },
      { title: "Plan de inspección más profunda", detail: "Listamos los ítems de 250–300 horas de sus motores—enfriamiento, eléctrico, combustible, drives—antes de empezar." },
      { title: "Trabajo en el muelle", detail: "Inspección y servicio de intervalo en el bote cuando hay acceso. Hallazgos explicados sobre la marcha." },
      { title: "Hallazgos y presupuesto", detail: "Qué está hecho, qué se recomienda, qué puede esperar. Extras cotizados antes de piezas. Bitácora para su archivo." },
    ],
    whatWeCheck: [
      "Horómetro vs último servicio documentado",
      "Camino de enfriamiento, impulsor e intercambiador",
      "Separadores y suministro de combustible",
      "Batería, carga y pistas de caída de voltaje",
      "Correas, mangueras y fugas visibles",
      "Estado de gear lube / intervalo de drive",
      "Conexiones eléctricas que la sal ataca",
      "Pruebas de sentina y seguridad",
    ],
    features: [
      "Servicio de intervalo más profundo 250–300 horas",
      "Atención a enfriamiento / intercambiador",
      "Inspección eléctrica y de combustible",
      "Hallazgos antes de piezas — no un kit a ciegas",
      "En el muelle cuando hay acceso",
      "Bitácora y plan del siguiente intervalo",
    ],
    symptoms: [
      "Cerca o pasado de 250–300 horas",
      "Se saltó visitas de 100 horas y el bote se siente cansado",
      "Se calienta solo después de una corrida larga",
      "Récords flacos en un bote usado",
      "Problemas de carga o combustible que van y vienen",
      "Planea una temporada de uso más fuerte",
    ],
    whenToCall:
      "Reserve el servicio 300 horas cuando el manual o el horómetro lo pongan en el intervalo más pesado—o cuando se hayan saltado las visitas de 100 horas. En el muelle en Fort Lauderdale y el sur de la Florida cuando hay acceso.",
    duration: "4–8 h típico",
    seoTitle: "Servicio 300 horas | Doctor Yachts | Fort Lauderdale y el sur de la Florida",
    seoDescription:
      "Servicio 300 horas de botes y yates en Fort Lauderdale y el sur de la Florida. Enfriamiento, eléctrico y combustible más a fondo. En el muelle. Presupuestos gratis — Doctor Yachts.",
    quickAnswer:
      "El servicio 300 horas es el intervalo más pesado del fabricante: más atención a enfriamiento e intercambiador, chequeos eléctricos y de combustible más completos, más fluidos. Doctor Yachts lo hace en el muelle en Fort Lauderdale y el sur de la Florida cuando hay acceso. Hallazgos antes de piezas. Presupuesto gratis.",
    keywords: [
      "servicio 300 horas",
      "servicio 300 horas yate",
      "mantenimiento 300 horas Fort Lauderdale",
      "servicio intercambiador de calor bote",
    ],
    faqs: [
      { question: "¿Qué es el servicio 300 horas?", answer: "El intervalo más pesado del fabricante—típicamente alrededor de 250–300 horas. Más atención a enfriamiento e intercambiador, chequeos eléctricos y de combustible más a fondo, más los fluidos de siempre. No es un dump de piezas: documentamos hallazgos primero." },
      { question: "¿Lo necesito si ya hice el de 100 horas?", answer: "Sí, cuando las horas o el manual lo digan. El de 100 horas lo mantiene al día; el de 300 es el pase más profundo. Si faltan récords, lo tratamos como inspección estilo 300 horas y le decimos qué tocaba de verdad." },
      { question: "¿Se puede hacer en el muelle?", answer: "A menudo sí en Fort Lauderdale y el sur de la Florida cuando hay acceso. Si el intercambiador u otro trabajo pide haul-out o taller, se lo decimos temprano." },
      { question: "¿Van a cambiar todo lo de la lista de 300 horas?", answer: "No. Inspeccionamos al intervalo, cambiamos lo que toca o falló, y cotizamos lo opcional o extra antes de que lo autorice. Hallazgos antes de piezas." },
      { question: "¿Cuánto tarda el servicio 300 horas?", answer: "A menudo medio día o un día, según motores, acceso y lo que encontremos. Twins y generadores suman tiempo. Estimamos al reservar." },
    ],
  },
  systems: {
    title: "Reparación de plomería y sistemas",
    summary: "Sentina, agua dulce, heads y sistemas críticos de a bordo.",
    description:
      "Reparación de plomería de barcos en Fort Lauderdale y el sur de la Florida—bombas de sentina, agua dulce, heads, seacocks y el suministro eléctrico de las bombas.",
    content: [
      "Doctor Yachts repara plomería y sistemas en Fort Lauderdale y muelles cercanos del sur de la Florida. Bombas de sentina que no paran, poca presión de agua, heads que fallan y livewell/agua cruda son llamadas comunes—y no son “menores” cuando hay seguridad o un fin de semana con visitas.",
      "Inspeccionamos bombas, float switches, corridas, seacocks y el eléctrico de las bombas. Cuando la plomería se mezcla con carga eléctrica o enfriamiento, lo tratamos como una sola máquina.",
      "Una sentina que “siempre corre un poquito” no es normal. El ciclado constante puede esconder una fuga lenta, prensaestopas, condensado de A/C—o un switch pegado que lo deja sin bomba cuando más la necesita. Presupuesto gratis.",
    ],
    sections: [
      {
        heading: "Sentina: el trabajo de plomería de seguridad",
        body: [
          "Bombas y float switches son equipo de seguridad. Una bomba muerta, un switch pegado o un cableado que a veces funciona es riesgo de inundación—no una molestia. Diagnosticamos la causa para que no tape una fuga seria con una bomba más ruidosa.",
        ],
        list: [
          "Función de bomba primaria y secundaria",
          "Float switch y montaje",
          "Cableado y fusible/breaker de las bombas",
          "Fuentes de fuga obvias cuando hay acceso",
          "Pistas de alarma de agua alta si la tiene",
        ],
      },
      {
        heading: "Agua dulce, heads y otros sistemas",
        body: [
          "Poca presión, bombas falladas, heads y holding tank, livewell/agua cruda son trabajos comunes de muelle. Reparamos lo accesible y somos honestos cuando hay que hacer haul-out—sobre todo un seacock.",
        ],
      },
      {
        heading: "Por qué plomería y eléctrico se diagnostican juntos",
        body: [
          "Las bombas necesitan corriente. Una “bomba de sentina muerta” a menudo es cableado, switch o breaker. Un “agua dulce floja” puede ser la bomba, el acumulador, filtros tapados o voltaje en carga. Pensar en sistema evita comprar tres bombas antes de arreglar un tierra.",
        ],
      },
    ],
    process: [
      { title: "Síntoma", detail: "¿Sentina que no para? ¿Sin presión? ¿Head fallado? Anote cuándo empezó y si hubo trabajo reciente." },
      { title: "Bomba y camino", detail: "Probamos bomba, switch, tubería y suministro eléctrico—no solo la pieza más fácil de cambiar." },
      { title: "Fuga vs switch vs bomba", detail: "Causa clara para no tapar un riesgo de inundación o un fallo el fin de semana de visitas." },
      { title: "Reparación y presupuesto", detail: "Presupuesto gratis. Si hay que sacar el bote, se marca temprano." },
    ],
    whatWeCheck: [
      "Operación de la bomba de sentina",
      "Float switches y modos auto/manual",
      "Cableado y protección de la bomba",
      "Bomba de agua dulce y presión",
      "Quejas de head / holding",
      "Operación de seacocks (inspección)",
      "Livewell y bombas de agua cruda",
      "Problemas de suministro eléctrico relacionados",
    ],
    features: [
      "Bombas de sentina y agua dulce",
      "Reparación de plomería de barcos",
      "Heads y holding tank",
      "Inspección de thru-hulls y seacocks",
      "Livewell y agua cruda",
      "Diagnóstico eléctrico de bombas",
    ],
    symptoms: [
      "La sentina corre sin parar o nunca corre",
      "Poca o ninguna presión de agua dulce",
      "Problemas de head o holding tank",
      "Fugas visibles en fittings o seacocks",
      "Falla de livewell / agua cruda",
      "Mucha agua en sentina después de lluvia o A/C",
    ],
    whenToCall:
      "Llame por plomería si las bombas de sentina ciclan sin parar, falla la presión de agua, ve agua sin explicación o el head/holding falla antes de visitas o un viaje.",
    duration: "1–4 h típico",
    seoTitle: "Plomería de barcos | Doctor Yachts | Fort Lauderdale, FL",
    seoDescription:
      "Reparación de plomería y sentina en Fort Lauderdale y el sur de la Florida. Bombas, heads, seacocks. Presupuestos gratis — Doctor Yachts.",
    quickAnswer:
      "La reparación de plomería cubre bombas de sentina, agua dulce, heads, seacocks y fugas. Sentina que no para o poca presión piden diagnóstico, no cambios a ciegas. Servicio móvil en Fort Lauderdale y el sur de la Florida cuando hay acceso.",
    keywords: [
      "plomería de barcos",
      "reparación bomba de sentina Fort Lauderdale",
      "plomería marina Florida",
    ],
    faqs: [
      { question: "La bomba de sentina corre todo el tiempo—¿qué pasa?", answer: "Float switch pegado, una fuga de verdad, cableado o una bomba que falla. Diagnosticamos la causa para no tapar un problema serio." },
      { question: "¿Reparán heads y holding tanks?", answer: "Sí. Diagnosticamos y reparamos heads, maceradores y holding, incluido el eléctrico de las bombas." },
      { question: "¿Dan servicio a seacocks y thru-hulls?", answer: "Inspeccionamos operación y condición. Si un seacock pide haul-out, lo identificamos temprano y ayudamos a planear el camino correcto." },
      { question: "¿Es peligroso que la sentina corra siempre?", answer: "Puede serlo. Puede esconder una fuga o dejarlo sin bomba cuando la necesita. Trate el ciclado constante como prioridad de diagnóstico." },
    ],
  },
  emergency: {
    title: "Reparación móvil de barcos",
    summary: "Reparación en sitio y en el muelle—diagnosticamos el problema ahí mismo.",
    description:
      "Mecánico de botes móvil y servicio en el muelle en Fort Lauderdale y alrededores. Motores, eléctrico, enfriamiento, plomería—a menudo sin remolque primero.",
    content: [
      "¿Busca un mecánico de botes móvil en Fort Lauderdale? Doctor Yachts repara en sitio en marinas y muelles privados de Fort Lauderdale, Dania Beach, Hollywood y el sur de la Florida cercano—cuando el acceso y las reglas de la marina lo permiten. Reparación móvil significa diagnóstico y muchas reparaciones donde el bote ya vive.",
      "Atendemos motores, eléctrico, enfriamiento, sentina/bombas y sistemas relacionados. Cupos prioritarios para emergencia—no-arranque, sobrecalentamiento y seguridad—cuando la agenda lo permite. Puentes, portones y espera de remolque hacen del servicio en el muelle el primer movimiento práctico para muchos dueños de Broward.",
      "Comparta parqueo, códigos de portón y número de slip al reservar para que el técnico llegue listo. Presupuesto gratis del trabajo recomendado. Pida en línea o llame para triaje urgente.",
    ],
    sections: [
      {
        heading: "Cuándo gana la reparación móvil / en el muelle",
        body: [
          "La mayoría de los dolores del dueño no necesitan travel lift primero. No-arranques, baterías flojas, eléctrico intermitente, impulsores, mucho enfriamiento, bombas de sentina y mantenimiento son buenos candidatos móviles cuando el bote flota y hay acceso.",
        ],
        list: [
          "No-arranque y arranque flojo en el slip",
          "Baterías muertas y fallas de carga",
          "Sobrecalentamiento / impulsor / strainer",
          "Bomba de sentina y plomería básica",
          "Mantenimiento y diagnóstico programados",
          "Problemas mecánicos urgentes antes de un viaje",
        ],
      },
      {
        heading: "Cuándo todavía tiene sentido el remolque o el yard",
        body: [
          "Fondo, running gear mayor, estructural, pintura completa o trabajos de prensa y desarmes largos pueden pedir yard. Inundación sin control, riesgo de fuego o botes que hay que mover por clima/seguridad necesitan emergencias primero—no una cita de mecánico.",
        ],
      },
      {
        heading: "Notas de cobertura móvil en Fort Lauderdale",
        body: [
          "Muelles del este de Fort Lauderdale, New River, marinas del Intracoastal y muelles privados son rutina cuando las reglas lo permiten. Lighthouse Point, Dania Beach y Hollywood son cobertura núcleo de Broward. Miami y el condado de Palm Beach se agendan con el acceso confirmado de antemano.",
        ],
      },
    ],
    process: [
      { title: "Llame o reserve con ubicación", detail: "Marina, slip, portón, parqueo, tipo de bote y síntomas. ¿Urgente? Llame para triaje." },
      { title: "Confirmar acceso y ETA", detail: "Confirmamos si el trabajo es buen candidato de muelle y cuándo podemos llegar." },
      { title: "Diagnóstico en sitio", detail: "Motores, eléctrico, enfriamiento o sistemas—encontrar la falla antes de la presión de piezas." },
      { title: "Presupuesto y arreglo", detail: "Presupuesto gratis. Reparación en el muelle cuando se pueda, o plan de yard si hace falta." },
    ],
    whatWeCheck: [
      "Acceso, corriente y condiciones seguras de trabajo",
      "Reproducción del síntoma en el muelle",
      "Batería/carga en no-arranques",
      "Pistas de enfriamiento si se calienta",
      "Sentina y seguridad cuando aplica",
      "Si de verdad hace falta haul-out",
      "Piezas que probablemente se necesiten en una segunda visita",
      "Prioridades del dueño (viaje, presupuesto)",
    ],
    features: [
      "Mecánico de botes móvil Fort Lauderdale",
      "Reparación en sitio / en el muelle",
      "Triaje de emergencia",
      "Prioridad el mismo día cuando hay cupo",
      "Motores, eléctrico, enfriamiento, sistemas",
      "Presupuestos gratis",
    ],
    symptoms: [
      "No-arranque en la marina o muelle privado",
      "Pérdida eléctrica antes de un viaje",
      "Sobrecalentamiento en el muelle o en marcha",
      "Emergencia de sentina o bomba",
      "Necesita reparación sin remolque",
      "Problema mecánico urgente pre-viaje",
    ],
    whenToCall:
      "Llame a un mecánico móvil cuando el bote flota, hay acceso y quiere diagnóstico sin espera de yard—sobre todo no-arranques, fallas eléctricas, enfriamiento y mucho mantenimiento en Fort Lauderdale y el sur de la Florida.",
    duration: "Según el caso",
    seoTitle: "Mecánico de botes móvil Fort Lauderdale | Reparación en el muelle",
    seoDescription:
      "Mecánico de botes móvil en Fort Lauderdale y el sur de la Florida. Motor, eléctrico y emergencia en el muelle. Presupuestos gratis — Doctor Yachts.",
    quickAnswer:
      "Un mecánico de botes móvil en Fort Lauderdale va a su marina o muelle por no-arranques, fallas eléctricas, enfriamiento y mantenimiento—a menudo sin remolque. Doctor Yachts también cubre Broward cercano y el sur de la Florida. Presupuesto gratis. Prioridad a emergencias cuando hay cupo.",
    keywords: [
      "mecánico de botes móvil Fort Lauderdale",
      "reparación móvil de barcos",
      "reparación de emergencia de botes",
      "reparación en el muelle Fort Lauderdale",
    ],
    faqs: [
      { question: "¿Ofrecen reparación el mismo día en Fort Lauderdale?", answer: "Cuando hay cupo, sí—sobre todo no-arranques o seguridad. Llame para el triaje más rápido o reserve prioridad en línea." },
      { question: "¿Van a mi marina en Fort Lauderdale?", answer: "Sí, trabajamos en el muelle en marinas y muelles privados de Fort Lauderdale cuando el trabajo y el acceso lo permiten. Comparta slip y portón al reservar." },
      { question: "¿La reparación móvil es más cara que el taller?", answer: "No siempre. Puede haber fee de viaje, pero a menudo se ahorra remolque, días de yard y downtime. Pida presupuesto gratis con ubicación y síntomas." },
      { question: "¿Trabajan en muelles privados?", answer: "Sí, cuando el acceso y las reglas de HOA/marina lo permiten. Comparta códigos y notas de parqueo al reservar." },
    ],
  },
  outboard: {
    title: "Servicio de motor fuera de borda Fort Lauderdale",
    summary: "Reparación y servicio de fuera de borda—diagnóstico, mantenimiento y arreglos en el muelle.",
    description:
      "Servicio de motor fuera de borda en Fort Lauderdale: no-arranques, sobrecalentamiento, pérdida de potencia, servicio 100 horas y reparación móvil para center consoles y botes de pesca cuando hay acceso.",
    content: [
      "Las búsquedas de reparación de fuera de borda en Fort Lauderdale están llenas de dealers y talleres móviles por una razón—los center consoles y los botes de pesca viven del fuera de borda. Doctor Yachts da reparación y mantenimiento con diagnóstico primero para dueños que quieren claridad antes de las piezas, y guía honesta antes de que alguien mencione un repower que tal vez no necesita.",
      "Atendemos no-arranque, sobrecalentamiento (incluido chorrito débil), marcha irregular, pérdida de potencia y carga. El servicio de intervalo y el estilo 100 horas lo sacan del modo emergencia. Muchos trabajos se cierran como reparación móvil en muelles de Fort Lauderdale y el sur de la Florida.",
      "Plataformas comunes: Mercury y Yamaha. Para garantía de fábrica, a veces toca el dealer—se lo decimos si ese es el mejor camino. Presupuesto gratis cuando entendemos síntomas y familia del motor.",
    ],
    sections: [
      {
        heading: "Qué cubre el servicio de motor fuera de borda",
        body: [
          "Arranque, pistas de combustible, flujo/chorrito, calidad de marcha y carga. Los no-arranques de finde a menudo son eléctricos o de seguridad; el sobrecalentamiento, impulsor o restricción; la pérdida de potencia pide diagnóstico sistemático—no sensores al azar.",
        ],
        list: [
          "Diagnóstico de no-arranque y arranque duro",
          "Sobrecalentamiento y chorrito débil",
          "Ralentí irregular, tirones y pérdida de potencia",
          "Problemas de carga después de correr",
          "Códigos / limp mode",
          "Apoyo de mantenimiento 100 horas / de temporada",
          "Servicio de fuera de borda en el muelle cuando hay acceso",
        ],
      },
      {
        heading: "Espera del dealer vs servicio móvil independiente",
        body: [
          "El dealer es el camino correcto para mucha garantía y programas de marca. El servicio móvil independiente a menudo es más rápido fuera de garantía para no-arranques, enfriamiento y mantenimiento cuando necesita el bote el fin de semana y ya está en un slip que funciona.",
        ],
      },
      {
        heading: "Realidades del fuera de borda en Fort Lauderdale",
        body: [
          "Hierba, calor y corridas largas castigan el enfriamiento. Estar parado entre viajes castiga baterías y combustible. Twins y triples suman complejidad. Comparta marca/modelo/horas si las sabe, más el chorrito y cuándo aparece el problema.",
        ],
      },
    ],
    process: [
      { title: "Motor y síntoma", detail: "Marca/modelo/horas si las sabe, simple/twin/triple, no-arranque vs calor vs pérdida de potencia, notas del chorrito." },
      { title: "Diagnóstico en el muelle", detail: "Camino de arranque, pistas de enfriamiento, calidad de marcha y carga, según la queja." },
      { title: "Opciones de reparación", detail: "Hallazgos claros, presupuesto gratis, camino de dealer si la garantía lo exige." },
      { title: "Bitácora", detail: "Qué se arregló y qué ítem de intervalo toca después para uso en agua salada." },
    ],
    whatWeCheck: [
      "Batería y calidad de arranque",
      "Lanyard / circuitos de kill",
      "Chorrito / descarga de enfriamiento",
      "Suministro de combustible básico",
      "Pistas de ralentí y marcha",
      "Carga después de correr",
      "Acceso a cola y cowl",
      "Estado del intervalo de servicio",
    ],
    features: [
      "Reparación y diagnóstico de fuera de borda",
      "Servicio de no-arranque y sobrecalentamiento",
      "Apoyo de mantenimiento 100 horas / intervalo",
      "Chequeos de carga y eléctrico",
      "Reparación en el muelle cuando se puede",
      "Plataformas comunes Mercury y Yamaha",
    ],
    symptoms: [
      "El fuera de borda no arranca",
      "Chorrito débil o ausente / se calienta",
      "Ralentí irregular o pérdida de potencia",
      "Luz de carga o batería muerta después de correr",
      "Servicio 100 horas / anual vencido",
      "Códigos o limp mode",
    ],
    whenToCall:
      "Reserve servicio de motor fuera de borda en Fort Lauderdale cuando no arranca, se calienta, pierde potencia o toca el intervalo. El diagnóstico en el muelle a menudo resuelve los matadores de finde sin la fila del dealer.",
    duration: "1–6 h típico",
    seoTitle: "Servicio de motor fuera de borda Fort Lauderdale | Doctor Yachts",
    seoDescription:
      "Servicio de motor fuera de borda en Fort Lauderdale—no-arranques, sobrecalentamiento, servicio 100 horas. Mecánico móvil con diagnóstico primero. Presupuestos gratis — Doctor Yachts.",
    quickAnswer:
      "El servicio de motor fuera de borda en Fort Lauderdale cubre no-arranques, sobrecalentamiento, pérdida de potencia y servicio programado. Doctor Yachts diagnostica primero y a menudo trabaja en el muelle para evitar remolques innecesarios. Presupuesto gratis. También cubre Broward cercano y el sur de la Florida.",
    keywords: [
      "servicio de motor fuera de borda",
      "reparación fuera de borda Fort Lauderdale",
      "Mercury Yamaha Fort Lauderdale",
    ],
    faqs: [
      { question: "¿Trabajan Mercury y Yamaha?", answer: "Damos servicio a plataformas comunes, incluidas Mercury y Yamaha populares. Para garantía de fábrica puede tocar el dealer—se lo decimos si es el mejor camino." },
      { question: "¿Pueden reparar el fuera de borda en mi muelle de Fort Lauderdale?", answer: "A menudo sí. Muchos diagnósticos, impulsores, eléctrico y mantenimiento se cierran en el muelle cuando hay acceso y piezas." },
      { question: "¿Hacen el servicio 100 horas de fuera de borda?", answer: "Sí. Aceite/filtros donde aplica, gear lube, inspección de impulsor y chequeos de sistema según el fabricante y cómo usa el bote. Vea la página de servicio 100 horas." },
      { question: "¿Repower o reparar?", answer: "Depende de condición, horas, costo vs vida que le queda y cómo lo usa. Diagnosticamos primero y damos una recomendación honesta—no un pitch de repower por defecto." },
    ],
  },
};

export function localizeService(service: Service, locale: Locale): Service {
  if (locale !== "es") return service;
  const overlay = es[service.id];
  if (!overlay) return service;
  return {
    ...service,
    ...overlay,
    slug: SERVICE_SLUG_ES[service.slug] ?? service.slug,
  };
}

export function getLocalizedServices(locale: Locale): Service[] {
  return services.map((s) => localizeService(s, locale));
}

export function getLocalizedServiceBySlug(slug: string, locale: Locale): Service | undefined {
  if (locale === "es") {
    const en = services.find((s) => SERVICE_SLUG_ES[s.slug] === slug || s.slug === slug);
    return en ? localizeService(en, "es") : undefined;
  }
  const found = services.find((s) => s.slug === slug);
  return found;
}

export function servicesInHubOrderLocalized(locale: Locale): Service[] {
  const order = [
    "engine-repair",
    "outboard",
    "electrical",
    "cooling",
    "diagnostics",
    "maintenance",
    "hour-100",
    "hour-300",
    "systems",
    "emergency",
  ] as const;
  return order
    .map((id) => services.find((s) => s.id === id))
    .filter((s): s is Service => Boolean(s))
    .map((s) => localizeService(s, locale));
}
