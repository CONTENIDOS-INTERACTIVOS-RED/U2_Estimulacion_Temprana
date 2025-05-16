export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Rol de la familia en la estimulación temprana',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La familia y la estimulación temprana',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Importancia del rol de la familia en el desarrollo infantil',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Vínculo afectivo y su impacto en el desarrollo del niño',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Estrategias de participación familiar en la estimulación temprana',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Comunicación efectiva entre padres y educadores',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Entornos de aprendizaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Características de un entorno de aprendizaje enriquecedor',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'El juego como herramienta fundamental en la estimulación temprana',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Elementos claves para favorecer el desarrollo físico, cognitivo y emocional',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Diseño de espacios que potencien la exploración, la creatividad y la autonomía',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Programas de estimulación temprana',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Un camino hacia el desarrollo infantil',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Estrategias para el desarrollo infantil',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Políticas y normativas en estimulación temprana en Colombia',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Evaluación y mejora de programas de estimulación temprana',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Castro Leyva, M. (2015). Una concepción de preparación a la familia para la estimulación del desarrollo integral del niño de la infancia temprana: ( ed.). Editorial Universitaria. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/91354 ',
    },
    {
      referencia:
        'Bowlby, J. (2014). Vínculos afectivos: formación, desarrollo y pérdida: (6 ed.). Ediciones Morata, S. L. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/116208 ',
    },
    {
      referencia:
        'Lahora, C. (2016). Las aulas de 0 a 3 años: su organización y funcionamiento: ( ed.). Narcea Ediciones. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/46136',
    },
    {
      referencia:
        'Escobar, C. D. R. Z., Bravo, L. I. G., Intriago, K. M. S., Cevallos, D. C. L., & Briones, M. F. B. (2023). El entorno familiar en el desarrollo infantil. Polo del Conocimiento, 8(6), 533-547. ',
      link:
        'https://www.polodelconocimiento.com/ojs/index.php/es/article/view/5698 ',
    },
    {
      referencia:
        'Suárez Palacio, P. A. (2018). El papel de la familia en el desarrollo social del niño: una mirada desde la afectividad, la comunicación familiar y estilos de educación parental. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=6573534 ',
    },
    {
      referencia:
        'García, M. V. (2003). La educación emocional: conceptos fundamentales. Sapiens. Revista universitaria de investigación, 4(2), 0. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=832033',
    },
    {
      referencia:
        'Mañes, R. J. M., Aguado, R. S., Barrocal, Y. S., & Molero, L. R. P. (2011). La importancia de las experiencias tempranas de cuidado afectivo y responsable en los menores. International Journal of Developmental and Educational Psychology: INFAD. Revista de Psicología, 1(1), 511-520. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=5098344',
    },
    {
      referencia:
        'Cruz, E. R., Rico, L. D., & Bermúdez-Jaimes, M. E. (2016). Las prácticas de crianza y su relación con el vínculo afectivo. Revista Iberoamericana de psicología, 9(2), 113-124. ',
      link: 'https://reviberopsicologia.ibero.edu.co/article/view/970',
    },
    {
      referencia:
        'Vargas Gutiérrez, R. M., & Muñoz-Martínez, A. M. (2013). La regulación emocional: precisiones y avances conceptuales desde la perspectiva conductual. Psicología usp, 24, 225-240. ',
      link:
        'https://www.scielo.br/j/pusp/a/cT9JgNg4bW6wKQQjfm9zXGw/?format=html&lang=es ',
    },
    {
      referencia:
        'Rodríguez-Garcés, C. R., & Muñoz-Soto, J. A. (2017). Rezago en el desarrollo infantil: La importancia de la calidad educativa del ambiente familiar. Revista Internacional de Investigación en Ciencias Sociales, 13(2). ',
      link:
        'http://revistacientifica.uaa.edu.py/index.php/riics/article/view/375',
    },
    {
      referencia:
        'Jiménez Hernández, D. (Coord.), Feliz Murias, T. (Coord.) & Monge López, C. (Coord.). (2023). Organización y gestión del aula de educación infantil: (1 ed.). Ediciones Morata, S. L. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/228185 ',
    },
    {
      referencia:
        'Lahora, C. (2016). Las aulas de 0 a 3 años: su organización y funcionamiento: ( ed.). Narcea Ediciones. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/46136 ',
    },
    {
      referencia:
        'Moreno Villares, J. M. (2016). Los mil primeros días de vida y la prevención de la enfermedad en el adulto. Nutrición Hospitalaria, 33, 8-11. ',
      link:
        'https://scielo.isciii.es/scielo.php?pid=S0212-16112016001000003&script=sci_arttext ',
    },
    {
      referencia:
        'Castro Pérez, M., & Morales Ramírez, M. E. (2015). Los ambientes de aula que promueven el aprendizaje, desde la perspectiva de los niños y niñas escolares. Revista electrónica educare, 19(3), 132-163. ',
      link:
        'https://www.scielo.sa.cr/scielo.php?script=sci_arttext&pid=S1409-42582015000300132',
    },
    {
      referencia:
        'Castro Pérez, M., & Morales Ramírez, M. E. (2015). Los ambientes de aula que promueven el aprendizaje, desde la perspectiva de los niños y niñas escolares. Revista electrónica educare, 19(3), 132-163. ',
      link:
        'https://www.scielo.sa.cr/scielo.php?script=sci_arttext&pid=S1409-42582015000300132 ',
    },
    {
      referencia:
        'Marujo, H. Á., Neto, L. M., & de Fátima Perloiro, M. (2003). Pedagogía del optimismo: Guía para lograr ambientes positivos y estimulantes (Vol. 167). Narcea Ediciones. ',
      link: 'https://acortar.link/dul877 ',
    },
    {
      referencia:
        'Calderón, M. (2012). La educación inclusiva es nuestra tarea. Educación, 21(40), 43-58. ',
      link:
        'https://revistas.pucp.edu.pe/index.php/educacion/article/view/2505 ',
    },
    {
      referencia:
        'Brougere, G. (2013). El niño y la cultura lúdica. Revista Lúdicamente, 2(4), 4. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=4864500 ',
    },
    {
      referencia:
        'Murillo, M. I. (2009). El juego como herramienta de aprendizaje. ',
      link: 'https://acortar.link/3MvIh8',
    },
    {
      referencia:
        'Guzmán, M. (2019). Principios de aprendizaje sensorio-motor. Apuntes de Aprendizaje Módulo 8 Vocal Coach. ',
      link: 'https://acortar.link/VW92kQ',
    },
    {
      referencia:
        'Carrasco Zurita, A. C. (2017). El juego simbólico en el desarrollo social de los niños de 3 a 4 años. ',
      link:
        'https://repositorio.uta.edu.ec/items/09ea5518-5a5e-44d5-807d-ab8f3b836954',
    },
    {
      referencia:
        'Solorzano, M. S. T., & Vera, G. J. V. (2024). LA MÚSICA Y SUS BENEFICIOS EN LA ECOLALIA INFANTIL. Revista Académica YACHAKUNA, 1(1), 122-132. ',
      link:
        'https://revistayachakuna.com/index.php/revista-academica/article/view/25 ',
    },
    {
      referencia:
        'Amar Amar, J. J. (2004). Desarrollo infantil y construcción del mundo social: ( ed.). Universidad del Norte. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/70788 ',
    },
    {
      referencia:
        'Eming Young, M. (2004). Desarrollo infantil temprano: lecciones de los programas no formales. Acción Pedagógica, 13 (2), 186-198: ( ed.). D - Universidad de los Andes Venezuela. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/16813',
    },
    {
      referencia:
        'Feldman, R. S., Olguín, V. C., Acosta, M. G., & Hoyos, M. T. A. (2008). Desarrollo en la infancia. ',
      link: 'https://acortar.link/NyDG2f',
    },
    {
      referencia:
        'González Zúñiga Godoy, C. I. (2007). Los programas de estimulación temprana desde la perspectiva del maestro. Liberabit, 13(13), 19-27. ',
      link:
        'http://www.scielo.org.pe/scielo.php?pid=S1729-48272007000100003&script=sci_arttext&tlng=en',
    },
    {
      referencia:
        'MEN (2010). Fundamentos de Cero a siempre. Bogotá, Colombia. ',
      link:
        'https://www.mineducacion.gov.co/1759/articles-177829_archivo_pdf_fundamentos_ceroasiempre.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Ambiente Estimulante',
      significado:
        'Entorno diseñado para favorecer el desarrollo integral del niño a través de la seguridad, accesibilidad y diversidad de estímulos.',
    },
    {
      termino: 'Apego Seguro',
      significado:
        'Vínculo afectivo estable entre el niño y sus cuidadores, esencial para su bienestar emocional y desarrollo social.',
    },
    {
      termino: 'Autonomía Infantil',
      significado:
        'Capacidad del niño para realizar actividades por sí mismo, favoreciendo su independencia y toma de decisiones.',
    },
    {
      termino: 'Desarrollo Cognitivo',
      significado:
        'Proceso de adquisición de habilidades intelectuales como la memoria, el pensamiento y la resolución de problemas.',
    },
    {
      termino: 'Desarrollo Emocional',
      significado:
        'Capacidad del niño para reconocer, expresar y regular sus emociones, fundamental para su bienestar psicológico.',
    },
    {
      termino: 'Desarrollo Motor',
      significado:
        'Evolución de las habilidades físicas del niño, incluyendo la motricidad gruesa y fina.',
    },
    {
      termino: 'Educación Inicial',
      significado:
        'Primera etapa del sistema educativo que atiende a niños en la primera infancia, promoviendo su desarrollo integral.',
    },
    {
      termino: 'Entorno de Aprendizaje',
      significado:
        'Espacio físico y social que influye en el proceso educativo y en la adquisición de habilidades en la primera infancia.',
    },
    {
      termino: 'Estimulación Temprana',
      significado:
        'Conjunto de estrategias que potencian el desarrollo físico, cognitivo, emocional y social en los primeros años de vida.',
    },
    {
      termino: 'Funciones Ejecutivas',
      significado:
        'Habilidades cognitivas que permiten la autorregulación, planificación y control de impulsos en los niños.',
    },
    {
      termino: 'Juego Sensorial',
      significado:
        'Juego Sensorial: Actividad que involucra los sentidos para fortalecer el aprendizaje y el desarrollo del niño.',
    },
    {
      termino: 'Juego Simbólico',
      significado:
        'Tipo de juego en el que los niños representan roles o situaciones, favoreciendo su creatividad y lenguaje.',
    },
    {
      termino: 'Modelos Pedagógicos',
      significado:
        'Enfoques educativos como Montessori, <em>HighScope y Pikler</em> que orientan la estimulación temprana.',
    },
    {
      termino: 'Neurodesarrollo',
      significado:
        'Proceso de maduración del sistema nervioso que influye en el aprendizaje y la conducta infantil.',
    },
    {
      termino: 'Participación Familiar',
      significado:
        'Involucramiento activo de los cuidadores en el proceso educativo y de estimulación del niño.',
    },
    {
      termino: 'Plasticidad Cerebral',
      significado:
        'Capacidad del cerebro para adaptarse y reorganizarse en respuesta a estímulos del entorno.',
    },
    {
      termino: 'Política Pública de Primera Infancia',
      significado:
        'Estrategias gubernamentales orientadas a garantizar el bienestar y desarrollo de los niños desde la gestación.',
    },
    {
      termino: 'Programas de Estimulación Temprana',
      significado:
        'Iniciativas estructuradas para potenciar el desarrollo infantil a través de diversas estrategias pedagógicas.',
    },
    {
      termino: 'Rutinas Infantiles',
      significado:
        'Actividades diarias estructuradas que proporcionan seguridad y estabilidad en el desarrollo del niño.',
    },
    {
      termino: 'Vínculo Afectivo',
      significado:
        'Relación emocional estable entre el niño y sus cuidadores, clave en su seguridad y confianza.',
    },
  ],
}
