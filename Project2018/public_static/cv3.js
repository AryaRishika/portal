

function create3()
{

    var doc = new jsPDF();

    doc.setFillColor(238,233,233);
    doc.rect(1,1,208,295,'F');
    doc.setFont("courier");
    doc.setFontType("normal");
    doc.text(6, 40, $('#icon_prefix').val());
    doc.setTextColor(0,191,255);
    doc.text(66, 40, $('#col3').val());


    doc.setTextColor(0,191,255);
    doc.setFontType("bold");
    doc.text(150, 10, 'TEL:');
    doc.setTextColor(0);
    doc.setFontType("normal");
    doc.text(168, 10, $('#icon_telephone').val());




    doc.setFontType("bold");
    doc.setFont("courier");
    doc.setFontSize(20);
    doc.text(6, 60, 'CONTACTS');

    doc.setFillColor(0);
    doc.circle(11, 72, 5, 'F');
    doc.setTextColor(255);
    doc.setFontType("bold");
    doc.text(7, 73, 'in');

    doc.setTextColor(0);
    doc.setFontType("bold");
    doc.text(18, 73, 'LinkedIn Profile');

    doc.setTextColor(0,191,255);
    doc.setFontType("normal");
    doc.setFontSize(15);
    doc.text(18, 81, $('#icon_social1').val());




    doc.setFillColor(0);
    doc.circle(11, 95, 5, 'F');
    doc.setTextColor(255);
    doc.setFontType("bold");
    doc.text(8, 96, 'fb');

    doc.setTextColor(0);
    doc.setFontType("bold");
    doc.text(18, 96, 'Facebook Profile');

    doc.setTextColor(0,191,255);
    doc.setFontType("normal");
    doc.setFontSize(15);
    doc.text(18, 104, $('#icon_social2').val());


    doc.setFillColor(0);
    doc.circle(11, 118, 5, 'F');
    doc.setTextColor(255);
    doc.setFontType("bold");
    doc.text(9, 119, 'E');

    doc.setTextColor(0);
    doc.setFontType("bold");
    doc.text(18, 119, 'Email-Id');

    doc.setTextColor(0,191,255);
    doc.setFontType("normal");
    doc.setFontSize(15);
    doc.text(18, 127, $('#icon_email').val());


    doc.setFontType("bold");
    doc.setFont("courier");
    doc.setFontSize(20);
    doc.text(6, 147, 'EXPEREINCE');


    doc.setFont("courier");
    doc.setFontType("normal");
    doc.setTextColor(0);
    doc.setFontSize(14);
    doc.text(6, 155, $('#expl1').val());
    doc.text(6, 161, $('#expl2').val());
    doc.text(6, 167, $('#expl3').val());
    doc.text(6, 173, $('#expl4').val());



    doc.setFontType("bold");
    doc.setFont("courier");
    doc.setFontSize(20);
    doc.setTextColor(0,191,255);
    doc.text(6, 194,'Technical Skills');


    doc.setFont("courier");
    doc.setFontType("normal");
    doc.setTextColor(0);
    doc.setFontSize(14);
    doc.text(6, 202, '*Programming Languages');
    doc.text(11, 208, $('#tsp').val());


    doc.text(6, 221, '*Databases');
    doc.text(11, 229, $('#tsd').val());

    doc.text(6, 242, '*Operating Systems');
    doc.text(11, 250, $('#tso').val());

    doc.text(6, 263, '*Designing Tools');
    doc.text(11, 271, $('#tsde').val());



    doc.setFontType("bold");
    doc.setFont("courier");
    doc.setFontSize(20);
    doc.setTextColor(0,191,255);
    doc.text(115, 60, 'ADDITIONAL ACTIVITY');
    doc.setFont("courier");
    doc.setFontType("normal");
    doc.setTextColor(0);
    doc.setFontSize(14);
    doc.text(115, 70, $('#aal1').val());
    doc.text(115, 76, $('#aal2').val());
    doc.text(115, 83, $('#aal3').val());
    doc.text(115, 89, $('#aal4').val());
    doc.save('cv.pdf');


}
