/* =====================================================================
   Muhammad Talha — Portfolio script (vanilla JS, no dependencies)

   >>> EDIT YOUR CONTENT IN THE "CONFIG" OBJECT BELOW <<<
   Anything written as [[like this]] is shown on the page as a highlighted
   placeholder, so you can see exactly what still needs to be filled in.
   ===================================================================== */

// Add the "js" class immediately so scroll-reveal styles only apply when JS runs.
document.documentElement.classList.add('js');

/* ---------------------------------------------------------------------
   CONFIG — all frequently-changed content lives here
   --------------------------------------------------------------------- */
const CONFIG = {
  // ---- Contact information (EDIT) ----
  email: 'eng.talha08@gmail.com',                                   // from your resume
  location: 'Lahore, Pakistan',                                      // from your resume
  mailSubject: 'Opportunity — Power Platform / Dynamics 365',

  // ---- Social links (EDIT) ----
  // Leave github empty ('') until you have the real URL. While empty, the
  // GitHub buttons are shown as disabled instead of pointing nowhere.
  social: {
    linkedin: 'https://www.linkedin.com/in/muhammad-talha-0a3661399', // from your resume
    github: 'https://github.com/engtalha-08',
  },

  // ---- Resume path (EDIT only if you rename the file) ----
  resume: 'assets/Muhammad-Talha-Resume.pdf',

  // ---- Hero: phrases that rotate after "I build business apps with ..." (EDIT) ----
  heroPhrases: ['Canvas Apps', 'Model-driven Apps', 'Power Automate flows', 'Dataverse', 'Power BI dashboards'],

  // ---- Scrolling technology ticker under the hero (EDIT) ----
  marquee: ['Power Apps', 'Power Automate', 'Dataverse', 'Dynamics 365', 'Power BI', 'Canvas Apps', 'Model-driven Apps', 'Business Rules', 'Business Process Flows', 'C#', '.NET', 'JavaScript', 'Custom connectors'],

  // ---- Experience (EDIT) ----
  // Newest first. Use [[double brackets]] for details you still need to add.
  experience: [
    {
      company: 'Numrex',
      title: 'Power Platform Developer',
      start: '[[Start date]]',
      end: 'Present',
      note: 'Full-time · started here as a 3-month intern',
      responsibilities: [
        'Build Canvas Apps and Power Automate flows on top of Dataverse.',
        'Develop and test apps and automated workflows as part of the team.',
      ],
      contributions: [
        '[[Add your key contributions at Numrex]]',
      ],
      tech: ['Canvas Apps', 'Power Automate', 'Dataverse'],
    },
    {
      company: 'GreenX Consultants',
      title: 'Power Platform Developer',
      start: '2025',
      end: '[[End date]]',                  // EDIT: add the month/year this role ended
      responsibilities: [
        'Designed and delivered Canvas Apps and Model-driven Apps for business teams.',
        'Automated business processes using cloud flows and scheduled flows in Power Automate.',
        'Managed Dataverse tables, relationships, security roles and Business Process Flows.',
        'Developed Power BI dashboards and integrated third-party REST APIs through custom connectors.',
      ],
      contributions: [
        'Built a Leave Management System with multi-level approval flows and Teams / Outlook notifications.',
        'Delivered apps that reduced manual effort by approximately 40%.',
      ],
      tech: ['Canvas Apps', 'Model-driven Apps', 'Power Automate', 'Dataverse', 'Power BI', 'Custom connectors', 'REST APIs'],
    },
  ],

  // ---- Platform map (EDIT) ----
  // First four nodes are drawn on the left, the next four on the right.
  // icon names: apps, layers, code, plug, flow, chart, chat, folder
  platform: {
    centerTitle: 'Dataverse',
    centerSub: 'Tables · relationships · roles',
    defaultTitle: 'Dataverse at the center',
    defaultText: 'Apps, flows and reports are built on Dataverse tables, relationships and security roles. Hover or focus a service to trace its path.',
    nodes: [
      { id: 'canvas', icon: 'apps', title: 'Canvas Apps', sub: 'Power Fx · Dataverse',
        text: 'Employee-facing apps such as the Leave Management System, built with Power Fx (Patch, Filter, LookUp, ForAll) on top of Dataverse.' },
      { id: 'mda', icon: 'layers', title: 'Model-driven Apps', sub: 'Forms · views · dashboards',
        text: 'Customized forms, views and dashboards for sales pipeline management and customer relationship tracking.' },
      { id: 'dev', icon: 'code', title: 'Plugins & JavaScript', sub: 'C# · form scripts',
        text: 'Dynamics 365 plugins in C# and JavaScript form customization, for logic that goes beyond Business Rules.' },
      { id: 'conn', icon: 'plug', title: 'Custom connectors', sub: 'Third-party REST APIs',
        text: 'Third-party REST APIs integrated into apps and flows through custom connectors.' },
      { id: 'flow', icon: 'flow', title: 'Power Automate', sub: 'Cloud · scheduled · instant',
        text: 'Cloud, scheduled and instant flows — multi-step approvals, document generation and automated business processes.' },
      { id: 'bi', icon: 'chart', title: 'Power BI', sub: 'Dashboards on Dataverse',
        text: 'Dashboards integrated with Dataverse for sales KPIs and operational reports.' },
      { id: 'comms', icon: 'chat', title: 'Teams & Outlook', sub: 'Notifications · email',
        text: 'Approval notifications through Microsoft Teams and Outlook email triggers at each workflow stage.' },
      { id: 'sp', icon: 'folder', title: 'SharePoint', sub: 'Document library',
        text: 'SharePoint as the document library backend for automated document generation and approval workflows.' },
    ],
  },

  // ---- Education (EDIT) ----
  education: {
    institution: 'Virtual University of Pakistan',   // from your resume
    program: 'Bachelor of Computer Science',         // from your resume
    status: 'Currently studying — 5th semester',
    startYear: '2024',
    expectedCompletion: '2028',
  },

  // ---- Projects (EDIT / ADD / REMOVE) ----
  // To add a project: copy one object, change the fields, done.
  // To remove one: delete its object.
  // type: 'featured' (shown as a large card) or 'concept' (planned / unconfirmed — shown in the Concepts grid).
  // repo / demo: leave '' until a real link exists. An empty demo hides the Live Demo button.
  // image: card screenshot. screenshots: images shown in the details popup (add more paths to show more).
  // Until the image files exist, a placeholder is shown (see README for the exact filenames).
  projects: [
    {
      id: 'leave-management',
      type: 'featured',
      title: 'Leave Management System',
      category: 'Canvas App · Automation',
      summary: 'A Canvas App backed by Dataverse where employees apply for, track and manage leave, with multi-step approvals.',
      problem: 'Leave requests need one consistent, trackable path — with balances checked before anything is approved.',
      implementation: [
        'Built the employee-facing Canvas App on Dataverse for applying, tracking and managing leave.',
        'Designed multi-step approval flows with manager and HR notifications through Teams and Outlook.',
        'Added business rules that enforce leave balance validation.',
      ],
      features: [
        'Apply for, track and manage leave requests',
        'Multi-step manager and HR approvals',
        'Teams and Outlook notifications',
        'Leave balance validation rules',
      ],
      stack: ['Canvas App', 'Power Automate', 'Dataverse', 'Teams', 'Outlook'],
      image: 'assets/projects/leave-management/cover.png',
      screenshots: ['assets/projects/leave-management/cover.png'],
      mockup: true,
      repo: '',
      demo: '',
    },
    {
      id: 'sales-pipeline',
      type: 'featured',
      title: 'Sales Pipeline Management & Reporting',
      category: 'Model-driven App · Power BI',
      summary: 'A customized Model-driven App for tracking sales pipeline and customer relationships, with Power BI reporting on top of Dataverse.',
      problem: 'Sales teams and leadership need pipeline and customer data in one place, with clear KPIs and operational reports.',
      implementation: [
        'Customized Model-driven App forms, views and dashboards for pipeline management and customer relationship tracking.',
        'Delivered Power BI dashboards integrated with Dataverse for sales KPIs and operational reports.',
      ],
      features: [
        'Customized forms, views and dashboards',
        'Pipeline and customer relationship tracking',
        'Power BI dashboards connected to Dataverse',
        'Sales KPIs and operational reporting for leadership',
      ],
      stack: ['Model-driven App', 'Power BI', 'Dataverse'],
      image: 'assets/projects/sales-pipeline/cover.png',
      screenshots: ['assets/projects/sales-pipeline/cover.png', 'assets/projects/sales-pipeline/shot-2.png'],
      mockup: true,
      repo: '',
      demo: '',
    },
    {
      id: 'workflow-automation',
      type: 'featured',
      title: 'Workflow Automation Suite',
      category: 'Power Automate · SharePoint',
      summary: 'Automated document generation and multi-step approval workflows using Power Automate with SharePoint as the document library.',
      problem: 'Document creation and approvals involve many manual hand-offs, and stakeholders need to stay informed at each stage.',
      implementation: [
        'Automated document generation and multi-step approvals with Power Automate, using SharePoint as the document library backend.',
        'Integrated Microsoft Teams notifications and Outlook email triggers at each workflow stage.',
      ],
      features: [
        'Automated document generation',
        'Multi-step approval workflows',
        'Teams notifications and Outlook email triggers',
        'SharePoint document library backend',
      ],
      stack: ['Power Automate', 'SharePoint', 'Teams', 'Outlook'],
      image: 'assets/projects/workflow-automation/cover.png',
      screenshots: ['assets/projects/workflow-automation/cover.png'],
      mockup: true,
      repo: '',
      demo: '',
    },
    {
      id: 'hospital-crm',
      type: 'concept',
      title: 'Hospital Management CRM',
      category: 'Dynamics 365 · Concept',
      summary: 'Concept: a Dynamics 365 / Dataverse solution for managing patients, appointments and hospital records.',
      problem: 'Hospitals need patient and appointment information in one structured, secure place.',
      implementation: ['[[Describe what you built once this project is confirmed]]'],
      features: ['[[Add confirmed features]]'],
      stack: ['Dynamics 365', 'Dataverse', 'Model-driven App'],
      image: 'assets/projects/hospital-crm/cover.png',
      screenshots: ['assets/projects/hospital-crm/cover.png'],
      mockup: true,
      repo: '',
      demo: '',
    },
    {
      id: 'employee-management',
      type: 'concept',
      title: 'Employee Management System',
      category: 'Power Apps · Concept',
      summary: 'Concept: a Power Apps and Dataverse application for managing employee records, departments and HR requests.',
      problem: 'HR teams need employee information and requests managed in one structured app instead of scattered files.',
      implementation: ['[[Describe what you built once this project is confirmed]]'],
      features: ['[[Add confirmed features]]'],
      stack: ['Power Apps', 'Dataverse', 'Power Automate'],
      image: 'assets/projects/employee-management/cover.png',
      screenshots: ['assets/projects/employee-management/cover.png'],
      mockup: true,
      repo: '',
      demo: '',
    },
    {
      id: 'customer-service',
      type: 'concept',
      title: 'Customer Service Management System',
      category: 'Dataverse · Concept',
      summary: 'Concept: a case-management app on Dataverse for logging, routing and resolving customer requests.',
      problem: 'Support teams need customer requests tracked, assigned and resolved in a consistent way.',
      implementation: ['[[Describe what you built once this project is confirmed]]'],
      features: ['[[Add confirmed features]]'],
      stack: ['Dataverse', 'Power Apps', 'Power Automate'],
      image: 'assets/projects/customer-service/cover.png',
      screenshots: ['assets/projects/customer-service/cover.png'],
      mockup: true,
      repo: '',
      demo: '',
    },
  ],
};

