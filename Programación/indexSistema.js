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
    <p>22:30</p>
    <div class="card-materia ingles">
        <h3>Redes y comunicaciones</h3>
        <div class="card-datos">
            <h4>Clase virtual:</h4>
            <a href=""
                target="_blank"  class="btn btn-outline-secondary btnBuy">Por youTube</a>
            <p>Prof:</p>
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
        <h3>Hacking ético</h3>
        <div class="card-datos">
            <h4>Clase virtual:</h4>
            <a href="" class="btn btn-outline-secondary btnBuy">YouTube</a>
            <p>Prof: Z4vitar</p>
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
        <h3>Active Directory</h3>
        <div class="card-datos">
            <h4>Clase virtual:</h4>
            <a href="" class="btn btn-outline-secondary btnBuy">YouTube</a>
            <p>Prof:</p>
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
        <h3>Video en mi canal</h3>
        <div class="card-datos">
            <h4>Clase virtual:</h4>
            <a href="" class="btn btn-outline-secondary btnBuy">YouTube</a>
            <p>Prof: Jonathan Javier Urquiza</p>
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
        <h3>Practica de virtualizaciones y/o Laboratorio de redes</h3>
        <div class="card-datos">
            <h4>Clase virtual:</h4>
            <a href="" class="btn btn-outline-secondary btnBuy">Laboratorio</a>
            <p>Prof: </p>
        </div>
    
    </div>
</article>`;
insertar.innerHTML += html; 
}

function weekend() {
    let html ="";
    html = `
    <article class="card">
    <h2>Entrega de equipos reparados</h2>
    <p>Generalmente los fines de semana suelo dedicarlos a mi familia y a entregar equipos que reparo durante las horas nocturnas de la semana</p>
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