module.exports = function(app) {
	app.get('/beer', (req, res) => {
		if (!req.headers.authorization || req.headers.authorization !== 'VerySecretToken') {
			res.status(401);
			res.send('Unauthorized');
			return;
		}

		const response = {  
		   "items":[  
		      {  
		         "id":"1",
		         "name":"Šviesusis",
		         "bitterness":3,
		         "color":"light",
		         "alc":6
		      },
		      {  
		         "id":"2",
		         "name":"Tamsusis",
		         "bitterness":5,
		         "color":"dark",
		         "alc":8
		      },
		      {  
		         "id":"3",
		         "name":"Karamelinis",
		         "bitterness":4,
		         "color":"dark",
		         "alc":7
		      },
		      {  
		         "id":"4",
		         "name":"Kvietinis",
		         "bitterness":3,
		         "color":"light",
		         "alc":4
		      }
		   ],
		   "itemCount":4
		}

		res.send(response);
	});
};