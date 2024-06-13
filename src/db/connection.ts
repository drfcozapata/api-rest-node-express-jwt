import mysql from 'mysql';

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '1301',
	database: 'restaurant',
});

export default connection;
