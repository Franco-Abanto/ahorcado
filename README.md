# Juego del Ahorcado

Este proyecto es una implementación del clásico juego del ahorcado desarrollada con Angular. Los jugadores intentan adivinar una palabra secreta letra por letra antes de que se complete el dibujo del ahorcado.

## Características

- **Interfaz Interactiva**: Una interfaz de usuario amigable que responde dinámicamente a las interacciones del jugador.
- **Gestión de Estados**: Manejo eficiente de los estados del juego, incluyendo letras adivinadas, intentos restantes y finalización del juego.
- **Componentización**: Uso de componentes de Angular para estructurar y organizar el código de manera modular.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [Angular CLI](https://angular.io/cli) (versión 13.2.4 o superior)

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/Franco-Abanto/ahorcado.git
   ```

2. **Navegar al directorio del proyecto:**

   ```bash
   cd ahorcado
   ```

3. **Instalar las dependencias:**

   ```bash
   npm install
   ```

## Ejecución del Servidor de Desarrollo

Para iniciar el servidor de desarrollo, ejecuta:

```bash
ng serve
```

Luego, abre tu navegador y navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si realizas cambios en los archivos fuente.

## Generación de Componentes

Para generar un nuevo componente, utiliza el siguiente comando:

```bash
ng generate component nombre-del-componente
```

También puedes generar directivas, pipes, servicios, clases, guards, interfaces, enums y módulos con comandos similares.

## Construcción del Proyecto

Para compilar el proyecto, ejecuta:

```bash
ng build
```

Los archivos compilados se almacenarán en el directorio `dist/`.

## Ejecución de Pruebas Unitarias

Para ejecutar las pruebas unitarias, utiliza:

```bash
ng test
```

Esto ejecutará las pruebas a través de [Karma](https://karma-runner.github.io).

## Ejecución de Pruebas End-to-End

Para ejecutar las pruebas end-to-end, utiliza:

```bash
ng e2e
```

Esto ejecutará las pruebas utilizando la plataforma de tu elección.

## Contribuciones

Si deseas contribuir a este proyecto:

1. Realiza un fork del repositorio.
2. Crea una nueva rama con tu funcionalidad o corrección: `git checkout -b mi-nueva-funcionalidad`.
3. Realiza tus cambios y haz commit: `git commit -m 'Agregar nueva funcionalidad'`.
4. Envía tus cambios al repositorio remoto: `git push origin mi-nueva-funcionalidad`.
5. Abre una solicitud de pull en GitHub.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
