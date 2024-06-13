import express from 'express';
import { addUser, loginUser } from './controllers/user.controller';
import { errorHandler } from './middlewares/errorHandler';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.post('/addUser', addUser);
app.post('/login', loginUser);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
