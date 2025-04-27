<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Título tema'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-h85-3
      .px-4.px-md-5.py-4
        div 
          .row.align-items-center
            .col-lg-auto.order-2
              img(src="@/assets/curso/tema1/1.svg", style="max-width: 400px").mx-auto
            .col-lg.order-1.text-white
              p Este proceso invita a la reflexión y al análisis crítico. Se espera que, al finalizar la unidad, el estudiante sea capaz de explicar el papel de la familia en la estimulación temprana, diseñar entornos que favorezcan el desarrollo infantil y evaluar programas existentes con un enfoque propositivo. La participación en las actividades permitirá no solo comprender estos conceptos, sino también aplicarlos en distintos escenarios educativos y familiares.
              p Se abre la oportunidad de analizar cómo la familia puede ser un pilar fundamental en el aprendizaje y desarrollo infantil desde los primeros años. 
              h5 ¡Es momento de comenzar!

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Subtítulo tema

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

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
