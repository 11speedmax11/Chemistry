let button = document.querySelector(".enterUser");
button.addEventListener("click", function () {
  let name = document.querySelector(".name").value;
  let password = document.querySelector(".log").value;
  let str = '../html/user.html'
  // if (name != 'user' && password != 'user')
  window.location.href = str;

});

let buttonAdm = document.querySelector(".enterAdmin");
buttonAdm.addEventListener("click", function () {
  let name = document.querySelector(".name").value;
  let password = document.querySelector(".log").value;
  // if (name != 'admin' && password != 'admin')

  window.location.href = '../html/admin.html';

});
