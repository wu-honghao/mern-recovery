import "dotenv/config" // import .env
import express from 'express'
import cors from "cors"
import jobRouter from './routes/jobRoutes.js'
import mongoose from 'mongoose'
import { errorHandler } from "./middleware/errorHandler.js"
import userRouter from "./routes/userRoutes.js"
import { authMiddleware } from "./middleware/authMiddleware.js"

const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use('/auth', userRouter)
app.use('/jobs', authMiddleware, jobRouter)
app.use(errorHandler)

const startServer = async () => {
  await mongoose.connect(process.env.MONGO_URI!)

  app.listen(3000, () => {
    console.log("Server running on port 3000")
  })
}

startServer()

export default app