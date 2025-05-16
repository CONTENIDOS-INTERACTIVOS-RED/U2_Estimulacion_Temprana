<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Programas de estimulación temprana'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-h85-3.mb-5
      .px-4.px-md-5.py-4
        div 
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/1.svg", style="max-width: 295px").mx-auto
            .col-lg.text-white
              p Después de comprender la importancia de los entornos de aprendizaje, es momento de profundizar en los programas de estimulación temprana, herramientas claves para potenciar el desarrollo integral de los niños, desde sus primeros años. 
              h5 ¡Descubramos juntos cómo brindar experiencias enriquecedoras y significativas en la infancia! 

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Un camino hacia el desarrollo infantil
    
    p.mb-4 Los primeros años de vida son fundamentales para el desarrollo físico, cognitivo, emocional y social de los niños, ya que en esta etapa se establecen las bases para su aprendizaje y bienestar futuro.

    .bg-full-width.bg-color-1.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Un camino hacia el desarrollo infantil
            p.mb-4(data-aos="fade-right") En el PDF <b>Un camino hacia el desarrollo infantil</b>, se exploran los principios y estrategias de los programas de estimulación temprana, destacando su impacto en el desarrollo integral de la infancia. A través de este contenido, se analizan enfoques basados en la evidencia científica y experiencias exitosas de intervención, con el objetivo de promover entornos enriquecedores que potencien las habilidades de los niños y les brinden oportunidades para alcanzar su máximo potencial.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_7.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Un camino hacia el desarrollo infantil.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/2.png', alt='')
    
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Estrategias para el desarrollo infantil
    
    .row.justify-content-center.align-items-center
      .col-lg-10.bg-h85-1
        div 
          .row.justify-content-center.align-items-center
            .col-lg-8(data-aos="fade-left").order-2
              p.mt-lg-5.mb-0 <b>¿Ha considerado alguna vez la importancia de garantizar que todos los niños y niñas en Colombia reciban oportunidades equitativas para su desarrollo desde sus primeros años de vida?</b> La estimulación temprana no es solo un complemento en la educación infantil, sino una estrategia clave para potenciar el desarrollo físico, cognitivo, social y emocional de los menores, especialmente en sus primeros cinco años de vida. 
            .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
              img.img-fluid(src='@/assets/curso/tema3/3.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.bg-color-8
        div.p-5
          p.mb-0 En Colombia, el Estado ha reconocido la relevancia de la estimulación temprana y ha diseñado diversas iniciativas que buscan fortalecer la atención a la primera infancia. Estas estrategias, además de garantizar el derecho de los niños a un desarrollo integral, tienen como objetivo reducir brechas de desigualdad y fomentar entornos enriquecidos para la infancia.
    
    p.mb-4 Los principales programas de estimulación temprana en Colombia, son:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Estrategia nacional "De Cero a Siempre"
              p Este programa es la política pública más importante del país en materia de primera infancia. Creada bajo el marco de la <b>Ley 1804 del 2016</b>, conocida como la Ley de Cero a Siempre, esta estrategia intersectorial busca garantizar el desarrollo integral de los niños y las niñas desde la gestación, hasta los seis años. A través de la articulación entre sectores como educación, salud, nutrición y protección infantil, se asegura que los menores reciban atención integral.
              p Dentro de esta estrategia, los Centros de Desarrollo Infantil (CDI) y los Hogares Comunitarios del Instituto Colombiano de Bienestar Familiar (ICBF) juegan un papel fundamental en la estimulación temprana, proporcionando entornos seguros y pedagógicamente enriquecidos para los niños y sus familias.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Programa "Mis Manos te Enseñan"
              p Este programa, liderado por el ICBF, se enfoca en el fortalecimiento de la educación inicial en el hogar. Su principal objetivo es dotar a las familias y cuidadores con herramientas pedagógicas que les permitan estimular el desarrollo de los niños a través de actividades cotidianas. Se promueve la participación activa de los padres en el aprendizaje temprano, brindando formación en prácticas de crianza afectiva y estrategias de estimulación sensorial, motriz y cognitiva.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Lineamientos pedagógicos y curriculares para la educación inicial
              p El <b>Ministerio de Educación Nacional (MEN)</b> ha desarrollado lineamientos específicos que orientan las prácticas educativas en la primera infancia. Estos documentos establecen principios y estrategias que permiten a educadores y cuidadores implementar programas de estimulación temprana basados en el juego, la exploración y la interacción con el entorno.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Plan Decenal de Salud Pública
              p Desde el sector salud, el <b>Plan Decenal de Salud Pública</b> ha incorporado estrategias de estimulación temprana en sus acciones dirigidas a la primera infancia. Estas incluyen el seguimiento del desarrollo infantil en consultas de crecimiento y desarrollo, la promoción de la lactancia materna como base para la salud y nutrición del niño, y la detección temprana de alteraciones en el neurodesarrollo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Programas regionales y comunitarios de estimulación temprana
              p A nivel regional y municipal, distintas alcaldías y gobernaciones han desarrollado programas específicos que buscan adaptar la estimulación temprana a las necesidades de cada comunidad. Ejemplos de ello son los programas de educación inicial en zonas rurales y en comunidades indígenas, donde se integran saberes ancestrales y metodologías culturalmente pertinentes.
              p Los programas de estimulación temprana en Colombia, han logrado avances significativos en la cobertura y calidad de la atención a la primera infancia. Sin embargo, aún existen desafíos importantes, como la necesidad de fortalecer la formación de los agentes educativos, mejorar la infraestructura de los espacios destinados a la educación inicial y garantizar una mayor cobertura en poblaciones vulnerables.
    
    p.mb-4 Además, la articulación entre las familias y las instituciones, sigue siendo un aspecto clave para el éxito de estos programas. La participación activa de los padres y cuidadores, no solo refuerza los aprendizajes en el hogar, sino que también contribuye al bienestar emocional y social del niño.

    .bg-full-width.bg-color-2
      .px-5
        div 
          .row.align-items-center
            .col-lg-5.mb-3.mb-lg-0
              img(src="@/assets/curso/tema3/9.svg", data-aos="zoom-in").mx-auto
            .col-lg-7
              p Los programas de estimulación temprana en Colombia han sido una apuesta fundamental para garantizar el desarrollo integral de la primera infancia. A través de políticas intersectoriales, estrategias comunitarias y el compromiso de las familias, se ha avanzado en la consolidación de un modelo de atención que reconoce la importancia de los primeros años de vida. Sin embargo, queda el reto de seguir mejorando estas iniciativas y ampliar su alcance, asegurando que cada niño y niña tenga acceso a entornos enriquecidos que potencien sus capacidades.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 La pregunta final es: <b>¿cómo se puede seguir fortaleciendo la estimulación temprana en el país para que llegue a más niños y niñas, especialmente aquellos en situación de vulnerabilidad?</b> La reflexión queda abierta, pues garantizar el bienestar de la primera infancia es una responsabilidad compartida entre el Estado, la sociedad y las familias.
    
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Políticas y normativas en estimulación temprana en Colombia
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        h5 ¿Cómo ha sido abordada la estimulación temprana en las políticas públicas del país?
        p(data-aos="fade-left") El desarrollo infantil temprano ha sido reconocido como una prioridad en la política social colombiana. La evidencia científica ha demostrado que los primeros años de vida son cruciales para la formación de habilidades cognitivas, emocionales, sociales y físicas. En este contexto, el Estado ha diseñado e implementado diversas políticas orientadas a garantizar el acceso a programas de estimulación temprana, con el propósito de brindar a todos los niños y niñas, una atención integral desde la gestación.
    
        .bg-color-5.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Uno de los pilares fundamentales en este esfuerzo es la Ley 1804 del 2016, conocida como la Ley de Cero a Siempre, que establece la política pública para la primera infancia como un asunto de interés nacional. Su objetivo principal es garantizar el ejercicio pleno de los derechos de los niños y las niñas desde la gestación hasta los cinco años, promoviendo su desarrollo integral a través de estrategias en educación inicial, nutrición, salud, protección y fortalecimiento de entornos familiares y comunitarios.

    .row.justify-content-center.align-items-center
      .col-lg-10.bg-h85-1
        div 
          .row.justify-content-center.align-items-center
            .col-lg-8(data-aos="fade-left").order-2
              p.mt-lg-5.mb-0 El Instituto Colombiano de Bienestar Familiar (ICBF), lidera diversas iniciativas para la estimulación temprana, destacándose el programa "Mis Manos te Enseñan", diseñado para brindar herramientas pedagógicas a familias y cuidadores, fomentando el aprendizaje y el desarrollo en el hogar. 
            .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
              img.img-fluid(src='@/assets/curso/tema3/12.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.bg-color-8
        div.px-5
          .row.justify-content-center.align-items-center
            .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
              p.mb-0 De manera complementaria, el Ministerio de Educación Nacional, ha desarrollado los Lineamientos Pedagógicos y Curriculares para la Educación Inicial, que proporcionan directrices para la implementación de estrategias educativas centradas en la estimulación temprana, dentro de instituciones educativas y centros de desarrollo infantil. 
            .col-lg-4(data-aos="zoom-in")
              img.img-fluid(src='@/assets/curso/tema3/13.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/14.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white En el ámbito de la salud, el Plan Decenal de Salud Pública, ha integrado acciones específicas para la atención de la primera infancia, promoviendo programas de seguimiento del desarrollo infantil y garantizando el acceso a servicios de salud materno-infantil. Por su parte, el Plan Nacional de Desarrollo, ha priorizado la inversión en educación inicial y programas de estimulación temprana, con especial énfasis en comunidades en situación de vulnerabilidad.
    
    p.mb-4 El marco normativo colombiano, ha sido clave para estructurar y consolidar las políticas de estimulación temprana. Algunas de las regulaciones más relevantes incluyen:

    .row.align-items-center.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/15.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Ley 1804 del 2016 – Ley de Cero a Siempre") Establece la política pública para la primera infancia con un enfoque intersectorial, integrando acciones en educación, salud, nutrición y protección infantil.
          p(numero="2" titulo="Código de Infancia y Adolescencia (Ley 1098 del 2006)") Protege los derechos de los niños y las niñas, priorizando la atención integral en la primera infancia y estableciendo responsabilidades institucionales en la garantía de la estimulación temprana.
          p(numero="3" titulo="Ley 115 de 1994 – Ley General de Educación") Reconoce la educación inicial como un derecho fundamental y define su organización dentro del sistema educativo.
          p(numero="4" titulo="Decreto 1860 de 1994") Reglamenta la educación formal e incluye lineamientos sobre educación inicial y estrategias de estimulación temprana en instituciones educativas.
          p(numero="3" titulo="Decreto 1411 de 1978") Establece los principios y objetivos de la educación preescolar, resaltando la importancia del desarrollo físico, emocional, cognitivo y social en la primera infancia.
    
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/16.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="6" titulo="Lineamientos Pedagógicos y Curriculares para la Educación Inicial (Ministerio de Educación Nacional)") Orientan la implementación de programas de estimulación temprana en instituciones y hogares comunitarios.
          p(numero="7" titulo="Resolución 3280 del 2018 - Ruta Integral de Atenciones para la Primera Infancia") Define los servicios esenciales que deben recibir los niños y las niñas en sus primeros años, abarcando salud, nutrición, protección y educación.
          p(numero="8" titulo="Plan Decenal de Salud Pública 2012-2021") Incorpora estrategias de atención a la primera infancia, promoviendo un enfoque preventivo y de promoción del desarrollo infantil.
          p(numero="9" titulo="Conpes 109 del 2007 y Conpes 162 del 2013") Establecen lineamientos de inversión y estrategias para la atención integral de la primera infancia, fortaleciendo el acceso a programas de estimulación temprana.
          p(numero="10" titulo="Política Pública de Primera Infancia 'De Cero a Siempre'") Orienta las acciones del Estado en favor del desarrollo infantil temprano, promoviendo la articulación de diferentes sectores para garantizar el bienestar de los niños y niñas en sus primeros años de vida.

    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Evaluación y mejora de programas de estimulación temprana
    
    p.mb-4 La evaluación de los programas de estimulación temprana es fundamental para garantizar su efectividad y adaptar sus estrategias a las necesidades de los niños y sus familias.

    .bg-full-width.bg-color-1.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Evaluación y mejora de programas de estimulación temprana
            p.mb-4(data-aos="fade-right") En el PDF <b>Evaluación y mejora de programas de estimulación temprana</b>, se analizan los principales métodos para medir el impacto de estas intervenciones, considerando indicadores clave como el desarrollo cognitivo, motriz, emocional y social. A través de este contenido, se presentan herramientas de evaluación, estrategias de seguimiento y enfoques de mejora que permiten optimizar la calidad de los programas y asegurar que cada niño reciba la atención y el apoyo adecuados para potenciar su crecimiento integral.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_8.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Evaluación y mejora de programas de estimulación temprana.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/17.png', alt='')
    









    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://recimundo.com/index.php/es/article/view/901 " target="_blank" rel="noopener noreferrer") Acebo, M. E. C., & Poveda, A. G. C. (2020). Aspectos fundamentales de los programas de estimulación temprana y sus efectos en el desarrollo de los niños de 0 a 6 años. RECIMUNDO, 4(1), 499-520. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistas.ecr.edu.co/index.php/RCR/article/view/68" target="_blank" rel="noopener noreferrer") Vásquez, M. M. P., Pérez, Y. D. C. Á., Benítez, A. M. G., Blanco, M. L. H., Tuirán, P. J. B., & Cuello, J. R. F. (2019). Influencia de un programa de estimulación temprana en el desarrollo lingüístico de niños de Sincelejo. Revista Colombiana de Rehabilitación, 18(1), 28-41. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blogs.iadb.org/desarrollo-infantil/es/los-retos-de-la-estrategia-de-cero-a-siempre-en-colombia/ " target="_blank" rel="noopener noreferrer") Los retos de la estrategia “De cero a siempre” en Colombia - Primeros Pasos. (s.f.). Primeros Pasos. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://psicoabaco.es/buenas-practicas-en-atencion-temprana-2/ " target="_blank" rel="noopener noreferrer") BUENAS PRÁCTICAS EN ATENCIÓN TEMPRANA - Psicoabaco. (s.f.). Psicoabaco - Psicología infantil - Alcalá de Guadaíra. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blogs.iadb.org/desarrollo-infantil/es/indicadores/ " target="_blank" rel="noopener noreferrer") 3 indicadores estratégicos para medir el desarrollo infantil temprano - Primeros Pasos. (s.f.). Primeros Pasos. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=4Nc3XTZHmEU " target="_blank" rel="noopener noreferrer") AEIPI Asociación Española de Intervención en la Primera Infancia. (2021, 25 de enero). AEIPI - Transición Atención Temprana A Educación - Cristina Díaz. [Video]. YouTube.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=avUw_zPvUaI" target="_blank" rel="noopener noreferrer") Facultad de Psicología Universidad de la República. (2019, 10 de octubre). El trabajo intersectorial para la evaluación e intervención en primera infancia. [Video]. YouTube.  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es el papel fundamental de la familia en la estimulación temprana?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Brindar amor y seguridad, sin intervenir en el desarrollo del niño.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Depender exclusivamente de los profesionales de la educación y la salud.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Dejar que el niño explore sin intervención de los adultos.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Crear entornos ricos en estímulos para potenciar su desarrollo integral. ',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué características debe tener un entorno de aprendizaje adecuado en la estimulación temprana?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Ser rígido y estructurado para garantizar el aprendizaje.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Brindar seguridad, exploración y oportunidades de interacción. ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Exigir el cumplimiento de metas estrictas para los niños.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Evitar el contacto con el entorno para prevenir accidentes.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de los siguientes es un beneficio de la estimulación temprana en el hogar?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Favorece el desarrollo motor, cognitivo y socioemocional. ',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Retrasa el desarrollo de habilidades cognitivas.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Reduce la necesidad de interacción con los padres.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Limita la autonomía del niño al recibir demasiada ayuda.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué se debe considerar al seleccionar un programa de estimulación temprana?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Que sea universal y funcione igual para todos los niños.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Que solo se centre en el desarrollo cognitivo.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Que se adapte a las necesidades y características individuales del niño. ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Que dependa exclusivamente del trabajo de especialistas.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cómo pueden los padres fomentar un adecuado desarrollo en la primera infancia?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Brindando afecto, promoviendo la exploración y estableciendo rutinas. ',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Dejando que los niños aprendan por sí solos sin intervenir.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Utilizando únicamente herramientas tecnológicas para el aprendizaje.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Estimulando solo las habilidades académicas y dejando de lado las emocionales.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
