// Dev Oracle - script.js

// Begrüßung
const userName = 'Tom';
console.log(`\n👋 Hello, ${userName}. Welcome to the Dev Oracle.`);

// Datenquellen
const mentalStates = [
    'Confused but optimistic',
    'Zen and focused',
    'Running on coffee and hope',
    'In flow and unstoppable',
    'Wrestling with uncertainty',
    'One with the Stack Overflow spirit',
    'Quietly panicking (but still writing code)'
];

const techFates = [
    'Node.js & PostgreSQL shall guide you',
    'Legacy code will test your patience',
    'React will reveal its mysteries',
    'You shall battle async bugs',
    'The terminal is your arena today',
    'You will write code you don’t understand (yet)',
    'Python will whisper elegant solutions'
];

const adviceList = [
    'Read the error message. Then read it again.',
    'Trust in the docs – even when they betray you.',
    'When in doubt, restart your dev server.',
    'Commit often. Even if it’s ugly.',
    'Today is not the day to refactor everything.',
    'Sleep on that bug. Really.',
    'Rubber duck debugging never fails.',
    'Don’t push to production after 5pm.'
];

// Zufallsfunktion
const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

// Ausgabe generieren
console.log(`\n🔮 The Dev Oracle says:\n`);
console.log(`🧠 Mental state: "${getRandom(mentalStates)}"`);
console.log(`⚙️ Tech fate: "${getRandom(techFates)}"`);
console.log(`💡 Advice: "${getRandom(adviceList)}"`);

console.log(`\n✨ Come back tomorrow for another prophecy.\n`);
