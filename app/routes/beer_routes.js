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
		      },
		      {  
		         "id":"5",
		         "name":"Švelnusis",
		         "bitterness":2,
		         "color":"light",
		         "alc":3
		      },
		      {  
		         "id":"6",
		         "name":"Žebengštis",
		         "bitterness":7,
		         "color":"dark",
		         "alc":10
		      },
		      {  
		         "id":"7",
		         "name":"Meškos alus",
		         "bitterness":4,
		         "color":"light",
		         "alc":8
		      },
		   ],
		   "itemCount":4
		}

		res.send(response);
	});
};