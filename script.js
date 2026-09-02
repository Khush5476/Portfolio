const projects = [
  {
    id: 'ecommerce-admin-viewer',
    title: 'E-commerce Admin + User',
    year: '2024',
    description: 'A complete storefront and admin system for managing products, listings, and purchases while giving customers a polished shopping experience.',
    tags: ['Website', 'Admin', 'E-commerce'],
    url: 'https://ecommerce-front-1.vercel.app',
    github: 'https://github.com/Khush5476/ecommerce-front-1',
    overview: 'This project is a full e-commerce experience built for both the shopper and the business owner. The user-facing side presents a modern storefront with product content, visual layout, and a clean browsing experience, while the admin side makes it easy to update products, pricing, and inventory from a central dashboard. It shows how I combine product design, front-end polish, and practical business workflows into one system.',
    features: [
      'Customer storefront for browsing products and categories',
      'Admin dashboard for editing product details and visuals',
      'Product management workflow for pricing, display, and updates',
      'Responsive layout built for both browsing and operational use'
    ],
    images: [
      'ecommerce Image.png',
      'ecommerce-preview.png'
    ]
  },
  {
    id: 'photo-gallery',
    title: 'Photo Gallery',
    year: '2025',
    description: 'A visually rich gallery website designed to present images in a polished, immersive, and easy-to-browse format.',
    tags: ['Website', 'Gallery', 'Photos'],
    url: 'https://akram-photos.vercel.app/',
    github: 'https://github.com/Khush5476/Photo-gallery',
    overview: 'This project focuses on making photography feel premium and memorable. The site is designed around clean viewing, strong visual hierarchy, and seamless interaction so that each image feels intentional. It highlights my ability to build aesthetically driven web experiences that are still user-friendly and responsive across devices.',
    features: [
      'Immersive photo-focused layout and browsing flow',
      'Responsive design optimized for desktop and mobile viewing',
      'Modern gallery interactions with smooth presentation',
      'Theme-driven styling for a polished visual identity'
    ],
    images: [
      'photo gallery preview.png',
      'photo gallery picture.png',
    ]
  },
  {
    id: 'spotify-clone',
    title: 'Spotify Clone',
    year: '2025',
    description: 'A music streaming-inspired app with player controls, library features, and a smooth interface built around user listening flow.',
    tags: ['App', 'Supabase', 'Music'],
    url: '#',
    github: 'https://github.com/Khush5476/Spotify-clone',
    overview: 'The Spotify clone was built to recreate the experience of a music platform in a simplified but polished form. It includes music browsing, playback interactions, and personalized library behavior, while also using a backend service to manage the app’s data and content. This project shows my interest in building digital products that combine UI design, user flows, and connected data systems.',
    features: [
      'Music player interface with interactive controls',
      'User login and personal-library behavior',
      'Supabase-backed content and metadata handling',
      'Clean music app experience tuned for usability'
    ],
    images: [
      'Spotify Clone liked song.png',
      'Spotify Clone Add Song.png'
    ]
  },
  {
    id: 'myapp',
    title: 'To-Do List App',
    year: '2025',
    description: 'A mobile-focused productivity app designed to help users track tasks, manage responsibilities, and stay organized across devices.',
    tags: ['App', 'Google Sheets', 'Mobile'],
    url: '#',
    github: 'https://github.com/Khush5476/To-Do-List-App',
    overview: 'MyApp is a practical productivity project created to solve a real-world need: helping users organize tasks and stay on top of responsibilities. It combines a clean mobile experience with spreadsheet-backed syncing, making it easy to manage information in a flexible and accessible way. This project demonstrates my ability to build tools that are useful, simple, and designed around day-to-day user needs.',
    features: [
      'Task management workflow for daily organization',
      'Mobile-first design with simple interaction patterns',
      'Google Sheets syncing for lightweight data management',
      'Productivity-focused interface built for everyday use'
    ],
    images: [
      'To-Do List preview.png',
      'toDoList important dates.png'
    ]
  },
  {
    id: 'ai-face-tracker',
    title: 'AI Face Tracker',
    year: '2026',
    description: 'A Python computer vision project that uses YOLO and real-time detection to track faces and translate them into motion instructions.',
    tags: ['AI', 'Python', 'Robotics'],
    url: '#',
    github: 'https://github.com/Khush5476/Ai-Face-Tracker',
    overview: 'This project brings together artificial intelligence, computer vision, and robotics into one responsive system. A YOLO-based model detects and tracks faces in real time, while a connected hardware setup reads that data and converts it into movement commands. It demonstrates how I combine machine learning with physical engineering to create systems that react intelligently in the real world.',
    features: [
      'Real-time face detection using YOLO',
      'Computer vision workflow for tracking and positioning',
      'Hardware integration with movement and control systems',
      'Practical robotics application built around live feedback'
    ],
    images: [
      'Face Tracker preview.png',
    ]
  },
  {
    id: 'mini-bot',
    title: 'MiniBot',
    year: '2025-2026',
    description: 'A competitive robotics minibot designed for precise movement, efficient control, and reliable performance in a fast-paced engineering challenge.',
    tags: ['Robotics', 'Competition', 'Hardware'],
    url: '#',
    overview: 'The Mini-Bot was built as a hands-on robotics project focused on engineering, motion control, and iteration. It combines careful mechanical design with performance testing so the robot can move efficiently, react predictably, and improve through repeated development cycles. This project reflects my interest in physical systems and the process of turning a concept into a working, testable machine.',
    features: [
      'Custom robotic build for movement and control',
      'Engineering focus on precision and efficiency',
      'Iteration and testing for competitive performance',
      'Hands-on hardware design with practical problem solving'
    ],
    images: [
      'Minibot preview.jpg',
      'https://images.unsplash.com/photo-1555618563-8761c36c43f8?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

const filterContainer = document.getElementById('project-filters');
const projectGrid = document.getElementById('project-grid');
const projectDetailGallery = document.getElementById('project-detail-gallery');
const projectDetailTitle = document.getElementById('project-detail-title');
const projectDetailTags = document.getElementById('project-detail-tags');
const projectDetailOverview = document.getElementById('project-detail-overview');
const projectDetailFeatures = document.getElementById('project-detail-features');
const projectLiveLink = document.getElementById('project-live-link');
const projectGithubLink = document.getElementById('project-github-link');

const categories = ['All', 'Website', 'App', 'AI', 'Robotics', 'Supabase', 'Google Sheets'];

function createFilterButtons() {
  if (!filterContainer) return;

  categories.forEach(category => {
    const button = document.createElement('button');
    button.className = 'filter-btn';
    button.textContent = category;
    button.dataset.category = category;
    if (category === 'All') button.classList.add('active');
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      renderProjects(category);
    });
    filterContainer.appendChild(button);
  });
}

function renderProjects(category = 'All') {
  if (!projectGrid) return;

  projectGrid.innerHTML = '';
  const selection = projects.filter(project => {
    if (category === 'All') return true;
    return project.tags.includes(category);
  });

  if (!selection.length) {
    projectGrid.innerHTML = '<p class="no-results">No projects found for this category.</p>';
    return;
  }

  selection.forEach((project, index) => {
    const card = document.createElement('article');
    card.className = 'project-card reveal project-card-clickable';
    card.style.setProperty('--delay', `${index * 70}ms`);
    card.tabIndex = 0;

    const detailLink = project.id === 'mini-bot'
        ? 'mini-bot.html?project=mini-bot'
        : `project.html?project=${encodeURIComponent(project.id)}`;

    card.innerHTML = `
      ${['ecommerce-admin-viewer', 'spotify-clone', 'myapp', 'mini-bot', 'ai-face-tracker', 'photo-gallery'].includes(project.id) ? `<img class="project-card-image${project.id === 'myapp' ? ' project-card-image-top' : ''}" src="${project.images[0]}" alt="${project.title} preview" />` : ''}
      <div class="project-card-top">
        <span class="project-label">Featured</span>
        <span>
          <a class="project-link" href="${detailLink}">View Details</a>
        </span>
      </div>
      <div class="project-card-header">
        <h3>${project.title}</h3>
        <span class="project-year">${project.year}</span>
      </div>
      <p>${project.description}</p>
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
      </div>
    `;

    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      card.style.setProperty('--pointer-x', `${x}px`);
      card.style.setProperty('--pointer-y', `${y}px`);
    });

    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--pointer-x', '50%');
      card.style.setProperty('--pointer-y', '50%');
    });

    card.addEventListener('click', event => {
      if (event.target.closest('a')) return;
      window.location.href = detailLink;
    });

    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        window.location.href = detailLink;
      }
    });

    projectGrid.appendChild(card);
  });
  revealOnScroll();
}

