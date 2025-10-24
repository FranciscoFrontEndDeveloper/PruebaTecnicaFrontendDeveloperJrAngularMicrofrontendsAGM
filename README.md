# Rick and Morty API REST Test



## Descripción

*Este proyecto fue desarrollado con el objetivo de consumir una API REST pública (la API de Rick and Morty) y demostrar mis habilidades en el manejo de Angular.
La aplicación permite listar personajes, crear nuevos basados en atributos existentes y almacenarlos localmente usando Local Storage en lugar de un backend real.
En teoría, solo sería necesario desacoplar el servicio de Local Storage y conectarlo a un backend correspondiente para lograr persistencia real.*  




### Tecnologías utilizadas

* Angular 19
* Angular Material
* RxJS

### Funcionalidades principales

* Listado de personajes obtenidos desde la API de Rick and Morty.
* Creación de nuevos personajes reutilizando los atributos disponibles.
* Almacenamiento local de personajes creados (Local Storage).
* Base lista para integración con backend (solo requiere desacoplar el servicio).
* Pruebas unitarias optimizadas con un único test que evalúa la creación de componentes.

### Instalación y ejecución

* Clonar este repositorio
    * git clone https://github.com/tuusuario/rick-and-morty-api-rest-test.git
* Instalar dependencias
    * npm install
* Ejecutar el proyecto
    * ng serve
* Abrir en el navegador: http://localhost:4200

### Estructura del proyecto

El proyecto está organizado en varios componentes modulares y reutilizables.
Durante el desarrollo me enfoqué en reutilizar los componentes más pequeños (como los inputs de formularios).
Intenté reutilizar un componente completo, pero descubrí que podía convertirse en un “embudo” que dificultaría el flujo general de la aplicación, así que opté por un enfoque más granular y flexible.

### Pruebas unitarias

Durante la planificación noté que crear pruebas individuales para cada componente era redundante.
Para evitar repetir código, implementé una sola prueba genérica que evalúa el mismo criterio en todos los componentes:

“¿El componente se crea correctamente?”

Aunque algunas pruebas fallan y otras pasan, esta experiencia me permitió validar la viabilidad del enfoque y la importancia de la eficiencia en el testing.

## Lecciones aprendidas

Aunque ya tenía experiencia reutilizando componentes, este proyecto reforzó algo importante:

Cuando se domina la reutilización de componentes, el ahorro de tiempo y esfuerzo es significativo.

Además, reafirmé la importancia de estructurar el código con escalabilidad en mente desde el principio.

### Futuras mejoras

* Módulo de edición de personajes.
* Implementación de filtros de búsqueda.
* Base lista para integración con backend (solo requiere desacoplar el servicio).
* Paginador funcional.
* Nuevas rutas para episodios y lugares.

### Créditos y agradecimientos

* A los creadores de la API de Rick and Morty, por ofrecer un recurso público, accesible y bien documentado.
* A ChatGPT, por su asistencia durante el desarrollo, que me permitió ahorrar tiempo y mantener un flujo de trabajo más ordenado.
* Tambien quisiera agradecer a Apex Global Mobility por tenermen en cuenta para la oferta y por permitirme poner a prueba mi habilidad en angular.



