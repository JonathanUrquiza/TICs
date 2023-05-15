//Modificamos el titulo
document.title= "Análisis de sistemas";
//LLamamos a los nodos en el documento
const dia = document.getElementById('dia');
const calendario = document.getElementById('calendario');
const insertar = document.getElementById('insertar');



const fecha = new Date()
console.log(fecha);
console.log(fecha.getFullYear());
console.log(fecha.getMonth()+1);
console.log(fecha.getDay());
console.log(fecha.toUTCString());
 const weekday = fecha.getDay();

//funciones
function monday() {
    let html ="";
    html = `<article class="card">
    <h2>Lunes</h2>
    <p>18:30</p>
    <div class="card-materia ingles">
        <h3>Ingles Técnico</h3>
        <div class="card-datos">
            <h4>Clase virtual:</h4>
            <a href="https://us04web.zoom.us/j/71964430054?pwd=MmVU8CLPRjXTFB1d7eubyFZUOIfEnr.1"
                target="_blank">Zoom</a>
            <p>Prof: Mackievicz Adrea</p>
        </div>
        <div>
            <h4>TP online</h4>
            <a href="https://es.liveworksheets.com/vp646292sk">Tarea 1°</a>
            <a href="https://es.liveworksheets.com/nd641084if">Tarea 2°</a>
            <h5>Codigo de envio</h5>
            <p>c6d9u3845yz</p>
        </div>
       
    </div>
    <hr>
    <div class="card-materia">
        <h3>Lógica computacional</h3>
        <p>Terminando Inglés</p>
        <div class="card-datos">
            <h4>Clase virtual:</h4>
            <a href="https://us04web.zoom.us/j/4517113715?pwd=TW13VjJlUFpZODJ3bWhtUW9wYU5qZz09"
                target="_blank">Zoom</a>
            <p>Prof: Ferro Croce Cristina</p>
        </div>
    </div>
</article>`;
insertar.innerHTML += html; 
}



function weekend() {
    let html ="";
    html = ` <article class="card">
    <h2>Fin de semana</h2>
    <p>Hay que hacer la tareas.</p>
    </article>`; 
    insertar.innerHTML += html;
    
}

if (5 < weekday) {
    if (weekday == 1) {
        monday()
    } else if (weekday == 2) {
        tuesday()
    } else if (weekday == 3) {
        wendnesday()
    } else if (weekday == 4){
        Thursday()
    } else if (weekday == 5) {
        Friday()
    }
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

