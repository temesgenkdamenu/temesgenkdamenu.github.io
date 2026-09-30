// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed publications and preprints, in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-experience",
          title: "experience",
          description: "Academic and professional roles, education, certifications and training.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/experience/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching, teaching support and cyber security outreach.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum vitae of Temesgen Kitaw Damenu.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-started-my-phd-in-computer-science-at-the-university-of-kent-supervised-by-professor-shujun-li-and-dr-alexandra-covaci-i-also-joined-the-school-of-computing-as-a-graduate-teaching-assistant",
          title: 'Started my PhD in Computer Science at the University of Kent, supervised by...',
          description: "",
          section: "News",},{id: "news-appointed-senior-cyber-champion-at-the-school-of-computing-and-the-institute-of-cyber-security-for-society-icss-university-of-kent",
          title: 'Appointed Senior Cyber Champion at the School of Computing and the Institute of...',
          description: "",
          section: "News",},{id: "news-supported-the-cyberfirst-trailblazers-course-at-icss-s-first-ncsc-cyberfirst-trailblazers-and-adventurers-event-held-at-the-folkestone-school-for-girls-with-over-40-pupils-taking-part-computer",
          title: 'Supported the CyberFirst Trailblazers course at iCSS’s first NCSC CyberFirst Trailblazers and Adventurers...',
          description: "",
          section: "News",},{id: "news-ran-the-icss-stand-at-the-2025-boing-festival-with-professor-shujun-li-sharing-cyber-security-educational-materials-and-games-with-local-families-and-children",
          title: 'Ran the iCSS stand at the 2025 bOing! Festival with Professor Shujun Li,...',
          description: "",
          section: "News",},{id: "news-our-systematic-literature-review-cyber-security-educational-games-for-children-is-now-available-on-arxiv-it-analyses-91-games-reported-in-68-papers-published-between-2010-and-2024-page-facing-up",
          title: 'Our systematic literature review, Cyber Security Educational Games for Children, is now available...',
          description: "",
          section: "News",},{id: "news-volunteered-at-the-icss-and-kmcs3-joint-stand-at-the-2025-aspiration-digital-kent-event-introducing-sixth-form-students-to-careers-in-cyber-security",
          title: 'Volunteered at the iCSS and KMCS3 joint stand at the 2025 Aspiration Digital...',
          description: "",
          section: "News",},{id: "news-completed-ttt-cyberethiopia-as-the-project-s-main-deliverer-this-train-the-trainers-project-funded-through-research-england-s-official-development-assistance-oda-allocation-trained-over-600-teachers-from-93-schools-in-addis-ababa-to-teach-cyber-security-and-online-safety-to-children-tada",
          title: 'Completed TTT-CyberEthiopia as the project’s main deliverer. This “train the trainers” project, funded...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%64%33%32%39@%6B%65%6E%74.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=pmMBJ2sAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0002-2599-4286", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/temesgenkd", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
