# Skill Backend: Diseño de API REST

## Objetivo
Diseñar e implementar endpoints REST claros, consistentes y mantenibles para exponer funcionalidades del sistema.

## Cuándo usar esta skill
- Cuando haya que crear nuevos endpoints.
- Cuando se necesite refactorizar rutas o contratos de API.
- Cuando se deban estandarizar respuestas y códigos HTTP.

## Entradas esperadas
- Requisitos funcionales del recurso o módulo.
- Entidades y reglas de negocio asociadas.
- Convenciones de rutas y versionado del proyecto.

## Proceso de trabajo
1. Definir recursos, rutas y métodos HTTP.
2. Diseñar contratos de request/response.
3. Implementar validación de entrada.
4. Aplicar manejo de errores centralizado.
5. Estandarizar respuestas exitosas y de fallo.
6. Documentar endpoints y ejemplos de uso.

## Reglas de calidad
- Uso correcto de códigos HTTP.
- Respuestas consistentes en formato y estructura.
- Validaciones antes de la lógica de negocio.
- Mensajes de error útiles y no sensibles.

## Salida esperada
- API funcional, coherente y documentada.
- Endpoints listos para consumo por frontend o clientes externos.

---

# Skill Backend: Persistencia y Base de Datos

## Objetivo
Modelar, consultar y mantener datos de forma segura y eficiente, respetando la integridad de la información.

## Cuándo usar esta skill
- Cuando se cree o modifique el modelo de datos.
- Cuando haya que optimizar consultas lentas.
- Cuando se incorporen migraciones o cambios de esquema.

## Entradas esperadas
- Requisitos de datos y relaciones entre entidades.
- Tecnología de base de datos usada en el proyecto.
- Volumen estimado y patrones de acceso.

## Proceso de trabajo
1. Definir modelo de datos y relaciones.
2. Crear migraciones versionadas.
3. Implementar operaciones CRUD con validación.
4. Optimizar consultas críticas con índices adecuados.
5. Proteger transacciones y consistencia.
6. Verificar impacto de cambios sobre datos existentes.

## Reglas de calidad
- Migraciones reversibles cuando sea posible.
- Evitar consultas N+1 y operaciones innecesarias.
- No exponer credenciales ni datos sensibles.
- Mantener trazabilidad de cambios en esquema.

## Salida esperada
- Modelo de datos estable y mantenible.
- Consultas eficientes y seguras.
- Cambios aplicables en entornos de desarrollo y producción.

---

# Skill Backend: Seguridad, Testing y Observabilidad

## Objetivo
Mejorar la robustez del backend mediante controles de seguridad, pruebas automatizadas y monitoreo básico.

## Cuándo usar esta skill
- Antes de desplegar funcionalidades críticas.
- Cuando existan errores frecuentes en producción.
- Cuando se requiera aumentar confianza en cambios backend.

## Entradas esperadas
- Flujos críticos y endpoints sensibles.
- Estrategia actual de autenticación/autorización.
- Herramientas de logging, testing y monitoreo disponibles.

## Proceso de trabajo
1. Revisar autenticación, autorización y permisos.
2. Validar sanitización de entradas y límites de uso.
3. Añadir pruebas unitarias e integración para casos críticos.
4. Registrar eventos clave con logs estructurados.
5. Definir métricas mínimas (errores, latencia, disponibilidad).
6. Reportar riesgos residuales y plan de mitigación.

## Reglas de calidad
- Ningún endpoint sensible sin control de acceso.
- Pruebas cubriendo casos felices y fallos relevantes.
- Logs útiles para depurar sin filtrar información privada.
- Manejo explícito de excepciones y timeouts.

## Salida esperada
- Backend más seguro y observable.
- Menor riesgo de regresiones en despliegues.
- Resumen técnico de pruebas, riesgos y cobertura.
