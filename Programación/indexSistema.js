//Modificamos el titulo
document.title= "Análisis de sistemas";
//LLamamos a los nodos en el documento
const dia = document.getElementById('dia');
const calendario = document.getElementById('calendario');
const insertar = document.getElementById('insertar');



const fecha = new Date()
/* console.log(fecha);
console.log(fecha.getFullYear());
console.log(fecha.getMonth()+1);
console.log(fecha.getDay());
console.log(fecha.toUTCString()); */
 

//funciones
function monday() {
    let html ="";
    html = `
<article class="card">
    <h2>Lunes</h2>
    <p>18:30</p>
    <div class="card-materia ingles">
        <h3>Ingles Técnico</h3>
        <div class="card-datos">
            <h4>Clase virtual:</h4>
            <a href="https://us04web.zoom.us/j/71964430054?pwd=MmVU8CLPRjXTFB1d7eubyFZUOIfEnr.1"
                target="_blank" class="logo-name ps-2 pe-2">Zoom</a>
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
                target="_blank" class="logo-name ps-2 pe-2">Zoom</a>
            <p>Prof: Ferro Croce Cristina</p>
        </div>
    </div>
</article>
`;
insertar.innerHTML += html; 
}
function tuesday() {
    let html ="";
    html = `
    <article class="card">
    <h2>Martes</h2>
    <p>18:30</p>
    <div class="card-materia">
        <h3>Diagramación Lóigica</h3>
        <div class="card-datos">
            <h4>Clase virtual:</h4>
            <a href="https://us04web.zoom.us/j/4517113715?pwd=TW13VjJlUFpZODJ3bWhtUW9wYU5qZz09" class="logo-name ps-2 pe-2">Zoom</a>
            <p>Prof: Ferro Croce Cristina</p>
        </div>
    </div>
</article>
`;
insertar.innerHTML += html; 
}
function wendnesday() {
    let html ="";
    html = `
<article class="card">
    <h2>Miércoles</h2>
    <p>18:30</p>
    <div class="card-materia">
        <h3>TIC´s</h3>
        <div class="card-datos">
            <h4>Clase virtual:</h4>
            <a href="https://meet.google.com/uka-cnou-rfz" class="logo-name ps-2 pe-2">Meet</a>
            <p>Prof: Polcan Virginia</p>
        </div>
    </div>
    <div>
        <h4>Taera</h4>
        <p>Terminar el TP de presentación el 31/05/23</p>
        <p>Repaso del segundo parcial</p>
        <h4>Segundo parcial</h4>
        <p>7/06/22</p>
    </div> 
</article>
`;
insertar.innerHTML += html; 
}
function Thursday() {
    let html ="";
    html = `<article class="card">
    <h2>Jueves</h2>
    <p>18:30</p>
    <div class="card-materia">
        <h3>Arquitectura de las computadora</h3>
        <div class="card-datos">
            <h4>Clase virtual:</h4>
            <a href="https://meet.google.com/vqb-pyzg-ctv" class="logo-name ps-2 pe-2">Meet</a>
            <p>Prof: Virtos Gustavo</p>
        </div>
    </div>
    <div>
        <h4>Parcial</h4>
        <p>01/06/23</p>
        <h4>Entrega del tp 2°</h4>
        <p>8/06/22</p>
    </div>
</article>`;
insertar.innerHTML += html; 
}
function Friday() {
    let html ="";
    html = `<article class="card">
    <h2>Viernes</h2>
    <p>18:30</p>
    <div class="card-materia">
        <h3>Contabilidad básica y de costos</h3>
        <div class="card-datos">
            <h4>Clase virtual:</h4>
            <a href="https://meet.google.com/nfj-dxyq-kax" class="logo-name ps-2 pe-2">Meet</a>
            <p>Prof: Fernando Calvo</p>
        </div>
    
    </div>
</article>`;
insertar.innerHTML += html; 
}

function weekend() {
    let html ="";
    html = `
    <article class="card">
    <h2>Fin de semana</h2>
    <p>Hay que hacer las tareas.</p>
    </article>`; 
    insertar.innerHTML = html;
    
}
let weekday = fecha.getDay();
//console.log(weekday);
if (weekday > 0 && weekday < 6) {    
    let week = fecha.getDay();
    if (week == 1) {
        monday();
    } else if (week == 2) {
        tuesday();
    } else if (week == 3) {
      wendnesday();
    } else if (week == 4){
        Thursday();
    } else if (week == 5) {
        Friday();
    }
} else {
     weekend();
}

//FECHA
//crear elementos HTML
let p = document.createElement('p');
//asignación de elementos
p.innerHTML = fecha.toLocaleDateString();
//Modificando el DOM
dia.appendChild(p);

