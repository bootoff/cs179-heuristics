var text;
var posts = {val: 0, postList: []};

$( document ).ready(function() {

	$(document).on('click', '.postbutton', function() {
	    text = $(".newpost").val();
	    console.log(text);
	    posts.postList.push({ind: posts.val, content: text});
	    var posttext = "<li class='post' data-index='" + posts.val + "'>" + text + "</li>";
	    $("ul").append(posttext);
	    posts.val++;
  	});	
};

var text;
var posts = {val: 0, postList: []};

$( document ).ready(function() {
  posts = JSON.parse(localStorage.getItem("savedPosts"));

  for (var j=0;j<posts.postList.length; j++){
    sticky= "<li class='note' data-index='" + posts.postList[j].ind + "> <p>" + posts.postList[j].content + "</p> </li>";
    $("ul").append(sticky);
  }
  posts.val = posts.postList.length

  $(document).on('click', '.button', function() {
    text = $(".newpost").val();
    posts.postList.push({ind: posts.val, ident: notetype, content: text});
    var posttext = "<li class='post' data-index='" + posts.val + "> <p>" + text + "</p> </li>";
    $("ul").append(posttext);
    posts.val++;
    localStorage.setItem("savedPosts", JSON.stringify(posts));

  });

  // $(document).on('click', '.note', function() {
  //   // posts.postList.splice(ind,1);
  //   $(this).hide();
  //   for (var k=0; k<posts.postList.length; k++){
  //     console.log(k);
  //     console.log(posts.postList[k].ind);
  //     console.log($(this).attr("data-index"));
  //     console.log("-----");
  //     if ($(this).attr("data-index") == posts.postList[k].ind){
  //       console.log("hello");
  //       posts.postList.splice(k,1);
  //       localStorage.setItem("savedPosts", JSON.stringify(posts));
  //     }
  //   }
  //   localStorage.setItem("savedPosts", JSON.stringify(posts));
  // });

});

