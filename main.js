//Login
var username;
var password;

username = "Curren I."

var un;
var pw;
function validate(){
  un = document.getElementById("username").value;
  pw = document.getElementById("password").value;
  var unArray = ["ciyer", "alafler", "cbousquet"];
  var pwArray = ["gajos", "bernd", "cs179"];

  for var(i=0;i<unArray.length;i++){
    if((un==unArray[i]) && (pw=pwArray[i])){
      console.log(un);
      console.log(pw);
      alert ("Login successful");
      window.location = "index.html/#feed";
      return false;
    }
  }
};

//ADDING NEW COMMENTS

var text;
var posts = {val: 0, postList: []};

$( document ).ready(function() {
  if (localStorage.getItem("oldPosts")) {
    posts = JSON.parse(localStorage.getItem("oldPosts"));
  }
    for (var j=0;j<posts.postList.length; j++){
      var comment= "<li class='post' data-index='" + posts.postList[j].ind + "'> <p>" + posts.postList[j].user + ": " + posts.postList[j].content + "</p> </li>";
      $("#postList").append(comment);
    }
  posts.val = posts.postList.length

  $(document).on('click', '.postbutton', function() {
    text = $(".newpost").val();
    author=username;
    posts.postList.push({ind: posts.val, user: author, content: text});
    var posttext = "<li class='post' data-index='" + posts.val + "'> <p>" + author + ": " + text + "</p> </li>";
    $("#postList").append(posttext);
    //$("#postList").append("<li>test 1</li>");
    console.log($("#postList"))
    posts.val++;
    console.log(posts);
    localStorage.setItem("oldPosts", JSON.stringify(posts));

  });

  // MANAGING MY GOALS
var mygoals = {val: 0, goalList: []};

  //Retrieval
  if (localStorage.getItem("oldGoals")) {
    mygoals = JSON.parse(localStorage.getItem("oldGoals"));
  }
    for (var j=0;j<mygoals.goalList.length; j++){
      goal= "<li class='goal' data-index='" + mygoals.goalList[j].ind + "'>" + mygoals.goalList[j].text + "</li>";
      $("#goalList").append(goal);
    }
  mygoals.val = mygoals.goalList.length;

  //Category
  var cat;
  $(document).on('click', '#gb1', function() {
    if ($("#cat_1").is(":checked")){
      cat = $("#cat_1").val();
    }
    else if ($("#cat_2").is(":checked")){
      cat = $("#cat_2").val();
    }
    else if ($("#cat_3").is(":checked")){
      cat = $("#cat_3").val();
    }
    console.log(cat);
  });

  //Tag
  var gtag;
  $(document).on('click', '#gb2', function() {
    if ($("#tag-1").is(":checked")){
      gtag = $("#tag-1").val();
    }
    else if ($("#tag-2").is(":checked")){
      gtag = $("#tag-2").val();
    }
    else if ($("#tag-3").is(":checked")){
      gtag = $("#tag-3").val();
    }
    else if ($("#tag-4").is(":checked")){
      gtag = $("#tag-4").val();
    }
    else if ($("#tag-5").is(":checked")){
      gtag = $("#tag-5").val();
    }
    else if ($("#tag-6").is(":checked")){
      gtag = $("#tag-6-text").val();
    }
    console.log(gtag);
  });

  //Text
  var gtext;
  $(document).on('click', '#gb3', function() {
    if ($("#suggest-1").is(":checked")){
      gtext = $("label[for='suggest-1']").text();
    }
    else if ($("#suggest-2").is(":checked")){
      gtext = $("label[for='suggest-2']").text();
    }
    else if ($("#suggest-3").is(":checked")){
      gtext = $("#suggest-3-text").val();
    }
    console.log(gtext);
  });

//Timeline & Priority
  var tline;
  var urg;
  $(document).on('click', '#gb4', function() {
    if ($("#deadline-1").is(":checked")){
      tline = $("#deadline-1").val();
    }
    else if ($("#deadline-2").is(":checked")){
      tline = $("#deadline-2").val();
    }
    else if ($("#deadline-3").is(":checked")){
      tline = $("#deadline-3").val();
    }
    console.log(tline);

    if ($("#priority-1").is(":checked")){
      urg = $("#priority-1").val();
    }
    else if ($("#priority-2").is(":checked")){
      urg = $("#priority-2").val();
    }
    else if ($("#priority-3").is(":checked")){
      urg = $("#priority-3").val();
    }
    console.log(urg);
  });

//Audience & Compiling
var aud;
var fdbk;
$(document).on('click', '#gb5', function() {
    fdbk=0;
    if ($("#sharing-1").is(":checked")){
      aud = $("label[for='sharing-1']").text();
    }
    else if ($("#sharing-2").is(":checked")){
      aud = $("label[for='sharing-2']").text();
    }
    else if ($("#sharing-3").is(":checked")){
      aud = $("label[for='sharing-3']").text();
    }
    console.log(aud);
    if ($("#fdbk-box").is(":checked")){
      fdbk=1;
    }
    console.log(fdbk);
    mygoals.goalList.push({category: cat, tag: gtag, text: gtext, time: tline, prior: urg, view: aud, fb: fdbk, ind: mygoals.val});
    var gdescrip = "<li class='goal' data-index='" + mygoals.val + "'><a href='#'>" + gtext + "</a></li>";
    $("#goalList2").append(gdescrip);
    console.log(mygoals);
    mygoals.val++;
    localStorage.setItem("oldGoals", JSON.stringify(mygoals));
  });


});