/* =====================================================================
   Everything below is application code. You normally don't need to edit it.
   ===================================================================== */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Helpers ---------- */
function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// Escapes text, then turns [[placeholder]] into a highlighted span.
function fmt(value) {
  return esc(value).replace(/\[\[(.+?)\]\]/g, '<span class="placeholder">$1</span>');
}

function icon(name) {
  return `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
}

function isHttpUrl(url) {
  return /^https?:\/\//i.test(url || '');
}

// Small non-blocking message (also mirrored into the aria-live region in Contact).
let toastTimer;
function toast(message) {
  let el = document.getElementById('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.className = 'toast';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('is-visible'), 4200);
}

/* ---------- Contact / social / resume wiring ---------- */
function setupLinks() {
  document.querySelectorAll('[data-config="location"]').forEach((el) => { el.textContent = CONFIG.location; });

  const mailto = `mailto:${CONFIG.email}?subject=${encodeURIComponent(CONFIG.mailSubject)}`;
  document.querySelectorAll('[data-mailto]').forEach((el) => { el.setAttribute('href', mailto); });
  document.querySelectorAll('[data-config-text="email"]').forEach((el) => { el.textContent = CONFIG.email; });

  // Social links: real URL → working link; empty → clearly disabled
  document.querySelectorAll('[data-social]').forEach((el) => {
    const key = el.getAttribute('data-social');
    const url = CONFIG.social[key];
    if (isHttpUrl(url)) {
      el.setAttribute('href', url);
    } else {
      el.setAttribute('href', '#contact');
      el.setAttribute('aria-disabled', 'true');
      el.removeAttribute('target');
      el.setAttribute('title', `Add your ${key} URL in script.js (CONFIG.social.${key})`);
      el.addEventListener('click', (e) => {
        e.preventDefault();
        toast(`The ${key} link isn't set yet — add it in script.js (CONFIG.social.${key}).`);
      });
    }
  });

  document.querySelectorAll('[data-social-text]').forEach((el) => {
    const key = el.getAttribute('data-social-text');
    const url = CONFIG.social[key];
    if (isHttpUrl(url)) {
      el.textContent = url.replace(/^https?:\/\/(www\.)?/i, '').replace(/\/$/, '');
    } else {
      el.innerHTML = `<span class="placeholder">Add your ${esc(key)} URL</span>`;
    }
  });

  // Resume buttons: only claim it works if the file really exists
  const resumeLinks = document.querySelectorAll('[data-resume]');
  resumeLinks.forEach((el) => el.setAttribute('href', CONFIG.resume));

  const markResumeMissing = () => {
    resumeLinks.forEach((el) => {
      el.setAttribute('aria-disabled', 'true');
      el.removeAttribute('download');
      el.setAttribute('title', `Resume not found — add your PDF at ${CONFIG.resume}`);
      el.addEventListener('click', (e) => {
        e.preventDefault();
        toast(`Resume file not found. Add your PDF at ${CONFIG.resume}.`);
      });
    });
  };
  if (location.protocol === 'http:' || location.protocol === 'https:') {
    fetch(CONFIG.resume, { method: 'HEAD' })
      .then((res) => { if (!res.ok) markResumeMissing(); })
      .catch(markResumeMissing);
  }
}

