import fastity from "fastify";

const app = fastity();

app.get('/', () => {
    return "Hello Luccas!"
})

app.listen({
    port: 3333
}).then(() => {
    console.log("server runnning")
})