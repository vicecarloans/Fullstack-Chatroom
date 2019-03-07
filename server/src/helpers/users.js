const Promise = require('bluebird');

function getAllUserByRoom({ io, room }) {
	return new Promise((resolve, reject) => {
		io.in(room).clients((err, clients) => {
			if (err) reject(err);
			const clientNames = clients.map(client => client.username);
			resolve(clientNames);
		});
	});
}

module.exports = {
	getAllUserByRoom,
};