/* ---------- Experience timeline ---------- */
function renderExperience() {
  const list = document.getElementById('timeline');
  if (!list) return;

  const colors = ['#a78bfa', '#22d3ee', '#4ade80', '#fb923c'];
  list.innerHTML = CONFIG.experience.map((job, i) => `
    <li class="cr-item reveal" style="--cc:${colors[i % colors.length]};--stagger:${i * 90}ms">
      <span class="cr-date">${fmt(job.start)} — ${fmt(job.end)}</span>
      <div class="cr-card">
        <h3 class="cr-role">${fmt(job.title)}</h3>
        <p class="cr-company">${fmt(job.company)}</p>
        ${job.note ? `<p class="cr-note">${fmt(job.note)}</p>` : ''}
        <h4>Responsibilities</h4>
        <ul class="bullets">${job.responsibilities.map((r) => `<li>${fmt(r)}</li>`).join('')}</ul>
        <h4>Key contributions</h4>
        <ul class="bullets">${job.contributions.map((c) => `<li>${fmt(c)}</li>`).join('')}</ul>
        <h4>Technologies</h4>
        <ul class="chips">${job.tech.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      </div>
    </li>`).join('');
}

/* ---------- Ticker ---------- */
function renderMarquee() {
  const track = document.getElementById('marqueeTrack');
  if (!track) return;
  const row = CONFIG.marquee.map((t, i) => `<span class="mq${i % 3 === 1 ? ' is-outline' : ''}">${esc(t)}</span>`).join('');
  track.innerHTML = row + row;   // duplicated so the loop is seamless
}

/* ---------- Hero background: animated 3D-style wireframe ribbons, shapes and particles (canvas) ----------
   Pure canvas 2D, no libraries. Reacts to the mouse: ribbons bend towards the cursor, particles are pushed away,
   shapes spin faster. With reduced motion enabled it draws one still frame. */
