import {Router, NextFunction, Request, Response} from 'express';
import userRepository from '../reps/user_reps';

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getSingleUser);
router.post('/users', postUser);
router.put('/users/:id', modUser);
router.delete('/users/:id', delUser);

async function getUsers(req: Request, res: Response, next: NextFunction){

	const users = await userRepository.findAllUsers();
	return res.status(200).json({users});

}

async function getSingleUser(req: Request, res: Response, next: NextFunction){

	try{

		const uuid = req.params.id;
		const user = await userRepository.findById(uuid);
		return res.status(200).json({user});

	} catch (err){

		next(err);

	}

}

async function postUser(req: Request, res: Response, next: NextFunction){

	const body = req.body;
	//it seems typescript is very strict
	//with regard to object depth
	const uuid = await userRepository.create(body);
	return res.status(200).json({uuid});

}

async function modUser(req: Request, res: Response, next: NextFunction){
	
	const uuid = req.params.uuid;
	const user = req.body;
	user.uuid = uuid;

	await userRepository.update(user);

	return res.status(200).json({success:true});

}

function delUser(req: Request, res: Response, next: NextFunction){
	
	const uuid = req.params.uuid;

	console.log(uuid);
	return res.status(200).json({uuid});

}

export default router;
