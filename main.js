

function myfunction(){

    var gewicht = document.getElementById('kg').value;

     var gross = document.getElementById('cm').value;

     var index = gewicht/(gross*gross)*10000;



    document.getElementById('data').innerHTML = "Ihr Gewicht =" + gewicht +"kg"+' und '+ "Ihr Groß" + gross+"cm";


    document.getElementById('index').innerHTML = "Ihr Index =" + index ;


    if ( index >= 30 ){
        document.getElementById('note').innerHTML = "Sie sind fettleibig extrem Grades. Sie müssen sofort abnehmen.";
    } else if (index <30 && index >=27){
        document.getElementById('note').innerHTML = "Sie sind fettleibig zweiten Grades. Sie müssen sofort abnehmen.";
    } else if (index <27 && index >=24){
        document.getElementById('note').innerHTML = "Sie sind fettleibig. Sie müssen abnehmen.";
    } else if (index <24 && index >=20){
        document.getElementById('note').innerHTML = "Sie sind fit. Glückwunsch";
    } else if (index <20 && index >=10){
        document.getElementById('note').innerHTML = "Sie sind sehr schwach. Du solltest zunehmen";
    } else {
        document.getElementById('note').innerHTML = "Die von Ihnen eingegebenen Informationen sind nicht korrekt";
    }

}   