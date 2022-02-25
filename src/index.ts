import express, {Request, Response, NextFunction} from 'express';
import usersRoute from './routes/users';

const app = express();

//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//api
app.use(usersRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {

	console.log(`listening on ${port}`);

});
