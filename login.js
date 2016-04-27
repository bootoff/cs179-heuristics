function validate(){
  var un = document.getElementById("username").value;
  var pw = document.getElementById("password").value;
  var unArray = ["ciyer", "alafler", "cbousquet"];
  var pwArray = ["gajos", "bernd", "cs179"];

  for (var i=0;i<unArray.length;i++){
    if((pw==pwArray[i]) && (un==unArray[i])){
      alert("Login successful");
      window.location = "main.html"
      return false;
    }
  }
}