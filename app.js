function toggleNav() {
    var nav = document.getElementById("myTopnav");
    if (nav.className === "topnav") {
        nav.className += " responsive";
    } else {
        nav.className = "topnav";
    }
}

// Close the mobile menu when a link is clicked
document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', event => {
        var nav = document.getElementById("myTopnav");
        nav.className = "topnav";
    })
})


window.onscroll = function() {
    toggleBackToTopButton();
  };
  function toggleBackToTopButton() {
    var button = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }