import { Request, Response } from 'express';
import connection from '../db/connection';

export const getProducts = (req: Request, res: Response) => {
	connection.query('SELECT * FROM products', (err, data) => {
		if (err) {
			console.log('Error', err);
		} else {
			res.json({
				data,
			});
		}
	});
};
