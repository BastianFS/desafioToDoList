//constantes
const inputTarea = document.getElementById('inputText')
const btnTarea = document.getElementById('btnAgregar')
const btnEliminar = document.getElementById('btn-eliminar')
const cuentaTareas = document.getElementById('total-span')
const cuentaTareasCompletado = document.getElementById('realizadas-span')
const tableBody = document.getElementById('table-body')

//asignar valores iniciales al arreglo tareas[]
let tareas = [
    {id: 1, tarea: "Pasear al perro", completado: true},
    {id: 2, tarea: "Darle comida al perro", completado: true},
    {id: 3, tarea: "Evitar que el perro mancille el living", completado:false}
]

//funcion para actualizar la tabla con los valores de tarea[]
function renderList(tareas){
    let html = ""
    for (let tarea of tareas) {
        html += `<tr>
                <td>${tarea.id}</td>
                <td class=${tarea.completado ? 'p-success': ''}>${tarea.tarea}</td>
                <td><button onclick="eliminar(${tarea.id})" class= "btn-eliminar" id="btn-eliminar">Eliminar</button></td>
                <td><input type="checkbox" onchange="check(this,${tarea.id})" ${tarea.completado ? 'checked' : ''}>
                </tr>`;
        }
        tableBody.innerHTML = html;

        //Contador de tareas
        cuentaTareas.textContent = ` ${tareas.length}`;

        //Contador de tareas completadas
        let filterCompletado = tareas.filter((tarea) =>tarea.completado === true);
        cuentaTareasCompletado.textContent = `${filterCompletado.length}`;
    }
//funcion para eliminar tareas
function eliminar(id){
    const index = tareas.findIndex((ele) =>ele.id == id)
    tareas.splice(index, 1)
    renderList(tareas)
}

//funcion que cambia la propiedad tarea.completado dependiendo de checkbox.checked
function check(checkbox,id){
    const index = tareas.findIndex((ele) =>ele.id == id)
    if (checkbox.checked){
        tareas[index].completado = true
    }
    else{
        tareas[index].completado = false 
    }
    renderList(tareas)
}

//activa renderlist() al cargar la página
document.addEventListener('DOMContentLoaded', function(){
    renderList(tareas)
});

//agrega tareas al clickear btnAgregar
btnTarea.addEventListener("click", () => {
    const tareaNueva = inputTarea.value
    console.log(tareaNueva)
    if(tareaNueva === ''){
        alert("Ingresar tarea por favor")
    }
    else{
        tareas.push({
            id: Date.now(), 
            tarea: tareaNueva,
            completado: false
        })
        inputTarea.value = ""
        renderList(tareas)
        console.log(tareas)
    }
    
})


