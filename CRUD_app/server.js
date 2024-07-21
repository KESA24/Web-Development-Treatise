const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient

app.set('view engine', 'ejs')

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(5000, function() {
    console.log('listening on 5000')
  })

// app.get('/', (req, res) => {
// res.send('Hello World')
// })

app.use(express.static('public'))

app.use(bodyParser.json())

const mongodb_connection_string = 'mongodb+srv://kesa_26:tKSnC1kAtbKcGj48@resumepage.9dugr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

 
MongoClient.connect(mongodb_connection_string, { useUnifiedTopology: true })

  .then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html')
        console.log(__dirname)
        // Note: __dirname is the current directory you're in. Try logging it and see what you get!
        // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
      })
    

    app.post('/quotes', (req, res) => {
        quotesCollection.insertOne(req.body)
          .then(result => {
            res.redirect('/')
          })
          .catch(error => console.error(error))
      })

      app.get('/quotes', (req, res) => {
        db.collection('quotes').find().toArray()
          .then(results => {
            console.log(results)
          })
          .catch(error => console.error(error))
        // ...
      })

      app.get('/qp', (req, res) => {
        db.collection('quotes').find().toArray()
          .then(results => {
            res.render('index.ejs', { quotes: results })
          })
          .catch(/* ... */)

      })
    
      app.put('/quotes', (req, res) => {
        quotesCollection.findOneAndUpdate(
            { name: 'Yoda' },
            {
              $set: {
                name: req.body.name,
                quote: req.body.quote
              }
            },
            {
              upsert: true
            }
          )
            .then(result => {
                // console.log(result)
                res.json('Success')
               })
            .catch(error => console.error(error))
      })

      
    
  })
  .catch(error => console.error(error))






















  
  //   If you want to use callback instead of promises,
// MongoClient.connect(mongodb_connection_string, (err, client) => {
//     useUnifiedTopology: true
//     if (err) return console.error(err)
//     console.log('Connected to Database')
//   })

