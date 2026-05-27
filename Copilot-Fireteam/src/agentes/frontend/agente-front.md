# Especificación Técnica — Frontend Angular 21

## Objetivo

Desarrollar una aplicación frontend utilizando Angular versión 21 que implemente buenas prácticas modernas del framework y cumpla los requisitos funcionales y técnicos descritos a continuación.

---

# Requisitos Técnicos Obligatorios

La aplicación deberá desarrollarse utilizando:

* Angular 21
* TypeScript
* Arquitectura basada en componentes Standalone
* Reactive Forms
* Signals
* Servicios Angular
* Observables con RxJS
* Angular Router

---

# Requisitos Funcionales

La aplicación deberá incluir como mínimo:

## 1. Componentes Standalone

Todos los componentes principales deberán ser creados utilizando la arquitectura **Standalone Components**.

### Requisitos

* No utilizar `NgModules` tradicionales salvo que sea estrictamente necesario.
* Cada componente deberá declarar sus propias dependencias mediante `imports`.

### Ejemplo esperado

```ts
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html'
})
```

---

# 2. Gestión de Estado con Signals

La aplicación deberá utilizar **Signals** para gestionar estado reactivo en alguna sección de la aplicación.

## Casos válidos

* Estado de autenticación
* Lista de elementos
* Estado de carga
* Filtros de búsqueda
* Contadores o dashboards

### Requisitos

* Uso de `signal()`
* Uso de `computed()` o `effect()` al menos en una parte del proyecto

### Ejemplo esperado

```ts
count = signal(0);

doubleCount = computed(() => this.count() * 2);
```

---

# 3. Formularios Reactivos

Debe existir al menos un formulario implementado mediante **Reactive Forms**.

## Requisitos mínimos

* Uso de `FormGroup`
* Uso de `FormControl`
* Validaciones
* Gestión de errores visuales

## Casos posibles

* Login
* Registro
* Creación de elementos
* Formulario de contacto

### Ejemplo esperado

```ts
form = new FormGroup({
  email: new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.required])
});
```

---

# 4. Consumo de API REST

La aplicación deberá realizar llamadas HTTP a una API REST mediante servicios Angular.

## Requisitos

* Uso de `HttpClient`
* Separación de lógica en servicios
* Métodos GET como mínimo
* Opcionalmente POST, PUT y DELETE

## Ejemplo esperado

```ts
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>('/api/users');
  }
}
```

---

# 5. Uso de Observables

Los servicios deberán utilizar **Observables** mediante RxJS.

## Requisitos

* Retornar `Observable<T>`
* Uso de `subscribe()` desde componentes o uso del `async pipe`
* Manejo básico de errores con `catchError` o similar

### Ejemplo esperado

```ts
getUsers(): Observable<User[]> {
  return this.http.get<User[]>('/api/users');
}
```

---

# 6. Navegación y Rutas

La aplicación deberá implementar navegación básica entre distintas vistas.

## Requisitos mínimos

* Configuración de rutas mediante Angular Router
* Al menos 2 vistas diferentes
* Navegación mediante enlaces o botones

## Ejemplo esperado

```ts
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];
```

---

# Estructura Recomendada del Proyecto

```text
src/
 ├── app/
 │    ├── components/
 │    ├── pages/
 │    ├── services/
 │    ├── models/
 │    ├── shared/
 │    ├── app.routes.ts
 │    └── app.config.ts
```

---

# Buenas Prácticas Recomendadas

## Arquitectura

* Separación clara entre componentes y servicios
* Componentes reutilizables
* Tipado fuerte con interfaces

## Código

* Uso de tipado TypeScript
* Evitar lógica compleja en templates
* Uso correcto de async/await u Observables

## UI/UX

* Diseño responsive básico
* Feedback visual de carga y errores
* Navegación intuitiva

---

# Entregables Esperados

El proyecto deberá incluir:

* Código fuente completo
* README con instrucciones de ejecución
* Dependencias correctamente configuradas
* Proyecto ejecutable mediante:

```bash
npm install
npm start
```

---

# Criterios de Evaluación

Se evaluará:

| Criterio                     | Peso  |
| ---------------------------- | ----- |
| Uso correcto de Angular 21   | Alto  |
| Uso de Standalone Components | Alto  |
| Implementación de Signals    | Alto  |
| Formularios reactivos        | Medio |
| Consumo de APIs REST         | Alto  |
| Uso adecuado de Observables  | Alto  |
| Navegación entre vistas      | Medio |
| Organización del código      | Medio |
| Calidad y legibilidad        | Medio |

---

# Requisitos Opcionales (Valorables)

Los siguientes elementos aportarán valor adicional:

* Lazy Loading
* Guards
* Interceptors
* Manejo global de errores
* Testing
* Estado global avanzado
* Integración con APIs públicas
* Deploy en Vercel, Netlify o Firebase

---

# Resultado Esperado

El resultado final debe ser una SPA moderna desarrollada con Angular 21 que demuestre conocimientos actuales del ecosistema Angular y buenas prácticas de desarrollo frontend.