function setupHeroFX() {
  const host = document.getElementById('heroDecor');
  const hero = document.getElementById('home');
  if (!host || !hero) return;
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  host.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let W = 0, H = 0, running = false, visible = true, raf = 0;
  const mouse = { x: -9999, y: -9999, active: false, nx: 0, ny: 0, sx: 0, sy: 0, speed: 0 };
  const orbit = document.querySelector('.orbit');

  const resize = () => {
    const r = hero.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = r.width; H = r.height;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!running) draw(0);
  };

  const ribbons = [
    { base: 0.16, slope: 0.10, amp: 0.07, freq: 1.7, speed: 0.28, phase: 0.0, r: 46, rgb: '14,154,167' },
    { base: 0.80, slope: -0.14, amp: 0.09, freq: 1.3, speed: 0.22, phase: 2.1, r: 64, rgb: '124,58,237' },
  ];

  function ribbonPoint(rb, t, time) {
    const x = -0.1 * W + t * 1.2 * W;
    let y = H * (rb.base + rb.slope * (t - 0.5)) + rb.amp * H * Math.sin(t * rb.freq * Math.PI + time * rb.speed + rb.phase);
    if (mouse.active) {
      const dx = x - mouse.x;
      y += (mouse.y - y) * 0.2 * Math.exp(-(dx * dx) / (2 * 220 * 220));
    }
    return { x, y };
  }

  function drawRibbon(rb, time) {
    const N = 84, K = 15;
    const pts = [], nrm = [];
    for (let i = 0; i <= N; i++) {
      const t = i / N;
      const p = ribbonPoint(rb, t, time);
      const q = ribbonPoint(rb, Math.min(1, t + 0.01), time);
      const o = ribbonPoint(rb, Math.max(0, t - 0.01), time);
      const dx = q.x - o.x, dy = q.y - o.y, len = Math.hypot(dx, dy) || 1;
      pts.push(p); nrm.push({ nx: -dy / len, ny: dx / len, tx: dx / len, ty: dy / len });
    }
    const radius = (t) => rb.r * (0.78 + 0.22 * Math.sin(t * 6 + time * 0.6 + rb.phase));
    const twist = (t) => t * 5 + time * 0.55 + rb.phase;
    ctx.lineWidth = 0.8;
    // longitudinal wires (alpha follows the "depth" of each wire so it reads as 3D)
    for (let k = 0; k < K; k++) {
      for (let i = 0; i < N; i++) {
        const t0 = i / N, t1 = (i + 1) / N;
        const p0 = pts[i], p1 = pts[i + 1], n0 = nrm[i], n1 = nrm[i + 1];
        const ph0 = (k / K) * Math.PI * 2 + twist(t0), ph1 = (k / K) * Math.PI * 2 + twist(t1);
        const o0 = radius(t0) * Math.cos(ph0), o1 = radius(t1) * Math.cos(ph1);
        ctx.strokeStyle = `rgba(${rb.rgb},${0.14 + 0.5 * (Math.sin(ph0) + 1) / 2})`;
        ctx.beginPath();
        ctx.moveTo(p0.x + n0.nx * o0, p0.y + n0.ny * o0);
        ctx.lineTo(p1.x + n1.nx * o1, p1.y + n1.ny * o1);
        ctx.stroke();
      }
    }
    // cross-section rings
    ctx.strokeStyle = `rgba(${rb.rgb},0.3)`;
    for (let i = 0; i <= N; i += 2) {
      const t = i / N, p = pts[i], n = nrm[i], r = radius(t), ps = twist(t);
      ctx.beginPath();
      for (let a = 0; a <= 14; a++) {
        const ang = (a / 14) * Math.PI * 2 + ps;
        const ox = n.nx * r * Math.cos(ang) + n.tx * r * 0.32 * Math.sin(ang);
        const oy = n.ny * r * Math.cos(ang) + n.ty * r * 0.32 * Math.sin(ang);
        if (a === 0) ctx.moveTo(p.x + ox, p.y + oy); else ctx.lineTo(p.x + ox, p.y + oy);
      }
      ctx.stroke();
    }
  }

  // wireframe solids
  const PHI = (1 + Math.sqrt(5)) / 2;
  const icoV = [[-1, PHI, 0], [1, PHI, 0], [-1, -PHI, 0], [1, -PHI, 0], [0, -1, PHI], [0, 1, PHI], [0, -1, -PHI], [0, 1, -PHI], [PHI, 0, -1], [PHI, 0, 1], [-PHI, 0, -1], [-PHI, 0, 1]];
  const icoE = [];
  for (let i = 0; i < icoV.length; i++) for (let j = i + 1; j < icoV.length; j++) {
    const d = Math.hypot(icoV[i][0] - icoV[j][0], icoV[i][1] - icoV[j][1], icoV[i][2] - icoV[j][2]);
    if (Math.abs(d - 2) < 0.01) icoE.push([i, j]);
  }
  const cubeV = [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]];
  const cubeE = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]];
  const octV = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
  const octE = [[0, 2], [0, 3], [0, 4], [0, 5], [1, 2], [1, 3], [1, 4], [1, 5], [2, 4], [2, 5], [3, 4], [3, 5]];
  const shapes = [
    { v: icoV, e: icoE, fx: 0.09, fy: 0.22, size: 52, rgb: '124,58,237', rx: 0.3, ry: 0.5, sp: 0.35 },
    { v: cubeV, e: cubeE, fx: 0.91, fy: 0.16, size: 34, rgb: '183,121,31', rx: 1.1, ry: 0.2, sp: 0.5 },
    { v: octV, e: octE, fx: 0.06, fy: 0.84, size: 36, rgb: '14,154,167', rx: 0.6, ry: 1.0, sp: 0.4 },
    { v: cubeV, e: cubeE, fx: 0.62, fy: 0.9, size: 22, rgb: '124,58,237', rx: 0.2, ry: 0.9, sp: 0.6 },
  ];

  function drawShape(s, time) {
    const boost = 1 + Math.min(mouse.speed, 40) * 0.05;
    const ax = s.rx + time * s.sp * 0.6 * boost + mouse.sy * 0.8;
    const ay = s.ry + time * s.sp * boost + mouse.sx * 0.8;
    const cx = W * s.fx + Math.sin(time * 0.5 + s.rx * 9) * 8 + mouse.sx * 8;
    const cy = H * s.fy + Math.cos(time * 0.6 + s.ry * 9) * 10 + mouse.sy * 8;
    const sa = Math.sin(ax), ca = Math.cos(ax), sb = Math.sin(ay), cb = Math.cos(ay);
    const proj = s.v.map(([x, y, z]) => {
      let y1 = y * ca - z * sa, z1 = y * sa + z * ca;
      let x2 = x * cb + z1 * sb, z2 = -x * sb + z1 * cb;
      const k = 1 / (1 + z2 * 0.08);
      return { x: cx + x2 * s.size * k, y: cy + y1 * s.size * k, z: z2 };
    });
    ctx.lineWidth = 1;
    s.e.forEach(([i, j]) => {
      const depth = (proj[i].z + proj[j].z) / 2;
      ctx.strokeStyle = `rgba(${s.rgb},${0.35 + 0.25 * (depth + 1.6) / 3.2})`;
      ctx.beginPath(); ctx.moveTo(proj[i].x, proj[i].y); ctx.lineTo(proj[j].x, proj[j].y); ctx.stroke();
    });
    ctx.fillStyle = `rgba(${s.rgb},0.7)`;
    proj.forEach((p) => { ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2); ctx.fill(); });
  }

  // drifting particles that the cursor pushes away
  const particles = Array.from({ length: 38 }, (_, i) => ({
    x: Math.random(), y: Math.random(), vx: (Math.random() - 0.5) * 0.00006, vy: (Math.random() - 0.5) * 0.00006,
    r: 1 + Math.random() * 1.8, rgb: ['124,58,237', '14,154,167', '183,121,31'][i % 3], ox: 0, oy: 0,
  }));
  function drawParticles() {
    particles.forEach((p) => {
      p.x += p.vx * 16; p.y += p.vy * 16;
      if (p.x < 0) p.x = 1; if (p.x > 1) p.x = 0; if (p.y < 0) p.y = 1; if (p.y > 1) p.y = 0;
      let px = p.x * W + p.ox, py = p.y * H + p.oy;
      if (mouse.active) {
        const dx = px - mouse.x, dy = py - mouse.y, d = Math.hypot(dx, dy);
        if (d < 130) { const f = (130 - d) / 130; p.ox += (dx / (d || 1)) * f * 3; p.oy += (dy / (d || 1)) * f * 3; }
      }
      p.ox *= 0.94; p.oy *= 0.94;
      ctx.fillStyle = `rgba(${p.rgb},0.55)`;
      ctx.beginPath(); ctx.arc(px, py, p.r, 0, Math.PI * 2); ctx.fill();
    });
  }

  function draw(time) {
    ctx.clearRect(0, 0, W, H);
    ribbons.forEach((rb) => drawRibbon(rb, time));
    shapes.forEach((s) => drawShape(s, time));
    drawParticles();
  }

  // pointer: store position relative to the hero + normalised -1..1 for parallax
  window.addEventListener('pointermove', (e) => {
    const r = hero.getBoundingClientRect();
    mouse.speed = Math.hypot(e.movementX || 0, e.movementY || 0);
    mouse.active = e.clientY >= r.top && e.clientY <= r.bottom;
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    mouse.nx = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.ny = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });
  document.addEventListener('pointerleave', () => { mouse.active = false; mouse.nx = 0; mouse.ny = 0; });

  const start = performance.now();
  function frame(now) {
    if (!running) return;
    mouse.sx += (mouse.nx - mouse.sx) * 0.06;     // eased values
    mouse.sy += (mouse.ny - mouse.sy) * 0.06;
    mouse.speed *= 0.9;
    if (orbit) { orbit.style.setProperty('--mx', mouse.sx.toFixed(3)); orbit.style.setProperty('--my', mouse.sy.toFixed(3)); }
    draw((now - start) / 1000);
    raf = requestAnimationFrame(frame);
  }
  const play = () => { if (!running && visible && !document.hidden && !prefersReducedMotion) { running = true; raf = requestAnimationFrame(frame); } };
  const stop = () => { running = false; cancelAnimationFrame(raf); };

  resize();
  window.addEventListener('resize', resize);
  if (prefersReducedMotion) { draw(1.2); return; }
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([en]) => { visible = en.isIntersecting; visible ? play() : stop(); }, { threshold: 0 }).observe(hero);
  }
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : play()));
  play();
}

