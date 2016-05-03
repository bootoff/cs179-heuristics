//Login
var username;
var password;

username = "User A.";

//ADDING NEW COMMENTS

var text;
var posts = {val: 0, postList: []};

$( document ).ready(function() {
  // localStorage.clear();
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
    $("#postList").listview('refresh');
    //$("#postList").append("<li>test 1</li>");
    console.log($("#postList"))
    posts.val++;
    console.log(posts);
    localStorage.setItem("oldPosts", JSON.stringify(posts));
    location.reload();

  });

  // MANAGING MY GOALS
  var mygoals = {val: 0, goalList: []};

  //Retrieval
  if (localStorage.getItem("savedGoals")) {
    mygoals = JSON.parse(localStorage.getItem("savedGoals"));
  }
    for (var j=0;j<mygoals.goalList.length; j++){
      goal= "<li class='goal' data-index='" + mygoals.goalList[j].ind + "'>" + mygoals.goalList[j].text + "</li>";
      $("#goalList").append(goal);
    }
  mygoals.val = mygoals.goalList.length;

  //Category
  var cat;
  var ngoal = {};
  $(document).on('click', '#gb1', function() {
    if ($("#cat_1").is(":checked")){
      cat = $("#cat_1").val();
      $(":mobile-pagecontainer").pagecontainer( "change", "#newgoal2-prof" );
    }
    else if ($("#cat_2").is(":checked")){
      cat = $("#cat_2").val();
      $(":mobile-pagecontainer").pagecontainer( "change", "#newgoal2-health" );
    }
    else if ($("#cat_3").is(":checked")){
      cat = $("#cat_3").val();
      $(":mobile-pagecontainer").pagecontainer( "change", "#newgoal2-inter" );
    }
    ngoal.category = cat;
    console.log(ngoal);
  });


  //Tag: Professional
  var ptag;
  $(document).on('click', '#gb2p', function() {
    if ($("#ptag-1").is(":checked")){
      ptag = $("#ptag-1").val();
    }
    else if ($("#ptag-2").is(":checked")){
      ptag = $("#ptag-2").val();
    }
    else if ($("#ptag-3").is(":checked")){
      ptag = $("#ptag-3").val();
    }
    else if ($("#ptag-4").is(":checked")){
      ptag = $("#ptag-4-text").val();
    }
    ngoal.tag = ptag;
    console.log(ngoal);
  });

  //Tag: Health
  var htag;
  $(document).on('click', '#gb2h', function() {
    if ($("#htag-1").is(":checked")){
      htag = $("#htag-1").val();
    }
    else if ($("#htag-2").is(":checked")){
      htag = $("#htag-2").val();
    }
    else if ($("#htag-3").is(":checked")){
      htag = $("#htag-3").val();
    }
    else if ($("#htag-4").is(":checked")){
      htag = $("#htag-4-text").val();
    }
    ngoal.tag = htag;
    console.log(ngoal);
  });

  //Tag: Interpersonal
  var itag;
  $(document).on('click', '#gb2i', function() {

    if ($("#itag-1").is(":checked")){
      itag = $("#itag-1").val();
    }
    else if ($("#itag-2").is(":checked")){
      itag = $("#itag-2").val();
    }
    else if ($("#itag-3").is(":checked")){
      itag = $("#itag-3").val();
    }
    else if ($("#itag-4").is(":checked")){
      itag = $("#itag-4-text").val();
    }
    ngoal.tag = itag;
    console.log(ngoal);
  });

  //Text
  var gtext;
  var subtext;
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
    ngoal.text=gtext;
    subtext = $("#subgoal-text").val();
    ngoal.subtext=subtext;
    console.log(ngoal);
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
    ngoal.time=tline;

    if ($("#priority-1").is(":checked")){
      urg = $("#priority-1").val();
    }
    else if ($("#priority-2").is(":checked")){
      urg = $("#priority-2").val();
    }
    else if ($("#priority-3").is(":checked")){
      urg = $("#priority-3").val();
    }
    ngoal.prior = urg;
    console.log(ngoal);
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
    if ($("#fdbk-box").is(":checked")){
      fdbk=1;
    }
    ngoal.view = aud;
    ngoal.fb = fdbk;
    ngoal.ind = mygoals.val;

    console.log(ngoal);
    mygoals.goalList.push(ngoal);
    // mygoals.goalList.push({category: cat, tag: ptag, text: gtext, subgoal: subtext, time: tline, prior: urg, view: aud, fb: fdbk, ind: mygoals.val});
    var gdescrip = "<li class='goal' data-index='" + mygoals.val + "'><a href='#feed'>" + gtext + "</a></li>";
    $("#goalList").append(gdescrip);
    //$('#goalList').trigger('create');
    $('#goalList').listview('refresh');
    console.log(mygoals);
    mygoals.val++;
    localStorage.setItem("savedGoals", JSON.stringify(mygoals));

  });

  //SAVE DRAFT
  $(document).on('click', '#sdraft2', function() {
    console.log("You have saved your draft");
  });
});


// PROGRESS BAR for "New Goal" pages
  $(function() {
      $("#progressbar1").progressbar({
        value: 17
      });
    });

  $(function() {
    $("#progressbar2").progressbar({
      value: 34
    });
  });

  $(function() {
    $("#progressbar3").progressbar({
      value: 51
    });
  });

  $(function() {
    $("#progressbar4").progressbar({
      value: 68
    });
  });

  $(function() {
    $("#progressbar5").progressbar({
      value: 85
    });
  });


// TEST PAGE: Create HTML markup based on JSON
var testObj = {
	"goals": [
		{
			"goalName":	"Quit Smoking"
		},
		{
			"goalName":	"Build wall around patio"
		},
		{
			"goalName":	"Find Mom home care"
		}
	]
};
var curr=0;
$("#test-list").on("pageinit", function() {
	$.each(testObj.goals, function(i,goalName) {
		$("#test-list").append("<li><a href='#'>" + goalName.goalName + "</a></li>")
	});
	$("#test-list").listview("refresh");
	$("#test-list li").click(function() {
		curr=$(this).index();
	})
});

// FUNCTION: INTERCEPT JQUERY page handling if url contains relevant tags
/*function showCategory( urlObj, options )
{
	var categoryName = urlObj.hash.replace( /.*category=/, "" ),
		category = categoryData[ categoryName ],
		pageSelector = urlObj.hash.replace( /\?.*$/, "" );
	if ( category ) {
		var $page = $( pageSelector ),
			$header = $page.children( ":jqmData(role=header)" ),
			$content = $page.children( ":jqmData(role=content)" ),
			markup = "<p>" + category.description + "</p><ul data-role='listview' data-inset='true'>",
			cItems = category.items,
			numItems = cItems.length;
		for ( var i = 0; i < numItems; i++ ) {
			markup += "<li>" + cItems[i].name + "</li>";
		}
		markup += "</ul>";
		$header.find( "h1" ).html( category.name );
		$content.html( markup );
		$page.page();
		$content.find( ":jqmData(role=listview)" ).listview();
		options.dataUrl = urlObj.href;
		$.mobile.changePage( $page, options );
	}
}*/