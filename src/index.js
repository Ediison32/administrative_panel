
import { get, add, modific, delet, login } from "./funtions/funtions.js"
import { rouetes } from "./routes/rutes.js";

const url = 'http://localhost:3001/user';


window.addEventListener("DOMContentLoaded", async ()=>{  // espera que cargue la pagina 

    const userStorage = localStorage.getItem("userName");
    const passwordStorage = localStorage.getItem("userPassword");

    const loginStatus =document.getElementById("login-login")
    if(userStorage &&passwordStorage){
        loginStatus.innerHTML = "logaut"
        
        await whasStore(userStorage,passwordStorage)
    }
    loginStatus.addEventListener("click", ()=>{
        localStorage.clear();
        loginStatus.innerHTML = "Login"
        document.getElementById("present").innerHTML = "";
        document.getElementById("menu").style.display = "none";
        history.pushState(null, null, "/login");
        browser("/login");
        block()

    })
    
})



window.addEventListener("popstate", ()=>{ // evento llamado popstate para navegar .. ojo 
    console.log(location);     // me muestra mas atributos 
    
    browser(location.pathname)// aqui llamamos location.pathname que me trael la ultima ruta en la que se esta
    
});

// escucha el chick en el menu 
document.body.addEventListener("click", e => {
    
    if(e.target.matches("[data-link]")){
        e.preventDefault();
        console.log(e.target.getAttribute("href"));
        
        browser(e.target.getAttribute("href"));

    }
});


// peticion al server sjon 

async function browser(params, id = NaN) {
    
    const rot = rouetes[params];
    console.log(rot);
    
    const html = await fetch(rot).then(response => response.text());
    document.getElementById('root').innerHTML = html;
    history.pushState({}, "", params);  // historia
    reneder(params, id); // mostrar en el dom 
    
};

// funcion para render al la pagina de user.html

async function reneder(params, idU =NaN) {
    
   
    if(params == "/users"){
        console.log(`parametro = ${params}`);
        const data = await get(url)
        
        const html =document.getElementById("information");

        html.innerHTML = data.map(x =>`
            <tr>
                <th> <img src="./assets/img/profile.png" alt=""></th>
                <th>${x.name}</th>
                <th>${x.email}</th>
                <th>${x.phone}</th>
                <th>${x.enrollNumber}</th>
                <th>${x.dateOfAdmission}</th>
                <th id = "img-iconpen" ><img src="./assets/img/pen.png"   alt="pencil"  data-id=${x.id} data-role-studen = "admin" class = "iconPen"></th>
                <th id = "img-icontrash" ><img src="./assets/img/trash.png" alt="trash" data-id =${x.id} data-role-studen = "admin" class = "icontrash"></th>

            </tr>
        
            `).join('')

        mostraricon("admin")
       
         
    }else if(params == "/addStuden"){

        const formAddStudent = document.getElementById("studen-form");

        const fomrAdd =`
            <div>
                <img src="" alt="">
                <h2> im happy studen </h2>
            </div>
            <div class="profile">
                <img src="../assets/img/profile.png" alt="porfile" class="photoNew">
                <h2>Register New Student</h2>
            </div>
            <form action="" class="form" id="form">

                <label for="name">Full Name</label>
                <input type="text" id="name"  name="name" required>

                <label for="email">Email</label>
                <input type="text" id="email" name="email" required>

                <label for="phone"> Phone</label>
                <input type="number" id="phone" name="phone" required>

                <label for="enrollNumber">Enroll Number</label>
                <input type="number" id="enrollNumber" name="enrollNumber" required>

                <label for="date">Date of Admission</label>
                <input type="date" id="date" name="date" required>

                <div>
                    <button type="submit">Save</button>
                    <button type="button">Cancel</button>
                </div>

            </form>
        
        `
        formAddStudent.innerHTML=fomrAdd;
        const formt = document.getElementById("form");
        formt.addEventListener("submit", async (e)=>{
            e.preventDefault();
            const newName = formt.name.value;
            const newEmail = formt.email.value;
            const phone= formt.phone.value;
        
            const enrollNumber = formt.enrollNumber.value;
            const dateAdmin = formt.date.value;
            const id = "9"
            
            const newObjeto ={
                "id" : id,
                "name": newName,
                "email": newEmail,
                "phone": phone,
                "enrollNumber": enrollNumber,
                "dateOfAdmission": dateAdmin
            }
            
            const status = await add(url, newObjeto)
            console.log(status);
            
            browser("/users")
        })
        
    }else if(params == "/edit"){
        // debugger
        const editStuden = document.getElementById("studen-for");
        
        const data = await get(url);

        for(const prop in data){
            
        
            
            if(data[prop].id== idU){

                const html =
                `
        
            <div>
                <img src="" alt="">
                <h2> im happy studen </h2>
            </div>
            <div class="profile">
                <img src="../assets/img/profile.png" alt="porfile" class="photoNew">
                <h2>Modific Student</h2>
            </div>
            <form action="" class="form" id="form">

                <label for="name">Full Name</label>
                <input type="text" id="name"  name="name" value =${data[prop].name} required>

                <label for="email">Email</label>
                <input type="text" id="email" name="email" value =${data[prop].email} required>

                <label for="phone"> Phone </label>
                <input type="number" id="phone" name="phone" value=${data[prop].phone} required>

                <label for="enrollNumber">Enroll Number</label>
                <input type="number" id="enrollNumber" name="enrollNumber" value=${data[prop].enrollNumber} required>

                <label for="date">Date of Admission</label>
                <input type="date" id="date" name="date" value =${data[prop].dateOfAdmission}  required>

                <div>
                    <button type="submit">Save</button>
                    <button type="button">Cancel</button>
                </div>

            </form>
        
        
        `
            editStuden.innerHTML = html;
            }
        }
        const formt = document.getElementById("form");
        formt.addEventListener("submit", async (e)=>{
            e.preventDefault();
            console.log("entro en el submit de edit ");
            
            const newName = formt.name.value;
            const newEmail = formt.email.value;
            const phone= formt.phone.value;
        
            const enrollNumber = formt.enrollNumber.value;
            const dateAdmin = formt.date.value;
            const id = idU
            
            const newObjeto ={
                "id" : id,
                "name": newName,
                "email": newEmail,
                "phone": phone,
                "enrollNumber": enrollNumber,
                "dateOfAdmission": dateAdmin
            }
            const status = await modific(url, newObjeto)
            browser("/users")
            
        
        })



        
    }else if (params == "/login"){
    
  
        const loginClick = document.getElementById("login_user");
        
        loginClick.addEventListener("submit", async(e)=>{
            
            e.preventDefault();
            const loginStatus =document.getElementById("login-login")
            const nameLogin = document.getElementById("userName").value;
            const passwordLogin = document.getElementById("Password").value;
            console.log(`name login ${nameLogin} passwor login ${passwordLogin}`);

            const evaluest = await login();

            const foundUser = evaluest.find(user =>   // uso find si la persona existe retorna todo el objeto completo 
                user.userName === nameLogin && user.password === passwordLogin
            )
            
            if(!foundUser){
                    alert(" Clave o usuario invalidos ")
                }

            whachLogin(foundUser)
            whachMenu(foundUser.type)
            loginStatus.innerHTML = "logaut"
            browser("/users")
        })

        
        
    }
};

