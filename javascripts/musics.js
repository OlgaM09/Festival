

// window.addEventListener("load", function() {
//   // Get all images inside the #speakers container.
//   const images = document.querySelectorAll("#speakers img");
  
//   // Define an array with the paths to your 6 audio files.
//   const audioPaths = [
//     "music/ROSÉ & Bruno Mars - APT. (Official Music Video).mp3",
//     "music/Rema, Selena Gomez - Calm Down (Official Music Video).mp3",
//     "music/Ozuna x Doja Cat x Sia - Del Mar (Video Oficial).mp3",
//     "music/Kendrick Lamar - luther.mp3",
//     "music/Glass Animals - Heat Waves (Official Video).mp3",
//     "music/24kGoldn - Mood (Official Video) ft. iann dior.mp3"
//   ];
  
//   // Create an Audio object for each file.
//   const audios = audioPaths.map(path => new Audio(path));
  
//   // Add click event listeners to each image.
//   images.forEach((img, index) => {
//     img.addEventListener("click", function() {
//       // Stop any other audio that might be playing.
//       audios.forEach((audio, idx) => {
//         if (idx !== index && !audio.paused) {
//           audio.pause();
//           audio.currentTime = 0;
//         }
//       });
      
//       // Toggle the audio for the clicked image.
//       if (audios[index].paused) {
//         audios[index].currentTime = 0; // Restart from beginning.
//         audios[index].play();
//       } else {
//         audios[index].pause();
//       }
//     });
//   });
// });

window.addEventListener("load", function() {
  // Get all images inside the #speakers container.
  const images = document.querySelectorAll("#speakers img");
  
  // Define an array with the paths to your 6 audio files.
  const audioPaths = [
    "music/ROSÉ & Bruno Mars - APT. (Official Music Video).mp3",
    "music/Rema, Selena Gomez - Calm Down (Official Music Video).mp3",
    "music/Ozuna x Doja Cat x Sia - Del Mar (Video Oficial).mp3",
    "music/Kendrick Lamar - luther.mp3",
    "music/Glass Animals - Heat Waves (Official Video).mp3",
    "music/24kGoldn - Mood (Official Video) ft. iann dior.mp3"
  ];
  
  // Create an Audio object for each file.
  const audios = audioPaths.map(path => new Audio(path));
  
  // Add click event listeners to each image.
  images.forEach((img, index) => {
    img.addEventListener("click", function() {
      // Stop any other audio that might be playing.
      audios.forEach((audio, idx) => {
        if (idx !== index && !audio.paused) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
      
      // Toggle the audio for the clicked image.
      if (audios[index].paused) {
        audios[index].currentTime = 0; // Restart from beginning.
        audios[index].play();
      } else {
        audios[index].pause();
      }
    });
  });
});