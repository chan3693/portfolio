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