async function whasStore(nameLogin, passwordLogin){
    const evaluest = await login();
    
    
    
    const foundUser = evaluest.find( user =>

        user.userName == nameLogin && user.password == passwordLogin
    );
    console.log(foundUser);
    
    if(foundUser){
        whachLogin(foundUser)
        
        whachMenu(foundUser.type)
    
    }

}



//para mostar cualquier tipo de usuario 
function whachLogin(docUser){
    const htmlImg = document.getElementById("present");
    htmlImg.innerHTML = `
                    <img id="images"  src=${docUser.img} alt="user">
                    <p id="topy">${docUser.type}</p>
                    <p><span id="topyName">${docUser.userName}</span></p>`
                    localStorage.setItem("userName", docUser.userName);  // set o agregro al local storage 
                    docUser.status = true
                    localStorage.setItem("userPassword", docUser.password);

}


function block(){
    document.getElementById("menu").style.display = "none";
    document.querySelectorAll(".menu-item").forEach(item =>{
        const roles = item.getAttribute("data-role").split(",");
        item.style.display = "none"
    }
)}


// mostar para roles 
function whachMenu(rol){
    document.getElementById("menu").style.display = "flex";
    document.querySelectorAll(".menu-item").forEach(item =>{
        const roles = item.getAttribute("data-role").split(",");
        if(roles.includes(rol)){
            item.style.display ="block"
        }

    })
    
}

// funcion para escuchar 
//class="edit-btn fa fa-pencil" data-id="${user.id}"

document.addEventListener("click", async (e)=>{
    // console.log(e.target.classList.contains("iconPen")); // verifica si el que hace click contiene la clase ()
    
    
    if(e.target.classList.contains("iconPen")){
        
        
        const id = e.target.dataset.id;
        console.log(`Editado por usuario con Id ${id}`);
        
        browser("/edit", id)

        


    }else if(e.target.classList.contains("icontrash")){

        const id = e.target.dataset.id;
        const confirmar = confirm(`¿Estás seguro que deseas eliminar ?`);
    
        console.log(confirmar);
        
        if(confirmar){
            const status = await delet(url,id);
            console.log(status);
            
            if(status == 200){
                alert(` Student eliminado `);
                reneder("/users")
            }else{
                alert(`Error no se pudo eliminar `)
            }

        }
        
    }


});






