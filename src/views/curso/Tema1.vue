<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. La familia y la estimulación temprana'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-h85-4
      .px-4.px-md-5
        div 
          .row.align-items-center
            .col-lg-auto.order-2
              img(src="@/assets/curso/tema1/1.svg", style="max-width: 400px").mx-auto
            .col-lg.order-1
              p La familia es el primer entorno de aprendizaje y desarrollo para la infancia. Su rol en la estimulación temprana es clave para potenciar habilidades cognitivas, emocionales y sociales, desde los primeros años de vida. En este espacio, reflexionaremos sobre la importancia de fortalecer vínculos y crear experiencias enriquecedoras que favorezcan el bienestar y crecimiento integral de los niños y las niñas.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        p.mb-0.text-center ¡Acompáñenos en este recorrido y descubramos juntos estrategias para una crianza amorosa y estimulante!

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Importancia del rol de la familia en el desarrollo infantil
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-8
        h5 ¿Es la familia el primer y más importante espacio de aprendizaje para el niño?
        p(data-aos="fade-left") Desde el nacimiento, el entorno familiar se convierte en el escenario donde se construyen las bases para el desarrollo infantil. No solo se trata de un espacio de protección y afecto, sino también del lugar donde se inician las primeras interacciones sociales, se fortalecen habilidades cognitivas y se moldean las emociones. La familia es el pilar fundamental en la formación de cada niño, dado que influye directamente en su desarrollo físico, emocional, social y cognitivo (Escobar, Bravo, Intriago, Cevallos y Briones, 2023).
    
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Castro (2015), asegura que el amor, la seguridad y la estimulación que brinda la familia, son elementos esenciales para un crecimiento saludable. Un ambiente afectuoso y estable permite que el niño explore el mundo con confianza, desarrolle su autonomía y fortalezca sus habilidades de comunicación. Además, la calidad de las interacciones familiares incide en la construcción de la autoestima y en la manera en que el niño se relaciona con los demás.
    
    p.mb-4 Asimismo, la familia desempeña un papel clave en la estimulación temprana. Cada gesto, palabra o juego compartido, representa una oportunidad para potenciar el aprendizaje y el desarrollo integral. No se requiere de materiales sofisticados o metodologías complejas; muchas de las experiencias diarias en el hogar, como leer un cuento, cantar una canción o conversar sobre el día, contribuyen significativamente a la formación de habilidades esenciales para el futuro.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") En este sentido, es importante reflexionar sobre cómo las dinámicas familiares pueden fortalecer o, en algunos casos, dificultar el desarrollo infantil. Factores como la comunicación efectiva, la participación activa de los cuidadores y la creación de entornos enriquecedores marcan la diferencia en el bienestar y aprendizaje del niño.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-7.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Por ello, se hace necesario analizar de qué manera la familia puede convertirse en un motor que impulse el desarrollo infantil, garantizando experiencias de aprendizaje significativas desde los primeros años de vida. 
          figure.d-flex.justify-content-end
            img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px")

    .bg-full-width.bg-h85-3
      .px-4.px-md-5.py-4
        div 
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/6.svg", style="max-width: 295px").mx-auto
            .col-lg.text-white
              p El entorno familiar repres enta el primer espacio de aprendizaje, exploración y afecto, donde cada interacción, palabra y gesto, contribuyen de manera significativa, a la construcción del mundo del niño. Es en este ambiente donde se desarrollan las bases de su bienestar físico, su capacidad cognitiva, sus habilidades emocionales y su manera de relacionarse con los demás.
    
    p.mb-4 Ante esto, surgen interrogantes fundamentales: 

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-7.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold ¿Cómo se puede favorecer este proceso en el hogar? 

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-7.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold ¿Qué estrategias pueden implementar las familias para fortalecer su rol en la estimulación temprana? 
    
    p.mb-4 Exploremos estas y otras cuestiones esenciales para comprender el impacto de la familia en el desarrollo infantil. ¡Es momento de descubrirlo!

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Ámbito físico
              p La familia es responsable de garantizar condiciones óptimas para el crecimiento saludable del niño. La alimentación balanceada, el descanso adecuado y la oportunidad de movimiento y exploración, son fundamentales para fortalecer su desarrollo motor y prevenir dificultades en etapas posteriores. Un ambiente familiar que fomente hábitos saludables, como el juego al aire libre o una alimentación equilibrada, tiene un impacto directo en su bienestar físico y su energía para enfrentar nuevos aprendizajes.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Punto de vista cognitivo
              p El hogar es el primer espacio en el que se despierta la curiosidad y se desarrollan habilidades esenciales para el aprendizaje (Suárez, 2018). La manera en que los cuidadores interactúan con el niño, le hablan, le leen o le permiten explorar su entorno, influye en la construcción de su pensamiento y en el desarrollo de habilidades como la resolución de problemas, la creatividad y la memoria. Un entorno rico en estímulos, que favorezca el juego, la exploración y la autonomía, potencia el aprendizaje de manera natural y significativa.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Plano emocional
              p En la familia el niño aprende a identificar y gestionar sus emociones. La calidad del vínculo afectivo con los cuidadores es determinante para el desarrollo de la autoestima, la seguridad y la confianza en sí mismo. Un ambiente en el que se expresen el amor, la comprensión y el respeto permitirá que el niño desarrolle una regulación emocional saludable y establezca relaciones interpersonales positivas en el futuro.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Aspecto social
              p La familia es la primera escuela de convivencia. A través de la interacción con padres, hermanos y otros miembros del hogar, el niño aprende normas, valores y habilidades de comunicación que definirán la manera en que se relacionarán con los demás. La forma en que se resuelven los conflictos, se fomenta la empatía y se establecen límites en el hogar, influye en su capacidad para integrarse en otros entornos, como la escuela o la comunidad.
    
    .bg-full-width.bg-color-11.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/12.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Si bien cada familia es única y enfrenta sus propios desafíos, su impacto en el desarrollo infantil es innegable. Por ello, es fundamental reflexionar sobre la importancia de crear entornos familiares enriquecedores, donde el amor, la comunicación y el respeto sean pilares esenciales para el crecimiento de los niños. Fortalecer estos aspectos en la vida cotidiana permite transformar cada experiencia en una oportunidad de aprendizaje y desarrollo.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left") En este sentido, resulta clave profundizar en el "Vínculo afectivo y su impacto en el desarrollo del niño", explorando cómo las relaciones tempranas influyen en su crecimiento emocional, social y cognitivo. 
    
        .bg-color-4.p-4(data-aos="fade-left")
          p.mb-0 Comprender la importancia de estos lazos no solo ayuda a fortalecer la conexión entre padres e hijos, sino que también contribuye a generar un ambiente seguro y estimulante, que favorezca su desarrollo integral.


    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Vínculo afectivo y su impacto en el desarrollo del niño
    
    p.mb-4 El vínculo afectivo en la infancia juega un papel determinante en el desarrollo emocional, social y cognitivo del niño, influyendo en su capacidad para regular emociones, establecer relaciones y desarrollar confianza en sí mismo.

    .bg-full-width.bg-color-1.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Vínculo afectivo y su impacto en el desarrollo del niño
            p.mb-4(data-aos="fade-right") En el PDF <b>Vínculo afectivo y su impacto en el desarrollo del niño</b>, se abordan los fundamentos del apego y su importancia en las primeras etapas de vida, explorando cómo las interacciones con los cuidadores modelan la estabilidad emocional del niño y su percepción del mundo. A través de este contenido, se analizan estrategias para fortalecer el lazo afectivo y su impacto en la construcción de una autoestima saludable y en la regulación emocional a lo largo del desarrollo infantil.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Vínculo afectivo y su impacto en el desarrollo del niño.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/14.png', alt='')

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Estrategias de participación familiar en la estimulación temprana
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/15.svg", data-aos="zoom-in")
      .col-lg-8
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 ¿Cuál es el impacto que tiene el hogar en el desarrollo infantil? 
              p.mb-0 Más allá de ser un simple espacio de convivencia, representa el primer escenario de aprendizaje, donde cada experiencia, cada interacción y cada rutina moldean las habilidades cognitivas, emocionales y sociales del niño. Desde la manera en que se le habla hasta la forma en que se estructura el día, todo influye en su crecimiento y en la adquisición de nuevas competencias.
        p(data-aos="fade-left") En este sentido, la estimulación temprana no depende únicamente de programas educativos o intervenciones especializadas. Por el contrario, el hogar ofrece innumerables oportunidades para fortalecer el desarrollo infantil, de manera natural. Las actividades diarias, lejos de ser acciones mecánicas, pueden convertirse en estrategias efectivas de aprendizaje, si se llevan a cabo con intención y consciencia. Ampliemos la información:
    
    TabsC.color-acento-contenido
      .tabs-content.border.px-4.p-md-5.py-3(titulo="El lenguaje" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.mb-3.mb-lg-0
            h4 El lenguaje
            p Rodríguez, y Muñoz (2017), afirman que una de las formas más sencillas y efectivas de estimular el desarrollo infantil en casa, es a través del lenguaje. Hablar constantemente con el niño, describir lo que sucede a su alrededor y formular preguntas abiertas, favorece la adquisición de vocabulario y la comprensión del mundo. Algo tan cotidiano como narrar los pasos para vestirse o preparar los alimentos, puede convertirse en una experiencia de aprendizaje significativa.
    
          .col-md-8.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/17.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="El juego" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.mb-3.mb-lg-0
            h4 El juego
            p También desempeña un papel fundamental en este proceso. A través del juego libre o dirigido, los niños exploran, experimentan y desarrollan habilidades esenciales para su crecimiento. Jugar con bloques fortalece la coordinación y el pensamiento lógico, mientras que los juegos de roles estimulan la imaginación y las habilidades sociales. Cada momento de juego es una oportunidad para aprender de manera divertida y espontánea.
    
          .col-md-8.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/18.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Las rutinas diarias" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.mb-3.mb-lg-0
            h4 Las rutinas diarias
            p Pueden aprovecharse para fomentar la autonomía y la toma de decisiones. Actividades como vestirse solo, recoger los juguetes o ayudar en pequeñas tareas del hogar, permiten que el niño desarrolle confianza en sí mismo y adquiera hábitos de responsabilidad. Del mismo modo, la lectura en familia es una estrategia invaluable, puesto que no solo fortalece el vínculo afectivo, sino que también estimula la creatividad, la concentración y la comprensión del lenguaje.
    
          .col-md-8.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/19.png', alt='', style="width: 100%;")
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="La exploración sensorial" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.mb-3.mb-lg-0
            h4 La exploración sensorial
            p Otro aspecto clave en la estimulación temprana, es la exploración sensorial. A través de materiales sencillos como telas de diferentes texturas, recipientes con semillas o pinturas con dedos, el niño puede desarrollar su percepción táctil y su capacidad de exploración. Estas experiencias enriquecen su desarrollo sensorial y favorecen la conexión con su entorno.
    
          .col-md-8.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/20.png', alt='', style="width: 100%;")

    div.bg-color-6.mb-5.p-4
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/tema1/21.svg", style="max-width: 90px").mx-auto
        .col-lg.text-white
          p.mb-0 En definitiva, cada acción dentro del hogar tiene el potencial de convertirse en un recurso educativo si se aborda desde la intención y la conciencia. La participación familiar en la estimulación temprana no solo contribuye al desarrollo integral del niño, sino que también fortalece los lazos afectivos y genera un ambiente propicio para el aprendizaje. La clave está en comprender que no se necesitan estrategias complejas, sino en aprovechar lo cotidiano para potenciar su crecimiento. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.bg-h85-5
        div 
          p Así pues, cabe preguntarse: 
          .row.justify-content-center.align-items-center
            .col-lg-8(data-aos="fade-left").order-2
              h5.mt-5 ¿qué pequeños cambios podrían implementarse en el hogar para enriquecer la estimulación temprana desde hoy? 
            .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
              img.img-fluid(src='@/assets/curso/tema1/22.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.align-items-center.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/23.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="La rutina diaria") 
            p La rutina diaria, marcada por las responsabilidades del trabajo, el hogar y otras ocupaciones, puede hacer que se confunda la cantidad de tiempo que se pasa con un niño, con la calidad de ese tiempo. No obstante, más allá de la presencia física, lo verdaderamente importante es la forma en que se interactúa con él, pues es a través de estos momentos significativos que se construyen aprendizajes valiosos y vínculos afectivos sólidos.
          div(numero="2" titulo="El tiempo de calidad") 
            p Este tiempo no se mide en horas, sino en la atención, el afecto y la conexión emocional que se brinda en cada interacción. Un momento breve, pero significativo, puede marcar la diferencia en el desarrollo infantil. Cuando un niño se siente escuchado, valorado y atendido, fortalece su seguridad emocional, su autoestima y su capacidad para relacionarse con los demás.
            p Es común pensar que compartir tiempo de calidad implica planificar actividades complejas o disponer de largos periodos libres. Sin embargo, pequeños gestos cotidianos pueden convertirse en experiencias enriquecedoras. Mirarlo a los ojos mientras se le habla, responder con interés a sus preguntas, escuchar sus historias con atención y compartir momentos de juego sin distracciones, crean un ambiente propicio para su desarrollo integral.
          div(numero="3" titulo="La presencia física sin verdadera conexión") 
            p Uno de los errores más frecuentes en la interacción con los niños, es la presencia física sin verdadera conexión. Estar en la misma habitación mientras se revisa el teléfono o se realizan otras tareas, puede dar la impresión de compañía, pero no satisface la necesidad de vínculo afectivo que el niño requiere. En cambio, dedicar unos minutos exclusivos a una conversación, un abrazo o una actividad compartida, refuerza la relación y estimula su desarrollo emocional.
          div(numero="4" titulo="El juego, la lectura y la exploración conjunta ") 
            p Estas son estrategias claves para aprovechar el tiempo de calidad. Leer un cuento antes de dormir, construir una torre con bloques o cantar una canción juntos, no solo fortalecen el lazo afectivo, sino que también potencian el desarrollo del lenguaje, la creatividad y la inteligencia emocional. Además, estas interacciones fomentan la confianza y la seguridad en el niño, brindándole la tranquilidad de saber que se le considera importante y es valorado.
    
    p En definitiva, la participación familiar en la estimulación temprana no se basa en la cantidad de tiempo que se comparte con el niño, sino en la calidad de esos momentos. Lo esencial es estar presente de manera consciente, disfrutando cada interacción y convirtiendo lo cotidiano en una oportunidad de aprendizaje y conexión.
    p.mb-4 Ahora bien:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/24.png")
            .col-lg-7
              h5 ¿Cómo se puede transformar un momento del día en una experiencia de tiempo de calidad? 
              p La respuesta está en la intención y el compromiso de hacer de cada instante compartido, un espacio de afecto y crecimiento. Esto implica no solo la presencia consciente de los cuidadores principales, sino también la participación de toda la familia, en la estimulación temprana del niño.
              p En este sentido, cuando se habla de estimulación temprana, es común pensar en la relación directa entre el niño y sus padres o cuidadores principales. Sin embargo, no se debe pasar por alto el papel fundamental que desempeñan otros miembros de la familia. Abuelos, hermanos, tíos y demás parientes también pueden aportar significativamente a su desarrollo, enriqueciendo sus experiencias y fortaleciendo los lazos afectivos.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/25.png")
            .col-lg-7
              h5 ¿Cómo lograr que todos participen activamente en este proceso? 
              p La clave está en generar espacios de interacción en los que cada integrante de la familia pueda contribuir con pequeñas acciones que, en conjunto, potencian el aprendizaje y el bienestar del niño.
              p Involucrar a la familia en la estimulación temprana no significa imponer tareas adicionales o cambiar drásticamente la rutina. Se trata más bien de integrar pequeñas acciones cotidianas que permitan fortalecer el desarrollo infantil de manera natural y significativa. Cuantas más personas participen en la educación y crecimiento del niño, más variadas serán sus experiencias y aprendizajes.
    
    p.mb-4 Conozcamos las estrategias para una participación activa:

    .bg-full-width.bg-fondo-3
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/26.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="11%" y="21.5%" numero="+")
                h5 Convertir la estimulación en un hábito familiar
                p El aprendizaje no debe verse como una actividad aislada, sino como parte de la dinámica diaria del hogar. Establecer rutinas donde cada miembro de la familia tenga un rol, como leer cuentos antes de dormir, cantar canciones en grupo o jugar juntos, fortalece los lazos afectivos y fomenta el desarrollo del niño en un entorno enriquecedor.
    
              .bg-color-white.box-shadow.p-3(x="30%" y="77%" numero="+")
                h5 Aprovechar el conocimiento y las habilidades de cada miembro
                p Cada integrante de la familia tiene algo valioso que aportar. Los abuelos pueden contar historias que estimulen el lenguaje y la memoria; los hermanos mayores pueden ayudar en juegos que favorezcan la socialización y el aprendizaje de normas; los tíos pueden compartir actividades creativas o deportivas. La clave está en encontrar formas de involucrar a cada uno según sus fortalezas y disponibilidad.
    
              .bg-color-white.box-shadow.p-3(x="49%" y="22%" numero="+")
                h5 Incluir la estimulación en actividades cotidianas
                p No es necesario diseñar espacios específicos para el aprendizaje. La estimulación puede integrarse en actividades como cocinar, hacer las compras o pasear. Contar los ingredientes mientras se prepara la comida, identificar los colores de la ropa al doblarla o cantar una canción mientras se camina por el parque son ejemplos de cómo transformar lo cotidiano en una oportunidad de aprendizaje.
    
              .bg-color-white.box-shadow.p-3(x="68%" y="77%" numero="+")
                h5 Crear momentos de juego compartido
                p El juego es una de las herramientas más poderosas en la estimulación temprana. Incluir a toda la familia en juegos de mesa, actividades al aire libre o juegos simbólicos como "la casita" o "el supermercado" permite al niño explorar, comunicarse y desarrollar habilidades socioemocionales mientras se divierte.
    
              .bg-color-white.box-shadow.p-3(x="88%" y="21%" numero="+")
                h5 Fomentar el diálogo y la expresión emocional
                p Una familia que se comunica abiertamente y valida las emociones del niño, contribuye a su bienestar emocional. Es importante generar espacios donde todos puedan expresar sus sentimientos, escuchar con atención y reforzar la importancia del respeto y la empatía.

    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/27.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Cuando la familia se involucra activamente en la estimulación temprana, el niño se beneficia de un entorno enriquecido con experiencias significativas y afecto. Más que la cantidad de tiempo dedicado, lo que realmente marca la diferencia es la calidad de las interacciones y la intención con la que se participa en su desarrollo.
    
    .row.justify-content-center.align-items-center
      .col-lg-10.bg-h85-1
        div 
          .row.justify-content-center.align-items-center
            .col-lg-8(data-aos="fade-left").order-2
              p.mt-5 Entonces, <b>¿cómo puede cada miembro de la familia contribuir a la estimulación temprana del niño?</b> 
            .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
              img.img-fluid(src='@/assets/curso/tema1/28.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.bg-color-8
        div.p-5
          p.mb-0 La respuesta radica en comprender que cada gesto, cada palabra y cada experiencia compartida dejan una huella profunda en su crecimiento. No se trata de momentos aislados, sino de una construcción constante en la que cada integrante puede aportar desde su rol, fortaleciendo el aprendizaje y el bienestar del niño de manera integral.
    
    .row.mb-5
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/tema1/29.png", data-aos="zoom-in")
      .col-lg-7.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Por ello, tras explorar el tema <b>"Estrategias de participación familiar en la estimulación temprana"</b>, resulta fundamental dar continuidad con <b>"Comunicación efectiva entre padres y educadores"</b>. Este aspecto es clave para fortalecer el desarrollo infantil, porque permite alinear esfuerzos, compartir estrategias y construir un entorno de apoyo que favorezca el crecimiento del niño, en todas sus dimensiones. Una comunicación clara y colaborativa entre la familia y la escuela, es la base para un acompañamiento más efectivo, garantizando que el niño reciba el respaldo necesario para desarrollarse plenamente.
   
    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Comunicación efectiva entre padres y educadores
    
    p.mb-4 La comunicación entre padres y educadores es un pilar fundamental en la educación temprana, ya que permite establecer una relación de colaboración que favorece el desarrollo integral del niño.

    .bg-full-width.bg-color-1.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Comunicación efectiva entre padres y educadores
            p.mb-4(data-aos="fade-right") En el PDF <b>Comunicación efectiva entre padres y educadores</b>, se analizan estrategias clave para fortalecer la alianza entre la escuela y la familia, promoviendo un diálogo abierto, la participación activa en el entorno escolar y la coherencia en la transmisión de valores. A través de este contenido, se exploran herramientas prácticas para mejorar la comunicación y garantizar un acompañamiento efectivo en el proceso educativo, creando un ambiente de aprendizaje enriquecedor y afectivo.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Comunicación efectiva entre padres y educadores.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/30.png', alt='')




    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/49152" target="_blank" rel="noopener noreferrer") Lafuente Benaches, M. J. & Cantero López, M. J. (2016). Vinculaciones afectivas: apego, amistad y amor: ( ed.). Difusora Larousse - Ediciones Pirámide. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/115454" target="_blank" rel="noopener noreferrer") González Vázquez, Ó. (2014). Familia y escuela, escuela y familia: guía para que padres y docentes nos entendamos: ( ed.). Editorial Desclée de Brouwer.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/pdf/3606/360635574006.pdf " target="_blank" rel="noopener noreferrer") Perdomo-González, E. (2011). La estimulación temprana en el desarrollo creativo de los niños de la primera infancia. Varona, (52), 29-34.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dialnet.unirioja.es/servlet/articulo?codigo=4929410" target="_blank" rel="noopener noreferrer") Contreras, B. P., & Arrázola, E. T. (2013). Vínculo afectivo en la relación parento-filial como factor de calidad de vida. Revista Tendencias & Retos, 18(1), 17-32.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistavitalia.org/index.php/vitalia/article/view/167 " target="_blank" rel="noopener noreferrer") Delgado, G. D., Medrano, C. B. C., & Berumen, F. L. R. (2024). Comunicación familiar y Desarrollo Infantil en Comunidades Rurales. Revista Científica de Salud y Desarrollo Humano, 5(2), 674-693.   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blog.ecagrupoeducativo.mx/greenland/la-importancia-de-la-familia-en-el-desarrollo-infantil " target="_blank" rel="noopener noreferrer") Blog: La importancia de la familia en el desarrollo infantil. (s.f.).  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://euroinnova.com/blog/revista-educacion-espana/vinculo-afectivo-primera-infancia " target="_blank" rel="noopener noreferrer") La importancia del vínculo afectivo en la primera infancia. (s.f.). Euroinnova International Online Education. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.kinderup.es/blog/post/la-importancia-de-la-participacion-de-la-familia-en-la-educacion-temprana " target="_blank" rel="noopener noreferrer") Fortaleciendo la Educación Temprana y la Participación Familiar. (s.f.). AGENDA DIGITAL - KINDERUP - App Escuela Infantil. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=noQgclwkd7E " target="_blank" rel="noopener noreferrer") Colegios La Salle. (2019, 17 de diciembre). Tema: El Rol de la familia en el desarrollo de la autonomía. [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=T3PtSHKJbbw " target="_blank" rel="noopener noreferrer") Programas Telemedellín. (2017, 20 de septiembre). Importancia de la familia en el desarrollo de los niños [Paso a Paso Tv] Telemedellín. [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=r0WpibVYKCY" target="_blank" rel="noopener noreferrer") Misiones Online. (2020, 19 de febrero). La importancia de la atención temprana integral para el buen desarrollo de la persona. [Video]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