function initTypeEffect() {
  const lines = ['websites', 'apps', 'systems', 'digital products'];
  const heading = document.querySelector('.feature-panel-inner h2');
  if (!heading) return;

  const typedSpan = heading.querySelector('.typed-text');
  if (!typedSpan) return;

  let currentLine = 0;
  let currentChar = 0;

  function writeText() {
    const word = lines[currentLine];
    typedSpan.textContent = word.slice(0, currentChar);
    currentChar += 1;

    if (currentChar > word.length) {
      setTimeout(() => {
        currentChar = 0;
        currentLine = (currentLine + 1) % lines.length;
        writeText();
      }, 1200);
      return;
    }
    setTimeout(writeText, 120);
  }

  writeText();
}

function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal:not(.hero-reveal)');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  reveals.forEach(reveal => {
    reveal.style.transitionDelay = reveal.style.getPropertyValue('--delay') || '0ms';
    observer.observe(reveal);
  });
}

function initAnimatedStats() {
  const counters = document.querySelectorAll('.metric-number');
  if (!counters.length) return;

  const formatValue = (value, target) => {
    if (target >= 100) return `${value}+`;
    return String(value);
  };

  const animateCounter = (element) => {
    const target = Number(element.dataset.target || 0);
    const duration = 1200;
    const startTime = performance.now();

    const tick = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.round(target * eased);
      element.textContent = formatValue(currentValue, target);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        element.textContent = formatValue(target, target);
      }
    };

    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        if (!element.dataset.animated) {
          element.dataset.animated = 'true';
          animateCounter(element);
        }
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(counter => observer.observe(counter));
}

