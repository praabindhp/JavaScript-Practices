PowerShell 7.4.2
Loading personal and system profiles took 788ms.
PS C:\Users\Admin> mongosh
Current Mongosh Log ID: 66214211d700f39c53117b7a
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.4
Using MongoDB:          7.0.8
Using Mongosh:          2.2.4

For mongosh info see: https://docs.mongodb.com/mongodb-shell/


To help improve our products, anonymous usage data is collected and sent to MongoDB periodically (https://www.mongodb.com/legal/privacy-policy).
You can opt-out by running the disableTelemetry() command.

------
   The server generated these startup warnings when booting
   2024-04-18T21:20:58.882+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> show dbs
admin   40.00 KiB
config  12.00 KiB
local   40.00 KiB
test> use shop
switched to db shop
shop> shop.products.insertOne({name: "Book In Multiverse", price: 380})
ReferenceError: shop is not defined
shop> db.products.insertOne({name: "Book In Multiverse", price: 380})
{
  acknowledged: true,
  insertedId: ObjectId('6621426fd700f39c53117b7b')
}
shop> shop.products.insertOne({name: "DC T-Shirt", price: 300})
ReferenceError: shop is not defined
shop> db.products.insertOne({name: "DC T-Shirt", price: 300})
{
  acknowledged: true,
  insertedId: ObjectId('66214290d700f39c53117b7c')
}
shop> db.products.find()
[
  {
    _id: ObjectId('6621426fd700f39c53117b7b'),
    name: 'Book In Multiverse',
    price: 380
  },
  {
    _id: ObjectId('66214290d700f39c53117b7c'),
    name: 'DC T-Shirt',
    price: 300
  }
]
shop> db.products.find().pretty()
[
  {
    _id: ObjectId('6621426fd700f39c53117b7b'),
    name: 'Book In Multiverse',
    price: 380
  },
  {
    _id: ObjectId('66214290d700f39c53117b7c'),
    name: 'DC T-Shirt',
    price: 300
  }
]
shop> db.products.find()
[
  {
    _id: ObjectId('6621426fd700f39c53117b7b'),
    name: 'Book In Multiverse',
    price: 380
  },
  {
    _id: ObjectId('66214290d700f39c53117b7c'),
    name: 'DC T-Shirt',
    price: 300
  }
]
shop> show dbs
admin   40.00 KiB
config  92.00 KiB
local   40.00 KiB
shop    72.00 KiB
shop> db.remove.shop
shop.remove.shop
shop> show dbs
admin   40.00 KiB
config  92.00 KiB
local   40.00 KiB
shop    72.00 KiB
shop> db.products.updateMany({price: {$gt: 200}}, {$set: {description: "Item In Shop"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
shop> db.products.find()
[
  {
    _id: ObjectId('6621426fd700f39c53117b7b'),
    name: 'Book In Multiverse',
    price: 380,
    description: 'Item In Shop'
  },
  {
    _id: ObjectId('66214290d700f39c53117b7c'),
    name: 'DC T-Shirt',
    price: 300,
    description: 'Item In Shop'
  }
]
shop> db.employee.insertMany([{name: "Praabindh", age: 24},{name: "Pradeep", age: 50},{name: "Bindhu", age: 44},{name: "Jai", age: 13}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('66214a5ad700f39c53117b7d'),
    '1': ObjectId('66214a5ad700f39c53117b7e'),
    '2': ObjectId('66214a5ad700f39c53117b7f'),
    '3': ObjectId('66214a5ad700f39c53117b80')
  }
}
shop> db.employee.findOne()
{
  _id: ObjectId('66214a5ad700f39c53117b7d'),
  name: 'Praabindh',
  age: 24
}
shop> db.employee.find()
[
  {
    _id: ObjectId('66214a5ad700f39c53117b7d'),
    name: 'Praabindh',
    age: 24
  },
  {
    _id: ObjectId('66214a5ad700f39c53117b7e'),
    name: 'Pradeep',
    age: 50
  },
  {
    _id: ObjectId('66214a5ad700f39c53117b7f'),
    name: 'Bindhu',
    age: 44
  },
  { _id: ObjectId('66214a5ad700f39c53117b80'), name: 'Jai', age: 13 }
]
shop> db.employee.find().pretty()
[
  {
    _id: ObjectId('66214a5ad700f39c53117b7d'),
    name: 'Praabindh',
    age: 24
  },
  {
    _id: ObjectId('66214a5ad700f39c53117b7e'),
    name: 'Pradeep',
    age: 50
  },
  {
    _id: ObjectId('66214a5ad700f39c53117b7f'),
    name: 'Bindhu',
    age: 44
  },
  { _id: ObjectId('66214a5ad700f39c53117b80'), name: 'Jai', age: 13 }
]
shop> db.employee.updateOne({_id: ObjectId('66214a5ad700f39c53117b80')}, {name: "Jai Prathyush"})
MongoInvalidArgumentError: Update document requires atomic operators
shop> db.employee.updateOne({_id: ObjectId('66214a5ad700f39c53117b80')}, {$set: {name: "Jai Prathyush"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
shop> db.employee.find().pretty()
[
  {
    _id: ObjectId('66214a5ad700f39c53117b7d'),
    name: 'Praabindh',
    age: 24
  },
  {
    _id: ObjectId('66214a5ad700f39c53117b7e'),
    name: 'Pradeep',
    age: 50
  },
  {
    _id: ObjectId('66214a5ad700f39c53117b7f'),
    name: 'Bindhu',
    age: 44
  },
  {
    _id: ObjectId('66214a5ad700f39c53117b80'),
    name: 'Jai Prathyush',
    age: 13
  }
]
shop> db.employee.updateMany({age: {$gt: 18}}, {$set: {vote: true}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0
}
shop> db.employee.find().pretty()
[
  {
    _id: ObjectId('66214a5ad700f39c53117b7d'),
    name: 'Praabindh',
    age: 24,
    vote: true
  },
  {
    _id: ObjectId('66214a5ad700f39c53117b7e'),
    name: 'Pradeep',
    age: 50,
    vote: true
  },
  {
    _id: ObjectId('66214a5ad700f39c53117b7f'),
    name: 'Bindhu',
    age: 44,
    vote: true
  },
  {
    _id: ObjectId('66214a5ad700f39c53117b80'),
    name: 'Jai Prathyush',
    age: 13
  }
]
shop> db.employee.updateMany({age: {$lt: 18}}, {$set: {vote: false}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
shop> db.employee.find().pretty()
[
  {
    _id: ObjectId('66214a5ad700f39c53117b7d'),
    name: 'Praabindh',
    age: 24,
    vote: true
  },
  {
    _id: ObjectId('66214a5ad700f39c53117b7e'),
    name: 'Pradeep',
    age: 50,
    vote: true
  },
  {
    _id: ObjectId('66214a5ad700f39c53117b7f'),
    name: 'Bindhu',
    age: 44,
    vote: true
  },
  {
    _id: ObjectId('66214a5ad700f39c53117b80'),
    name: 'Jai Prathyush',
    age: 13,
    vote: false
  }
]
shop> db.employee.deleteOne({age: {$gt: 45}})
{ acknowledged: true, deletedCount: 1 }
shop> db.employee.find().pretty()
[
  {
    _id: ObjectId('66214a5ad700f39c53117b7d'),
    name: 'Praabindh',
    age: 24,
    vote: true
  },
  {
    _id: ObjectId('66214a5ad700f39c53117b7f'),
    name: 'Bindhu',
    age: 44,
    vote: true
  },
  {
    _id: ObjectId('66214a5ad700f39c53117b80'),
    name: 'Jai Prathyush',
    age: 13,
    vote: false
  }
]
shop> db.employee.find({}, {name: 1, _id: 0})
[
  { name: 'Praabindh' },
  { name: 'Bindhu' },
  { name: 'Jai Prathyush' }
]
shop> db.employee.find({})
[
  {
    _id: ObjectId('66214a5ad700f39c53117b7d'),
    name: 'Praabindh',
    age: 24,
    vote: true
  },
  {
    _id: ObjectId('66214a5ad700f39c53117b7f'),
    name: 'Bindhu',
    age: 44,
    vote: true
  },
  {
    _id: ObjectId('66214a5ad700f39c53117b80'),
    name: 'Jai Prathyush',
    age: 13,
    vote: false
  }
]
shop> db.employee.updateOne({name: 'Bindhu'}, {$set: {_id: "mxp-456"}})
MongoServerError: Performing an update on the path '_id' would modify the immutable field '_id'
shop> db.employee.insertOne({name: 'Pradeep', _id: "30mx31my32mz", age: 50})
{ acknowledged: true, insertedId: '30mx31my32mz' }
shop> db.employee.find({})
[
  {
    _id: ObjectId('66214a5ad700f39c53117b7d'),
    name: 'Praabindh',
    age: 24,
    vote: true
  },
  {
    _id: ObjectId('66214a5ad700f39c53117b7f'),
    name: 'Bindhu',
    age: 44,
    vote: true
  },
  {
    _id: ObjectId('66214a5ad700f39c53117b80'),
    name: 'Jai Prathyush',
    age: 13,
    vote: false
  },
  { _id: '30mx31my32mz', name: 'Pradeep', age: 50 }
]
shop> db.employee.updateOne({_id: '30mx31my32mz'}, {$set: {vote: true}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
shop> db.employee.find({})
[
  {
    _id: ObjectId('66214a5ad700f39c53117b7d'),
    name: 'Praabindh',
    age: 24,
    vote: true
  },
  {
    _id: ObjectId('66214a5ad700f39c53117b7f'),
    name: 'Bindhu',
    age: 44,
    vote: true
  },
  {
    _id: ObjectId('66214a5ad700f39c53117b80'),
    name: 'Jai Prathyush',
    age: 13,
    vote: false
  },
  { _id: '30mx31my32mz', name: 'Pradeep', age: 50, vote: true }
]
shop> db.drop()
TypeError: db.drop is not a function
shop> db.products.drop()
true
shop> db.find()
TypeError: db.find is not a function
shop> show collections
employee
shop> exit
PS C:\Users\Admin> mongosh
Current Mongosh Log ID: 66214469d3ac932572117b7a
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.4
Using MongoDB:          7.0.8
Using Mongosh:          2.2.4

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-04-18T21:20:58.882+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> show collections

test> db.cars.insertMany([{company: "BMW"}, {company: "Benz"}, {company: "Bugatti"}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('662144b6d3ac932572117b7b'),
    '1': ObjectId('662144b6d3ac932572117b7c'),
    '2': ObjectId('662144b6d3ac932572117b7d')
  }
}
test> db.cars.find({})
[
  { _id: ObjectId('662144b6d3ac932572117b7b'), company: 'BMW' },
  { _id: ObjectId('662144b6d3ac932572117b7c'), company: 'Benz' },
  { _id: ObjectId('662144b6d3ac932572117b7d'), company: 'Bugatti' }
]
test> db.cars.find({}, {_id: 0, company: 1})
[ { company: 'BMW' }, { company: 'Benz' }, { company: 'Bugatti' } ]
test> db.dropDatabase()
{ ok: 1, dropped: 'test' }
test> show dbs
admin    40.00 KiB
config  108.00 KiB
local    40.00 KiB
shop     72.00 KiB
test> exit
PS C:\Users\Admin>