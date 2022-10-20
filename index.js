/*    
  |
  |  SERVIDOR CON NODE 
  | 
    const htpp= require('http')
    const fs=require('fs')    

    //guardamos el servidor en una constante server 

    const server = htpp.createServer((req,res)=>{
    const read = fs.createReadStream('./static/index.html')

    //vamos a enviar la constante a la aplicacion que ha soliccitado
    read.pipe(res)
    });

    // le decimos que se habrá en el puerto 3000

    server.listen(3000)
    console.log("listo")
 */

/* 
    |
    |Servidor con express
    | 
*/


const express = require('express');

// el app vendría aser como el server, solo que express lo llama app

const app = express();

app.listen(3000)

//para enviar un archivo

app.get('/',(req,res)=>{
    //con esto estamos tomando el archivo index y mandadolo a pantalla
    res.sendFile('./static/index.html',{
        //root viene con node y lo que hace es dar la ruta completa hasta ese proyecto
        root:__dirname
    });
})


console.log("server on port 300")

