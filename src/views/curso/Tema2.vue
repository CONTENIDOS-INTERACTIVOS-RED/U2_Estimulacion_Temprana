<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Entornos de aprendizaje'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .row.justify-content-center.align-items-center
          .col-lg-12.bg-color-12
            div.p-5
              h5 ¿Cómo influye el entorno en el desarrollo de un niño?  
              p.mb-0 Cada espacio donde interactúa, juega y aprende, deja una huella en su crecimiento. Desde el hogar hasta la escuela, los entornos de aprendizaje no solo brindan conocimientos, sino que también estimulan la curiosidad, la creatividad y la exploración.
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-12.bg-color-1
            div 
              .row.justify-content-center.align-items-center
                .col-lg-8(data-aos="fade-left").order-2
                  p.mt-lg En esta oportunidad, exploraremos qué hace que un entorno sea verdaderamente enriquecedor para el desarrollo infantil y cómo se pueden potenciar los espacios cotidianos para favorecer el aprendizaje.
                .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                  img.img-fluid(src='@/assets/curso/tema2/1.svg', style="max-width:190px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
        h5 ¡Acompáñenos en este recorrido por los entornos de aprendizaje y descubramos juntos su impacto en la estimulación temprana! 
        
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Características de un entorno de aprendizaje enriquecedor
    
    h5.mb-4 ¿Cómo influye el entorno en el aprendizaje y el desarrollo infantil?

    .bg-color-13.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/3.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Desde los primeros años de vida, el ambiente en el que un niño crece y se desenvuelve tiene un impacto significativo en su desarrollo (Moreno, 2016). Pero, <b>¿qué hace que un entorno sea realmente enriquecedor?</b> No se trata solo de contar con materiales didácticos o juguetes educativos, sino de crear un espacio que estimule la curiosidad, el pensamiento crítico, la exploración y la interacción con el mundo. 
    
    p.mb-4 Según Jiménez, Feliz y Monge (2023), un entorno de aprendizaje enriquecedor es aquel que ofrece oportunidades constantes para el descubrimiento y la construcción del conocimiento. En este sentido, se compone de varios elementos fundamentales:


    .row.align-items-center.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/4.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Garantizar seguridad y bienestar") Proporcionando un espacio físico adecuado donde el niño pueda moverse con libertad, sin riesgos, pero con la posibilidad de explorar su entorno. La seguridad emocional también juega un papel clave, dado que un niño que se siente protegido y valorado, tendrá mayor confianza para experimentar, hacer preguntas y aprender de sus errores.
          p(numero="2" titulo="Variedad de estímulos") Marujo, Neto y de Fátima (2003), aseguran que un ambiente estimulante integra colores, texturas, sonidos y elementos interactivos que fomenten la exploración sensorial. No se trata de una sobrecarga de estímulos, sino de una disposición equilibrada de recursos que capten la atención y despierten el interés del niño. Asimismo, la flexibilidad en la disposición del espacio es importante. Áreas organizadas en función de diferentes actividades, como lectura, juego simbólico, exploración científica y expresión artística, permiten que el aprendizaje sea dinámico y adaptable a las necesidades e intereses del niño.
          p(numero="3" titulo="Las interacciones") Un entorno enriquecedor no solo debe centrarse en lo físico, sino también en las interacciones que allí se generan. Un ambiente donde se promueva el diálogo, la escucha activa y el respeto mutuo, refuerza la confianza y el desarrollo social y emocional del niño. En este sentido, la presencia de adultos que guíen, modelen comportamientos positivos y fomenten la autonomía, es crucial para que el aprendizaje sea significativo (Castro y Morales, 2015).
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.svg", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Así, un entorno de aprendizaje realmente enriquecedor no solo proporciona materiales y espacios adecuados, sino que también crea experiencias que estimulan la curiosidad, el pensamiento crítico y la construcción de relaciones afectivas. La clave está en integrar todos estos elementos, de manera armónica, para favorecer el desarrollo integral del niño. Entonces, <b>¿qué hace que un entorno de aprendizaje sea realmente enriquecedor?</b> 
    
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Al hablar del desarrollo infantil, no solo se debe considerar lo que el niño aprende, sino también el espacio en el que lo hace. Un entorno de aprendizaje enriquecedor no surge de manera espontánea; es el resultado de una planificación intencional que considera diversos factores claves, como la seguridad, la accesibilidad y la diversidad de estímulos. Cada uno de estos elementos desempeñan un papel esencial en la manera en que los niños exploran, interactúan y construyen conocimiento:
    
    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 La seguridad
              p La seguridad es la base de cualquier espacio destinado al aprendizaje. Un entorno seguro no solo protege físicamente al niño, evitando riesgos y accidentes, sino que también le brinda estabilidad emocional. Cuando un niño se siente seguro, se atreve a experimentar, probar nuevas ideas y asumir desafíos sin temor al fracaso. Esto implica contar con mobiliario adecuado, materiales no tóxicos y espacios organizados, de manera que fomenten la autonomía sin poner en peligro su bienestar (lahora,2016).
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 La accesibilidad
              p Es un aspecto fundamental que garantiza que todos los niños, independientemente de sus capacidades, puedan interactuar con su entorno de manera autónoma. Un espacio accesible permite que los materiales estén al alcance de los niños, que las zonas de juego y exploración sean inclusivas y que las actividades se adapten a las necesidades individuales de cada uno. La inclusión en el diseño del entorno no solo favorece el aprendizaje, sino que también promueve la equidad y la participación activa de todos los niños.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 La diversidad de estímulos
              p Es lo que convierte un espacio común en un entorno verdaderamente enriquecedor. Los colores, las texturas, los sonidos y las oportunidades de exploración sensorial, despiertan la curiosidad y fomentan el aprendizaje activo. La variedad de materiales y experiencias no solo mantiene el interés del niño, sino que también estimula su desarrollo cognitivo, emocional y social.
    
    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Finalmente, la diversidad de estímulos es lo que convierte un espacio común en un entorno verdaderamente enriquecedor. Los colores, las texturas, los sonidos y las oportunidades de exploración sensorial, despiertan la curiosidad y fomentan el aprendizaje activo. La variedad de materiales y experiencias no solo mantiene el interés del niño, sino que también estimula su desarrollo cognitivo, emocional y social. 
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-4.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Sin embargo, no se trata de saturar el espacio con estímulos, sino de seleccionar cuidadosamente aquellos elementos que promuevan nuevas conexiones y motiven la creatividad. Un entorno equilibrado y bien diseñado, permite que el niño explore, descubra y aprenda de manera significativa, adaptándose a sus necesidades y ritmos de desarrollo. 
        p(data-aos="fade-left") En este sentido, surge una pregunta clave: <b>¿de qué manera influye el entorno en el aprendizaje y el desarrollo de un niño?</b>
    
    .bg-full-width.bg-color-1.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Influencia del entorno en el aprendizaje y desarrollo de un niño
            p.mb-4(data-aos="fade-right") El entorno en el que se desarrolla un niño influye directamente en su aprendizaje, motivación y bienestar emocional, convirtiéndose en un factor clave para su crecimiento integral. En el PDF <b>Influencia del entorno en el aprendizaje y desarrollo de un niño</b>, se analiza cómo la disposición del espacio, los estímulos presentes y las oportunidades de exploración pueden potenciar sus habilidades cognitivas, sociales y emocionales. A través de este contenido, se presentan estrategias para diseñar entornos de aprendizaje enriquecedores, adaptados a las necesidades y características de cada etapa del desarrollo infantil, garantizando experiencias significativas que favorezcan su crecimiento y autonomía.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Influencia del entorno en el aprendizaje y desarrollo de un niño.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/12.svg', alt='')
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] El juego como herramienta fundamental en la estimulación temprana
        
    p.mb-4 El juego es una de las herramientas más efectivas para la estimulación temprana, ya que permite a los niños explorar, aprender y desarrollar habilidades de manera natural y significativa.

    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") El juego como herramienta fundamental en la estimulación temprana
            p.mb-4(data-aos="fade-right") En el PDF <b>El juego como herramienta fundamental en la estimulación temprana</b>, se analiza cómo diferentes tipos de juego influyen en el desarrollo cognitivo, motriz, social y emocional de los niños, y se presentan estrategias para integrar el juego en la rutina diaria como parte esencial del aprendizaje. A través de este contenido, se profundiza en la importancia del juego simbólico, constructivo y de reglas, destacando su papel en la construcción de la autonomía, la creatividad y la resolución de problemas en la primera infancia.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> El juego como herramienta fundamental en la estimulación temprana.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/13.png', alt='')

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Elementos claves para favorecer el desarrollo físico, cognitivo y emocional
        
    p.mb-4 El desarrollo infantil depende en gran medida del entorno y de los materiales que se ponen a disposición del niño para estimular sus habilidades y potenciar su aprendizaje.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Elementos claves para favorecer el desarrollo
            p.mb-4(data-aos="fade-right") En el PDF <b>Elementos clave para favorecer el desarrollo</b>, se explora la importancia de contar con recursos adecuados para fortalecer la motricidad, el pensamiento lógico, la creatividad y la regulación emocional. A través de este contenido, se presentan estrategias para seleccionar y utilizar materiales que promuevan la exploración, la autonomía y el juego como pilares fundamentales para el crecimiento integral de los niños en sus primeras etapas de vida.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Elementos claves para favorecer el desarrollo.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/14.svg', alt='')
    
    p.mb-4 Ahora, para conocer cómo integrar la música, el arte y la literatura, en la vida cotidiana, para favorecer el desarrollo infantil, lo invitamos a ver el siguiente video.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/Wq-J7QpuML0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Diseño de espacios que potencien la exploración, la creatividad y la autonomía
        
    p.mb-4 El diseño del espacio influye directamente en la manera en que los niños exploran, aprenden y desarrollan su autonomía, convirtiéndose en un factor clave para su crecimiento integral. 

    .bg-full-width.bg-color-1.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Diseño de espacios que potencien la exploración, la creatividad y la autonomía
            p.mb-4(data-aos="fade-right") En el PDF <b>Diseño de espacios</b>, se analizan estrategias para organizar entornos que fomenten la curiosidad, la independencia y la creatividad en los niños. A través de este contenido, se presentan claves para estructurar espacios accesibles, seguros y estimulantes, tanto en el hogar como en entornos educativos, permitiendo que el niño interactúe libremente con su entorno y fortalezca su confianza en sí mismo.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Diseño de espacios que potencien la exploración, la creatividad y la autonomía.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/15.png', alt='')
          
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/63141 " target="_blank" rel="noopener noreferrer") Marchena Gómez, M. R. & Garrido Landívar, J. (2009). El aula por dentro: cómo mejorar su gestión y organización: ( ed.). LA LEY Soluciones Legales S.A.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/69971 " target="_blank" rel="noopener noreferrer") Amar Amar, J. J. (2016). Desarrollo infantil y prácticas de cuidado: ( ed.). Universidad del Norte. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistas.ucatolicaluisamigo.edu.co/index.php/CYA/article/view/3738 " target="_blank" rel="noopener noreferrer") Montiel, L. T. A., Valencia, M. V. G., Arrieta, J. M. O., Restrepo, M. D. P. V., & Cardona, L. F. V. (2020). La lúdica como mediadora del aprendizaje para el desarrollo integral de los niños de la primera infancia. Ciencia y Academia, (1), 96-104. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://editorialscientificfuture.com/index.php/rti/article/view/57 " target="_blank" rel="noopener noreferrer") Cevallos, P. A. E., & Arteaga-Alcívar, Y. (2023). Recreación y juego en la educación preescolar. Revista Tecnopedagogía e Innovación, 2(2), 65-80. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repositorio.umariana.edu.co/handle/20.500.14112/21889 " target="_blank" rel="noopener noreferrer") López Erazo, J. M., & Zambrano Ojeda, J. C. (2008). EFECTOS DEL JUEGO DE ROL EN LOS COMPONENTES SENSORIOMOTOR Y PSICOSOCIAL DE NIÑOS VULNERABLES EN EDADES DE 4 A 5 AÑOS EN EL PROYECTO NIDOS NUTRIR EN LA CIUDAD DE SAN JUAN DE PASTO. AÑO 2008. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://uniscopio.com/blog/ambientes-aprendizaje/ " target="_blank" rel="noopener noreferrer") Ambientes de Aprendizaje ⇨ Tipos, Organización y Características. (s.f.). Uniscopio. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blogs.iadb.org/desarrollo-infantil/es/5-maneras-de-mejorar-el-aprendizaje-de-los-ninos/ " target="_blank" rel="noopener noreferrer") 5 maneras de mejorar el aprendizaje de los niños. (s.f.). Primeros Pasos.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://culturadeinfancia.com/el-ambiente-como-tercer-educador/ " target="_blank" rel="noopener noreferrer") El ambiente como tercer educador - Cultura de Infancia. (s.f.). Cultura de Infancia. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=B-NHohUF91U " target="_blank" rel="noopener noreferrer") Aula de Juego. (2018, 4 de marzo). Beneficios Aula de Juego en familia. [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=xGgwBlztzVM " target="_blank" rel="noopener noreferrer") CAF -banco de desarrollo de Latam y el Caribe-. (2024, 20 de noviembre). Webinar “Una apuesta a las modalidades flexibles en la atención integral a la primera infancia” [Video]. YouTube.  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
    
     




</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