function initHeroScrollReveal() {
  const heroReveals = document.querySelectorAll('.hero-reveal');

  const updateHeroReveal = () => {
    heroReveals.forEach(node => {
      if (window.scrollY > 80) {
        node.classList.add('visible');
      } else {
        node.classList.remove('visible');
      }
    });
  };

  updateHeroReveal();
  window.addEventListener('scroll', updateHeroReveal, { passive: true });
}

function initNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-links');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

function initAmbientBackground() {
  const container = document.querySelector('.ambient-nodes');
  if (!container) return;

  const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2, active: false };
  const nodes = [];

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'ambient-network');
  svg.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
  svg.setAttribute('preserveAspectRatio', 'none');
  container.appendChild(svg);

  for (let i = 0; i < 34; i += 1) {
    const node = document.createElement('span');
    node.className = 'ambient-node';
    const size = Math.random() * 7 + 6;
    const x = Math.random() * (window.innerWidth - 140) + 70;
    const y = Math.random() * (window.innerHeight - 140) + 70;

    node.style.width = `${size}px`;
    node.style.height = `${size}px`;
    node.style.left = `${x}px`;
    node.style.top = `${y}px`;
    node.dataset.x = String(x);
    node.dataset.y = String(y);
    node.dataset.baseX = String(x);
    node.dataset.baseY = String(y);
    node.dataset.vx = '0';
    node.dataset.vy = '0';
    container.appendChild(node);
    nodes.push(node);
  }

  document.addEventListener('pointermove', event => {
    pointer.x += (event.clientX - pointer.x) * 0.08;
    pointer.y += (event.clientY - pointer.y) * 0.08;
    pointer.active = true;
  });

  document.addEventListener('pointerleave', () => {
    pointer.active = false;
  });

  function updateBackground() {
    const lines = [];
    const maxDistance = 180;

    nodes.forEach(node => {
      let x = Number(node.dataset.x);
      let y = Number(node.dataset.y);
      let vx = Number(node.dataset.vx);
      let vy = Number(node.dataset.vy);

      const baseX = Number(node.dataset.baseX);
      const baseY = Number(node.dataset.baseY);
      const pullX = (baseX - x) * 0.002;
      const pullY = (baseY - y) * 0.002;
      vx += pullX;
      vy += pullY;

      const dx = pointer.x - x;
      const dy = pointer.y - y;
      const distance = Math.hypot(dx, dy) || 1;

      if (pointer.active && distance < 210) {
        const force = (210 - distance) / 210;
        vx += (dx / distance) * 0.24 * force;
        vy += (dy / distance) * 0.24 * force;
      }

      vx *= 0.96;
      vy *= 0.96;
      x += vx;
      y += vy;

      x = Math.max(20, Math.min(window.innerWidth - 20, x));
      y = Math.max(20, Math.min(window.innerHeight - 20, y));

      node.dataset.x = String(x);
      node.dataset.y = String(y);
      node.dataset.vx = String(vx);
      node.dataset.vy = String(vy);
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;

      const glow = pointer.active && distance < 190 ? 0.9 + (1 - distance / 190) * 0.9 : 0.6;
      node.style.opacity = String(glow);
      node.style.transform = `translate(-50%, -50%) scale(${0.9 + glow * 0.75})`;
    });

    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const a = nodes[i];
        const b = nodes[j];
        const ax = Number(a.dataset.x);
        const ay = Number(a.dataset.y);
        const bx = Number(b.dataset.x);
        const by = Number(b.dataset.y);
        const dx = bx - ax;
        const dy = by - ay;
        const distance = Math.hypot(dx, dy) || 1;

        if (distance < maxDistance) {
          const opacity = 1 - distance / maxDistance;
          lines.push(`<line x1="${ax}" y1="${ay}" x2="${bx}" y2="${by}" stroke="rgba(132, 180, 255, ${0.18 + opacity * 0.42})" stroke-width="${0.6 + opacity * 0.9}" />`);
        }
      }
    }

    if (pointer.active) {
      nodes.forEach(node => {
        const x = Number(node.dataset.x);
        const y = Number(node.dataset.y);
        const dx = pointer.x - x;
        const dy = pointer.y - y;
        const distance = Math.hypot(dx, dy) || 1;

        if (distance < 180) {
          const opacity = 1 - distance / 180;
          lines.push(`<line x1="${x}" y1="${y}" x2="${pointer.x}" y2="${pointer.y}" stroke="rgba(164, 214, 255, ${0.08 + opacity * 0.22})" stroke-width="${0.5 + opacity * 0.8}" />`);
        }
      });
    }

    svg.innerHTML = lines.join('');
    requestAnimationFrame(updateBackground);
  }

  requestAnimationFrame(updateBackground);
}

