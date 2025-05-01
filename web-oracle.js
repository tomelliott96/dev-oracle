const mentalStates = [
    'Confused but optimistic',
    'Zen and focused',
    'Running on coffee and hope',
    'In flow and unstoppable',
    'Quietly panicking (but still writing code)'
  ];
  
  const techFates = [
    'Node.js & PostgreSQL shall guide you',
    'You will wrestle with legacy PHP',
    'Python will whisper elegant solutions',
    'Frontend bugs await you',
    'You will tame the Docker daemon'
  ];
  
  const adviceList = [
    'Read the error message. Then read it again.',
    'Trust in the docs – even when they betray you.',
    'Commit often. Even if it’s ugly.',
    'Don’t push to production after 5pm.',
    'Rubber duck debugging will save your day'
  ];
  
  const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  document.getElementById('reveal-btn').addEventListener('click', () => {
    const message = `
  🧠 Mental state: "${getRandom(mentalStates)}"
  ⚙️ Tech fate: "${getRandom(techFates)}"
  💡 Advice: "${getRandom(adviceList)}"
  `;
  
    document.getElementById('message').textContent = message;
  });
  