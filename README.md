## PortalMovies

Bienvenido al archivo PortalMovies, un catálogo web basado en la película de la API de TheMovieDB (https://www.themoviedb.org/documentation/api) creado para mostrar la información completa de películas según su género cinematográfico.


## Estructura del Archivo

Tras su instalación se desplegará los siguientes archivos así:

```
my-app/
  README.md
  node_modules/
  components/
    Banner.js
    Filters.js
    Footer.js
    Lastest.js
    MovieInfo.js
    Preview.js
    Search.js
  multimedia/
  package.json
  public/
    index.html
    favicon.ico
  pages/
    Home.js
    Movie.js
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```


## Repositorio GitHub 

 https://github.com/justoneye/PortalMovies


## Preguntas

#### 1. ¿En qué consiste el principio de responsabilidad única? Cuál es su propósito?
R/: En Ingeniería el Principio de Responsabilidad Única (o SRP: Single Responsibility Principle en inglés) es el primer principio acrónimo mnemotécnico SOLID. de Robert C. Martin; este principio establece que cada elemento (archivo, componente, módulo, clase) tiene una sola responsabilidad sobre una parte de la funcionalidad total del software.

Tomado de: https://devexperto.com/principio-responsabilidad-unica/


#### 2. ¿Qué características tiene, según su opinión, un “buen” código o código limpio?
R/: En mi opinión un código limpio debe tener las siguientes características:
- Debe ser fácil de leer y comprender, además de simple, robusto, escalable y consistente.
- Tener líneas o bloques de código comentadas según sea la necesidad o extesión de los mismos para tener un mejor entendimiento.
- Evitar la creación innecesaria de elementos o repetir elementos manualmente (es decir, colocando código sin llamarlo como otra instancia).
- Procurar tener una buena identación que ayude con el orden tanto en la lectura como escritura del código.
- Manejar los posibles casos en los que pueda presentarse errores.  
- Someter al código a constantes limpieza, optimización y mantenimiento.
- Las variables, funciones, parámetros, clases y métodos deben tener nombres descriptivos acordes a su función y contexto.
- Proporcionar pruebas de código para asegurar su correcto funcionamiento.  