import dotenv from 'dotenv';
import mysql from 'mysql';

dotenv.config();

const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

connection.connect(err => {
	if (err) {
		console.error('Error connecting to the database:', err);
	} else {
		console.log('Connected to the database');
	}
});

export default connection;
