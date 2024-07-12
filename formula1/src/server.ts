import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({logger: true,})

server.register(cors, {
    origin: "*",
    methods: ["GET", "POST"],
})

const teams = [
    {id: 1, name: "ferrari", base: "Woking, United Kingdom"},
    {id: 2, name: "mercedes", base: "Brackley, United Kingdom"},
    {id: 3, name: "red bull", base: "Milton Keynes, United Kingdom"},
]
const drivers = [
    {id: 1, name: "Max Verstappen", base: "Red bull Racing"},
    {id: 2, name: "Lewis Hamilton", base: "Ferrari"},
    {id: 2, name: "Lando Norris", base: "McLaren"},
]

server.get("/teams", async (request, response) => {
    response.type('application/json').code(200);
    return {teams};
});

server.get("/drivers", async(request, response) =>{
    response.type('application/json').code(200);
    return {drivers};
})

interface DriverParams{
    id: string
}

server.get<{Params: DriverParams}>("/drivers/:id", async(request, response) =>{
    response.type('application/json').code(200);
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);

    if (!driver){
        response.type('application/json').code(404);
        return {message: "Driver not found"};
    }else{
        response.type('application/json').code(200);
        return {driver};
    }
})

server.listen({port: 3333}, () =>{
    console.log(`server init`);
})