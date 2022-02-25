import express, {Request, Response, NextFunction} from 'express';
const app = express();

app.get('/status', (req: Request, res: Response, next: NextFunction) => {

	res.send('bla');

});

const port = process.env.PORT || 5000;

app.listen(port, () => {

	console.log(`listening on ${port}`);

});
