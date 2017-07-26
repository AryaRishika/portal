/**
 * Created by rishika on 21/7/17.
 */
function done(id){
    switch(id){

        case 'bi' :if($('#ac').attr('disabled'))
                    {
                        $('#co').click();
                     }
                    else $('#ac').click();
                     break;
        case 'ac' : if($('#co').attr('disabled'))
                    {
                        $('#pw').click();
                    }
                    else $('#co').click();
                        break;
        case 'ts' : if($('#exp').attr('disabled'))
                    {
                        $('#bi').click();
                    }
                    else $('#exp').click();
                        break;
        case 'co' : if($('#pw').attr('disabled'))
                    {
                        $('#aa').click();
                    }
                    else $('#pw').click();
                        break;
        case 'aa' :if($('#ts').attr('disabled'))
                    {
                        $('#exp').click();
                    }
                    else $('#ts').click();
                        break;
        case 'pw' : if($('#aa').attr('disabled'))
                    {
                        $('#ts').click();
                    }
                    else $('#aa').click();
                        break;
        case 'exp' : if($('#bi').attr('disabled'))
                    {
                        $('#ac').click();
                    }
                    else $('#bi').click();
                        break;
        default: break;
    }
};
function stream(){
    if($('#select').val()!=1){
        $('#ac13s').val('Not Needed').addClass("red-text");
    }
    if($('#select').val()==1)
    {
        $('#ac13s').val('Eng Stream').addClass("black-text");
    }

    console.log("streams");
};
$(function (){

    $('select').material_select();
    var lcount=localStorage.length;
    var obj={};
   obj=(localStorage.getItem('store[0]'));
   obj=(JSON.parse(obj));

    check(obj.cvid);
    $('.download').click(function(){

        if(obj.cvid=='cv1')
            create1();
        else if(obj.cvid=='cv2')
            create2();
        else create3();
    });
    $('.downloadc').click(function() {

        $('#body').css('opacity',0.3);
        setTimeout(function(){

            $('#body').css('opacity',1);
            alert('Your CV is ready.Download from below');
        },2000);
    });

   $('#bi').click(function(){

       $('#ts1').css("display","none");
       $('#ac1').css("display","none");
       $('#exp1').css("display","none");
       $('#co1').css("display","none");
       $('#aa1').css("display","none");
       $('#pw1').css("display","none");
       $('#bi1').css("display","inline-block");
       $('#bi1').css("height","600px");
       $('.infoforms1').css("display","none");

   }) ;

    $('#ac').click(function(){

        $('#bi1').css("display","none");
        $('.infoforms1').css("display","none");
        $('#pw1').css("display","none");
        $('#ts1').css("display","none");
        $('#co1').css("display","none");
        $('#exp1').css("display","none");
        $('#aa1').css("display","none");
        $('#ac1').css("display","inline-block");
        $('#ac1').css("height","800px");

    }) ;
    $('#ts').click(function(){

        $('#bi1').css("display","none");
        $('#pw1').css("display","none");
        $('#ac1').css("display","none");
        $('#co1').css("display","none");
        $('#aa1').css("display","none");
        $('.infoforms1').css("display","none");
        $('#exp1').css("display","none");
        $('#ts1').css("display","inline-block");
        $('#ts1').css("height","600px");

    }) ;
    $('#co').click(function(){

        $('#bi1').css("display","none");
        $('#ac1').css("display","none");
        $('#aa1').css("display","none");
        $('#co1').css("display","inline-block");
        $('#ts1').css("display","none");
        $('#pw1').css("display","none");
        $('.infoforms1').css("display","none");
        $('#exp1').css("display","none");
        $('#co1').css("height","350px");

    }) ;
    $('#aa').click(function(){

        $('#bi1').css("display","none");
        $('#ts1').css("display","none");
        $('#co1').css("display","none");
        $('.infoforms1').css("display","none");
        $('#exp1').css("display","none");
        $('#ac1').css("display","none");
        $('#pw1').css("display","none");
        $('#aa1').css("display","inline-block");
        $('#aa1').css("height","600px");
    }) ;
    $('#pw').click(function(){

        $('#bi1').css("display","none");
        $('#ts1').css("display","none");
        $('#co1').css("display","none");
        $('#ac1').css("display","none");
        $('.infoforms1').css("display","none");
        $('#aa1').css("display","none");
        $('#exp1').css("display","none");
        $('#pw1').css("display","inline-block");
        $('#pw1').css("height","630px");
    }) ;

    $('#exp').click(function(){

        $('#bi1').css("display","none");
        $('#ts1').css("display","none");
        $('#co1').css("display","none");
        $('#ac1').css("display","none");
        $('#aa1').css("display","none");
        $('.infoforms1').css("display","none");
        $('#pw1').css("display","none");
        $('#exp1').css("display","inline-block");
        $('#exp1').css("height","450px");
    }) ;


    function check(id){

        switch(id)
        {
            case 'cv2':$('#ac').attr("disabled",true);
                       $('#pw').attr("disabled",true);
                        break;
            case 'cv1':$('#aa').attr("disabled",true);
                        $('#exp').attr("disabled",true);
                        break;
            case 'cv3':$('#ac').attr("disabled",true);
                        $('#pw').attr("disabled",true);
                        break;
            default:break;
        }
    }

});