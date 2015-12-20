/**
* Tasks.js
*
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
      required: true,
  		model: 'Users'
  	}

  }
};
