//Modificamos el titulo
document.title= "Análisis de sistemas";
//LLamamos a los nodos en el documento
const dia = document.getElementById('dia');
const calendario = document.getElementById('calendario');
const insertar = document.getElementById('insertar');
const segundoCalendario = document.getElementById('segundoCalendario');


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
                target="_blank"  class="btn btn-outline-secondary btnBuy">Zoom</a>
            <p>Prof: Mackievicz Adrea</p>
        </div>
 
       
    </div>
    <hr>
    <div class="card-materia">
        <h3>Álgebra lineal</h3>
        <p>Terminando Inglés</p>
        <div class="card-datos">
            <h4>Clase virtual:</h4>
            <a href="https://meet.google.com/edi-aweo-gwy"
                target="_blank" class="btn btn-outline-secondary btnBuy">Zoom</a>
            <p>Prof:Medici Grraciela</p>
        </div>
    </div>
</article>
`;
insertar.innerHTML += html; 
}function tuesday() {
    let html ="";
    html = `
    <article class="card">
    <h2>Martes</h2>
    <p>18:30</p>
    <div class="card-materia">
        <h3>Paradigma de programación</h3>
        <div class="card-datos">
            <h4>Clase virtual:</h4>
            <a href="https://meet.google.com/qda-fugb-nsg" class="btn btn-outline-secondary btnBuy">Zoom</a>
            <p>Prof: Cirelo Silvia</p>
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
    <h2>Martes</h2>
    <p>18:30</p>
    <div class="card-materia">
        <h3>Paradigma de programación</h3>
        <div class="card-datos">
            <h4>Clase virtual:</h4>
            <a href="https://us04web.zoom.us/j/4517113715?pwd=TW13VjJlUFpZODJ3bWhtUW9wYU5qZz09" class="btn btn-outline-secondary btnBuy">Zoom</a>
            <p>Prof: Ferro Croce Cristina</p>
        </div>
    </div>
</article>
`;
insertar.innerHTML += html; 
}

function Thursday() {
    let html ="";
    html = `    <article class="card">
    <h2>Martes</h2>
    <p>18:30</p>
    <div class="card-materia">
        <h3>Practica profesional</h3>
        <div class="card-datos">
            <h4>Clase virtual:</h4>
            <a href="https://meet.google.com/qda-fugb-nsg" class="btn btn-outline-secondary btnBuy">Zoom</a>
            <p>Prof: Cirelo Silvia</p>
        </div>
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
        <h3>Estructura de las organizaciones</h3>
        <div class="card-datos">
            <h4>Clase virtual:</h4>
            <a href="https://zoom.us/j/94637699143?pwd=aGxEQ3p6R3Bqa1hNc2V2QmpMMHhhZz09" class="btn btn-outline-secondary btnBuy">Meet</a>
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

/* const menuLinks = document.querySelectorAll('.navbar__ul a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.navbar__ul a[href="#${id}"]`);

      if (entry.isIntersecting) {
        document.querySelector(".navbar__ul a.seleccionado").classList.remove("seleccionado");
        menuLink.classList.add("seleccionado");
      }
    });
  },
  { rootMargin: "-30% 0px -70% 0px" }
);

menuLinks.forEach((menuLink) => {
  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
}); */