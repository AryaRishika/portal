/**
 * Created by rishika on 23/7/17.
 */


function kya(){


  console.log("kyaaaaaaaa");
};
function show(i){

  console.log(i);
  $.post('http://localhost:5000/company_info',{id:i},function(data){

      $('#entry01').html('<b>' +  data['name'] + '</b>');
      $('#entry02').html( data['date']);
      $('#entry03').html( data['selected']);
      $('#entry1').html( data['cgpa'] + ' and above and for '+ data['stream']);
      $('#entry2').html( data['profile1']);
      $('#entry3').html( data['skill1'] + ',' + data['skill2'] + ',' + data['skill3']   );
      $('#entry4').html( data['ctc']);
      $('#entry5').html( data['m_tenth'] + '% and  %' + data['m_twelth'] + ' respectively');
      console.log(data['selected']);
  });


};

function intake(){

    $('.display').css("display","none");
    $('.intake').css("display","block");
    $('#layouts').append($('.intake'));
};
$(document).ready(function(){

    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered

    
    $("img.lazy").lazyload( {
        effect: "fadeIn"
    } );
    $('.modal').modal();
    $('#modal1').modal('open');
    $('#modal1').modal('close');
    $('select').material_select();


});