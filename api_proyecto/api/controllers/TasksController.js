module.exports = {

		create: function(req,res){
		console.log('function : create');
		var params = req.params.all();
		Tasks.create(params, function(err, task){
			if(err){
				res.badRequest('faltan parametros o son erroneos');
			}
			res.status(201);
			res.json(task);
		});

		},

		show: function(req, res){
			console.log('function : show');
			var id = req.param('id');
			if(!id){
				res.badRequest('hace falta el parametro " id " ');
			}
			Tasks.findOne(id, function(err, task){
				if (task === undefined) return res.notFound();
				if (err) return res.badRequest('ha ocurrido en la busqueda del usuario');
				res.status(200);
				res.json(task);

			});


		},
		index : function(req,res){
			console.log('function : index');
			Tasks.find(function(err, tasks){
			if (err) return res.badRequest('ha ocurrido en la busqueda de las tareas');
			return res.json(tasks);

		});

		},

		update: function(req,res){
			console.log('function : update');
			var id = req.param('id');
			if(!id){
				res.badRequest('hace falta el parametro " id " ');
			}
			var params = req.params.all();
			Tasks.update(id,params, function(err, task){
				if (task.length === 0) return res.notFound();
				if (err) return res.badRequest('ha ocurrido en la busqueda del usuario');
				res.json(task);
			});

		},

		destroy: function(req, res){
			console.log('function : destroy');
			var id = req.param('id');
			if(!id){
				res.badRequest('hace falta el parametro " id " ');
			}
			Tasks.findOne(id ,function(err, result) {
            if (err) return res.serverError(err);
            if (!result) return res.notFound();
            Tasks.destroy(id, function(err) {
                if (err) res.serverError(err);
                return res.json(result);
            });

        });
		}


};
