const express = require('express')

const port = 9080;

const app = express();

app.set('view engine','ejs');

let users = []

app.use(express.urlencoded());


app.get('/',(req,res)=> {
    return res.render('index',{
       all:users
    });
})

// record add 
app.post('/recordInsert',(req,res)=>{
    const{ name,phone } = req.body;
    let obj = {

        id : Math.floor(Math.random()*10000),
        name : name,
        phone : phone,
    }
    users.push(obj);
    console.log("user added ");
    return res.redirect('/')
})

// delete user 
app.get('/delete',(req,res)=>{

    let id = req.query.deleteid;
    let d = users.filter(val => val.id != id);
    users = d;
    console.log("user success ");
    return res.redirect('/')

})

app.listen(port,(err)=> {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server start on port : ${port}`);
})