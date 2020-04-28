var myvideo = document.getElementById('container-video');
var textp = document.getElementById('playtext');
function playPause() { 
    if (myvideo.paused){
        myvideo.play();
        myvideo.setAttribute('controls','');
        // myvideo.requestFullscreen();
        document.getElementById("playpause_image").style.backgroundImage = "none";
        textp.style.display = "none";
        $(document).ready(function(){
            $("#displayend").hide();});
    }
    else  {
        myvideo.pause();
        myvideo.removeAttribute('controls');
        document.getElementById("playpause_image").style.backgroundImage = "url('images/logo/homepage_element_video_button.png')";
        textp.style.display = "";
         $(document).ready(function(){
            $("#displayend").hide();});
    }
}
$(document).ready(function(){
    $("#displayend").hide();});
myvideo.onended = function() {
    $("#displayend").show();
}




// document.addEventListener('mouseover', hoverVideo, false);
// var vids = document.getElementById('container-video5');
// [].forEach.call(vids, function(item){
//     item.addEventListener('mouseover', hoverVideo, false);
//     item.addEventListener('mouseout', hideVideo, false);
// });
//     function hoverVideo(e){this.play();}
//     function hideVideo(e){this.pause();}