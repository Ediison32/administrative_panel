


    -Panedl administrativo de usuarios 

    se crea estructura basica   
    fitma =>  https://www.figma.com/proto/OAzN08ifwUcxwSCh66clvz/Crud-Operations--Community---Copy-?node-id=21-205
    
    se instala librerias .json -> npm init -y
    se instala vite como entorno de ejecucuion - > npm install -D vite
    se instala un json-server para la db  -- > npm install json-server
    y se crea un archivo db.json


    para ejecutar vita se necesita modificar el package.json -->  npm run dev

        "scripts": {
                "dev":"vite"
            },


    para ejecutar json-server es necesarioodificar -->

         "scripts": {
            "server" : "json-server --watch db.json --port 3001"
         }

         se ejecuta con  -> npm run server



         informacion:

            puedo crear ids personalizados como 

            <button data-user="juan" data-role="admin">Editar</button>



            infomativo 

            | **Evento / Propiedad**      | **¿Cuándo se usa?**                                                        | **Uso práctico**                                        |
| --------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------- |
| `DOMContentLoaded`          | Cuando el HTML ya fue cargado (sin esperar imágenes o estilos).            | Ejecutar JS una vez que el DOM está listo.              |
| `load`                      | Cuando la página entera terminó de cargarse (incluye imágenes, CSS, etc.). | Esperar todo antes de ejecutar funciones pesadas.       |
| `popstate`                  | Cuando el usuario navega con **atrás o adelante** en el navegador.         | Detectar cambio de ruta en SPA sin recargar.            |
| `beforeunload`              | Justo antes de que el usuario cierre o recargue la página.                 | Mostrar advertencia tipo: “¿Seguro que quieres salir?”. |
| `unload`                    | Cuando la página está siendo descargada del navegador (no muy usado hoy).  | Deprecado; antes servía para limpiar recursos.          |
| `history.pushState()`       | Cambia la URL del navegador **sin recargar** la página.                    | Navegación en SPA, simular cambio de ruta.              |
| `location.pathname`         | Devuelve la ruta actual (`/home`, `/login`, etc.).                         | Saber en qué parte del sitio estás.                     |
| `location.reload()`         | Recarga toda la página.                                                    | Forzar recarga manual.                                  |
| `location.href = "..."`     | Redirige a una nueva URL.                                                  | Ir a otra página o forzar login, por ejemplo.           |
| `localStorage.getItem()`    | Leer datos guardados en el navegador.                                      | Recuperar sesión, nombre de usuario, preferencias, etc. |
| `localStorage.setItem()`    | Guardar datos.                                                             | Guardar sesión, tokens, configuraciones del usuario.    |
| `localStorage.removeItem()` | Borrar un solo dato del almacenamiento.                                    | Borrar solo "userName", por ejemplo.                    |
| `localStorage.clear()`      | Borrar **todo** el almacenamiento local.                                   | Al hacer logout o reiniciar el estado.                  |



| Código                                             | ¿Qué escucha?                                     | ¿Cuándo se dispara?                             | ¿Uso común?                                 |
| -------------------------------------------------- | ------------------------------------------------- | ----------------------------------------------- | ------------------------------------------- |
| `document.body.addEventListener("click", ...)`     | Escucha **clics del usuario** en la página        | Cuando se hace clic en algo dentro de `<body>`  | Detectar navegación con enlaces (`a`)       |
| `window.addEventListener("popstate", ...)`         | Escucha **cambios en el historial del navegador** | Cuando el usuario presiona **atrás o adelante** | Mantener sincronizada la vista en una SPA   |
| `window.addEventListener("DOMContentLoaded", ...)` | Escucha cuando se cargó el HTML                   | Solo una vez al cargar la página                | Inicializar la app (mostrar usuario, vista) |
