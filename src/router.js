const rutas = require("express").Router();
const { mostrarTareas, editarTarea, eliminarTarea, buscarTarea } = require("./controllers") 
const { crearTarea } = require("./controllers") 

rutas.get("/tasks", mostrarTareas)
rutas.get("/tasks/:id", buscarTarea)
rutas.post("/tasks", crearTarea)
rutas.put("/tasks/:id", editarTarea)
rutas.delete("/tasks/:id", eliminarTarea)

module.exports = rutas