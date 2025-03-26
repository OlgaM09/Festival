

window.addEventListener("load", function() {
  
  const images = document.querySelectorAll("#speakers img");
  

  const audioPaths = [
    "music/ROSÉ & Bruno Mars - APT. (Official Music Video).mp3",
    "music/Rema, Selena Gomez - Calm Down (Official Music Video).mp3",
    "music/Ozuna x Doja Cat x Sia - Del Mar (Video Oficial).mp3",
    "music/Kendrick Lamar - luther.mp3",
    "music/Glass Animals - Heat Waves (Official Video).mp3",
    "music/24kGoldn - Mood (Official Video) ft. iann dior.mp3"
  ];
  
 
  const audios = audioPaths.map(path => new Audio(path));
  

  images.forEach((img, index) => {
    img.addEventListener("click", function() {
      audios.forEach((audio, idx) => {
        if (idx !== index && !audio.paused) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
      

      if (audios[index].paused) {
        audios[index].currentTime = 0; 
        audios[index].play();
      } else {
        audios[index].pause();
      }
    });
  });
});