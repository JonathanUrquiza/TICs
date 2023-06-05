const conjuncion = document.getElementById('conjuncion'),
    div = document.createElement('div'), table = document.createElement('table');
const P = true, Q = true, R = true;

div.innerHTML.table
conjuncion.appendChild(div)



function tabla(P, Q) {


    let html = "";
    html = `
    <table class="">
    <tr class="d-flex flex-row justify-content-between text-center">
        <td class="card">${P}</td>
        <td class="card">${Q}</td>
        <td class="card">(P ^ Q)</td>
    </tr>
    <tr class="d-flex flex-row justify-content-between text-center">
        <td class="card">V</td>
        <td class="card">V</td>
        <td class="card">V</td>
    </tr>
    <tr class="d-flex flex-row justify-content-between text-center">
        <td class="card">V</td>
        <td class="card">F</td>
        <td class="card">F</td>
    </tr>
    <tr class="d-flex flex-row justify-content-between text-center">
        <td class="card">V</td>
        <td class="card">F</td>
        <td class="card">F</td>
    </tr>
    <tr class="d-flex flex-row justify-content-between text-center">
        <td class="card">V</td>
        <td class="card">F</td>
        <td class="card">F</td>
    </tr>
</table>`;
}