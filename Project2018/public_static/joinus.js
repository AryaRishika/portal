/**
 * Created by rishika on 25/7/17.
 */
// $("input").focus(function(){
//     $(".focusbox").css("border-color","red");
//     console.log("hiiiiiiiiiii");
// });
function change(id){

    for(var i=1;i<=4;i++)
    {
        $(".focusbox"+i).css("border","1px solid black");

    }
    $(".focusbox"+id).css("border","2px solid red");
    console.log("hiiiiiiiiiii");

};
function subscribe() {
    alert('Operation Successful');

};
function messagecollect()
{
        $.post('http://localhost:5000/message',{msg :$('#4').val()},function(data)
        {
            console.log(data);
            alert('Response Recorded');
            setTimeout(function(){
                location.reload();

            },4000);
        });

}