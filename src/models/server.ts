import express, { Application } from 'express';
import connection from '../db/connection';

class Server {
	private app: Application;
	private port: string;

	constructor() {
		this.app = express();
		this.port = process.env.PORT || '3000';
		this.listen();
		this.connectDB();
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Server is running on port ${this.port}`);
		});
	}

	connectDB() {
		connection.connect(err => {
			if (err) {
				console.log('Error:', err);
			} else {
				console.log('DB successfully connected');
			}
		});
	}
}

export default Server;
