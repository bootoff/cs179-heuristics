function validate(){
  var un = document.getElementById("username").value;
  var pw = document.getElementById("password").value;
  var unArray = ["ciyer", "alafler", "cbousquet"];
  var pwArray = ["gajos", "bernd", "cs179"];

  for (var i=0;i<unArray.length;i++){
    if((un==unArray[i]) && (pw=pwArray[i])){
      alert("Login successful");
      window.location = "main.html"
      return false;
    }
  }
}