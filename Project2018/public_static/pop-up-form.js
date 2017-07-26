/**
 * Created by Arya on 7/1/2017.
 */
'use strict';
$("#lbnav").sideNav();

/*

 $(function () {

 var button=document.getElementById('popup');
 var f=document.getElementById('p_form');
 var body=document.getElementById('body');
 var cl=document.getElementById('closef');
 var cl1=document.getElementById('close1f');
 var signin=document.getElementById('signin');
 var f1=document.getElementById('p1_form');
 var entry=document.getElementById('1');
 var entryn=document.getElementById('2');
 var sidelist=document.getElementById('sidelist');
 var count=0;
 var todo=[];
 var eid=$('#eid');
 var uid=$('#uid');
 var pid=$('#pid');
 var tid=$('#tid');

 var eid1=$('#eid1');
 var pid1=$('#pid1');

 var lb=document.getElementById('lbnav');
 var sidebar=$('.lb');
 var lcount=0;

 retreive();
 imgchange();
 add_list(0);
 console.log(todo);
 button.onclick = function () {

 f.style['display']='block';
 f.style['background-color']=['white'];

 };
 cl.onclick = function () {
 f.style['display']='none';

 };
 signin.onclick = function () {

 f1.style['display']='block';
 f1.style['background-color']=['white'];
 };
 entry.onclick= function () {
 var flag=1;

 for(var i=0;i<(Object.keys(todo).length);i++) {
 if (todo[i]['uid'] === uid.val()) {
 alert("User_name taken");
 f.style["display"]=["none"];
 flag = 0;
 i = 999;
 }
 }
 if(flag==1){

 todo.push(
 {"eid":eid.val(),
 "uid":uid.val(),
 "pid":pid.val(),
 "tid":tid.val(),
 });

 localStorage.setItem('store['+ lcount + ']',JSON.stringify(todo[lcount]));
 alert("Successfully registered");
 f.style["display"]=["none"];
 add_list(1);
 }
 flag=1;

 // $('.box2').addClass("loader").load("success_sign_up.html");

 };
 entryn.onclick= function () {

 var flag=1;
 for(var i=0;i<(Object.keys(todo).length);i++)
 {
 if(todo[i]['eid']=== eid1.val()  && todo[i]['pid']=== pid1.val())
 {
 alert("Successfully logined");
 flag=0;
 f1.style["display"]=["none"];
 i=999;

 }

 }
 if(flag==1)
 {
 alert("Invali id or password");
 f1.style["display"]=["none"];


 }
 };
 cl1.onclick = function () {
 f1.style['display']='none';
 };
 function imgchange()
 {
 setInterval(image(),1000);

 };
 function image()
 {
 var i=document.getElementById('img1');
 // console.log(count);
 if(count%2==0)
 {
 console.log(i.style['src']);
 i.style['src']=['https://luna1.co/dabe5c.png'];
 count++;
 }
 else if(count%3==0)
 {
 console.log("hiii");
 i.style['src']=['https://luna1.co/8c297e.png'];
 count++;
 }
 else {
 i.style['src']=['https://luna1.co/8e6f30.png'];
 count++;
 }
 };


 function retreive() {

 var length1=localStorage.length;
 for(var i=0;i<length1;i++)
 {
 todo[i]=JSON.parse(localStorage.getItem('store['+ i + ']'));


 }
 lcount=length1;
 console.log("no of users" + lcount);
 };

 function removelist(i)
 {
 console.log("jdhsjf");
 console.log(todo[i]);
 localStorage.removeItem(i);

 };

 function add_list(n)
 {
 if (n == 0) {
 for (var i = 0; i < (Object.keys(todo).length); i++) {
 sidelist.innerHTML += '<li style="padding-left:5px;" ' + 'id=' + i + ' ><span><a href="#" id="close1f"><i class="fa fa-close" aria-hidden="true"></i></a></span>' + todo[i]['uid'] + '</li>';
 $('#sidelist').on('click', 'li', function () {
 console.log(todo[this.id]['uid']);
 localStorage.removeItem('store[' + this.id + ']');
 });

 }
 } else {
 sidelist.innerHTML += '<li style="padding-left:5px;">' + todo[(Object.keys(todo).length) - 1]['uid'] + '</li>';
 }

 };


 });
 //ista accesss token ::5685227449.d713cab.9d41222c28dd42db84342a3522168464
 */


$(function()
{

    $('.modal').modal();
    $('#modal1').modal('open');
    $('#modal1').modal('close');
    localStorage.removeItem('entry[0]');
    localStorage.removeItem('store[0]');
    /********************** Sign-in **********************/
    var signin=document.getElementById('signin');
    var f1=document.getElementById('p1_form');
    var cl1=document.getElementById('close1f');

    // signin.onclick = function () {
    //
    //     $('#pid1').text("");
    //
    //     f1.style['display']='block';
    //     f1.style['background-color']=['white'];
    // };
    // cl1.onclick = function () {
    //     f1.style['display']='none';
    // };

    /*********************  Ends ****************************/

    /******************** SIGN-UP ****************************/
    var signup=document.getElementById('signup');
    var f=document.getElementById('p_form');
    var body=document.getElementById('body');
    var cl=document.getElementById('closef');
    signup.onclick = function () {

        $('#pid1').text("");
        f.style['display']='block';
        f.style['background-color']=['white'];
    };
    cl.onclick = function () {
        f.style['display']='none';
    };
    /**********************ENDS ********************************/

    $('.side_clr1').mouseenter(function()
    {
        $(this).css("color","black");
        $('.side_clra').animate({width:'100%'},"fast");

    });
    $('.side_clr1').mouseleave(function()
    {
        $(this).css("color","white");
        $('.side_clra').animate({width:'7px'});

    });



    $('.side_clr2').mouseenter(function()
    {
        $(this).css("color","black");
        $('.side_clrb').animate({width:'100%'});

    });
    $('.side_clr2').mouseleave(function()
    {
        $(this).css("color","white");
        $('.side_clrb').animate({width:'7px'});

    });



    $('.side_clr3').mouseenter(function()
    {
        $(this).css("color","black");
        $('.side_clrc').animate({width:'100%'});

    });
    $('.side_clr3').mouseleave(function()
    {
        $(this).css("color","white");
        $('.side_clrc').animate({width:'7px'});

    });

    $('.android').hover(function()
    {
        $(this).css("background-color","red");
    });
    $('.android').mouseleave(function()
    {
        $(this).css("background-color","white");
    });


});