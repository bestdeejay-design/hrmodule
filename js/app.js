// HR Motivation SPA — App Data & Render Functions

const appData = {
  employees: [
    { id: 1, name: 'Анна Петрова', dept: 'Разработка', level: 12, exp: 3400, expToNext: 5000, points: 2450, avatar: 'АП', badges: ['100 задач', 'Лидер'], tasks: 47, rating: 1 },
    { id: 2, name: 'Иван Соколов', dept: 'Маркетинг', level: 8, exp: 1800, expToNext: 3000, points: 1200, avatar: 'ИС', badges: ['Наставник'], tasks: 32, rating: 2 },
    { id: 3, name: 'Мария Козлова', dept: 'Дизайн', level: 10, exp: 2700, expToNext: 4000, points: 1800, avatar: 'МК', badges: ['Креатив'], tasks: 38, rating: 3 },
    { id: 4, name: 'Алексей Новиков', dept: 'Продажи', level: 7, exp: 900, expToNext: 2500, points: 800, avatar: 'АН', badges: [], tasks: 18, rating: 4 },
    { id: 5, name: 'Ольга Белова', dept: 'HR', level: 9, exp: 2100, expToNext: 3500, points: 1500, avatar: 'ОБ', badges: ['Лидер месяца'], tasks: 25, rating: 5 }
  ],
  currentUser: 1,
  departments: [
    { name: 'Разработка', headcount: 15 },
    { name: 'Маркетинг', headcount: 8 },
    { name: 'Дизайн', headcount: 6 },
    { name: 'Продажи', headcount: 12 },
    { name: 'HR', headcount: 5 }
  ],
  tasks: [
    { id: 1, title: 'Завершить спринт', points: 300, done: false, deadline: 'Сегодня' },
    { id: 2, title: 'Созвониться с клиентом', points: 150, done: true, deadline: 'Вчера' },
    { id: 3, title: 'Обновить документацию', points: 200, done: false, deadline: 'Завтра' },
    { id: 4, title: 'Провести код-ревью', points: 250, done: false, deadline: 'Сегодня' },
    { id: 5, title: 'Отчёт по проекту', points: 400, done: true, deadline: 'Позавчера' }
  ],
  shop: [
    { id: 1, name: 'Футболка с лого', price: 500, icon: '👕', stock: 10 },
    { id: 2, name: 'Кружка', price: 300, icon: '☕', stock: 5 },
    { id: 3, name: 'Доп. выходной', price: 2000, icon: '🌴', stock: 3 },
    { id: 4, name: 'Сертификат Ozon', price: 1500, icon: '🎁', stock: 8 },
    { id: 5, name: 'Обед с руководителем', price: 1000, icon: '🍽️', stock: 4 }
  ],
  badges: [
    { id: 1, name: '100 задач', icon: '🏆', earned: true },
    { id: 2, name: 'Лидер месяца', icon: '⭐', earned: true },
    { id: 3, name: 'Наставник', icon: '🤝', earned: false },
    { id: 4, name: 'Креатив', icon: '🎨', earned: false },
    { id: 5, name: 'Ветеран', icon: '🎖️', earned: false }
  ],
  activityLog: [
    { action: 'Получен бейдж "100 задач"', date: '2 дня назад' },
    { action: 'Куплена кружка в магазине', date: '5 дней назад' },
    { action: 'Достигнут 12 уровень', date: 'Неделя назад' },
    { action: 'Завершён спринт (+300 баллов)', date: '10 дней назад' }
  ],
  gratitude: {
    values: [
      { id: 1, name: 'Командность', color: '#8B5CF6' },
      { id: 2, name: 'Ответственность', color: '#10B981' },
      { id: 3, name: 'Инновации', color: '#F59E0B' },
      { id: 4, name: 'Клиентоориент.', color: '#3B82F6' },
      { id: 5, name: 'Развитие', color: '#EC4899' }
    ],
    thanks: [
      { id: 1, from: 2, to: 1, value: 1, message: 'За помощь со спринтом! 🔥', time: '10:30', date: 'Сегодня' },
      { id: 2, from: 3, to: 1, value: 3, message: 'Классный дизайн нового экрана', time: '09:15', date: 'Сегодня' },
      { id: 3, from: 4, to: 2, value: 2, message: 'Выручил с отчётом для клиента', time: 'Вчера', date: 'Вчера' },
      { id: 4, from: 1, to: 3, value: 5, message: 'Спасибо за консультацию по UI!', time: 'Вчера', date: 'Вчера' },
      { id: 5, from: 5, to: 1, value: 1, message: 'Отличная презентация на совещании', time: 'Пн', date: 'Пн' },
      { id: 6, from: 1, to: 5, value: 4, message: 'Спасибо за организацию тренинга', time: 'Пн', date: 'Пн' },
      { id: 7, from: 3, to: 4, value: 5, message: 'Крутая идея для A/B теста!', time: 'Вс', date: 'Вс' },
      { id: 8, from: 2, to: 1, value: 2, message: 'Всегда на связи, спасибо!', time: 'Сб', date: 'Сб' },
      { id: 9, from: 1, to: 2, value: 3, message: 'Отличная стратегия продвижения', time: 'Пт', date: 'Пт' },
      { id: 10, from: 4, to: 5, value: 4, message: 'Тренинг был очень полезным!', time: 'Пт', date: 'Пт' }
    ]
  }
};

