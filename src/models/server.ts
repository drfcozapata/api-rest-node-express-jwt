import express, { Application } from 'express';
import routesProduct from '../routes/product.routes';
import routesDefault from '../routes/default.routes';
import routesUser from '../routes/user.routes';

class Server {
	private app: Application;
	private port: string;

	constructor() {
		this.app = express();
		this.port = process.env.PORT || '3000';
		this.listen();
		this.middlewares();
		this.routes();
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Server is running on port ${this.port}`);
		});
	}

	routes() {
		this.app.use('/', routesDefault);
		this.app.use('/api/v1', [routesProduct, routesUser]);
	}

	middlewares() {
		this.app.use(express.json());
	}
}

export default Server;
