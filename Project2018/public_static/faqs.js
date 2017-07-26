/**
 * Created by rishika on 25/7/17.
 */


function searchfaq(){

  console.log($('#sfaq').val()  );
  // $('#afaq').prop("href","#eligible");
  // $('#eligiblee').css("background-color","red");
    switch($('#sfaq').val() )
    {
        case 'profile':$('#afaq').prop("href","#profile");
                        $('#profilee').css("background-color","red");
                        $('#profile1e').css("background-color","red");
                        break;
        case 'update':  $('#afaq').prop("href","#update");
                        $('#updatee').css("background-color","red");
                        break;
        case 'resume': $('#afaq').prop("href","#resume");
                        $('#resumee').css("background-color","red");
                        break;
        case 'placements': $('#afaq').prop("href","#place");
                        $('#placee').css("background-color","red");
                        break;
        case 'download': $('#afaq').prop("href","#resume");
                        $('#resumee').css("background-color","red");
                        break;

        default:break;
    }
};


function palti() {

  console.log("bjsbjdsjk");
  setTimeout(function(){

     $('.collapsible-header').css("background-color","white") ;
     //  $('.collapsible-header').animate({backgroundColor:"white"},'fast');
  },3000);

};
$(document).ready(function(){
    $('.modal').modal();
    $('#modal1').modal('open');
    $('#modal1').modal('close');
    $('.collapsible').collapsible();
    $('.fixed-action-btn').openFAB();
    $('.fixed-action-btn').closeFAB();
    $('.fixed-action-btn.toolbar').openToolbar();
    $('.fixed-action-btn.toolbar').closeToolbar();


});
