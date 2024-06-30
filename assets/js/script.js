

const inputTarea = document.getElementById('inputText')
const btnTarea = document.getElementById('btnAgregar')
const btnEliminar = document.getElementById('btn-eliminar')
const tareas = []
const cuentaTareas = document.getElementById('totalSpan')
const tableBody = document.getElementById('table-body')
let i = 0;

function renderList(tareas){
    let html = ""
    for (let tarea of tareas) {
        tarea.completado = false
        html += `<tr id="tr-${tarea.id}">
                <td>${tarea.id}</td>
                 <td>${tarea.tarea}</td>
                <td><button onclick="eliminar(${tarea.id})" class= "btn-eliminar" id="btn-eliminar">Eliminar</button></td>
                <td><input type="checkbox" onclick="check(${tarea.id})" id="${tarea.id}">
                </tr>`;
        }
    cuentaTareas.textContent = ` ${tareas.length}`;
    tableBody.innerHTML = html;
    }   

function eliminar(id){
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index, 1)
    renderList(tareas)
}
function buscar(id){
    const index = tareas.findIndex((ele) => ele.id == id)
    index.splice(2,1,True)
}

function success(id){
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.completado = true
    renderList(tareas)
}

function check(id){
    let checkbox = document.querySelector('input[type="checkbox"]');
    if(checkbox.checked){
        success(id)
    }
}
    
btnTarea.addEventListener("click", () => {
    const tareaNueva = inputTarea.value
    console.log(tareaNueva)
    if(tareaNueva === ''){
        alert("Ingresar tarea por favor")
    }
    else{
        tareas.push({id: i, tarea: tareaNueva})
        inputTarea.value = ""
        i += 1;
        renderList(tareas)
    }
})
