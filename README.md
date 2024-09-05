# Poc Bankia (Bancolombia)

Esta pOc fue generada en [Angular CLI](https://github.com/angular/angular-cli) version 18.1.4.
Node Version: 20.16.0

# Instalar dependencias

npm install

# Se usa Conventional Commits para el nombramiento de commits

- `feat: new feature`
- `fix(scope): bug in scope`
- `feat!: breaking change` / `feat(scope)!: rework API`
- `chore(deps): update dependencies`

# Commit types

- `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- `ci`: Changes to CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **`chore`: Changes which doesn't change source code or tests e.g. changes to the build process, auxiliary tools, libraries**
- `docs`: Documentation only changes
- **`feat`: A new feature**
- **`fix`: A bug fix**
- `perf`: A code change that improves performance
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `revert`: Revert something
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `test`: Adding missing tests or correcting existing tests

# Documentacion ConventionalCommits

- Put newline before extended commit body
- More details at **[conventionalcommits.org](https://www.conventionalcommits.org/)**

# Autenticación / Inicio de Sesión

- Se simula la autenticación con cualquier cédula, sin embargo, si necesita probar todos los necesarios, solicite las claves al administrador

# Acceso desde Smartphones

- Si se sube el repo a un bucket, se necesita deshabilitar el modo seguro para que funcione en smartphones si no tienes acceso.

- Deshabilitar "Modo seguro":

1. Paso 1: Abre Chrome en tu dispositivo.
2. Paso 2: Toca los tres puntos en la esquina superior derecha para abrir el menú.
3. Paso 3: Ve a "Configuración" y luego a "Privacidad y seguridad".
4. Paso 4: Busca una opción llamada "Navegación Segura" o algo similar. Si está activada, intenta desactivarla temporalmente.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
