/**
 * Created by rishika on 9/7/17.
 */
var express = require('express');
var sql = require('./sql.js');
var bodyparser = require('body-parser');
var app = express();
var elig=[];
var active_client=[];
app.use('/',express.static('public_static'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// app.get('/todos/get',function(req,res)
// {
//     sql.get(function(data){
//         console.log(data);
//     });
//     res.send(todolist);
// });
app.get('/hi',function(req,res){
    res.send("finally");
});
app.get('/latest_entry',function(req,res){
    res.send(active_client);
});

app.post('/add_entry',function(req,res){

    sql.add(req.body.u,req.body.p,req.body.e);
    var obj={ user:req.body.u, passw : req.body.p , email: req.body.e};
    active_client.push(obj);
   console.log(req.body.u,req.body.p);
   res.sendFile('public_static/profile.html' , { root : __dirname});

});

app.post('/changep',function(req,res){

    sql.change(req.body.u,req.body.p);
    active_client[0]['passw']=req.body.p;
    console.log("finalyyyyyyyyyyyyyyyyyyyy");
    res.sendFile('public_static/profile.html' , { root : __dirname});


});

app.get('/remove_entry',function(req,res){

  res.sendFile('public_static/profile.html' , { root : __dirname});
});
app.get('/getr',function(req,res){
res.send(elig);

});
app.post('/message',function(req,res){
    // sql.addquery()
    console.log(req.body.msg);
    sql.addquery(req.body.msg);
    res.sendFile('public_static/index.html' , { root : __dirname});

});

app.post('/company_info',function(req,res){

    console.log("company info" + req.body.id);
    sql.coInfo(req.body.id,function(data){

      res.send(data);


    });
});

app.post('/company_elig',function(req,res){

    console.log("company elig");
    if(req.body.str=='cse' || req.body.str=='CSE')
    {
        req.body.str='CSE(No ECE)';
    }
    var obj;
    obj = {
        m_twelth: req.body.c12,
        m_tenth: req.body.c10,
        cgpa: req.body.cg,
        backlogs: req.body.back,
        age: req.body.age,
        skill1: req.body.sk1,
        skill2: req.body.sk2,
        skill3: req.body.sk3,
        profile1: req.body.prof,
        ctc: req.body.ctc,
        stream: req.body.str


    };
    console.log(obj);
    sql.coElig(obj,function(data){

        console.log("elig" + data);
        elig=data;
        res.sendFile('public_static/results.html' , { root : __dirname});


    });
});

app.post('/check_entry',function(req,res) {
    var obj={};
    sql.check(req.body.u1,req.body.p1,function(data){
        if(data==1){

            sql.getmail(req.body.u1,function(data1){
                obj={ user:req.body.u1, passw : req.body.p1, email:data1};
                active_client.push(obj);

            });

            console.log(active_client);
            res.sendFile('public_static/profile.html' , { root : __dirname});

        }
        else if(data==0)
        {
            res.send('Invalid Credentials...Please go back and login again');
        }
        else res.send("wrong");



    });



});

app.post('/upload', function(req, res) {
    console.log("uploading.......");
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    var sampleFile = req.files.sampleFile;
    console.log(sampleFile);
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('./1.jpeg', function(err) {
        if (err)
            return res.status(500).send(err);
    });

    res.send('File uploaded!');


});

app.listen(5000,function()
{
    console.log("server is listening at port 5000");
});