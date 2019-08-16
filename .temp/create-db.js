const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const faker = require('faker')
const fs = require('fs')
// Connection URL
const url = 'mongodb://localhost:27017'
// const url = 'mongodb+srv://nonownonow:@dev-vs66p.mongodb.net/test?retryWrites=true&w=majority';

// Database Name
const dbName = 'tutor'

// Create a new MongoClient
const client = new MongoClient(url,
  { useNewUrlParser: true, useUnifiedTopology: true })

function articleGen(){
  const article = {
    content: faker.lorem.sentences(),
    user_id: faker.lorem.word(),
    conects_id: faker.lorem.word(),
    user_nickName: faker.lorem.word(),
    user_phone: faker.phone.phoneNumberFormat(),
  }
  Object.assign(article, {
    board_id: article.conects_id+Date.now(),
    parent: null
  })
  return article
}
function getArticles (n){
  let articles = []
  for(let i=0; i<n; i++){
    articles.push(articleGen())
  }
  return articles
}
function writeComments(articles){
  let comments = []
  for(let i=0; i<articles.length; i++){
    let comment = articleGen()
    let parent = articles[Math.floor(Math.random()*10)].board_id
    comment.parent = Math.round(Math.random())? parent : null
    if(comment.parent!==null) comments.push(comment)
  }
  return comments
}
let articles = getArticles(10)
let comments = writeComments(articles)
let commentsAgain = writeComments([...articles, ...comments])
// console.log([...articles,...getComments(articles)])
let boardArticles = [...articles, ...comments, ...commentsAgain]
// fs.writeFileSync('./test.json', JSON.stringify([...articles, ...comments, ...commentsAgain]))
const insertDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('board')
  // Insert some documents

  collection.insertMany(boardArticles, function (err, result) {
    assert.equal(err, null)
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
