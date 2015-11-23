
function CalculateBittings(){



var result =arraytoint(document.getElementById('bittingtext').value.split(''),document.getElementById('mastertext').value.split(''));
if (result ==0)
{
    document.getElementById('calc').innerHTML="Bittings for keys are not equal in length <p></p>";

}
    else if (result==1)
{
    document.getElementById('calc').innerHTML="Bitting fields contain non numeric information";


}
else
{


 var solution =   bittingcalcfunction(result);
  document.getElementById('calc').innerHTML="Bottom Pins <p></p>"+solution[0]+"<p></p> Master Pins <p></p>"+solution[1];
}

}

var arraytoint= function( array1, array2)
{

    if (array1.length == array2.length)
    {
        for(var i =0; i<array1.length;i++) {
            array1[i] = parseInt(array1[i]);


            array2[i] = parseInt(array2[i]);

            if (isNaN(array1[i])||isNaN(array2[i]))
            {
                return 1;
            }
        }
    }
    else
    {
        return 0;
    }
    return [array1,array2];

};


var bittingcalcfunction = function (passedarray ){

  var lowernumbers ="";
    var masterpins ="";
   for(var i=0;i<passedarray[1].length;i++)
   { var lowernum;
       var masternum;

       if (passedarray[0][i]==0)
       {
           passedarray[0][i]=10;
       }
       if (passedarray[1][i]==0)
       {
           passedarray[1][i]=10;
       }


       var temp = passedarray[0][i] - passedarray[1][i];

       if (temp <0)
       {
           if (passedarray[0][i]==10)
           {
               passedarray[0][i]=0;
           }


           lowernum = passedarray[0][i];
           masternum = passedarray[1][i] - lowernum;
           lowernumbers +=lowernum;
           if (masternum ==10)
           {
               masternum =0;
           }

           masterpins +=masternum;
       }
       else
       {if (passedarray[1][i]==10)
       {
           passedarray[1][i]=0;
       }
          lowernum = passedarray[1][i];

           masternum = passedarray[0][i] - lowernum;
           if (masternum ==10)
           {
               masternum =0;
           }
           lowernumbers +=lowernum;
           masterpins +=masternum;
       }


   }
   return [lowernumbers,masterpins];
};