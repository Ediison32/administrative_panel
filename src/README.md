


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