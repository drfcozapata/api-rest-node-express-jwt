import mysql from 'mysql';

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '1301',
	database: 'restaurant',
});

connection.connect(err => {
	if (err) {
		console.error('Error connecting to the database:', err);
	} else {
		console.log('Connected to the database');
	}
});

export default connection;
