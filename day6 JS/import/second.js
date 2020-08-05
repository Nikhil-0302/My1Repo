

var myobj = require('./first');
//Import myobj from ./

console.log(myobj.user)

console.log(myobj.dbquery.find("Student"))

Output--->[ { name: 'Jeff', role: 'CEO' }, { name: 'Mark', role: 'CFO' } ]
          Select from Student