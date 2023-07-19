let meme = document.getElementById("meme");
let sub = document.getElementById("sub");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");

// API URL
let url = "http://meme-api.com/gimme/";

let subreddits = [
  "me_irl",
  "dankmemes",
  "historymemes",
  "HistoryAnimemes",
  "Animemes",
  "ProgrammerHumor",
  "memes",
];

let getMeme = () => {
  let randomSubreddit =
    subreddits[Math.floor(Math.random() * subreddits.length)];
  sub.innerHTML = "@" + randomSubreddit;

  // Fetch data from API call
  fetch(url + randomSubreddit)
    .then((resp) => resp.json())
    .then((data) => {
      let memeImg = new Image();

      // display meme inage and title only after the image loads
      memeImg.onload = () => {
        meme.src = data.url;
        title.innerHTML = data.title;
      };
      memeImg.src = data.url;
    });
};

getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);
