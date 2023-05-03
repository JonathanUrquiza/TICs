//Modificamos el titulo
document.title= "Análisis de sistemas";
//LLamamos a los nodos en el documento
const dia = document.getElementById('dia');
const calendario = document.getElementById('calendario')


const fecha = new Date()
console.log(fecha);
console.log(fecha.getFullYear());
console.log(fecha.getMonth()+1);
console.log(fecha.getDay());
console.log(fecha.toUTCString());
 const weekday = fecha.getDay();

//funciones
function weekmonday() {
    let html ="";
    html = ` <article class="card">
    <h2>Lunes</h2>
    <p>18:30</p>
    <div class="card-materia ingles">
        <h3>Ingles Técnico</h3>
        <div class="card-datos">
            <h4>Clase virtual:</h4>
            <a href="https://us04web.zoom.us/j/4517113715?pwd=TW13VjJlUFpZODJ3bWhtUW9wYU5qZz09">Zoom</a>
            <p>Prof: Mackievicz Adrea</p>
        </div>
    </div>
    <hr>
    <div class="card-materia">
        <h3>Lógica computacional</h3>
        <p>Terminando Inglés</p>
        <div class="card-datos">
            <h4>Clase virtual:</h4>
            <a href="https://us04web.zoom.us/j/71964430054?pwd=MmVU8CLPRjXTFB1d7eubyFZUOIfEnr.1">Zoom</a>
            <p>Prof: Ferro Croce Cristina</p>
        </div>
    </div>
</article>`; 
}
function weekend() {
    console.log('fin de semana');
}




if (5 > weekday) {
    weekmonday()
} else {
    weekend()
}
    

//FECHA
//crear elementos HTML
let p = document.createElement('p');
//asignación de elementos
p.innerHTML = fecha.toLocaleDateString();
//Modificando el DOM
dia.appendChild(p);
