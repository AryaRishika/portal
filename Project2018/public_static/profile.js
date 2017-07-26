
function addToCart(id){

    localStorage.removeItem('store[0]');
    var lcount = localStorage.length;
    var obj = { "cvid":id};
    localStorage.setItem('store['+ 0 + ']',JSON.stringify(obj));

};
function details(){



        console.log("details");
    $('.user').css('display','block');
  $.get('http://localhost:5000/latest_entry' , function(data){

      localStorage.setItem('entry[0]',JSON.stringify(data[0]));
      $('#u').text(data[0].user);
      $('#e').text(data[0].email);
      $('#p').text("");
      $('#old_p').text("");
      var count=(data[0].passw).length;
      for(var i=0;i<count;i++)
      {
          $('#p').append('*');
          $('#old_p').append(data[0].passw[i]);
      }


  });
  $('#dropdown1').css('visibility','visible');

};


function logout(){

    console.log("logout");
    localStorage.removeItem('entry[0]');
    localStorage.removeItem('store[0]');

};
$(function(){

    $('ul.tabs').tabs();
    $('.slider').slider();
// the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('#closef').click(function(){

        console.log("closed");
        $('.user').css('display','none');

    });

    $('#closef').click(function(){

        $('.user').css('display','none');

    });







});