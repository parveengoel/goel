
function sub(){
	if(document.display.username.value=="")
	{
		alert("please provide your name");
       document.display.username.focus();
	   
		return false;
	}
   var reg=/^[a-z]{1,}$/i;
   if(!reg.test(document.display.username.value))
   {
	   alert("name should be in alphabetic manner");
	     document.display.username.focus();
		 document.display.username.style.background="red"
	   return false;
   }
		if(document.display.username1.value=="")
	{
		alert("please provide your name");
       document.display.username1.focus();
	   
		return false;
	}
   var reg=/^[a-z]{1,}$/i;
   if(!reg.test(document.display.username1.value))
   {
	   alert("name should be in alphabetic manner");
	     document.display.username1.focus();
		 document.display.username1.style.background="red"
	   return false;
   }
	
	

	if(document.display.email.value=="")
	{
		alert("please provide your email");
		document.display.email.focus();
		return false;
	}
	
	var reg=/^([a-z]|_)+[0-9]*[a-z0-9]*[!#$%^&*]*@+(gmail|youtube|facebook|google|hotmail|yahoo)+(.co)*(.com|.uk|.in|.us)$/i;
	if(!reg.test(document.display.email.value)){
		alert("enter email in correct manner");
		document.display.email.focus();
		document.display.email.style.background="red"
		return false;
	}
	
   if(document.display.remail.value==""){
	   alert("re enter your mail")
	   document.display.remail.focus();
	   return false;
   }
	if(document.display.remail.value!=document.display.email.value)
	{
		alert("email should be same")
		document.display.remail.style.background="red"
		document.display.remail.focus();
		return false;
	}
	
	if(document.display.pass.value=="")
	{
		alert("please provide your password atleast 8 digits");
		document.display.pass.focus();
		return false;
	}
	var reg=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[`~!@#$%^&*])(?=.*[~`!@#$%^&*_-]{2}).{8,12}$/;
	
		if(!reg.test(document.display.pass.value))
		{
			alert("password should contain a block letter,a small letter,a digit,a special character and two special character continously also ");
			document.display.pass.focus();
			document.display.pass.style.background="red"
			
			return false;
		}
	if(document.display.rpass.value==""){
		alert("re-enter your password")
		document.display.rpass.focus();
		return false;
	}
	if(document.display.rpass.value!=document.display.pass.value)
	{
		alert("password must be same");
		document.display.rpass.focus();
         document.display.rpass.style.background="red"
		return false;
	}
	if(document.display.mob.value==""||document.display.mob.value==0){
		alert("please provide your 10 digits mobile no");
		document.display.mob.focus();

		return false;
	}
	var reg=/^[0-9]{10}$/;
	if(!reg.test(document.display.mob.value))
	{
	    alert("please check your number");
		document.display.mob.style.background="red"
		document.display.mob.focus();
		return false;
	
	}
	if(document.display.zip.value==""){
		alert("please provide your 6 digits zip code ");
		
		document.display.zip.focus();
		return false;
	}
	var reg=/^[0-9]{6}$/;
		if(!reg.test(document.display.zip.value))
		{
			alert(" 6 digits zip code must be in numeric format");
			document.display.zip.style.background="red"
			document.display.zip.focus();
			return false;
		}
		
		if(document.display.age.value=="")
		{
			alert("please select your age");
			document.display.age.focus();
			return false;
		}
		if(document.display.same.value==""){
			alert("please select your gender");
			return false;
		}
	if(document.display.country.value=="1"){
		alert("please select your country");
		document.display.country.focus();
		return false;
	}
	

	
}


function haa(){
	 var reg=/^[a-z]{1,}$/i;
	if(reg.test(document.display.username.value))
   {
	 
		 document.display.username.style.background="white"
   }
   
    var reg=/^[a-z]{1,}$/i;
	if(reg.test(document.display.username1.value))
   {
	 
		 document.display.username1.style.background="white"
   }
       var reg=/^([a-z]|_)+[0-9]*[a-z0-9]*[!#$%^&*]*@+(gmail|youtube|facebook|google|hotmail|yahoo)+(.co)*(.com|.uk|.in|.us)$/i;
	     if(reg.test(document.display.email.value))
		 {
	
       document.display.email.style.background="white"
	
	}
	
	if(document.display.remail.value=document.display.email.value)
	{
	
		document.display.remail.style.background="white"
		
	}
	var reg=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[`~!@#$%^&*])(?=.*[~`!@#$%^&*_-]{2}).{8,12}$/;
	
		if(reg.test(document.display.pass.value))
		{
		
			document.display.pass.style.background="white"
	
}
	if(document.display.rpass.value==document.display.pass.value)
	{
		
         document.display.rpass.style.background="white"

	}
	var reg=/^[0-9]{10}$/;
	if(reg.test(document.display.mob.value)){
	
		document.display.mob.style.background="white"
	}
	var reg=/^[0-9]{6}$/;
		if(reg.test(document.display.zip.value))
		{
			
			document.display.zip.style.background="white"
		}
		
}
		
