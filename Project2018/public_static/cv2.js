
function create2() {

    var doc = new jsPDF();
    doc.setFillColor(46,87,103);
    doc.rect(0,0,100,20,'F');
    doc.setDrawColor(46,87,103);
    doc.triangle(15, 20, 23, 20, 19, 25, 'FD');
    doc.setDrawColor(211,211,211);
    doc.setLineWidth(0.5);
    doc.line(86,62,86,267);
//*********************************//
    doc.setTextColor(255);
    doc.setFontSize(13);
    doc.text(6, 18, 'Curriculum Vitae');

//**********************//
    doc.setFillColor(46,87,103);
    doc.rect(110,276,100,20,'F');
    doc.setDrawColor(46,87,103);
    doc.triangle(120, 276, 128, 276, 124, 273, 'FD');

    doc.setTextColor(0);
    doc.setFillColor(46,87,103);
    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.setFontSize(22);
    doc.text(6, 38, $('#icon_prefix').val());


    doc.setFontSize(15);
    doc.setFontType("normal");
    doc.setFontType("italic");
    doc.text(6, 45, $('#col3').val());

    doc.setFontType("normal");

    doc.setFontSize(13);
    doc.text(105, 30, $('#col1').val());
    doc.text(105, 36, $('#col2').val());
    // doc.text(105, 42, 'LOrem isumbj hjfjdehfu fjefi nfejnfe.  hi thsuneeta ');
    // doc.text(105, 48, 'Coordinate (in units dhfu fjefi nfejnfe.');

    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.setFontSize(20);
    doc.text(6, 69, 'Personal Data');

    doc.setDrawColor(211,211,211);
    doc.setLineWidth(0.5);
    doc.line(6,73,69,73);


    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.setFontSize(14);
    doc.text(6, 82, 'Phone');
    doc.setFontType("normal");
    doc.setFontSize(14);
    doc.text(6, 93, $('#icon_telephone').val());

    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.setFontSize(14);
    doc.text(6, 104, 'Email');
    doc.setFontType("normal");
    doc.setFontSize(14);
    doc.text(6, 115, $('#icon_email').val());

    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.setFontSize(14);
    doc.text(6, 126, 'Address');
    doc.setFontType("normal");
    doc.setFontSize(14);
    doc.text(6, 135, $('#icon_home').val());


    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.setFontSize(20);
    doc.text(6, 148, 'Social Media');

    doc.setDrawColor(211,211,211);
    doc.setLineWidth(0.5);
    doc.line(6,152,69,152);


    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.setFontSize(14);
    doc.text(6, 163, 'LinkedIn');
    doc.setFontType("normal");
    doc.setFontSize(14);
    doc.text(6, 174, $('#icon_social1').val());

    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.setFontSize(14);
    doc.text(6, 185, 'Facebook');
    doc.setFontType("normal");
    doc.setFontSize(14);
    doc.text(6, 196, $('#icon_social2').val());


    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.setFontSize(20);
    doc.text(6, 209, 'Software');

    doc.setDrawColor(211,211,211);
    doc.setLineWidth(0.5);
    doc.line(6,213,69,213);


    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.setFontSize(14);
    doc.text(6, 224, $('#tss1').val());
    doc.setFillColor(46,87,103);
    if($('#tss1r').val=='4' ) {
        doc.rect(52, 229, 4, 4, 'F');
        doc.rect(58, 229, 4, 4, 'F');
        doc.rect(64, 229, 4, 4, 'F');
        doc.rect(70, 229, 4, 4, 'F');
        doc.rect(76, 229, 4, 4);
    }
    else if( $('#tss1r').val=='5'){

        doc.rect(52, 229, 4, 4, 'F');
        doc.rect(58, 229, 4, 4, 'F');
        doc.rect(64, 229, 4, 4, 'F');
        doc.rect(70, 229, 4, 4, 'F');
        doc.rect(76, 229, 4, 4,'F');
    }
    else if($('#tss1r').val=='3' )
    {
        doc.rect(52, 229, 4, 4, 'F');
        doc.rect(58, 229, 4, 4, 'F');
        doc.rect(64, 229, 4, 4, 'F');
        doc.rect(70, 229, 4, 4);
        doc.rect(76, 229, 4, 4);
    }
    else if($('#tss1r').val=='2')
    {
        doc.rect(52, 229, 4, 4, 'F');
        doc.rect(58, 229, 4, 4, 'F');
        doc.rect(64, 229, 4, 4);
        doc.rect(70, 229, 4, 4);
        doc.rect(76, 229, 4, 4);
    }
    else {
        doc.rect(52, 229, 4, 4, 'F');
        doc.rect(58, 229, 4, 4);
        doc.rect(64, 229, 4, 4);
        doc.rect(70, 229, 4, 4);
        doc.rect(76, 229, 4, 4);
    }


    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.setFontSize(14);
    doc.text(6, 240, $('#tss2').val());
    doc.setFillColor(46,87,103);
    if($('#tss2r').val=='4' ) {
        doc.rect(52, 229, 4, 4, 'F');
        doc.rect(58, 229, 4, 4, 'F');
        doc.rect(64, 229, 4, 4, 'F');
        doc.rect(70, 229, 4, 4, 'F');
        doc.rect(76, 229, 4, 4);
    }
    else if( $('#tss2r').val=='5'){

        doc.rect(52, 229, 4, 4, 'F');
        doc.rect(58, 229, 4, 4, 'F');
        doc.rect(64, 229, 4, 4, 'F');
        doc.rect(70, 229, 4, 4, 'F');
        doc.rect(76, 229, 4, 4,'F');
    }
    else if($('#tss2r').val=='3' )
    {
        doc.rect(52, 229, 4, 4, 'F');
        doc.rect(58, 229, 4, 4, 'F');
        doc.rect(64, 229, 4, 4, 'F');
        doc.rect(70, 229, 4, 4);
        doc.rect(76, 229, 4, 4);
    }
    else if($('#tss2r').val=='2')
    {
        doc.rect(52, 229, 4, 4, 'F');
        doc.rect(58, 229, 4, 4, 'F');
        doc.rect(64, 229, 4, 4);
        doc.rect(70, 229, 4, 4);
        doc.rect(76, 229, 4, 4);
    }
    else {
        doc.rect(52, 229, 4, 4, 'F');
        doc.rect(58, 229, 4, 4);
        doc.rect(64, 229, 4, 4);
        doc.rect(70, 229, 4, 4);
        doc.rect(76, 229, 4, 4);
    }

    doc.setFillColor(46,87,103);
    doc.rect(79,69,8,8,'F');
    doc.setDrawColor(46,87,103);
    doc.triangle(87, 70, 87, 76, 89, 73, 'FD');
    doc.setDrawColor(211);
    doc.setFillColor(211);
    doc.triangle(80, 77, 86, 77, 86, 80, 'FD');



//      doc.setFillColor(46,87,103);
//   doc.rect(79,107,8,8,'F');
//   doc.setDrawColor(46,87,103);
//     doc.triangle(87, 108, 87, 114, 89, 111, 'FD');
//      doc.setDrawColor(211);
//      doc.setFillColor(211);
//     doc.triangle(80, 115, 86, 115, 86, 118, 'FD');

    doc.setFillColor(46,87,103);
    doc.rect(79,127,8,8,'F');
    doc.setDrawColor(46,87,103);
    doc.triangle(87, 128, 87, 134, 89, 131, 'FD');
    doc.setDrawColor(211);
    doc.setFillColor(211);
    doc.triangle(80, 135, 86, 135, 86, 138, 'FD');


    doc.setFillColor(46,87,103);
    doc.rect(79,185,8,8,'F');
    doc.setDrawColor(46,87,103);
    doc.triangle(87, 186, 87, 192, 89, 189, 'FD');
    doc.setDrawColor(211);
    doc.setFillColor(211);
    doc.triangle(80, 193, 86, 193, 86, 196, 'FD');


    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.setFontSize(20);
    doc.text(93, 69, 'Key Skills');

    doc.setDrawColor(211,211,211);
    doc.setLineWidth(0.5);
    doc.line(93,73,200,73);
    doc.setDrawColor(46);
    doc.setFillColor(46,87,103);
    doc.circle(93, 79, 1.5, 'FD');
    doc.setFontSize(14);
    doc.setFontType("normal");
    doc.setDrawColor(46,87,103);
    doc.text(99, 81, $('#tsp').val());

    doc.setFillColor(46,87,103);
    doc.circle(93, 88, 1.5, 'FD');
    doc.setFontSize(14);
    doc.setDrawColor(46,87,103);
    doc.text(99, 90, $('#tsd').val());

    doc.setFillColor(46,87,103);
    doc.circle(93, 97, 1.5, 'FD');
    doc.setFontSize(14);
    doc.setDrawColor(46,87,103);
    doc.text(99, 98, $('#tsde').val());

    doc.setFillColor(46,87,103);
    doc.circle(93, 105, 1.5, 'FD');
    doc.setFontSize(14);
    doc.text(99, 106, $('#tso').val());

    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.setFontSize(20);
    doc.text(93, 127, 'Experience');


    doc.setDrawColor(211,211,211);
    doc.setLineWidth(0.5);
    doc.line(93,131,200,131);
    doc.setFillColor(46,87,103);
    doc.circle(93, 137, 1.5, 'FD');
    doc.setFontSize(14);
    doc.setFontType("normal");
    doc.setDrawColor(46,87,103);
    doc.text(99, 138, $('#expl1').val());

    doc.setFillColor(46,87,103);
    doc.circle(93, 147, 1.5, 'FD');
    doc.setFontSize(14);
    doc.setDrawColor(46,87,103);
    doc.text(99, 148, $('#expl2').val());

    doc.setFillColor(46,87,103);
    doc.circle(93, 157, 1.5, 'FD');
    doc.setFontSize(14);
    doc.text(99, 158, $('#expl3').val());

    doc.setFillColor(46,87,103);
    doc.circle(93, 167, 1.5, 'FD');
    doc.setFontSize(14);
    doc.text(99, 168, $('#expl4').val());


    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.setFontSize(20);
    doc.text(93, 185, 'Additional Activities');

    doc.setDrawColor(211,211,211);
    doc.setLineWidth(0.5);
    doc.line(93,189,200,189);

    doc.setFillColor(46,87,103);
    doc.circle(93, 196, 1.5, 'FD');
    doc.setFontSize(14);
    doc.setFontType("normal");
    doc.setDrawColor(46,87,103);
    doc.text(99, 197, $('#aal1').val());

    doc.setFillColor(46,87,103);
    doc.circle(93, 206, 1.5, 'FD');
    doc.setFontSize(14);
    doc.setDrawColor(46,87,103);
    doc.text(99, 207, $('#aal2').val());

    doc.setFillColor(46,87,103);
    doc.circle(93, 216, 1.5, 'FD');
    doc.setFontSize(14);
    doc.text(99, 217, $('#aal3').val());

    doc.setFillColor(46,87,103);
    doc.circle(93, 226, 1.5, 'FD');
    doc.setFontSize(14);
    doc.text(99, 227, $('#aal4').val());

    doc.setFillColor(46,87,103);
    doc.circle(93, 236, 1.5, 'FD');
    doc.setFontSize(14);
    doc.text(99, 237, $('#aal5').val());




    doc.save('reusme.pdf');


};


