


// function Get async


export async function get(url) {
    
    try{

        const response = await fetch(url);

        const res = await response.json();

        
        return res;
    }catch(error){
        console.log(`Error ${error}`);
        
    }
}

// funtion post

export async function add(url, params) {
    
    const val =false;

    
    if ( false==val){
        
        try{
            const response = await fetch(url,{
                method : 'POST',  
                body : JSON.stringify(params)
            })
            if(response.ok){
                
                console.log(`Added product`);
                return response.status
            }

        }catch(error){
            console.log(`Error ${error}`);
            
        }
    };
    console.log("This product already exist");
    
}

// fuction  put
export async function modific(url, params) {
    console.log("entro a modificar funcion  ");
    
    const val = true;
    if(val){
        try{
            const response = await fetch(`${url}/${params.id} `,{
                method : 'PUT',  
                body : JSON.stringify(params)
            })
            if(response.ok){
                console.log( `id: ${params.id} name: ${params.name} price: . Added product`);
                
                return
            }
        }catch(error){
            console.log(`Error ${error}`);
            
        }
    }
}


// funtion delete 
export async function delet(url, params) {
    // console.log(params);
    
    // const parame ={params}
    const val = true // await validate(url, params);
    if (val){

        try{
            const response = await fetch(`${url}/${params} `,{
                method : 'DELETE'
            })
            if(response.ok){
        
                console.log(`${params.id} deleted product`);
                
                return  response.status
            }
        }catch(error){
            console.log(`Error ${error}`);
            
        }
    }
    
}

// fuction validate 
// some ---> returns tru or false if it exists inside

    // organizar esta funcion para que reciba parametros 
// export async function validate(url, params){
//     const data = await get(url)

//     const val = data.some(item => item.id== params);
//     console.log(`funcion validar ${val} el paramaetro a eliminar es ${params} de tipo ${typeof params}`);
    
//     return val
// } 

