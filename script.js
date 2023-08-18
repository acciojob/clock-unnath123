//your JS code here. If required.
function timeCount(){
	var today=new Date();

	var day=today.getDate();
	var month =today.getMonth();
	var year=today.getFullYear();

	let ap;
	var hour=today.getHours();
	if(hour>12)ap="PM";
	if(hour<12)ap="AM";
	if(hour<10)hour= "0"+hour;
	if(hour>12)hour=hour-12;

	var minute=today.getMinutes();
	if(minute<10)minute="0"+minute;


	var seconds=today.getSeconds();
	if(seconds<10)seconds="0"+seconds;

	
	

	document.getElementById("timer").innerHTML = 
			day+"/"+month+"/"+year+", "+hour+":"+minute+":"+seconds+" "+
			ap;

			setTimeout("timeCount()", 1000);


}