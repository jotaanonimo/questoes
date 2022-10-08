function nota()
 {
     var alt1 = 'B';
	 var nota1;
	 var quest1 = document.getElementById("Quest1").value;

     if (quest1 == alt1)
      nota1=10;
     else 
      nota1=0;
  
     var alt2 = 'D';
	 var nota2;
     var quest2 = document.getElementById("Quest2").value;

     if (quest2 == alt2)
      nota2=10;
     else 
      nota2=0;
   
     var alt3 = 'B';
	 var nota3;
     var quest3 = document.getElementById("Quest3").value;

     if (quest3 == alt3)
      nota3=10;
     else 
      nota3=0;
   
     var alt4 = 'A';
	 var nota4;
     var quest4 = document.getElementById("Quest4").value;

     if (quest4 == alt4)
      nota4=10;
     else 
      nota4=0;
   
     var alt5 = 'C';
	 var nota5;
     var quest5 = document.getElementById("Quest5").value;

     if (quest5 == alt5)
      nota5=10;
     else 
      nota5=0;
    
	 var media = ((nota1 + nota2 + nota3 + nota4 + nota5) / 5)
	  alert("Sua nota é: " + media);
}
