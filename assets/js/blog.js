let changePage = document.querySelector("#pages");

// button function to go back to main page
changePage.addEventListener("click", function (event) {
  // localStorage.clear(); method for clearing array inputs upon function event
  window.location.href = "./index.html";
});

// REPEAT OF LIGHT/DARK THEME TOGGLE
let themeSwitcher = document.querySelector("#theme-switcher");
let container = document.querySelector(".container");
let mode = "light";

themeSwitcher.addEventListener("click", function () {
  if (mode === "light") {
    mode = "dark";
    container.setAttribute("class", "light");
    themeSwitcher.setAttribute("src", "./assets/images/moon icon.png");
  } else {
    mode = "light";
    container.setAttribute("class", "dark");
    themeSwitcher.setAttribute("src", "./assets/images/sun light icon.png");
  }
});

// retrieve user input from other page, and set as empty array if null
let blogContent = JSON.parse(localStorage.getItem("blogContent")) ?? [];

// array for avatar icons to be created with the blog posts
let avatarIcons = [
  "./assets/images/man.png",
  "./assets/images/man 1.png",
  "./assets/images/man 2.png",
  "./assets/images/cat.png",
  "./assets/images/panda.png",
  "./assets/images/chicken.png",
  "./assets/images/woman.png",
  "./assets/images/woman 1.png",
  "./assets/images/woman 2.png",
  "./assets/images/woman 3.png",
];

// CREATING THE BLOG POSTS DYNAMICALLY VIA JAVASCRIPT USING THE INPUT VALUES
for (let i = 0; i < blogContent.length; i++) {
  let main = document.querySelector("main");
  let blogEl = document.createElement("div");
  let contentEl = document.createElement("div");
  let title = document.createElement("h2");
  let user = document.createElement("h3");
  let content = document.createElement("p");
  let avatar = document.createElement("img");

  title.textContent = blogContent[i].userTitle;
  user.textContent = "by " + blogContent[i].userName;
  content.textContent = blogContent[i].userContent;

  // randomising the avatar icons for every iteration of the loop
  let randomIndex = Math.floor(Math.random() * avatarIcons.length);
  let randomIcon = avatarIcons[randomIndex];

  avatar.src = randomIcon;

  blogEl.appendChild(title);
  blogEl.appendChild(user);
  blogEl.appendChild(avatar);
  contentEl.appendChild(content);
  main.appendChild(blogEl); // appending div after so as to not replace blogs every iteration
  main.appendChild(contentEl);

  // styling the div boxes in javascript to save space instead of reassigning selector types in css
  blogEl.setAttribute(
    "style",
    "border-top: black solid 10px; margin-top: 30px; display: flex; border-bottom: dashed #B59410 5px;"
  );
  contentEl.setAttribute(
    "style",
    "border-bottom: 10px black solid; margin-bottom: 30px;"
  );
  content.setAttribute("style", "padding: 10px;");
  title.setAttribute("style", "text-transform: uppercase;");
}
