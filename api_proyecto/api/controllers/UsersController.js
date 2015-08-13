/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function(req,res){
		console.log('function : create');
		var params = req.params.all();
		Users.create(params, function(err, user){
			if(err){
					return res.badRequest('faltan parametros o son erroneos');
				//res.view('404');
			}
			res.status(201);
			res.json(user);
		});

		},

		show: function(req, res){
			//if(req.cookies.login == false) return res.badRequest('no te encuentras logeado');
			console.log('function : show');
			var id = req.param('id');
			if(!id){
				return res.badRequest('hace falta el parametro " id " ');
			}
		Users.findOne(id)
		.populate('tasks')
		.exec(function(err, user) {
			if (user === undefined) return res.notFound();
			if (err) return res.badRequest('ha ocurrido en la busqueda del usuario');
			res.status(201);
			res.json(user);
		});
		/*
		Users.findOne(id, function(err, user){
			if (user === undefined) return res.notFound();
			if (err) return res.badRequest('ha ocurrido en la busqueda del usuario');

			res.status(201);
			res.json(user);

		});
	*/
		},

		index : function(req,res){
				/*
					console.log('function : index');
					Users.find(function(err, users){
					if (err) return res.badRequest('ha ocurrido en la busqueda de los usuarios');
					return res.json(users);
				});
			*/
			Users.find()
			.populate('tasks')
			.exec(function(err, users) {
				if (err) return res.badRequest('ha ocurrido un error en la busqueda de los usuarios');
				return res.json(users);
			});

		},

		update: function(req,res){
			//if(req.cookies.login == false) return res.badRequest('no te encuentras logeado');
			console.log('function : update');
			var id = req.param('id');
			if(!id){
				res.badRequest('hace falta el parametro " id " ');
			}
			var params = req.params.all();
			Users.update(id,params, function(err, user){
				if (user.length === 0) return res.notFound();
				if (err) return res.badRequest('ha ocurrido en la busqueda del usuario');
				res.json(user);
			});

		},

		destroy: function(req, res){
			console.log('function : destroy');
			var id = req.param('id');
			if(!id){
				res.badRequest('hace falta el parametro " id " ');
			}
			Users.findOne(id ,function(err, result) {
            if (err) return res.serverError(err);
            if (!result) return res.notFound();
            Users.destroy(id, function(err) {
                if (err) res.serverError(err);
                return res.json(result);
            });
        });
		}
};
