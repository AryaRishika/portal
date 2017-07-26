/**
 * Created by rishika on 9/7/17.
 */
var mysql = require('mysql');

var dbconfig = {
    host        : 'localhost',
    user        : 'Rishika',
    password    : 'Rishik@96',
    database    : 'newdb'
};

// function getTodos(cb){
//
//
//     var connection = mysql.createConnection(dbconfig);
//     console.log("sqlDB connected");
//     connection.connect();
//     connection.query('SELECT * FROM todos',function(err,rows,fields){
//         cb(rows);
//         //return rows;
//
//     });
//
// };
//
// function updateTodos(id,done,cb){
//
//     var connection = mysql.createConnection(dbconfig);
//     console.log("sqlDB connected");
//     connection.connect();
//     connection.query('UPDATE todos SET done='+ done +' WHERE id='+id,function(err,rows,fields){  //returns meta data
//         console.log("id updated" + id);
//
//         connection.query('SELECT * FROM todos',function(err,rows,fields){
//             cb(rows);
//
//         });
//     });
//
// };
 function addEntry(u,p,e){

     var connection = mysql.createConnection(dbconfig);
     console.log("sqlDB connected");
     connection.connect();
     connection.query('INSERT INTO users(name,password,email) VALUES("' + u +'","' + p + '","'+ e + '")',function(err,rows,fields){
         console.log(u);
     });
};
function checkEntry(u,p,cb){

    var connection = mysql.createConnection(dbconfig);
    console.log("sqlDB connected");
    connection.connect();
    connection.query('SELECT COUNT(name) FROM users  WHERE name="' + u + '" AND password="' + p +'"',function(err,rows,fields){
        var string=JSON.stringify(rows);
      //  console.log('>> string: ', string );
        var json =  JSON.parse(string);
      //  console.log(json[0]['COUNT(name)']);
        cb(json[0]['COUNT(name)']);
    });
};
function checkmail(u,cb){

    var connection = mysql.createConnection(dbconfig);
    console.log("sqlDB connected");
    connection.connect();
    connection.query('SELECT email FROM users  WHERE name="' + u + '"',function(err,rows,fields){

        var string=JSON.stringify(rows);
        //  console.log('>> string: ', string );
        var json =  JSON.parse(string);
         console.log(json[0]['email']);
        cb(json[0]['email']);

    });
};
function changeEntry(u,p){

    var connection = mysql.createConnection(dbconfig);
    console.log("sqlDB connected");
    connection.connect();
    connection.query('UPDATE users SET password="'+ p +'" WHERE password="'+u +'"',function(err,rows,fields){

    });
};

function companyi(u,cb){

    var connection = mysql.createConnection(dbconfig);
    console.log("sqlDB connected");
    connection.connect();
    connection.query('SELECT * FROM company  WHERE id="' + u + '"',function(err,rows,fields){

        var string=JSON.stringify(rows);
        //  console.log('>> string: ', string );
        var json =  JSON.parse(string);
        console.log(json[0]);
        cb(json[0]);

    });
};
function companye(obj,cb){

    var connection = mysql.createConnection(dbconfig);
    console.log("sqlDB connected");
    connection.connect();
    var query='SELECT * FROM company  WHERE';
    var flag=1;
    for(var t in obj){


        if(obj[t]=='')
            console.log(obj[t] + "yess");
       else if(obj[t]===undefined)
           console.log("yay");
       else
           if((obj[t]!=''  ||  obj[t]!=undefined)  && flag==1)
        {

            query= query +" " + t +"=" + " '" + obj[t] +"'";
            flag =0;
        }
        else if((obj[t]!=''   ||  obj[t]!=undefined)&& flag==0)
        {
            console.log(obj[t]);
            query= query +"  AND  " + t +"=" + " '" + obj[t] +"'";
        }
    }

    console.log(query);
    connection.query(query,function(err,rows,fields){

        var string=JSON.stringify(rows);
        //  console.log('>> string: ', string );
        var json =  JSON.parse(string);
        console.log(json);
       cb(json);

    });
};
function addQuery(m){

    var connection = mysql.createConnection(dbconfig);
    console.log("sqlDB connected");
    connection.connect();
    connection.query('INSERT INTO queries(msg) VALUES("' + m +'")',function(err,rows,fields){
    });
};
module.exports = {
    add: addEntry,
    check:checkEntry,
    getmail:checkmail,
    change:changeEntry,
    coInfo:companyi,
    coElig:companye,
    addquery:addQuery
};

