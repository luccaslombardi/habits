import fastity from "fastify";
import cors from "@fastify/cors"
import { PrismaClient } from "@prisma/client"

const app = fastity();
const prisma = new PrismaClient();

app.register(cors)

app.get('/', async ()  => {
    const habits = await prisma.habit.findMany()
    
    return habits
})

app.listen({
    port: 3333
}).then(() => {
    console.log("server runnning")
})