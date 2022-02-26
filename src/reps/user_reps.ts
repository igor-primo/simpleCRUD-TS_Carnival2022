import User from '../models/user_model';
import db from '../db';
import DatabaseError from '../errors/database_error';

/*
 * the methods in the following
 * must return an error, if needed.
 * handling is done on the calling
 * functions
 */

class userReps {

	async findAllUsers(): Promise<User[]>{

		const query = `
			SELECT uuid, username FROM application_user;
		`;

		let rows;
		try{

			const {rows} = await db.query<User[]>(query);
			return rows || [];

		} catch(err){

			console.log(err);
			throw err;
			return 'xi';

		}

	}

	async findById(uuid: string): Promise<User>{

		const query = `
			SELECT uuid, username
			FROM application_user
			WHERE uuid = '${uuid}';
		`;

		try{

			const {rows} = await db.query(query);
			const [user] = rows;
			return user;

		} catch(err) {

			console.log(err);
			throw new DatabaseError('Erro na consulta por id', error);

		}

	}

	async create(user: User): Promise<String>{

		const {username, password} = user;

		const query = `
			INSERT INTO application_user(
				username,
				password
			) VALUES (
				${username},
				crypt(${password},
					  'my_salt')
			) RETURNING uuid;
		`;

		try{

			const {rows} = await db.query<{uuid: String}>(query);
			const [user] = rows;
			return user.uuid;

		} catch (err){

			console.log(err);
			throw err;

		}

	}
	
	async update(user: User): Promise<void>{

		const {username, password, uuid} = user;

		const query = `
			UPDATE application_user
			SET
				username ${username},
				password ${password}
			WHERE uuid = ${uuid};
		`;

		try{

			const {rows} = await db.query<{uuid: String}>(query);

		} catch (err){

			console.log(err);
			throw err;

		}

	}

	async removeUser(uuid: string): Promise<void>{

		const query = `
			DELETE
			FROM application_user
			WHERE uuid = ${uuid}
		`;

		try {

			await db.query(query);

		} catch (err) {

			console.log(err);
			throw err;

		}

	}

}

export default new userReps();