let history = ['home'];

function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  updateThemeIcons(newTheme);
  localStorage.setItem('hrmodule-theme', newTheme);
}

function updateThemeIcons(theme) {
  document.querySelectorAll('.theme-toggle .icon, .theme-toggle-small .icon-sm').forEach(icon => {
    const use = icon.querySelector('use');
    if (use) {
      use.setAttribute('href', theme === 'light' ? '#icon-moon' : '#icon-sun');
    }
  });
}

function loadTheme() {
  const saved = localStorage.getItem('hrmodule-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcons(saved);
}

function openApp() {
  document.getElementById('landing').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  localStorage.setItem('hrmodule_appOpen', 'true');
  showPage('home');
}

function closeApp() {
  document.getElementById('landing').classList.remove('hidden');
  document.getElementById('app').classList.add('hidden');
  history = ['home'];
  localStorage.setItem('hrmodule_appOpen', 'false');
}

function showPage(pageName, btnElement) {
  if (btnElement) {
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
  }
  history.push(pageName);
  updateHeader(pageName);
  renderContent(pageName);
  localStorage.setItem('hrmodule_lastPage', pageName);
  localStorage.setItem('hrmodule_history', JSON.stringify(history));
  document.getElementById('backBtn').classList.toggle('hidden', history.length <= 1);
}

function goBack() {
  if (history.length > 1) {
    history.pop();
    const prevPage = history[history.length - 1];
    updateHeader(prevPage);
    renderContent(prevPage);
    localStorage.setItem('hrmodule_lastPage', prevPage);
    localStorage.setItem('hrmodule_history', JSON.stringify(history));
    if (history.length === 1) {
      localStorage.removeItem('hrmodule_lastPage');
      localStorage.removeItem('hrmodule_history');
      localStorage.setItem('hrmodule_appOpen', 'false');
    }
    document.getElementById('backBtn').classList.toggle('hidden', history.length <= 1);
  }
}

function updateHeader(pageName) {
  const titles = {
    home: 'Home',
    tasks: 'Tasks',
    leaders: 'Leaders',
    shop: 'Shop',
    profile: 'Profile',
    gratitude: 'Благодарности'
  };
  document.getElementById('appTitle').textContent = titles[pageName] || 'Home';
}

function renderContent(pageName) {
  const content = document.getElementById('content');
  if (pageName === 'home') content.innerHTML = renderHome();
  else if (pageName === 'tasks') content.innerHTML = renderTasks();
  else if (pageName === 'leaders') content.innerHTML = renderLeaders();
  else if (pageName === 'shop') content.innerHTML = renderShop();
  else if (pageName === 'profile') content.innerHTML = renderProfile();
  else if (pageName === 'gratitude') content.innerHTML = renderGratitude();
}

function getUser() {
  return appData.employees.find(e => e.id === appData.currentUser);
}

function renderHome() {
  const user = getUser();
  const expPercent = Math.round((user.exp / user.expToNext) * 100);
  const totalTasks = appData.tasks.length;
  const doneTasks = appData.tasks.filter(t => t.done).length;
  const totalPoints = appData.tasks.reduce((s, t) => s + t.points, 0);
  const earnedPoints = appData.tasks.filter(t => t.done).reduce((s, t) => s + t.points, 0);
  const userRank = appData.employees.findIndex(e => e.id === user.id) + 1;
  const earnedBadges = appData.badges.filter(b => b.earned).slice(0, 4);

  const gratitudeData = (() => {
    const g = appData.gratitude;
    const employees = appData.employees;
    const userId = appData.currentUser;
    const senders = new Set(g.thanks.map(t => t.from));
    const receivers = new Set(g.thanks.map(t => t.to));
    const involved = new Set([...senders, ...receivers]);
    const engagementIndex = Math.round((involved.size / employees.length) * 100);
    const sentByMe = g.thanks.filter(t => t.from === userId).length;
    const receivedByMe = g.thanks.filter(t => t.to === userId).length;
    const valueCounts = {};
    g.thanks.forEach(t => { valueCounts[t.value] = (valueCounts[t.value] || 0) + 1; });
    let topValueId = null, topCount = 0;
    Object.keys(valueCounts).forEach(k => {
      if (valueCounts[k] > topCount) { topCount = valueCounts[k]; topValueId = parseInt(k); }
    });
    const topValueObj = topValueId ? g.values.find(v => v.id === topValueId) : null;
    return {
      ...g,
      engagementIndex,
      sentByMe,
      receivedByMe,
      totalThanks: g.thanks.length,
      topValue: topValueObj ? topValueObj.name : '-'
    };
  })();

  return `
    <div class="page-content">
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px">
        <div class="level-badge">${user.level}</div>
        <div style="flex:1">
          <div style="font-size:18px;font-weight:600">${user.name}</div>
          <div style="font-size:12px;color:var(--text-muted)">${user.dept} &bull; Уровень ${user.level}</div>
          <div class="level-bar" style="margin-top:8px">
            <div class="fill" style="width:${expPercent}%"></div>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text-muted)">
            <span>${user.exp} XP</span>
            <span>${user.expToNext} XP</span>
          </div>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px">
        <div class="stat-card">
          <span class="value" style="color:var(--primary)">${user.points}</span>
          <span class="label">Баллы</span>
        </div>
        <div class="stat-card">
          <span class="value" style="color:var(--success)">${user.tasks}</span>
          <span class="label">Задачи</span>
        </div>
        <div class="stat-card">
          <span class="value" style="color:var(--warning)">#${userRank}</span>
          <span class="label">Место</span>
        </div>
      </div>

      <div class="dashboard-grid" style="margin-bottom:20px">
        <div class="dashboard-card" onclick="showPage('tasks')">
          <svg class="icon"><use href="#icon-task"/></svg>
          <h4>Tasks</h4>
          <p>${doneTasks}/${totalTasks}</p>
        </div>
        <div class="dashboard-card" onclick="showPage('leaders')">
          <svg class="icon"><use href="#icon-medal"/></svg>
          <h4>Leaders</h4>
          <p>Топ сотрудников</p>
        </div>
        <div class="dashboard-card" onclick="showPage('shop')">
          <svg class="icon"><use href="#icon-gift"/></svg>
          <h4>Shop</h4>
          <p>${appData.shop.length} товаров</p>
        </div>
        <div class="dashboard-card" onclick="showPage('profile')">
          <svg class="icon"><use href="#icon-user"/></svg>
          <h4>Profile</h4>
          <p>${user.level} уровень</p>
        </div>
      </div>

      <h3>Достижения</h3>
      <div class="badge-grid">
        ${earnedBadges.map(b => {
          const badge = appData.badges.find(bb => bb.name === b.name);
          return `
            <div class="achievement-badge earned">
              <span style="font-size:24px">${badge.icon}</span>
              <span>${badge.name}</span>
            </div>
          `;
        }).join('')}
        ${appData.badges.filter(b => !b.earned).slice(0, 4 - earnedBadges.length).map(b => `
          <div class="achievement-badge unearned">
            <span style="font-size:24px">${b.icon}</span>
            <span>${b.name}</span>
          </div>
        `).join('')}
      </div>

      <div class="dashboard-card wide accent" onclick="showPage('gratitude')" style="margin-top:16px">
        <div style="display:flex;align-items:center;gap:12px">
          <svg class="icon" style="flex-shrink:0;color:#EC4899"><use href="#icon-heart"/></svg>
          <div style="flex:1">
            <h4>Благодарности</h4>
            <p style="font-size:12px;color:var(--text-muted)">${gratitudeData.thanks.length} спасибо • Индекс вовлечённости: ${gratitudeData.engagementIndex}%</p>
          </div>
          <span style="font-size:20px">&rarr;</span>
        </div>
      </div>
    </div>
  `;
}

function renderTasks() {
  const activeTasks = appData.tasks.filter(t => !t.done);
  const doneTasks = appData.tasks.filter(t => t.done);
  const totalPoints = activeTasks.reduce((s, t) => s + t.points, 0);

  let html = `
    <div class="page-content">
      <div class="dashboard-card accent" style="margin-bottom:16px">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div>
            <div style="font-size:12px;color:var(--text-muted)">Доступно баллов</div>
            <div style="font-size:28px;font-weight:700">${totalPoints}</div>
          </div>
          <div>
            <div style="font-size:12px;color:var(--text-muted)">Активных</div>
            <div style="font-size:28px;font-weight:700">${activeTasks.length}</div>
          </div>
        </div>
      </div>

      <h3>Активные задания</h3>
  `;

  if (activeTasks.length === 0) {
    html += '<p style="color:var(--text-muted);font-size:14px;text-align:center;padding:20px">Все задания выполнены!</p>';
  } else {
    activeTasks.forEach(t => {
      html += `
        <div class="task-card" onclick="toggleTask(${t.id})">
          <div class="task-check">
            <svg class="icon"><use href="#icon-check"/></svg>
          </div>
          <div class="task-info">
            <div class="task-title">${t.title}</div>
            <div class="task-meta">${t.deadline}</div>
          </div>
          <div class="task-points">+${t.points}</div>
        </div>
      `;
    });
  }

  if (doneTasks.length > 0) {
    html += `
      <h3 style="margin-top:20px">Выполненные</h3>
    `;
    doneTasks.forEach(t => {
      html += `
        <div class="task-card done" onclick="toggleTask(${t.id})">
          <div class="task-check checked">
            <svg class="icon"><use href="#icon-check"/></svg>
          </div>
          <div class="task-info">
            <div class="task-title">${t.title}</div>
            <div class="task-meta">${t.deadline}</div>
          </div>
          <div class="task-points" style="color:var(--text-muted)">+${t.points}</div>
        </div>
      `;
    });
  }

  html += '</div>';
  return html;
}

function toggleTask(taskId) {
  const task = appData.tasks.find(t => t.id === taskId);
  if (task) {
    task.done = !task.done;
    const user = getUser();
    if (task.done) {
      user.points += task.points;
      user.tasks += 1;
    } else {
      user.points -= task.points;
      user.tasks -= 1;
    }
    renderContent('tasks');
  }
}

let leadersTab = 'all';

function renderLeaders() {
  const user = getUser();
  const sorted = [...appData.employees].sort((a, b) => b.points - a.points);
  const top3 = sorted.slice(0, 3);
  const rest = sorted.slice(3);
  const ranks = ['gold', 'silver', 'bronze'];

  let html = `
    <div class="page-content">
      <div class="tab-bar">
        <button class="tab-btn ${leadersTab === 'all' ? 'active' : ''}" onclick="switchLeadersTab('all')">Общий</button>
        <button class="tab-btn ${leadersTab === 'dept' ? 'active' : ''}" onclick="switchLeadersTab('dept')">По отделам</button>
      </div>
  `;

  if (leadersTab === 'all') {
    html += `
      <div style="margin-bottom:16px">
        ${top3.map((e, i) => `
          <div class="leader-item ${e.id === user.id ? 'current-user' : ''}">
            <div class="leader-rank ${ranks[i]}">${i + 1}</div>
            <div class="leader-avatar">${e.avatar}</div>
            <div class="leader-info">
              <div class="leader-name">${e.name}</div>
              <div class="leader-dept">${e.dept} &bull; Ур. ${e.level}</div>
            </div>
            <div class="leader-stats">
              <div class="leader-points">${e.points}</div>
              <div class="leader-level">баллов</div>
            </div>
          </div>
        `).join('')}
      </div>
      <h3>Все сотрудники</h3>
      ${rest.map((e, i) => `
        <div class="leader-item ${e.id === user.id ? 'current-user' : ''}">
          <div class="leader-rank" style="background:var(--bg-light);color:var(--text-muted)">${i + 4}</div>
          <div class="leader-avatar">${e.avatar}</div>
          <div class="leader-info">
            <div class="leader-name">${e.name}</div>
            <div class="leader-dept">${e.dept} &bull; Ур. ${e.level}</div>
          </div>
          <div class="leader-stats">
            <div class="leader-points">${e.points}</div>
            <div class="leader-level">баллов</div>
          </div>
        </div>
      `).join('')}
    `;
  } else {
    const depts = {};
    appData.employees.forEach(e => {
      if (!depts[e.dept]) depts[e.dept] = [];
      depts[e.dept].push(e);
    });
    Object.keys(depts).forEach(dept => {
      const staff = depts[dept].sort((a, b) => b.points - a.points);
      html += `
        <h3 style="margin-top:16px">${dept}</h3>
        ${staff.map((e, i) => `
          <div class="leader-item ${e.id === user.id ? 'current-user' : ''}">
            <div class="leader-rank" style="background:${i === 0 ? 'var(--primary)' : 'var(--bg-light)'};color:${i === 0 ? 'white' : 'var(--text-muted)'}">${i + 1}</div>
            <div class="leader-avatar">${e.avatar}</div>
            <div class="leader-info">
              <div class="leader-name">${e.name}</div>
              <div class="leader-dept">Ур. ${e.level}</div>
            </div>
            <div class="leader-stats">
              <div class="leader-points">${e.points}</div>
              <div class="leader-level">баллов</div>
            </div>
          </div>
        `).join('')}
      `;
    });
  }

  html += '</div>';
  return html;
}

function switchLeadersTab(tab) {
  leadersTab = tab;
  renderContent('leaders');
}

function renderShop() {
  const user = getUser();
  let html = `
    <div class="page-content">
      <div class="balance-display">
        <div class="amount">${user.points}</div>
        <div class="label">Доступно баллов</div>
      </div>
  `;

  appData.shop.forEach(item => {
    const canBuy = user.points >= item.price && item.stock > 0;
    html += `
      <div class="shop-item">
        <div class="shop-icon">${item.icon}</div>
        <div class="shop-info">
          <div class="shop-name">${item.name}</div>
          <div class="shop-meta">В наличии: ${item.stock} шт.</div>
        </div>
        <div class="shop-price">${item.price}</div>
        <button class="shop-btn ${!canBuy ? 'sold-out' : ''}" onclick="${canBuy ? `buyItem(${item.id})` : ''}" ${!canBuy ? 'disabled' : ''}>
          ${item.stock <= 0 ? 'Нет' : 'Купить'}
        </button>
      </div>
    `;
  });

  html += '</div>';
  return html;
}

function buyItem(itemId) {
  const item = appData.shop.find(s => s.id === itemId);
  const user = getUser();
  if (item && user.points >= item.price && item.stock > 0) {
    user.points -= item.price;
    item.stock -= 1;
    showToast(`Приобретено: ${item.name}`);
    renderContent('shop');
  }
}

function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

function renderProfile() {
  const user = getUser();
  const expPercent = Math.round((user.exp / user.expToNext) * 100);
  const daysInSystem = 124;

  return `
    <div class="page-content">
      <div class="profile-card">
        <div class="profile-avatar">${user.avatar}</div>
        <h3>${user.name}</h3>
        <p class="profile-group">${user.dept}</p>
        <div class="level-badge" style="width:48px;height:48px;font-size:16px;margin-top:12px">${user.level}</div>
        <div style="margin-top:12px">
          <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--text-muted);margin-bottom:4px">
            <span>${user.exp} / ${user.expToNext} XP</span>
          </div>
          <div class="level-bar">
            <div class="fill" style="width:${expPercent}%"></div>
          </div>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px">
        <div class="stat-card">
          <span class="value" style="color:var(--primary)">${user.points}</span>
          <span class="label">Всего баллов</span>
        </div>
        <div class="stat-card">
          <span class="value" style="color:var(--success)">${user.tasks}</span>
          <span class="label">Задач выполнено</span>
        </div>
        <div class="stat-card">
          <span class="value" style="color:var(--warning)">${daysInSystem}</span>
          <span class="label">Дней в системе</span>
        </div>
      </div>

      <div class="profile-info" style="margin-bottom:20px">
        <div class="info-row">
          <span class="info-label">Отдел</span>
          <span class="info-value">${user.dept}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Уровень</span>
          <span class="info-value">${user.level}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Рейтинг</span>
          <span class="info-value">#${user.rating}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Бейджей</span>
          <span class="info-value">${user.badges.length}</span>
        </div>
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <h3 style="margin:0">Бейджи</h3>
        <button onclick="toggleTheme()" class="icon-btn" title="Toggle theme">
          <svg class="icon"><use href="#icon-sun"/></svg>
        </button>
      </div>
      <div class="badge-grid" style="margin-bottom:20px">
        ${appData.badges.map(b => `
          <div class="achievement-badge ${b.earned ? 'earned' : 'unearned'}">
            <span style="font-size:24px">${b.icon}</span>
            <span>${b.name}</span>
          </div>
        `).join('')}
      </div>

      <h3>Активность</h3>
      <div class="profile-info">
        ${appData.activityLog.map(a => `
          <div class="info-row">
            <span style="font-size:13px;color:var(--text);max-width:70%">${a.action}</span>
            <span class="info-value" style="font-size:12px;font-weight:400;color:var(--text-muted)">${a.date}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

let selectedThankValue = null;

function selectThankValue(id) {
  selectedThankValue = id;
  document.querySelectorAll('.value-pill').forEach(p => p.classList.remove('active'));
  const pill = document.querySelector(`.value-pill[data-value="${id}"]`);
  if (pill) pill.classList.add('active');
}

function sendThankYou() {
  const toId = parseInt(document.getElementById('thankTo').value);
  const message = document.getElementById('thankMessage').value.trim();
  const user = getUser();
  if (!toId) { showToast('Выберите получателя'); return; }
  if (!selectedThankValue) { showToast('Выберите ценность'); return; }
  if (!message) { showToast('Напишите сообщение'); return; }
  const gratitude = appData.gratitude;
  const newId = Math.max(...gratitude.thanks.map(t => t.id), 0) + 1;
  gratitude.thanks.unshift({
    id: newId,
    from: user.id,
    to: toId,
    value: selectedThankValue,
    message: message,
    time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
    date: 'Сегодня'
  });
  document.getElementById('thankTo').value = '';
  document.getElementById('thankMessage').value = '';
  selectedThankValue = null;
  document.querySelectorAll('.value-pill').forEach(p => p.classList.remove('active'));
  showToast('Благодарность отправлена! ❤️');
  renderContent('gratitude');
}

function renderGratitude() {
  const gratitude = appData.gratitude;
  const employees = appData.employees;
  const user = getUser();
  const senders = new Set(gratitude.thanks.map(t => t.from));
  const receivers = new Set(gratitude.thanks.map(t => t.to));
  const involved = new Set([...senders, ...receivers]);
  const engagementIndex = Math.round((involved.size / employees.length) * 100);
  const sentByMe = gratitude.thanks.filter(t => t.from === user.id).length;
  const receivedByMe = gratitude.thanks.filter(t => t.to === user.id).length;
  const valueCounts = {};
  gratitude.thanks.forEach(t => { valueCounts[t.value] = (valueCounts[t.value] || 0) + 1; });
  let topValueId = null, topCount = 0;
  Object.keys(valueCounts).forEach(k => {
    if (valueCounts[k] > topCount) { topCount = valueCounts[k]; topValueId = parseInt(k); }
  });
  const topValueObj = topValueId ? gratitude.values.find(v => v.id === topValueId) : null;
  const thankedCount = {};
  gratitude.thanks.forEach(t => { thankedCount[t.to] = (thankedCount[t.to] || 0) + 1; });
  const topThanked = Object.keys(thankedCount)
    .map(id => ({ id: parseInt(id), count: thankedCount[id] }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 3);
  const getEmployee = (id) => employees.find(e => e.id === id);
  const otherEmployees = employees.filter(e => e.id !== user.id);
  let html = `
    <div class="page-content">
      <div class="gratitude-header">
        <div class="gratitude-stat">
          <span class="g-stat-value">${engagementIndex}%</span>
          <span class="g-stat-label">Индекс вовлечённости</span>
        </div>
        <div class="gratitude-stat">
          <span class="g-stat-value">${gratitude.thanks.length}</span>
          <span class="g-stat-label">Всего спасибо</span>
        </div>
      </div>
      <div class="gratitude-balance">
        <div class="g-balance-item sent">
          <div class="num">${sentByMe}</div>
          <div class="lbl">Отправлено</div>
        </div>
        <div class="g-balance-item received">
          <div class="num">${receivedByMe}</div>
          <div class="lbl">Получено</div>
        </div>
      </div>
      <div class="send-gratitude" id="sendGratitude">
        <h4><svg class="icon" style="color:#EC4899"><use href="#icon-heart"/></svg> Отправить благодарность</h4>
        <div class="send-row">
          <select class="send-select" id="thankTo">
            <option value="">Кому</option>
            ${otherEmployees.map(e => `<option value="${e.id}">${e.name}</option>`).join('')}
          </select>
        </div>
        <div class="value-pills" id="valuePills">
          ${gratitude.values.map(v => `
            <button class="value-pill" style="background:${v.color}" data-value="${v.id}" onclick="selectThankValue(${v.id})">${v.name}</button>
          `).join('')}
        </div>
        <textarea class="send-input" id="thankMessage" placeholder="Напишите, за что благодарите..." rows="2"></textarea>
        <button class="send-btn" onclick="sendThankYou()">Отправить ❤️</button>
      </div>
      <h3>Лента благодарностей</h3>
      <div class="thanks-feed">
        ${gratitude.thanks.map(t => {
          const fromEmp = getEmployee(t.from);
          const toEmp = getEmployee(t.to);
          const val = gratitude.values.find(v => v.id === t.value);
          return `
            <div class="thank-item">
              <div class="thank-avatars">
                <div class="thank-avatar from">${fromEmp ? fromEmp.avatar : '?'}</div>
                <div class="thank-arrow">↓</div>
                <div class="thank-avatar to">${toEmp ? toEmp.avatar : '?'}</div>
              </div>
              <div class="thank-body">
                <div class="thank-message"><strong>${fromEmp ? fromEmp.name : '?'}</strong> → <strong>${toEmp ? toEmp.name : '?'}</strong></div>
                <div class="thank-message">${t.message}</div>
                <div class="thank-meta">
                  ${val ? `<span class="thank-value-badge" style="background:${val.color}">${val.name}</span>` : ''}
                  <span class="thank-time">${t.time} · ${t.date}</span>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
      <h3>Лидеры благодарностей</h3>
      <div class="gratitude-leaders">
        ${topThanked.map(t => {
          const emp = getEmployee(t.id);
          return emp ? `
            <div class="g-leader">
              <div class="g-leader-avatar">${emp.avatar}</div>
              <div class="g-leader-name">${emp.name.split(' ')[0]}</div>
              <div class="g-leader-count">${t.count} спасибо</div>
            </div>
          ` : '';
        }).join('')}
      </div>
    </div>
  `;
  return html;
}

function updateStatus() {
  const battery = Math.floor(Math.random() * 10) + 90;
  document.querySelector('.status-bar').textContent = battery + '%';
}

document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  setInterval(updateStatus, 60000);
  updateStatus();

  const wasAppOpen = localStorage.getItem('hrmodule_appOpen');
  if (wasAppOpen === 'true') {
    document.getElementById('landing').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    const lastPage = localStorage.getItem('hrmodule_lastPage');
    const savedHistory = localStorage.getItem('hrmodule_history');
    if (lastPage && savedHistory) {
      try {
        history = JSON.parse(savedHistory);
        if (history.length > 0) {
          updateHeader(lastPage);
          renderContent(lastPage);
          document.getElementById('backBtn').classList.toggle('hidden', history.length <= 1);
        }
      } catch (e) {
        showPage('home');
      }
    } else {
      showPage('home');
    }
  }
});
