const boton = document.querySelector('#boton');
const foto = document.querySelector('#foto');
//-----Datos personales----------------------------
const nombre = document.querySelector('#nombre');
const apellido =document.querySelector('#apellido');
const edad = document.querySelector('#edad');
const nacionalidad = document.querySelector('#nacionalidad');
//----Domicilio -------------------------------------
const pais = document.querySelector('#pais');
const estado = document.querySelector('#estado');
const ciudad = document.querySelector('#ciudad');
const calle = document.querySelector('#calle');
//---Contacto--------------------------------------------
const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');
// se repite pais 
const codigo_postal = document.querySelector('#codigo_postal');



const generarUusuario = async () => {
    try {
        const url = 'https://randomuser.me/api/';
        const respuesta = await fetch(url);
        const { results } = await respuesta.json();
        const datos = results[0];

        console.log(datos);
        foto.src =datos.picture.large;

        nombre.textContent = datos.name.first;
        apellido.textContent = datos.name.last;
        edad.textContent = datos.dob.age;
        nacionalidad.textContent = datos.nat;
        //---------------------------------------
        pais.textContent = datos.location.country;
        estado.textContent = datos.location.state;
        ciudad.textContent = datos.location.city;
        calle.textContent = datos.location.street.number;
        //-----------------------------------------
        correo.textContent = datos.email;
        telefono.textContent = datos.phone;
        codigo_postal.textContent = datos.location.postcode;
        
    } catch (error){
        console.log(error);
    }

}

boton.addEventListener('click', generarUusuario);
document.addEventListener('DOMContentLoaded', generarUusuario);

function cambiarDomicilio(){
   document.getElementById("pais").innerHTML = pais.textContent;
   document.getElementById("estado").innerHTML = estado.textContent;
   document.getElementById("ciudad").innerHTML = ciudad.textContent;
   document.getElementById("calle").innerHTML = calle.textContent;
}

function cambiarContacto(){
    document.getElementById("correo").innerHTML = correo.textContent;
    document.getElementById("telefono").innerHTML = telefono.textContent;
    document.getElementById("pais").innerHTML = pais.textContent;
    document.getElementById("codigo_postal").innerHTML = codigo_postal.textContent;

}

function cambiarDatos_personales(){
    document.getElementById("nombre").innerHTML = nombre.textContent;
    document.getElementById("apellido").innerHTML = apellido.textContent;
    document.getElementById("edad").innerHTML = edad.textContent;
    document.getElementById("nacionalidad").innerHTML = nacionalidad.textContent;
}
   
document.getElementById("domicilio").onclick = cambiarDomicilio;
document.getElementById("contacto").onclick = cambiarContacto;
document.getElementById("datos_personales").onclick = cambiarDatos_personales;