function resolveProjectById(projectId) {
  if (!projectId) return projects[0];

  const normalizedInput = projectId.toLowerCase().trim();

  const directMatch = projects.find(project => project.id.toLowerCase() === normalizedInput);
  if (directMatch) return directMatch;

  const legacyMatch = projects.find(project => {
    const normalizedTitle = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const normalizedId = project.id.toLowerCase();
    return normalizedId.includes(normalizedInput) || normalizedTitle.includes(normalizedInput) || normalizedInput.includes(normalizedId) || normalizedInput.includes(normalizedTitle);
  });

  if (legacyMatch) return legacyMatch;

  const slugMatch = projects.find(project => {
    const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return slug === normalizedInput || `${slug}-website` === normalizedInput || `${slug}-app` === normalizedInput;
  });

  return slugMatch || projects[0];
}

function initProjectDetailPage() {
  if (!projectDetailGallery || !projectDetailTitle || !projectDetailTags || !projectDetailOverview || !projectDetailFeatures || !projectLiveLink || !projectGithubLink) return;

  const detailLayout = document.querySelector('.project-detail-layout');
  if (detailLayout) {
    detailLayout.addEventListener('pointermove', event => {
      const rect = detailLayout.getBoundingClientRect();
      detailLayout.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
      detailLayout.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
    });

    detailLayout.addEventListener('pointerleave', () => {
      detailLayout.style.setProperty('--pointer-x', '50%');
      detailLayout.style.setProperty('--pointer-y', '50%');
    });
  }

  const params = new URLSearchParams(window.location.search);
  const projectIdFromParams = params.get('project');
  const projectId = projectIdFromParams || (window.location.pathname.toLowerCase().endsWith('mini-bot.html') ? 'mini-bot' : null);
  const selectedProject = resolveProjectById(projectId);

  document.title = selectedProject.title.toUpperCase();
  projectDetailTitle.textContent = selectedProject.title;
  projectDetailGallery.classList.toggle('todo-gallery', selectedProject.id === 'myapp');
  projectDetailGallery.classList.toggle('ecommerce-gallery', selectedProject.id === 'ecommerce-admin-viewer');
  projectDetailOverview.textContent = selectedProject.overview;
  projectDetailTags.innerHTML = selectedProject.tags.map(tag => `<span>${tag}</span>`).join('');
  projectDetailFeatures.innerHTML = selectedProject.features.map(feature => `<li>${feature}</li>`).join('');

  if (selectedProject.url && selectedProject.url !== '#') {
    projectLiveLink.href = selectedProject.url;
    projectLiveLink.textContent = 'Open live project';
    projectLiveLink.style.display = 'inline-flex';
  } else {
    projectLiveLink.removeAttribute('href');
    projectLiveLink.textContent = 'Project information';
    projectLiveLink.style.display = 'none';
  }

  if (selectedProject.github) {
    projectGithubLink.href = selectedProject.github;
    projectGithubLink.style.display = 'inline-flex';
  } else {
    projectGithubLink.style.display = 'none';
  }

  projectDetailGallery.innerHTML = (selectedProject.images || []).map(image => `
    <img class="${selectedProject.id === 'myapp' ? 'project-detail-image-top' : ''}" src="${image}" alt="${selectedProject.title} preview" />
  `).join('');
}

window.addEventListener('DOMContentLoaded', () => {
  if (document.body.classList.contains('project-detail-page')) {
    initProjectDetailPage();
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  document.querySelectorAll('.club-card').forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      card.style.setProperty('--pointer-x', `${x}px`);
      card.style.setProperty('--pointer-y', `${y}px`);
    });

    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--pointer-x', '50%');
      card.style.setProperty('--pointer-y', '50%');
    });
  });

  createFilterButtons();
  renderProjects();
  initTypeEffect();
  initHeroScrollReveal();
  initNavToggle();
  initAmbientBackground();
  initAnimatedStats();
});
