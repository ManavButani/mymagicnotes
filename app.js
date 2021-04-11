const express =  require('express');
const bodyParser = require('body-parser');
const path = require('path');
const datamodelModel = require('./model/mdata');

var router = express.Router();
const app = express();

app.use(express.urlencoded({ extended:true}));
app.set('view engine','ejs');
app.use('/js',express.static('js'));

app.get("/",(req,res)=>{
    res.render('index');
})

app.post("/",(req,res)=>{
 

    var detailcontect = new datamodelModel({
        title:  "Addtitle",
        note : "Notes",
    });
    
   detailcontect.save()
   .then((result)=>{
       res.redirect('/');
   })
   .catch((err)=>{
       console.log(err);
   })
    console.log(detailcontect);
})

app.listen(80);

module.exports = router;
