import jwt from 'jsonwebtoken';

export const generateToken = (user: {
	username: string;
	name: string;
	email: string;
}) => {
	const secretKey = process.env.SECRET_KEY;
	if (!secretKey) {
		throw new Error('SECRET_KEY is not defined');
	}

	return jwt.sign(
		{ username: user.username, name: user.name, email: user.email },
		secretKey,
		{ expiresIn: '3h' }
	);
};
