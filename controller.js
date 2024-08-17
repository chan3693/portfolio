// Resume download control
let link = "https://github.com/chan3693/portfolio/blob/f4d43de07a84f67575d7582de57f60c5e3e03c2f/SheungKitChan_Resume.pdf"
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

// Projects control
function renderProjects(projects) {
  const projectContainer = document.getElementById('projects');
  console.log('DOM content loaded')
  console.log(`Total projects : ${projects.length}`)

  //Loop the doc
  projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project-container';
    // projectDiv.classList.add('project-container')

    const videoDiv = document.createElement('div');
    videoDiv.className = 'video-container';
    // videoDiv.classList.add('video-container')
    videoDiv.innerHTML = `<iframe src="${project.videoUrl}" width="1280" height="720" allow="autoplay"></iframe>`;
    projectDiv.appendChild(videoDiv);

    const overviewDiv = document.createElement('div');
    overviewDiv.className = 'overview-container';
    // overviewDiv.classList.add('overview-container')
    overviewDiv.innerHTML = `<h2>${project.title}</h2>`;

    if (project.features.length > 0) {
      const ul = document.createElement('ul');
      project.features.forEach(feature => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${feature.subtitle}:</strong> ${feature.description}`;
        ul.appendChild(li);
      });
      overviewDiv.appendChild(ul);
    }

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
}

// index skills cards
function renderSkillsCards(skills) {
  const container = document.getElementById('skills-container');
  skills.forEach(skill => {
      const card = document.createElement('div');
      card.classList.add('skills-card');

      const title = document.createElement('h3');
      title.textContent = skill.title;
      card.appendChild(title);

      skill.content.forEach(item => {
          const p = document.createElement('p');
          const strong = document.createElement('strong');
          strong.textContent = item.category + ": ";
          p.appendChild(strong);
          p.appendChild(document.createTextNode(item.skills));
          card.appendChild(p);
      });

      container.appendChild(card);
  });
}

// resume skills list
function renderSkillsList(skills) {
  const container = document.getElementById('resume-skills-container');
  
  skills.forEach(skill => {
      const title = document.createElement('h3');
      title.textContent = skill.title;
      container.appendChild(title);

      const ul = document.createElement('ul');
      
      skill.content.forEach(item => {
          const li = document.createElement('li');
          const strong = document.createElement('strong');
          strong.textContent = item.category + ": ";
          li.appendChild(strong);
          li.appendChild(document.createTextNode(item.skills));
          ul.appendChild(li);
      });

      container.appendChild(ul);
  });
}

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    if (path.endsWith('projects.html')) {
      renderProjects(myProjects)
    } else if (path.endsWith('index.html')) {
      renderSkillsCards(mySkills); 
    } else if (path.endsWith('resume.html')) {
      renderSkillsList(mySkills)
    }
});