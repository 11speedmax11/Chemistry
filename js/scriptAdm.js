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

var buttonForm4 = document.querySelector(".parDelBut");
buttonForm4.addEventListener("click", function () {
  document.querySelector('.ParDel').style.display = 'flex';
});

var buttonForm5 = document.querySelector(".parChangeBut");
buttonForm5.addEventListener("click", function () {
  document.querySelector('.ParChange').style.display = 'flex';
});

var buttonForm6 = document.querySelector(".parAddBut");
buttonForm6.addEventListener("click", function () {
  document.querySelector('.ParAdd').style.display = 'flex';
});

var buttonForm7 = document.querySelector(".DelMat");
buttonForm7.addEventListener("click", function () {
  document.querySelector('.MatDel').style.display = 'flex';
});

var buttonForm8 = document.querySelector(".ChangeMat");
buttonForm8.addEventListener("click", function () {
  document.querySelector('.MatChange').style.display = 'flex';
});
