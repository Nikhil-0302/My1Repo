

///Imports nd Exports

var dbobj={}

dbobj.user=[
    {
        name:'Jeff',
        role:'CEO'
    },
    {
        name:'Mark',
        role:'CFO'
    }
]

dbobj.dbquery={
    find:(table) => {return `Select from ${table}`},
    insert:(table,dbobj) => {return `Insert into ${table} name, city Values(${dbobj.name}, ${dbobj.city})`}
}


module.exports = dbobj;
//Export default dbobj