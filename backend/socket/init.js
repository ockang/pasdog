'use strict'

var users = [];  



module.exports.connect = (io) => {


	io.on('connection', (client, username) => {
        
        io.sockets.sockets['id'] = client.id;

		client.on('set-nickname', (user) => {

			client.user = user;
			users.push(user);
			updateClients();

		});

		client.on('disconnect', function () {
	        
	        for(var i=0; i< users.length; i++) {
	          
	            if(users[i].idsocket == client.id) {

	                delete users[users[i]];
	                console.log('entre');
	            	console.log(users);
	            }
	        }
	        updateClients(); 
	    });


		
		function updateClients() {
	        io.sockets.emit('listmap', users);
	    }
		

	});


}