/* ---------- Custom cursor: dot + trailing ring that grows over links and buttons ---------- */
function setupCursor() {
  if (prefersReducedMotion || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const ring = document.createElement('div'); ring.className = 'cursor-ring'; ring.setAttribute('aria-hidden', 'true');
  const dot = document.createElement('div'); dot.className = 'cursor-dot'; dot.setAttribute('aria-hidden', 'true');
  document.body.append(ring, dot);
  let x = -100, y = -100, rx = -100, ry = -100, shown = false;

  window.addEventListener('pointermove', (e) => {
    x = e.clientX; y = e.clientY;
    if (!shown) { shown = true; rx = x; ry = y; document.documentElement.classList.add('cursor-on'); }
    dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }, { passive: true });
  document.addEventListener('pointerleave', () => { shown = false; document.documentElement.classList.remove('cursor-on'); });
  document.addEventListener('pointerdown', () => ring.classList.add('is-down'));
  document.addEventListener('pointerup', () => ring.classList.remove('is-down'));
  document.addEventListener('pointerover', (e) => {
    const hot = e.target.closest && e.target.closest('a, button, [role="button"], .pnode, .preview, summary, input, textarea');
    ring.classList.toggle('is-hover', Boolean(hot));
  });

  (function loop() {
    rx += (x - rx) * 0.16; ry += (y - ry) * 0.16;
    ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
    requestAnimationFrame(loop);
  })();
}

/* ---------- Hero typewriter phrase ---------- */
function setupRotator() {
  const el = document.getElementById('rotator');
  const phrases = CONFIG.heroPhrases;
  if (!el || !phrases.length) return;
  el.textContent = phrases[0];
  if (prefersReducedMotion || phrases.length < 2) { el.classList.add('no-caret'); return; }
  let p = 0, n = phrases[0].length, deleting = true;
  const tick = () => {
    const word = phrases[p];
    if (deleting) {
      n--; el.textContent = word.slice(0, n);
      if (n <= 0) { deleting = false; p = (p + 1) % phrases.length; return setTimeout(tick, 280); }
      return setTimeout(tick, 35);
    }
    n++; el.textContent = phrases[p].slice(0, n);
    if (n >= phrases[p].length) { deleting = true; return setTimeout(tick, 1700); }
    setTimeout(tick, 75);
  };
  setTimeout(tick, 1800);
}

/* ---------- Platform map (hover / focus to trace a path) ---------- */
function renderPlatform() {
  const host = document.getElementById('platform-map');
  if (!host) return;
  const cfg = CONFIG.platform;

  const W = 210, H = 72, LEFT_X = 0, RIGHT_X = 550;
  const ys = [18, 128, 238, 348];
  const nodes = cfg.nodes.slice(0, 8);

  let lines = '';
  let boxes = '';
  nodes.forEach((n, i) => {
    const left = i < 4;
    const y = ys[i % 4];
    const x = left ? LEFT_X : RIGHT_X;
    const my = y + H / 2;
    const d = left
      ? `M${x + W},${my} C${x + W + 40},${my} 235,220 275,220`
      : `M${x},${my} C${x - 40},${my} 525,220 485,220`;
    lines += `<path class="pm-line" data-line="${esc(n.id)}" d="${d}"/>`;
    boxes += `
      <g class="pnode" data-node="${esc(n.id)}" tabindex="0" role="button" aria-label="${esc(n.title)} — show details" transform="translate(${x} ${y})">
        <rect width="${W}" height="${H}" rx="14"/>
        <use href="#i-${esc(n.icon)}" x="14" y="24" width="24" height="24"/>
        <text class="pn-title" x="50" y="33">${esc(n.title)}</text>
        <text class="pn-sub" x="50" y="53">${esc(n.sub)}</text>
      </g>`;
  });

  host.innerHTML = `
    <svg class="pmap" viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" role="group" aria-label="Diagram of services connected to Dataverse">
      <g>${lines}</g>
      <g class="pm-core">
        <rect x="275" y="170" width="210" height="100" rx="18"/>
        <use href="#i-db" x="368" y="180" width="24" height="24"/>
        <text class="pm-core-title" x="380" y="232">${esc(cfg.centerTitle)}</text>
        <text class="pm-core-sub" x="380" y="253">${esc(cfg.centerSub)}</text>
      </g>
      ${boxes}
    </svg>

    <div class="platform-panel" aria-live="polite">
      <h3 id="ppTitle">${esc(cfg.defaultTitle)}</h3>
      <p id="ppText">${esc(cfg.defaultText)}</p>
    </div>

    <ul class="platform-list">
      ${nodes.map((n) => `<li><h3>${icon(n.icon)} ${esc(n.title)}</h3><p>${esc(n.text)}</p></li>`).join('')}
    </ul>`;

  const svg = host.querySelector('.pmap');
  const title = host.querySelector('#ppTitle');
  const text = host.querySelector('#ppText');

  const activate = (id) => {
    const node = nodes.find((n) => n.id === id);
    if (!node) return;
    svg.querySelectorAll('.pm-line').forEach((l) => l.classList.toggle('is-on', l.getAttribute('data-line') === id));
    svg.querySelectorAll('.pnode').forEach((g) => g.classList.toggle('is-on', g.getAttribute('data-node') === id));
    title.textContent = node.title;
    text.textContent = node.text;
  };
  const reset = () => {
    svg.querySelectorAll('.is-on').forEach((el) => el.classList.remove('is-on'));
    title.textContent = cfg.defaultTitle;
    text.textContent = cfg.defaultText;
  };

  svg.addEventListener('pointerover', (e) => {
    const g = e.target.closest('.pnode');
    if (g) activate(g.getAttribute('data-node'));
  });
  svg.addEventListener('pointerleave', reset);
  svg.addEventListener('focusin', (e) => {
    const g = e.target.closest('.pnode');
    if (g) activate(g.getAttribute('data-node'));
  });
  svg.addEventListener('focusout', reset);
  svg.addEventListener('click', (e) => {          // touch devices (tablets)
    const g = e.target.closest('.pnode');
    if (g) activate(g.getAttribute('data-node'));
  });
}

/* ---------- Education ---------- */
function renderEducation() {
  const wrap = document.getElementById('eduWrap');
  if (!wrap) return;
  const e = CONFIG.education;
  wrap.innerHTML = `
    <div class="edu-entry reveal">
      <div>
        <p class="edu-year">${fmt(e.startYear)} – ${fmt(e.expectedCompletion)}</p>
        <p class="edu-year-sub">In progress · not yet graduated</p>
      </div>
      <article class="edu-card">
        <span class="edu-ico">${icon('cap')}</span>
        <div>
          <h3>${fmt(e.program)}</h3>
          <p class="edu-inst">${fmt(e.institution)}</p>
          <span class="edu-status">${fmt(e.status)}</span>
          <dl class="edu-facts">
            <div><dt>Start year</dt><dd>${fmt(e.startYear)}</dd></div>
            <div><dt>Expected completion</dt><dd>${fmt(e.expectedCompletion)}</dd></div>
          </dl>
        </div>
      </article>
    </div>`;
}

/* ---------- Project previews (image with graceful fallback) ---------- */
function previewHtml(src, alt, badgeHtml = '', mockup = false) {
  return `
    <div class="preview">
      <div class="preview-ph">${icon('layers')}<b>Screenshot not added yet</b><span>${esc(src)}</span></div>
      <img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async">
      ${badgeHtml}
      ${mockup ? '<span class="mock-tag">Illustrative preview · sample data</span>' : ''}
    </div>`;
}

// 'error' doesn't bubble, so listen in the capture phase on the container.
function watchBrokenImages(container) {
  container.addEventListener('error', (e) => {
    if (e.target instanceof HTMLImageElement) e.target.classList.add('is-broken');
  }, true);
}

/* ---------- Projects ---------- */
function repoButton(project, small = true) {
  const size = small ? ' btn-sm' : '';
  if (isHttpUrl(project.repo)) {
    return `<a class="btn btn-light${size}" href="${esc(project.repo)}" target="_blank" rel="noopener noreferrer">${icon('github')} GitHub</a>`;
  }
  return `<a class="btn btn-light${size}" href="#contact" aria-disabled="true" data-disabled-msg="No repository linked yet — add it in script.js (project.repo)." title="No repository linked yet">${icon('github')} GitHub</a>`;
}

function demoButton(project, small = true) {
  if (!isHttpUrl(project.demo)) return '';   // only shown when a real demo exists
  const size = small ? ' btn-sm' : '';
  return `<a class="btn btn-dark${size}" href="${esc(project.demo)}" target="_blank" rel="noopener noreferrer">${icon('external')} Live Demo</a>`;
}

function badgeFor(project) {
  return project.type === 'concept'
    ? '<span class="badge badge-concept">Concept</span>'
    : '<span class="badge badge-featured">Featured</span>';
}

function actionsHtml(p) {
  return `
    <div class="project-actions">
      <button class="btn btn-dark btn-sm" type="button" data-open="${esc(p.id)}" aria-haspopup="dialog">Details ${icon('arrow-right')}</button>
      ${repoButton(p)}
      ${demoButton(p)}
    </div>`;
}

function renderProjects() {
  const stack = document.getElementById('workStack');
  const conceptWrap = document.getElementById('conceptsWrap');
  const conceptGrid = document.getElementById('conceptGrid');
  if (!stack || !conceptGrid) return;

  const featured = CONFIG.projects.filter((p) => p.type !== 'concept');
  const concepts = CONFIG.projects.filter((p) => p.type === 'concept');

  stack.innerHTML = featured.map((p, i) => `
    <article class="work-card reveal" data-id="${esc(p.id)}" style="--i:${i}">
      <div class="work-copy">
        <div class="work-top">
          <span class="work-idx">${String(i + 1).padStart(2, '0')}</span>
          ${badgeFor(p)}
          <span class="project-cat">${esc(p.category)}</span>
        </div>
        <h3 class="work-title">${esc(p.title)}</h3>
        <p class="project-sum">${fmt(p.summary)}</p>
        <div class="work-block">
          <h4>Business problem</h4>
          <p class="project-sum" style="margin-top:0">${fmt(p.problem)}</p>
        </div>
        <div class="work-block">
          <h4>My contribution</h4>
          <ul class="bullets">${p.implementation.map((x) => `<li>${fmt(x)}</li>`).join('')}</ul>
        </div>
        <ul class="chips">${p.stack.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
        ${actionsHtml(p)}
      </div>
      <div class="work-media">${previewHtml(p.image, `Preview of the ${p.title} project`, '', p.mockup)}</div>
    </article>`).join('');

  conceptWrap.hidden = concepts.length === 0;
  conceptGrid.innerHTML = concepts.map((p, i) => `
    <article class="project-card reveal" data-id="${esc(p.id)}" style="--stagger:${(i % 3) * 90}ms">
      ${previewHtml(p.image, `Preview of the ${p.title} project`, badgeFor(p), p.mockup)}
      <div class="project-body">
        <p class="project-cat">${esc(p.category)}</p>
        <h3 class="project-title">${esc(p.title)}</h3>
        <p class="project-sum">${fmt(p.summary)}</p>
        <ul class="chips">${p.stack.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
        ${actionsHtml(p)}
      </div>
    </article>`).join('');

  [stack, conceptGrid].forEach((container) => {
    watchBrokenImages(container);
    container.addEventListener('click', (e) => {
      const disabled = e.target.closest('[aria-disabled="true"][data-disabled-msg]');
      if (disabled) { e.preventDefault(); toast(disabled.getAttribute('data-disabled-msg')); return; }
      const opener = e.target.closest('[data-open]');
      if (opener) { openModal(opener.getAttribute('data-open'), opener); return; }
      const preview = e.target.closest('.preview');
      if (preview) {
        const card = preview.closest('[data-id]');
        if (card) openModal(card.getAttribute('data-id'), card.querySelector('[data-open]'));
      }
    });
  });
}

/* ---------- Project detail modal ---------- */
let lastOpener = null;

function modalSection(title, html, full = false) {
  return `<section class="md-sec${full ? ' md-full' : ''}"><h3>${esc(title)}</h3>${html}</section>`;
}

function openModal(id, opener) {
  const project = CONFIG.projects.find((p) => p.id === id);
  const dialog = document.getElementById('projectModal');
  const body = document.getElementById('modalBody');
  if (!project || !dialog || !body) return;

  lastOpener = opener || null;
  const shots = (project.screenshots && project.screenshots.length ? project.screenshots : [project.image]);

  body.innerHTML = `
    <div class="md-meta">${badgeFor(project)}<span class="project-cat">${esc(project.category)}</span></div>
    <h2 id="modalTitle">${esc(project.title)}</h2>
    <p class="project-sum">${fmt(project.summary)}</p>
    ${project.type === 'concept' ? '<p class="md-note">This is a project concept. Scope and stack are tentative until the implementation is confirmed.</p>' : ''}

    <div class="md-grid">
      ${modalSection('Business problem', `<p>${fmt(project.problem)}</p>`)}
      ${modalSection('Technology stack', `<ul class="chips">${project.stack.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>`)}
      ${modalSection('My contribution & implementation', `<ul class="bullets">${project.implementation.map((x) => `<li>${fmt(x)}</li>`).join('')}</ul>`)}
      ${modalSection('Key features', `<ul class="bullets">${project.features.map((x) => `<li>${fmt(x)}</li>`).join('')}</ul>`)}
      ${modalSection('Screenshots', `<div class="shots">${shots.map((s, i) => previewHtml(s, `${project.title} screenshot ${i + 1}`, '', project.mockup)).join('')}</div>`, true)}
    </div>

    <div class="md-actions">
      ${repoButton(project, false)}
      ${demoButton(project, false)}
    </div>
    ${isHttpUrl(project.repo) ? '' : '<p class="md-note">Source code link not added yet — set <code>repo</code> for this project in script.js.</p>'}
  `;

  watchBrokenImages(body);
  body.querySelectorAll('[aria-disabled="true"]').forEach((el) => {
    el.addEventListener('click', (e) => { e.preventDefault(); toast('No repository linked yet — add it in script.js (project.repo).'); });
  });

  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
    document.documentElement.classList.add('modal-open');
    dialog.querySelector('.modal-shell').scrollTop = 0;
  }
}

function setupModal() {
  const dialog = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalClose');
  if (!dialog) return;

  closeBtn.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });   // backdrop click
  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('modal-open');
    if (lastOpener && document.contains(lastOpener)) lastOpener.focus();
  });
}

