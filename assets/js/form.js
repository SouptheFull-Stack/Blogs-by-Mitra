let usernameInput = document.querySelector("#username");
let titleInput = document.querySelector("#title");
let contentInput = document.querySelector("#content");
let submitEl = document.querySelector("#submit");
let submitResponseEl = document.querySelector("#response");
let changePage = document.querySelector("#pages");

// ADDING A NOTE RESPONSE AFTER USER SUBMITS THEIR FORM, USING THEIR INPUT VALUES
function showResponse(event) {
  event.preventDefault();
  console.log(event);

  if (usernameInput.value === "") {
    alert("Please give yourself a username!");
  }

  // Using if loops so it checks all inputs for missing input instead of one at a time
  if (titleInput.value === "") {
    alert("Please provide a title!");
  }

  if (contentInput.value === "") {
    alert("Please provide info about your blog!");
  } else {
    const response =
      "Thank you for sharing your content with us " +
      usernameInput.value +
      "! " +
      "You will now be able to witness " +
      titleInput.value +
      " in action!";
    submitResponseEl.textContent = response;
    storeBlog();
  }
}
submitEl.addEventListener("click", showResponse);

// FUNCTION TO LOCALLY STORE THE FORM INPUT
function storeBlog() {
  // add loop for array to make sure each blog is added and not replaced

  let blogUser = {
    userName: usernameInput.value,
    userTitle: titleInput.value,
    userContent: contentInput.value,
  };

  let blogContent = JSON.parse(localStorage.getItem("blogContent")) ?? [];

  blogContent.push(blogUser);

  console.log(blogContent);
  let blogContentStringedUp = JSON.stringify(blogContent);
  localStorage.setItem("blogContent", blogContentStringedUp);

  setTimeout(function (event) {
    window.location.href = "./blog.html";
  }, 5000);
}

// FUNCTION FOR CHANGING LIGHT AND DARK MODE, NOT INCLUDING BUTTON LINK TO IMAGES
const themeSwitcher = document.querySelector("#theme-switcher");
const container = document.querySelector(".container");

let mode = "light";

themeSwitcher.addEventListener("click", function () {
  if (mode === "light") {
    mode = "dark";
    container.setAttribute("class", "light");
    themeSwitcher.setAttribute("src", "./assets/images/moon icon.png");
    submitEl.setAttribute("style", "background-color: black; color: white;"); // change toggle icon
  } else {
    mode = "light";
    container.setAttribute("class", "dark");
    themeSwitcher.setAttribute("src", "./assets/images/sun light icon.png");
    submitEl.setAttribute("style", "background-color:rgb(202, 155, 35)");
  }
});
