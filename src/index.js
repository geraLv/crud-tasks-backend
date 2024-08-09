import express from "express"
import cors  from "cors"
import morgan from "morgan"
import { tasksRouter } from "./router.js"

const app = express()

//midellwares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.use("/tasks", tasksRouter)

app.listen(3000, ()=> {console.log("El servidor esta corriendo en el puerto 3000")});

