// Buttons
var playButton = document.querySelectorAll(".controls__pp");
var fullScreenButton = document.querySelectorAll(".controls__fullscreen");
var seekBar = document.querySelectorAll(".controls__seekbar");

for (let i=0; i<playButton.length; i++){
  playButton[i].addEventListener('click', function(){
    let video = this.closest('.video-container').querySelector('.video');
    let controls__lavel = this.closest('.video-container')
                              .querySelector('.controls__lavel');
    let controls__seekbar = this.closest('.video-container')
                              .querySelector('.controls__seekbar');
    
    // Update the seek bar as the video plays
    video.addEventListener('timeupdate', function() {
      // Calculate the slider value
      var value = (100 / video.duration) * video.currentTime;
      
      // Update the slider value
      controls__seekbar.value = value;
      controls__lavel.style.width = value + "%";
    });
    
    if (video.paused == true){
      video.play();
      this.classList.add('pause');
    } else {
      video.pause();
      this.classList.remove('pause');
    }
  });
}

// Event listener for the full-screen button
for (let i=0; i<fullScreenButton.length; i++){
  fullScreenButton[i].addEventListener('click', function() {
    let video = this.closest('.video-container').querySelector('.video');
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen(); // Firefox
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Chrome and Safari
    }
  });
}

// Event listener for the seek bar
for (let i=0; i<seekBar.length; i++){
  seekBar[i].addEventListener('change', function() {
    let t = this;
    let video = this.closest('.video-container').querySelector('.video');
    let controls__lavel = this.closest('.video-container')
                              .querySelector('.controls__lavel');
    // Calculate the new time
    var time = video.duration * (this.value / 100);
    
    // Update the video time
    video.currentTime = time;
    controls__lavel.style.width = time + "%";
    
    // Update the seek bar as the video plays
    video.addEventListener('timeupdate', function() {
      // Calculate the slider value
      var value = (100 / video.duration) * video.currentTime;
      // Update the slider value
      this.value = value;
      controls__lavel.style.width = value + "%";
    });
  });
}
