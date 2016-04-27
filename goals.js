var myGoals = {
	"goals"	: [
		{
			"name"	: "Train my puppy",
			"count"	: 3,
			"steps"	: [
				{
				"name"	: "Leash training",
				"count"	: 2,
				"steps"	: [
					"Hire weekday dog-walker",
					"Buy small harness and leash"	
					]
				},
				{
				"name"	: "House training",
				"count"	: 2,
				"steps"	: [
					"Save newspapers",
					"Schedule yard time"
					]
				},
				{
				"name"	: "Teach 3 tricks",
				"count"	: 5,
				"steps"	: [
					"Watch 'Uncle Matty' training videos",
					"Get a clicker",
					"Teach sit",
					"Teach stay",
					"Teach roll over"
					]
				}
			]
		},
	]
	"notifications"	: [
		{
			""
		}
	]
};

myGoals.list = function(line) {
	$("#stuff").html(stuff);
};

var text;
var posts = {val: 0, postList: []};

var mygoals = {val: 0, goalList: []};

$( document ).ready(function() {
  if (localStorage.getItem("oldPosts")) {
    posts = JSON.parse(localStorage.getItem("oldPosts"));
  }
    for (var j=0;j<posts.postList.length; j++){
      comment= "<li class='post' data-index='" + posts.postList[j].ind + "'> <p>" + posts.postList[j].user + ": " + posts.postList[j].content + "</p> </li>";
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