/* ---------- Navigation ---------- */
function setupNav() {
  const header = document.getElementById('siteHeader');
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('primaryNav');
  const links = Array.from(document.querySelectorAll('[data-nav]'));

  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };

  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  links.forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); toggle.focus(); }
  });
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('is-open') && !nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
  });
  window.matchMedia('(min-width: 961px)').addEventListener('change', (m) => { if (m.matches) setOpen(false); });

  // Active section highlighting
  const sections = links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);

  const setActive = (id) => {
    links.forEach((a) => {
      const on = a.getAttribute('href') === `#${id}`;
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
  };

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => io.observe(s));
  }
  setActive('home');

  return header;
}

/* ---------- Scroll effects: header state, progress bar, back-to-top ---------- */
function setupScrollEffects(header) {
  const bar = document.getElementById('scrollProgress');
  const toTop = document.getElementById('toTop');
  const footerTop = document.getElementById('footerTop');
  let ticking = false;

  const update = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    header.classList.toggle('is-scrolled', y > 20);
    toTop.classList.toggle('is-visible', y > 600);
    if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();

  const goTop = () => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  toTop.addEventListener('click', goTop);
  if (footerTop) footerTop.addEventListener('click', goTop);
}

/* ---------- Scroll-triggered reveals ---------- */
function setupReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || prefersReducedMotion) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach((el) => io.observe(el));
}

