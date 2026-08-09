import app from "./app.js"
import prisma from "./config/database.js";

const PORT = 5000;

async function startServer(){
    await prisma.$connect();

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

startServer();