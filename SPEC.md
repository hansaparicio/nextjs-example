<!-- spec.md -->
# Especificación Técnica

Este documento define los límites técnicos y la hoja de ruta para la implementación del proyecto en **Next.js 16** con **Tailwind CSS** y **TypeScript**.

## Reglas de Oro de Implementación

- Paradigma Mobile-First: optimizar para viewport de 375px. Los breakpoints para escritorio aplican a partir de 768px.
- Estilos y Consistencia: uso obligatorio de clases Tailwind CSS. No se permite `style={{}}` ni librerías de UI externas.
- Arquitectura de Directorios:
  - `/app`: rutas y páginas bajo App Router.
  - `/components`: componentes funcionales atómicos y modulares.
  - `/types`: contratos de interfaces y tipos TypeScript.

## Requisitos de Lógica Funcional

1. Gestión de Estados (`useState`):
   - Filtrado en tiempo real en la Navbar.
   - Categoría activa y ordenación de precios.
   - Navegación de galería y contador de huéspedes en Room Detail.
2. Simulación de Asincronía (`useEffect`):
   - Carga de datos simulada con `setTimeout` de mínimo 1 segundo.
   - Estados de `loading` obligatorios para mejorar la UX.
3. Protocolo de Navegación:
   - Usar exclusivamente `<Link>` de Next.js para rutas internas.
   - No usar etiquetas `<a>` para navegación interna.

## Estándares de Calidad y Código

- Componentes Funcionales: declarados con `const`, sin componentes de clase.
- Modularidad: máximo 80 líneas por archivo. Refactorizar en subcomponentes atómicos si se excede.
- Tipado: interfaces TypeScript explícitas para todos los datos. No usar `any`.

## Restricciones Técnicas Absolutas

- No usar librerías UI como `shadcn`, `MUI`, `Ant Design` o `Chakra`.
- No usar estilos inline ni soluciones de estilo fuera de Tailwind CSS.
- No usar `<a>` para rutas internas.
- No usar componentes de clase.
- No omitir el tipado de TypeScript.

## Criterios de Entrega

- Código compatible con Next.js 16.
- UX móvil-first con adaptaciones responsivas.
- Estados locales y simulaciones de carga implementadas.
- Estructura de componentes modular y reusable.
