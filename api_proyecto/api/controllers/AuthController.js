module.exports = {

	login: function(req, res){
		//se toman los parametros del request
		var email = req.param('email');
		var password = req.param('password');
		// se verifica que los parametros se encuentre llenos
		if(!email || !password){
			res.badRequest('hace falta el parametro " email " ');
			console.log('AuthController : Faltan paramentros');
		}

		// se realiza la busqueda en usuarios por el 'email'
		Users.findOne({email: email}).exec(function (err, data){
			  if (err) {
					res.status(500);
			    return res.negotiate(err);
			  }
			  if (!data) {
					res.status(401);
			    return res.notFound('Could not find the user, sorry.');
			  }
				// Si existe el email se verifica el password para hacer el login
				if (data.password == password){
					sails.log('Succesful login for : "%s"', data.name);
					res.status(200);
					// res.cookies.login = true;
					//res.cookies.id = data.id;
					req.session.authenticated = true;
					return res.json(data);
				}else {
					sails.log('Invalid password');
					res.status(401);
					return res.notFound('Invalid password, sorry.');
				}

		});


	},
	logout: function(req,res){
		req.session.authenticated = false;
		res.cookies.login = false;
		res.cokkies.id = null;
		console.log(res.cookies);
	}

};
