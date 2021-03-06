const db = require('../data/db-config');

function find(table) {
  return db(table) 
};

function add(addedObject, table) { 
  return( 
    db(table) 
    .insert(addedObject) 
    .then( id => {
      return findById(id[0], table)
    })
  )
};
    
function findById(id,table) {
  return db(table).where({ id }).first() 
};

function findBy(filter) {
  return db("users").where(filter).orderBy("id"); 
};

function update(changes, id, table) {
  return db(table) 
  .update(changes)
  .where({ id })
  .then( () => {
      return findById(id, table)
  })
};

function remove(id, table) {
  let removed
  findById(id, table).then(rez => removed=rez)
  return db(table) 
    .where({ id })
    .del()
    .then(() => {
      return removed
    })
};

module.exports ={
  find,
  add,
  findById,
  findBy,
  update,
  remove
};