/* ---------- Small features ---------- */
function setupProfileImage() {
  document.querySelectorAll('[data-profile]').forEach((img) => {
    const hide = () => img.classList.add('is-broken');
    img.addEventListener('error', hide);
    if (img.complete && img.naturalWidth === 0) hide();
  });
}

function setupCopyEmail() {
  const btn = document.getElementById('copyEmail');
  const status = document.getElementById('copyStatus');
  if (!btn) return;
  const say = (msg) => { if (status) status.textContent = msg; toast(msg); };
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(CONFIG.email);
      say('Email address copied to clipboard.');
    } catch (err) {
      const ta = document.createElement('textarea');       // fallback for older browsers
      ta.value = CONFIG.email;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      say(ok ? 'Email address copied to clipboard.' : `Couldn't copy automatically — ${CONFIG.email}`);
    }
  });
}

function setupFooterYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = String(new Date().getFullYear());
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  setupLinks();
  setupHeroFX();
  setupCursor();
  renderMarquee();
  setupRotator();
  renderExperience();
  renderPlatform();
  renderProjects();
  renderEducation();
  setupModal();
  const header = setupNav();
  setupScrollEffects(header);
  setupReveal();        // after rendering so dynamic content is observed
  setupProfileImage();
  setupCopyEmail();
  setupFooterYear();
});
