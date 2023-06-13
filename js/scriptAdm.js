var tabHeaders = document.querySelectorAll(".tab-header");
for (var i = 0; i < tabHeaders.length; i++) {
  tabHeaders[i].addEventListener("click", function() {
    var currentTab = this.dataset.tab;
    document.querySelector(".tab.active").classList.remove("active");
    this.classList.add("active");
    document.querySelector(".tab[data-tab='" + currentTab + "']").classList.add("active");
  });
}

var button = document.querySelector(".exit");
button.addEventListener("click", function () {
  window.location.href = "index.html";
});


var buttonForm1 = document.querySelector(".addUser");
buttonForm1.addEventListener("click", function () {
  document.querySelector('.overlay').style.display = 'flex';
});

var buttonForm2 = document.querySelector(".changeUser");
buttonForm2.addEventListener("click", function () {
  document.querySelector('.overlayUser').style.display = 'flex';
});

var buttonForm3 = document.querySelector(".DelUser");
buttonForm3.addEventListener("click", function () {
  document.querySelector('.overlayDel').style.display = 'flex';
});