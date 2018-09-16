
/*Method 5 */
var projects=document.getElementById("projects"),
video01=document.getElementById("video01"),
video02=document.getElementById("video02"),
video03=document.getElementById("video03"),
video1 =document.getElementById("video1"),
video2 =document.getElementById("video2"),
video3 =document.getElementById("video3");


var projects= [video01,video02,video03];
var proCount = projects.length;



 function mouseEnter(){
 // alert("hi")
 // console.log(this)
 var videosId = this.attributes["data-project"].value;
 var dataProject =document.getElementsByTagName("data-project");
 // var imgId = this.attributes["data-img"].value; 
 // var pathImg="img/"+imgId+".jpg"; //create a path that contains the information of current target.
 var pathVid="videos/"+videosId+".mp4" //note: you need a webm format for each videos as well.
 var poster="videos/"+videosId+".png"
 var vid=document.getElementById('vidPath');
 var vidIntro=document.getElementById('video001')
 // console.log(this)
 // console.log(videosId)
$("li").removeClass("visible");
$(this).addClass("visible");


$(".video-intro.visible").removeClass("visible");

// $('#imgPath').attr('src', pathImg) //chage "src" attribute's path to current targetting object's path.
// $('#imgPath').addClass("visible")
 $('#imgIntro').removeClass("visible")

// $('#vidPath').attr('poster',poster)
$('#vidPath').attr('src',pathVid)
$('#vidPath').addClass("visible")
$('#vidPath')
console.log(pathVid);
vid.play(); 
vidIntro.pause();
}



function mouseLeave(){
	var vid=document.getElementById('vidPath');
	var vidIntro=document.getElementById('video001');
// alert("hello")
 $("li").addClass("visible");
  $(".video-intro").addClass("visible");
  // $('#imgPath').attr('src', '')//resect img path
  // $('#imgPath').removeClass("visible")
  // $('#imgIntro').addClass("visible")

  $('#vidPath').attr('src', '')
  $('#vidPath').removeClass("visible")
  $('#imgIntro').addClass("visible")  
  vid.pause(); 
  vidIntro.play();
}

for (var i = 0; i < proCount; i++) {
  projects[i].addEventListener('mouseenter', mouseEnter);
  projects[i].addEventListener('mouseleave', mouseLeave);

}
/*End of Method 5*/



