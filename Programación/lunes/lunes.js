

function lunes() {
    let html ="";
    html = `
<article class="card">
    <h2>Lunes</h2>
    <p>18:30</p>
    <div class="card-materia">
        <h3>Algebra Lineal</h3>
        <div class="card-datos">
            <h4>Clase virtual:</h4>
            <a href="https://meet.google.com/edi-aweo-gwy"
                target="_blank"  class="btn btn-outline-secondary btnBuy">meet</a>
            <p>Prof: Medici Graciela</p>
        </div>       
</article>
`;
insertar.innerHTML += html; 
}