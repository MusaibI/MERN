import express from 'express'
import userRouter from './features/user/user.routes.js';
import connectToMongoDB from './config/database.js';
import financialRouter from './features/financial/financial.routes.js';
import jwtAuth from './middleWare/jwt.js';
import cors from 'cors'

const app = express();

var corsOptions = {
    origin: 'http://localhost:3000',
}

app.use(cors(corsOptions));

app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/financial-details', jwtAuth, financialRouter)

app.listen(8050, () => {
    console.log("Server is listening to 8050 port");
    connectToMongoDB();
})