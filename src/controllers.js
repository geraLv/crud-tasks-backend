const crtl = {}
const rutas = require("./router")
const conectar = require("./database")

crtl.mostrarTareas = async(req, res)=>{
    const conexion = await conectar();
    const [ consulta ] = await conexion.query('SELECT * FROM TASKS')
    if (consulta.length == []){
        res.send("No hay tareas")
    }else{
        res.send(consulta)
    }
}

crtl.crearTarea = async(req, res)=>{
    const conexion = await conectar();
    const { title,description,isComplete } = req.body
    if(typeof(title) != "string"){
        res.send("El titulo no cumple con los requisitos")
    }else if(typeof(description) != "string"){
        res.send("La descripcion no cumple con los requisitos")
    }else if(typeof(isComplete) != "boolean"){
        res.send(" Los datos ingresados en la columna isComplete no cumple con los requisitos")    
    }else {
        const consulta = await conexion.query(`INSERT INTO TASKS (title, description, isComplete) VALUES('${title}','${description}','${isComplete}');`);
    res.send("Se creo una nueva tarea exitosamente") 
    }
}
crtl.editarTarea = async(req, res)=>{
    const conexion = await conectar();
    const { title,description,isComplete } = req.body
    const id = parseInt(req.params.id) 
    const verificacion = await conexion.query(`SELECT * FROM TASKS WHERE ID = ${id};`)
    if (verificacion.length == [] || typeof(title) != "string" || typeof(description) != "string" || typeof(isComplete) != "boolean"){
        res.send("Algunaos de los datos no coinciden")
    }else{
        const [ consulta ] = await conexion.query(`UPDATE TASKS SET title ='${title}', description = '${description}', isComplete = ${isComplete} WHERE id = ${id};`)
        res.send("Se actualizaron los datos correctamente")
    }
}

crtl.buscarTarea = async(req, res)=>{
    const conexion = await conectar();
    const id = parseInt(req.params.id)
    const {verificacion} = await conexion.query(`SELECT * FROM TASKS WHERE ID = ${parseInt(id)};`)
    if(verificacion.length == []){
        res.send("la id ingresada no existe")
    }else{const [ consulta ] = await conexion.query(`SELECT id, title, description, isComplete FROM TASKS where id = ${id}`)
    res.send(consulta)
        }
    }
crtl.eliminarTarea = async(req, res)=>{
    const conexion = await conectar();
    const id = parseInt(req.params.id)
    const [verificacion] = await conexion.query(`SELECT * FROM TASKS WHERE ID = ${id};`)
    if(verificacion.length == 0){
        res.send("la id ingresada no existe")
    }else{const [ consulta ] = await conexion.query(`DELETE FROM TASKS where id = ${id}`)
    res.send("Se elimino una tarea correctamente")
    }
}
module.exports = crtl