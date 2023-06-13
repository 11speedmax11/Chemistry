let button = document.querySelector(".enter");
button.addEventListener("click", function () {
  let name = document.querySelector(".name").value;
  let log = document.querySelector(".log").value;
  if (name == "user")
    window.location.href = "user.html";
  if (name == "admin")
    window.location.href = "admin.html";
});