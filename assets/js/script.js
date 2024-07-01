
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
        html += `<tr id="tr-${tarea.id}">
                <td>${tarea.id}</td>
                <td id="ptarea${tarea.id}">${tarea.tarea}</td>
                <td><button onclick="eliminar(${tarea.id})" class= "btn-eliminar" id="btn-eliminar">Eliminar</button></td>
                <td><input type="checkbox" onchange="checkboxCheck(checkbox${tarea.id},${tarea.id},ptarea${tarea.id})" id="checkbox${tarea.id}">
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
function checkboxCheck(checkbox,id,pid){
    if (checkbox.checked){
        tareas[id].completado = true

    }
    else{
        tareas[id].completado = false
    }
    let pTarea = document.getElementById(pid)
    if(tareas[id].completado){
        pTarea.classList.add("p-success");
    }
    else{
        pTarea.classList.remove("p-success");
    }
}

    
btnTarea.addEventListener("click", () => {
    const tareaNueva = inputTarea.value
    console.log(tareaNueva)
    if(tareaNueva === ''){
        alert("Ingresar tarea por favor")
    }
    else{
        tareas.push({
            id: i, 
            tarea: tareaNueva,
            completado: false
        })
        inputTarea.value = ""
        i += 1;
        renderList(tareas)
    }
    
})
