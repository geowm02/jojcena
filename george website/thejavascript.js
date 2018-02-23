	function theFunction(){
	var a = document.getElementById('inputa').value;
	var b = document.getElementById('inputb').value;
	var c = document.getElementById('inputc').value;
	
	var sumd = ((b * b) - (4 * c * a));
	var ans1 = (-b + Math.sqrt(sumd))/(2*a);
	var ans2 = (-b - Math.sqrt(sumd))/(2*a);
	var soul;
	
			if(sumd > 0){
		soul = 2;
		} else if(sumd == 0){
		soul = 1;
		} else {
		soul = 0;
		ans1 = "No solution";
		ans2 = "No solution";
		}
	
	
	document.getElementById('discrim').innerHTML = sumd;
	document.getElementById('discrim_h').innerHTML = "The discriminant";
	
	document.getElementById('answer1_h').innerHTML = "Addition answer";
	document.getElementById('answer1').innerHTML = ans1;
	
	document.getElementById('answer2_h').innerHTML = "Subtraction answer";
	document.getElementById('answer2').innerHTML = ans2;
	
	document.getElementById('sol_h').innerHTML = "Number of solutions";
	document.getElementById('sol').innerHTML = soul;
	
	document.getElementById('aTable').style.border = "1px solid grey";
	
}