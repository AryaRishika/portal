/**
 * Created by rishika on 25/7/17.
 */
$(function(){


   $.get('http://localhost:5000/getr',function (data) {

      for(var i=0;i<data.length;i++)
      {
          console.log(data[i]['path']);
          $('.last').append(
              '<div class="row">'+
              '<div class="col s11">'+
          '<div class="row">'+
          '<div class="col s2"><img src="' + data[i]['path'] + '" style="width:170px;height:150px;"></div>'+
         '<div class="col s8"> <div class="row" style="margin-top: 10px;"> <div class="col s4">'+
          '<span ><b>Name &nbsp;</b></span>'+
            '<span>'+ data[i]['name'] +'</span>'+
            '</div> <div class="col s4"> <span ><b>10th:: &nbsp;</b></span>'+
            '<span>' + data[i]['m_tenth'] +'</span>'+
            '</div> <div class="col s4"> <span><b>12th:: &nbsp;</b></span>'+
            ' <span>' + data[i]['m_twelth'] +'</span>'+
      '</div> </div> <div class="row" style="margin-top: 10px;"> <div class="col s4"> <span ><b>CTC &nbsp;</b></span>'+
         '<span>' + data[i]['ctc'] +'</span>'+
      '</div> <div class="col s4"> <span ><b>Stream &nbsp;</b></span>'+
      '<span>' + data[i]['stream'] +'</span>'+
      '</div> <div class="col s4"> <span><b>Profile&nbsp;</b></span>'+
        '<span>' + data[i]['profile1'] +'</span>'+
      '</div> </div> <div class="row" style="margin-top: 10px;"> <div class="col s4"> <span ><b>CGPA &nbsp;</b></span>'+
      '<span>' + data[i]['cgpa'] +'</span>'+
      '</div> <div class="col s4"> <span ><b>Backlogs &nbsp;</b></span>'+
      '<span>' + data[i]['backlogs'] +'</span>'+
     '</div> <div class="col s4"> <span><b>Selected &nbsp;</b></span>'+
      '<span>' + data[i]['selected'] +'</span>'+
      '</div> </div> </div> </div> </div> </div>');
      }
   }) ;



});