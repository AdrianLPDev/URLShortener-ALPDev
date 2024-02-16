const express = require('express');
const mongoose = require('mongoose');
const app = express();
const shortUrl = require('./models/shortUrl');
const cors = require('cors') 

// enabling CORS for any unknown origin(https://xyz.example.com) 
app.use(cors()); 

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extendend: true }));

//DB
mongoose.connect('mongodb://localhost:5000/urlShortener', {

})

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    const shortUrls = await shortUrl.find();
    res.render('index', { shortUrls: shortUrls });
});

app.post('/shortUrls', async (req, res) => {
    await shortUrl.create({
        full: req.body.fullUrl
    })
    res.redirect('/');
});

app.get('/:shortUrl', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl == null) return res.sendStatus(404)
  
    shortUrl.clicks++
    shortUrl.save()
  
    res.redirect(shortUrl.full)
  })
  

app.listen(process.env.PORT || 5000);