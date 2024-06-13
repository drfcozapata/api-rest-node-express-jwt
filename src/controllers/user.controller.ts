import { Request, Response, NextFunction } from 'express';
import { addUserService, findUserByUsernameService } from '../services/user.service';
import { generateToken } from '../config/jwt.config';
import bcrypt from 'bcrypt';

export const addUser = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { username, name, email, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);

		await addUserService({ username, name, email, password: hashedPassword });

		res.json({
			msg: 'User added successfully',
			body: req.body,
		});
	} catch (error) {
		next(error);
	}
};

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { username, password } = req.body;
		const user = await findUserByUsernameService(username);

		if (!user) {
			return res.status(404).json({ msg: 'User not found' });
		}

		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(401).json({ msg: 'Wrong password' });
		}

		const token = generateToken(user);

		res.json({ msg: 'Logged in successfully', token });
	} catch (error) {
		next(error);
	}
};
