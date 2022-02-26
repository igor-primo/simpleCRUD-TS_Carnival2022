import express, {Request, Response, NextFunction} from 'express';
import usersRoute from './routes/users';
import errorHandler from './mid/errorhandling-mid';

const app = express();

//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//api
app.use(usersRoute);

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {

	console.log(`listening on ${port}`);

});
