/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	login: function(req, res){
		var email = req.param('email');
		if(!email){
			res.badRequest('hace falta el parametro " email " ');
		}
		Users.findOne(email, function(err,user){
			if (err) return res.badRequest('ha ocurrido en la busqueda del usuario');
			if (user === undefined){
				res.cookies.login = false;
				res.cookies.id = null;
				return res.notFound();
			}
			res.status(201);
			res.cookies.login = true;
			res.cookies.id = user.id;
			res.json(user);
			console.log(res.cookies);
		});
	},
	logout: function(req,res){
		res.cookies.login = false;
		res.cokkies.id = null;
		console.log(res.cookies);
	}

};
