import express from "express";
//import router from "./routes/user.routes.js";
import router from "./routes/auth.routes.js";

const app = express();

app.use(express.json());

//app.use("/api/users", router);

app.use("/api/auth",
    router
);

export default app;