// Resume download control
let link = "https://github.com/chan3693/portfolio/blob/fb799ba764c49a5f95508a81c1f898b1ba3ed986/SheungKitChan_Resume.pdf"
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