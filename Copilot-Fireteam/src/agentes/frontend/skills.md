# Skill Frontend

## Objetivo
Construir y mejorar interfaces web enfocadas en usabilidad, accesibilidad, rendimiento y consistencia visual.

## Cuándo usar esta skill
- Cuando la tarea sea de maquetación o estilos (HTML/CSS).
- Cuando haya que implementar componentes de UI con JavaScript/TypeScript.
- Cuando se solicite mejorar experiencia de usuario (UX) o accesibilidad.
- Cuando se necesite adaptar vistas a móvil, tablet y escritorio.

## Entradas esperadas
- Requerimiento funcional de la vista o componente.
- Diseño de referencia (si existe).
- Stack frontend del proyecto (framework, librería CSS, convenciones).

## Proceso de trabajo
1. Analizar el requerimiento y definir el comportamiento esperado.
2. Identificar archivos a modificar y validar convenciones del proyecto.
3. Implementar UI semántica y estilos reutilizables.
4. Añadir interacción necesaria con manejo de estados y errores.
5. Aplicar accesibilidad mínima: labels, contraste, foco y navegación por teclado.
6. Verificar responsive design en al menos 3 breakpoints.
7. Revisar rendimiento básico: evitar renderizados o assets innecesarios.
8. Entregar cambios con resumen claro de lo implementado.

## Reglas de calidad
- Código limpio y legible.
- Componentes reutilizables antes que soluciones duplicadas.
- Nombres consistentes para clases, variables y componentes.
- Evitar hardcodeo innecesario de estilos y textos.
- Mantener coherencia con el diseño y arquitectura existente.

## Salida esperada
- Interfaz funcional y responsive.
- Código mantenible y alineado al proyecto.
- Breve reporte con:
  - Archivos modificados.
  - Funcionalidad añadida.
  - Pruebas manuales recomendadas.

---

# Skill Frontend: Componentes Reutilizables

## Objetivo
Diseñar y construir componentes reutilizables, escalables y consistentes para acelerar el desarrollo de UI.

## Cuándo usar esta skill
- Cuando un componente se repite en varias pantallas.
- Cuando se quiera crear una pequeña librería interna de UI.
- Cuando se detecten estilos o estructuras duplicadas.

## Entradas esperadas
- Requisito del componente (props, estados, eventos).
- Casos de uso reales dentro del proyecto.
- Guía visual o criterios de diseño.

## Proceso de trabajo
1. Definir API del componente (props claras y tipadas).
2. Separar lógica de presentación cuando aplique.
3. Crear variantes configurables (tamaño, estado, estilo).
4. Añadir estados vacíos, loading y error si corresponde.
5. Documentar uso básico con ejemplos simples.
6. Verificar que el componente no rompa estilos globales.

## Reglas de calidad
- Props mínimas y bien nombradas.
- Evitar dependencias innecesarias.
- Priorizar composición sobre duplicación.
- Mantener compatibilidad con accesibilidad base.

## Salida esperada
- Componente reutilizable y configurable.
- Integración en al menos una vista real.
- Ejemplos de uso para el equipo.

---

# Skill Frontend: Testing y Calidad UI

## Objetivo
Asegurar que la interfaz funcione correctamente mediante pruebas y validaciones de calidad visual y funcional.

## Cuándo usar esta skill
- Cuando se añade o modifica una funcionalidad de UI.
- Antes de cerrar una tarea frontend importante.
- Cuando existen bugs recurrentes en interacción o renderizado.

## Entradas esperadas
- Funcionalidad a validar.
- Criterios de aceptación.
- Herramientas de test disponibles en el proyecto.

## Proceso de trabajo
1. Identificar flujos críticos de usuario.
2. Crear o actualizar pruebas unitarias de componentes.
3. Validar renderizado condicional y eventos principales.
4. Ejecutar pruebas de regresión básicas en vistas afectadas.
5. Revisar accesibilidad rápida: foco, teclado y labels.
6. Documentar riesgos detectados y alcance de pruebas.

## Reglas de calidad
- Cada bug corregido debe tener validación asociada.
- Priorizar tests sobre lógica crítica y estados límite.
- Evitar tests frágiles dependientes de estructura interna.
- Mantener cobertura útil, no inflada artificialmente.

## Salida esperada
- Cambios validados con pruebas.
- Menor riesgo de regresión visual o funcional.
- Resumen final con resultados y pendientes.
