const { Router } = require('express')
const assert = require('assert')
const MongoClient = require('mongodb').MongoClient
// const url = 'mongodb+srv://nonownonow:@dev-vs66p.mongodb.net/test?retryWrites=true&w=majority';
const url = 'mongodb://localhost:27017'
const dbName = 'board'
const client = new MongoClient(url,
  { useNewUrlParser: true, useUnifiedTopology: true })

// Database Name
const router = Router()

const insertDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('documents')
  // Insert some documents
  collection.insertMany([
    { a: 1 }, { a: 2 }, { a: 3 },
  ], function (err, result) {
    assert.equal(err, null)
    assert.equal(3, result.result.n)
    assert.equal(3, result.ops.length)
    console.log('Inserted 3 documents into the collection')
    callback(result)
  })
}
// Use connect method to connect to the Server
client.connect(function (err) {
  assert.equal(null, err)
  console.log('Connected successfully to server')

  const db = client.db(dbName)

  insertDocuments(db, function () {
    client.close()
  })
})
/* GET users listing. */

router.get('/board', function (req, res, next) {
  /*
  [
  {
    $match: {
      "parent": null
    }
  }, {
    $graphLookup: {
      from: 'board',
      startWith: "$board_id",
      connectFromField: 'board_id',
      connectToField: 'parent',
      as: 'comments'
    }
  }, {
    $skip: 5
  }, {
    $limit: 5
  }
]
  */
  res.json(articles)
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < articles.length) {
    res.json(articles[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
