# ProyectoSails

**Api restful  TODO list**
`npm install sails -g`
`sails lift`

**model**

users
tasks

**relationship:**

user 1 ------ * tasks  

**Ejemplos**

**1)** json response to task  
`get localhost:1337/tasks/:id`

**2)** json response to user

`get localhost:1337/users/:id`

http://pastie.org/10347312


## BD Configuration (Mysql) --Workbenck--

Install from NPM.

```bash
# In your app:
$ npm install sails-mysql
```

## Sails Configuration

Add the mysql config to the config/connections.js file. Basic options:

```javascript
module.exports.connections = {
  mysql: {
    module    : 'sails-mysql',
    host      : 'localhost',
    port      : 3306,
    user      : 'username',
    password  : 'password',
    database  : 'MySQL Database Name'

    // OR (explicit sets take precedence)
    module    : 'sails-mysql',
    url       : 'mysql2://USER:PASSWORD@HOST:PORT/DATABASENAME'
    
    // Optional
    charset   : 'utf8',
    collation : 'utf8_swedish_ci'
  }
};
```

And then change default model configuration to the config/models.js:

```javascript
module.exports.models = {
  connection: 'mysql'
};
```