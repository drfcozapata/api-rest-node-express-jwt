import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
	const token = req.headers.authorization;
	if (token !== undefined && token.startsWith('Bearer ')) {
		const bearerToken = token.slice(7);

		try {
			const secretKey = process.env.SECRET_KEY;
			if (!secretKey) {
				throw new Error('SECRET_KEY is not defined');
			}

			const validToken = jwt.verify(bearerToken, secretKey);
			next();
		} catch (error) {
			return res.status(401).json({
				error: 'Unauthorized',
			});
		}
	}
};
export default validateToken;
