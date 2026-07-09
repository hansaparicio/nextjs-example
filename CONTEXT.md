<!-- context.md -->
# Contexto Estratégico del Producto

Este documento define la visión del proyecto y alinea al modelo con los objetivos de negocio y la experiencia del usuario final. Se concentra en una Single Page Application móvil-first que apoya la navegación fluida, la exploración rápida de alojamientos y la toma de decisiones basada en datos visuales y económicos.

## Visión del Producto

El producto busca replicar la experiencia de una plataforma de reserva de alojamientos en formato móvil, sin limitarse a una copia visual. Se espera que la solución respete la coherencia arquitectónica, desacople lógica funcional del diseño y propicie una construcción modular que permita iteraciones rápidas y escalables.

## Especificaciones de Vision Prompt

Cada vista debe documentarse con base en capturas de pantalla del diseño original en un viewport móvil de 375px. El documento debe incluir:

- Identificación de componentes clave.
- Props y estados necesarios.
- Jerarquía de layout y relaciones de diseño.

## Vistas Principales del Proyecto

### Home (Página de Inicio)

- Barra de Navegación: logo, buscador dinámico con estado local de texto y menú de usuario.
- Filtros de Categoría: carrusel horizontal de iconos y etiquetas con estado activo para categorías como Playa, Mansiones, etc.
- Cuadrícula de Alojamientos: grid responsivo con tarjetas que contienen imagen placeholder, metadatos, precio y valoración.

### Catalog (Resultados de Búsqueda)

- Cabecera de Resultados: contador dinámico de hallazgos y control de ordenación por precio ascendente/descendente.
- Componente de Mapa: placeholder visual gris o integración opcional de API, posicionado de forma adaptable según breakpoint.
- Lista de Resultados: reutilización del componente de tarjeta definido en la Home.

### Room Detail (Detalle de Habitación)

- Galería Dinámica: navegación de imágenes con estado de índice y controles "Anterior/Siguiente".
- Información del Anfitrión: avatar placeholder, nombre del host y antigüedad en años.
- Grilla de Amenidades: cuadrícula de servicios con icono y etiqueta descriptiva.
- Widget de Reserva: tarjeta interactiva con precio por noche, contador de huéspedes con validación de rango y botón CTA de reserva.

## Perfil del Usuario

El usuario objetivo es un viajero contemporáneo que prioriza eficiencia, claridad y navegación sin fricciones. Necesita decisiones rápidas basadas en información visual clara y valores económicos transparentes. La aplicación debe evitar recargas de página y mantener fluidez en el filtrado y exploración.

## Matriz de Componentes Críticos

- Home: Navbar con estado de búsqueda, filtros con estado activo, grid responsivo.
- Catalog: controlador de ordenación, placeholder de mapa, reutilización de tarjetas.
- Room Detail: galería con estado de índice, información del anfitrión, contador de huéspedes con rango.
