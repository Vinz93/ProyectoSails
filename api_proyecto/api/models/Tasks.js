/**
* Tasks.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	description:{
  		type: 'string',
  		required: true
  	},
  	finish_date: {
  		type: 'date'
  	},
  	priority:{
  		type: 'integer'
  	},
  	type_task:{
  		type: 'string'
  	},
  	owner:{
  		model: 'Users'
  	}

  }
};

