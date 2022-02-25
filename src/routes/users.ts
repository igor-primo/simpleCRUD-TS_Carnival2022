import {Router, NextFunction, Request, Response} from 'express';

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getSingleUser);
router.post('/users', postUser);
router.put('/users/:id', modUser);
router.delete('/users/:id', delUser);

function getUsers(req: Request, res: Response, next: NextFunction){

	const users = [];
	return res.status(200).json({users});

}

function getSingleUser(req: Request, res: Response, next: NextFunction){

	const uuid = req.params.uuid;
	return res.status(200).json({uuid});

}

function postUser(req: Request, res: Response, next: NextFunction){

	console.log(req.body);
	const body = req.body;
	//it seems typescript is very strict
	//with regard to object depth
	return res.status(200).json({body});

}

function modUser(req: Request, res: Response, next: NextFunction){
	
	const uuid = req.params.uuid;

	console.log(uuid);
	return res.status(200).json({uuid});

}

function delUser(req: Request, res: Response, next: NextFunction){
	
	const uuid = req.params.uuid;

	console.log(uuid);
	return res.status(200).json({uuid});

}

export default router;
