// Resume download control
if (window.location.pathname.endsWith('resume.html')){
  let repositories = "portfolio"
  let docId = "2da41694eba16ef68b466bebd68810231ef27cf6"
  let docName = "SheungKitChan_Resume"
  let resumeLink = document.getElementById('resumeLink'); 
  resumeLink.href = `https://raw.githubusercontent.com/chan3693/${repositories}/${docId}/${docName}.pdf`;
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

// Projects control
if (window.location.pathname.endsWith('projects.html')){
  document.addEventListener('DOMContentLoaded', () => {
    const projectContainer = document.getElementById('projects');
    console.log('DOM content loaded')
    console.log(`Total projects : ${myProjects.length}`)
  
    //Loop the doc
    myProjects.forEach(project => {
        // Create project container
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-container';
  
        // Add video container
        const videoDiv = document.createElement('div');
        videoDiv.className = 'video-container';
        videoDiv.innerHTML = `<iframe src="${project.videoUrl}" width="1280" height="720" allow="autoplay"></iframe>`;
        projectDiv.appendChild(videoDiv);
  
        // Add overview container
        const overviewDiv = document.createElement('div');
        overviewDiv.className = 'overview-container';
        overviewDiv.innerHTML = `<h2>${project.title}</h2>`;
  
        // Add features if any
        if (project.features.length > 0) {
            const ul = document.createElement('ul');
            project.features.forEach(feature => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${feature.subtitle}:</strong> ${feature.description}`;
                ul.appendChild(li);
            });
            overviewDiv.appendChild(ul);
        }
  
        // Add GitHub links
        const p = document.createElement('p');
        p.textContent = 'GitHub project:';
        project.githubLinks.forEach( (link, index) => {
          const a = document.createElement('a');
          a.href = link.url;
          a.target = '_blank';
          a.textContent = link.name;
          p.appendChild(a);
  
          if (index < project.githubLinks.length-1){
            p.appendChild(document.createTextNode(' & '));
          }
        });
        overviewDiv.appendChild(p);
  
        projectDiv.appendChild(overviewDiv);
        projectContainer.appendChild(projectDiv);
    });
  });
}
