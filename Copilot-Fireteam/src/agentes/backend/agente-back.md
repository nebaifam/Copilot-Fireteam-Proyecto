# Especificación Técnica — Backend Spring Boot

## Objetivo

Desarrollar una API backend utilizando Spring Boot y Java que permita gestionar equipos y jugadores mediante una arquitectura RESTful con persistencia en base de datos relacional en memoria H2.

---

# Tecnologías Obligatorias

El proyecto deberá desarrollarse utilizando:

* Java 21 (o superior recomendado)
* Spring Boot
* Spring Web
* Spring Data JPA
* Base de datos H2 en memoria
* Maven o Gradle
* Hibernate / JPA

---

# Requisitos Técnicos Obligatorios

La aplicación backend deberá incluir como mínimo:

* API REST funcional
* Persistencia en base de datos relacional
* Operaciones CRUD básicas
* Relación 1:N entre entidades
* Uso de JPA/Hibernate
* Arquitectura organizada por capas

---

# Modelo de Datos

La aplicación gestionará las siguientes entidades:

## Equipo

Representa un equipo deportivo.

### Campos mínimos

| Campo  | Tipo   |
| ------ | ------ |
| id     | Long   |
| nombre | String |
| ciudad | String |

---

## Jugador

Representa un jugador perteneciente a un equipo.

### Campos mínimos

| Campo    | Tipo    |
| -------- | ------- |
| id       | Long    |
| nombre   | String  |
| posicion | String  |
| dorsal   | Integer |

---

# Relación Entre Tablas

Debe existir una relación:

* **Un Equipo tiene muchos Jugadores**
* **Un Jugador pertenece a un Equipo**

## Relación JPA esperada

* `@OneToMany`
* `@ManyToOne`

### Ejemplo conceptual

```java id="3nhlm5"
@OneToMany(mappedBy = "equipo")
private List<Jugador> jugadores;
```

```java id="m8f00t"
@ManyToOne
@JoinColumn(name = "equipo_id")
private Equipo equipo;
```

---

# Persistencia con H2

La aplicación deberá utilizar una base de datos relacional H2 en memoria.

## Requisitos

* Configuración mediante `application.properties`
* Consola H2 habilitada
* Creación automática de tablas mediante JPA

### Ejemplo esperado

```properties id="vw20p3"
spring.h2.console.enabled=true
spring.datasource.url=jdbc:h2:mem:testdb
spring.jpa.hibernate.ddl-auto=update
```

---

# API REST

La aplicación deberá exponer endpoints REST funcionales.

---

# Endpoints Mínimos Requeridos

## Equipos

### Obtener todos los equipos

```http id="m3nfw4"
GET /api/equipos
```

### Obtener equipo por ID

```http id="u7xh8o"
GET /api/equipos/{id}
```

### Crear equipo

```http id="uhd8te"
POST /api/equipos
```

### Actualizar equipo

```http id="cwhf5g"
PUT /api/equipos/{id}
```

### Eliminar equipo

```http id="e09dyy"
DELETE /api/equipos/{id}
```

---

## Jugadores

### Obtener todos los jugadores

```http id="8ygho1"
GET /api/jugadores
```

### Obtener jugador por ID

```http id="17fmdz"
GET /api/jugadores/{id}
```

### Crear jugador

```http id="u57l1o"
POST /api/jugadores
```

### Actualizar jugador

```http id="6g02fj"
PUT /api/jugadores/{id}
```

### Eliminar jugador

```http id="z3ax1t"
DELETE /api/jugadores/{id}
```

---

# Arquitectura Recomendada

Se recomienda seguir una arquitectura por capas.

## Estructura sugerida

```text id="u3w1fz"
src/main/java/com/example/demo
│
├── controller
├── service
├── repository
├── model
├── dto
├── config
└── exception
```

---

# Capas Obligatorias

## Controller

Responsable de exponer endpoints REST.

### Requisitos

* Uso de `@RestController`
* Uso de `@RequestMapping`
* Respuestas JSON

---

## Service

Contendrá la lógica de negocio.

### Requisitos

* Separación de lógica respecto al controller
* Uso de interfaces opcional pero recomendable

---

## Repository

Acceso a datos mediante Spring Data JPA.

### Requisitos

* Extender `JpaRepository`

### Ejemplo esperado

```java id="1e6e6n"
public interface EquipoRepository extends JpaRepository<Equipo, Long> {
}
```

---

# Requisitos de Persistencia

La aplicación deberá:

* Guardar datos correctamente en H2
* Recuperar relaciones entre entidades
* Permitir operaciones CRUD completas

---

# Gestión de Relaciones JSON

Debe evitarse la recursividad infinita en relaciones bidireccionales.

## Recomendaciones

* Uso de `@JsonManagedReference`
* Uso de `@JsonBackReference`
* O uso de DTOs

---

# Validaciones Recomendadas

Se valorará:

* Uso de `@Valid`
* Uso de Bean Validation (`@NotNull`, `@Size`, etc.)
* Manejo de errores HTTP

---

# Dependencias Recomendadas

## Maven

```xml id="zkrfql"
<dependencies>

    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>

    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <scope>runtime</scope>
    </dependency>

</dependencies>
```

---

# Buenas Prácticas Recomendadas

## Código

* Uso correcto de DTOs
* Separación de responsabilidades
* Uso de nombres claros
* Manejo de excepciones

## API

* Uso correcto de códigos HTTP
* JSON consistente
* Endpoints RESTful

## Base de Datos

* Relaciones correctamente definidas
* Claves foráneas
* Entidades normalizadas

---

# Ejemplo de Flujo Esperado

1. Crear un equipo
2. Crear jugadores asociados a ese equipo
3. Consultar un equipo con sus jugadores
4. Actualizar datos
5. Eliminar registros

---

# Entregables Esperados

El proyecto deberá incluir:

* Código fuente completo
* Proyecto compilable
* README con instrucciones
* Configuración H2 funcional
* API ejecutable localmente

---

# Ejecución del Proyecto

## Maven

```bash id="ul6csl"
mvn spring-boot:run
```

---

# Acceso a Consola H2

```text id="n3l4zj"
http://localhost:8080/h2-console
```

---

# Criterios de Evaluación

| Criterio                                | Peso  |
| --------------------------------------- | ----- |
| Uso correcto de Spring Boot             | Alto  |
| API REST funcional                      | Alto  |
| Persistencia en H2                      | Alto  |
| Relación 1:N correctamente implementada | Alto  |
| Arquitectura por capas                  | Medio |
| Calidad del código                      | Medio |
| Buenas prácticas REST                   | Medio |

---

# Requisitos Opcionales (Valorables)

Los siguientes elementos aportarán valor adicional:

* DTOs completos
* Swagger/OpenAPI
* Tests unitarios
* Manejo global de excepciones
* Dockerización
* Seguridad básica con Spring Security
* Paginación y filtros

---

# Resultado Esperado

El resultado final debe ser una API REST desarrollada con Spring Boot que permita gestionar equipos y jugadores, persistiendo información en una base de datos relacional H2 y aplicando buenas prácticas de desarrollo backend moderno.
