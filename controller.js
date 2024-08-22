// Resume download control
let link = "https://github.com/chan3693/portfolio/blob/b64f36ab76d849fd78deca8029c07ebaffe2cd35/SheungKitChan_Resume_v1.pdf"
let rawLink = link.replace('github.com', 'raw.githubusercontent.com').replace('/blob', '')
if (window.location.pathname.endsWith('resume.html')){
  console.log(rawLink)
  let resumeLink = document.getElementById('resumeLink'); 
  resumeLink.href = rawLink;
  console.log('resume prepared for download')
}

// Responsive control
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

// Back to Top
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