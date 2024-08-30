import cookieParser from "cookie-parser";
import express from "express"
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.router.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());


app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);



app.listen(PORT,() => {
    connectToMongoDB();
    console.log(`server running on port ${PORT}`);
        }); 
