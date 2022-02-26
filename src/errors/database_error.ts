class DatabaseError extends Error{

	constructor(
	private messager: string,
	public error?: any
	){
		super (message);
	}

}

export default DatabaseError;
