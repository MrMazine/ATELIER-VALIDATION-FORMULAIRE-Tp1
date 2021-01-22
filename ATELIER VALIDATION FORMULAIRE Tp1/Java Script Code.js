function afficher(){
		 var check1 = document.getElementById('chkYes');
		 var check2 = document.getElementById('chkNo');
		 var divdisp = document.getElementById('Div1');


		 if (check1.checked) {
			 	divdisp.style.display = "block";
			 	
		 }
		 if (check2.checked){
		 		divdisp.style.display = "none";
		 } 
 }
  function validate(){

 		var rg = new RegExp('^[a-z A-Z]+$','g');
 		var rgPass = new RegExp('^[A-Za-z0-9]{8,20}$','g');
		var validPass = document.getElementById('Password').value;
 		var validname = document.getElementById('userName').value;

 		if (rg.test(validname) == false){
 			alert('incorrect name');
 		}
 		if ((rgPass.test(validPass)) == false){
 			alert('incorrect Password');
 		}

 }