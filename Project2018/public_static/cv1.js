/**
 * Created by rishika on 20/7/17.
 */
/**
 * Created by rishika on 17/7/17.
 */

    function create1() {

        var a;
        var b='';
        if($('#select').val()==1){
            a=' Engineering College';
             b=$('#ac13s').val();
        }
        else if($('#select').val()==2)
        {
            a='Commerce College';
        }
        else  a='Arts College';

        var doc = new jsPDF();


        // var doc = new jsPDF();
        //
        // var img ="data:image/jpeg;base64,";
        // doc.addImage(img,"JPEG", 140, 30, 18, 18);
        doc.setLineWidth(1.5);
        doc.rect(3, 3, 203, 292);

        doc.setFont("helvetica");
        doc.setFontSize(22);
        doc.text(13, 40, $('#icon_prefix').val());
        doc.setLineWidth(0.5);
        doc.line(13, 44, 193, 44);
        doc.setFontSize(16);
        doc.setFontType("bold");
        doc.text(13, 52, 'Email:');
        doc.setFontType("normal");
        doc.text(32, 52, $('#icon_email').val());
        doc.setFontType("bold");
        doc.text(149, 52, 'Tel:');
        doc.setFontType("normal");
        doc.text(161, 52, $('#icon_telephone').val());
        doc.setFontType("bold");
        doc.text(13, 59, 'Career Objectives');

        doc.setLineWidth(1.0);
        doc.rect(13, 62, 182, 2);

        // doc.setLineWidth(0.0);
        doc.setDrawColor(255, 255, 255);
        doc.setFillColor(211, 211, 211);
        doc.rect(13, 65, 182, 18, 'F');

        doc.setFontType("normal");
        doc.setFontSize(14);
        doc.text(14, 72, $('#col1').val());
        doc.text(14, 78, $('#col2').val());
        doc.setFontType("bold");
        doc.setFontSize(16);
        doc.text(13, 91, 'Academic Credentials');
        doc.setDrawColor(0);
        doc.setLineWidth(1.0);
        doc.rect(13, 94, 182, 2);
        doc.setDrawColor(255, 255, 255);
        doc.setFillColor(211, 211, 211);
        doc.rect(13, 97, 182, 2, 'F');
        doc.setFontType("bold");
        doc.setFontSize(14);
        doc.text(13, 107, a);
        doc.text(13, 113, b);

        doc.setFontType("normal");
        doc.setFontSize(14);
        doc.text(67, 107, $('#ac13').val());
        doc.text(67, 113, $('#ac13l').val());

        doc.text(150, 107, $('#ac13c').val());
        doc.text(173, 107, $('#ac13y').val());


        doc.setFontType("bold");
        doc.setFontSize(14);
        doc.text(13, 122, 'Higher Secondary');
        doc.text(13, 128, 'Certificate');

        doc.setFontType("normal");
        doc.setFontSize(14);
        doc.text(67, 122, $('#ac12').val());
        doc.text(67, 128, $('#ac12l').val());

        doc.text(150, 122, $('#ac12c').val());
        doc.text(173, 122, $('#ac12y').val());


        doc.setFontType("bold");
        doc.setFontSize(14);
        doc.text(13, 137, 'Secondary School ');
        doc.text(13, 143, 'Leaving Certificate');

        doc.setFontType("normal");
        doc.setFontSize(14);
        doc.text(67, 137, $('#ac10').val());
        doc.text(67, 143, $('#ac10l').val());

        doc.text(150, 137, $('#ac10c').val());
        doc.text(173, 137, $('#ac10y').val());


        doc.setFontType("bold");
        doc.setFontSize(16);
        doc.text(13, 156, 'Technical Skills');
        doc.setDrawColor(0);
        doc.setLineWidth(1.0);
        doc.rect(13, 159, 182, 2);
        doc.setDrawColor(255, 255, 255);
        doc.setFillColor(211, 211, 211);
        doc.rect(13, 162, 182, 2, 'F');
        doc.setFontType("bold");
        doc.setFontSize(14);
        doc.text(13, 172, 'Programming Languages');
        doc.text(13, 180, 'Database');

        doc.setFontType("bold");
        doc.setFontSize(14);
        doc.text(78, 172, ':');
        doc.text(78, 180, ':');

        doc.setFontType("normal");
        doc.setFontSize(14);
        doc.text(82, 172, $('#tsp').val());
        doc.text(82, 180, $('#tsd').val());

        doc.setFontType("bold");
        doc.setFontSize(14);
        doc.text(13, 189, 'Operating Systems');
        doc.text(13, 197, 'Designing Tools');

        doc.setFontType("bold");
        doc.setFontSize(14);
        doc.text(78, 189, ':');
        doc.text(78, 197, ':');

        doc.setFontType("normal");
        doc.setFontSize(14);
        doc.text(82, 189, $('#tso').val());
        doc.text(82, 197, $('#tsde').val());


        doc.setFontType("bold");
        doc.setFontSize(16);
        doc.text(13, 210, 'Project Work');
        doc.setDrawColor(0);
        doc.setLineWidth(1.0);
        doc.rect(13, 213, 182, 2);
        doc.setDrawColor(255, 255, 255);
        doc.setFillColor(211, 211, 211);
        doc.rect(13, 216, 182, 2, 'F');
        doc.setFontType("bold");
        doc.setFontSize(14);
        doc.text(13, 226, 'Title');
        doc.text(13, 234, 'Organisation');

        doc.setFontType("bold");
        doc.setFontSize(14);
        doc.text(78, 226, ':');
        doc.text(78, 234, ':');

        doc.setFontType("normal");
        doc.setFontSize(14);
        doc.text(82, 226, $('#pwt').val());
        doc.text(82, 234, $('#pwo').val());

        doc.setFontType("bold");
        doc.setFontSize(14);
        doc.text(13, 242, 'Tenure');
        doc.text(13, 250, 'Objective');

        doc.setFontType("bold");
        doc.setFontSize(14);
        doc.text(78, 242, ':');
        doc.text(78, 250, ':');

        doc.setFontType("normal");
        doc.setFontSize(14);
        doc.text(82, 242, $('#pwte').val());
        doc.text(82, 250, $('#pwob').val());

        doc.setFontType("bold");
        doc.text(13, 258, 'Description');
        doc.text(78, 258, ':');
        doc.setFontType("normal");
        doc.text(82, 258, $('#pwd1').val());
        doc.text(82, 264, $('#pwd2').val());
        doc.text(82, 270, $('#pwd3').val());

        doc.save('resume.pdf');



    };




