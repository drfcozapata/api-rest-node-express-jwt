import connection from '../db/connection';

interface User {
	username: string;
	name: string;
	email: string;
	password: string;
}

export const addUserService = (user: User) => {
	return new Promise<void>((resolve, reject) => {
		connection.query('INSERT INTO users SET ?', user, err => {
			if (err) {
				return reject(err);
			}
			resolve();
		});
	});
};

export const findUserByUsernameService = (username: string) => {
	return new Promise<User | null>((resolve, reject) => {
		connection.query(
			'SELECT * FROM users WHERE username = ?',
			[username],
			(err, data) => {
				if (err) {
					return reject(err);
				}
				if (data.length === 0) {
					return resolve(null);
				}
				resolve(data[0]);
			}
		);
	});
};
