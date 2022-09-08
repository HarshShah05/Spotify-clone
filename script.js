// Initialize the variable
let index = 0;
let audioElement = new Audio("song/1.mp3");
let masterplay = document.getElementById("masterplay");
let myprogress = document.getElementById("myprogress");
let isong = Array.from(document.getElementsByClassName("isong"));
let songplay = document.getElementsByClassName("songplay");
let textsong = document.getElementById("textsong");

let songs = [
  { songName: "Titliyaan", filepath: "song/1.mp3", coverPath: "cover/1.jpg" },
  {
    songName: "kabhi-kabhi-aditi",
    filepath: "song/2.mp3",
    coverPath: "cover/2.jpg",
  },
  { songName: "Kesariya", filepath: "song/3.mp3", coverPath: "cover/3.jpg" },
  {
    songName: "Batameez dil",
    filepath: "song/4.mp3",
    coverPath: "cover/4.jpg",
  },
  { songName: "Ranja", filepath: "song/5.mp3", coverPath: "cover/1.jpg" },
  {
    songName: "Atrnagi yaari",
    filepath: "song/6.mp3",
    coverPath: "cover/2.jpg",
  },
  {
    songName: "Bala-Pichkari",
    filepath: "song/7.mp3",
    coverPath: "cover/3.jpg",
  },
  { songName: "Malharii", filepath: "song/8.mp3", coverPath: "cover/4.jpg" },
];

isong.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play-pause
masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-pause-circle");
    masterplay.classList.add("fa-play-circle");
  }
});

// Listen to events

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myprogress.value = progress;
});

myprogress.addEventListener("change", () => {
  audioElement.currentTime = (myprogress.value * audioElement.duration) / 100;
});

const makeallplay = () => {
  Array.from(songplay).forEach((element) => {
    element.classList.remove("fa-pause-circle");
    element.classList.add("fa-play-circle");
  });
};


// const check=()=>
// {
//   Array.from(songplay).forEach((element)=>{

//     if (audioElement.paused || audioElement.currentTime < 0) {
//       audioElement.play();
  
//       element.classList.remove("fa-play-circle");
//       element.classList.add("fa-pause-circle");
//     } else {
//       audioElement.pause();
//       element.classList.remove("fa-pause-circle");
//       element.classList.add("fa-play-circle");
//     }
//   })
// };


Array.from(songplay).forEach((element) => {
  element.addEventListener("click", (e) => {
    makeallplay();
    // check();
    index = parseInt(e.target.id);
    e.target.classList.remove("fa-play-circle");
    e.target.classList.add("fa-pause-circle");
    audioElement.src = `song/${index}.mp3`;
    textsong.innerText = songs[index - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
  });
});

document.getElementById("next").addEventListener("click", () => {
  if (index >= 9) {
    index = 0;
  } else {
    index += 1;
  }

  audioElement.src = `song/${index}.mp3`;
  textsong.innerText = songs[index - 1].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove("fa-play-circle");
  masterplay.classList.add("fa-pause-circle");
});

document.getElementById("prev").addEventListener("click", () => {
  if (index <= 0) {
    index = 0;
  } else {
    index -= 1;
  }

  audioElement.src = `song/${index}.mp3`;
  textsong.innerText = songs[index - 1].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove("fa-play-circle");
  masterplay.classList.add("fa-pause-circle");
});







