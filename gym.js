   cal()
{
    var b1= document.getElementById("t1");
    var  b2= document.getElementById("t2");
    var b3= document.getElementById("t3");
    var b4= document.getElementById("t4");
    var b5= document.getElementById("t5");
    var b6= document.getElementById("t6");
    var b7= document.getElementById("t7");
    
   var var1=b1+b2+b3+b4+b5+b6+b7; 
  var avg=var1/7;
   
   var target=avg*4;
   var goal= document.getElementById("t8");
   if(target!=goal)
   {
    document.getElementById("p1").innerHTML = "you need to work harder";

   }
  else{
    document.getElementById("p1").innerHTML= "keep it up you are doing great";
  }
}