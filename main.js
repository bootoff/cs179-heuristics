//Login
var username;
var password;

username = "Curren"

//Adding new comments
var text;
var posts = {val: 0, postList: []};

$( document ).ready(function() {
  if (localStorage.getItem("postHist")) {
    posts = JSON.parse(localStorage.getItem("postHist"));
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
    localStorage.setItem("postHist", JSON.stringify(posts));

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
  //       localStorage.setItem("postHist", JSON.stringify(posts));
  //     }
  //   }
  //   localStorage.setItem("postHist", JSON.stringify(posts));
  // });

});

