import { Router } from "express"

const tasksRouter = Router()

import {
    mostrarTareas,
    buscarTarea,
    crearTarea,
    editarTarea,
    eliminarTarea,
} from "./controllers.js"
tasksRouter.get("/tasks", mostrarTareas)
tasksRouter.get("/tasks/:id", buscarTarea)
tasksRouter.post("/tasks", crearTarea)
tasksRouter.put("/tasks/:id", editarTarea)
tasksRouter.delete("/tasks/:id", eliminarTarea)

export { tasksRouter }