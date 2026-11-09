// All of the site's text and links live in this file.
// Leave a link as an empty string ('') to hide it on the site.

export const site = {
  name: 'Shakir',
  github: 'https://github.com/Shakir31',
  email: '', // e.g. 'you@example.com'
  cv: '', // e.g. '/cv.pdf' (put the file in the public folder)
  greeting: 'Welcome to my little solar system.',
  introLine: 'I am a student developer, and I enjoy building web apps around the things I care about.',
  introSub: 'Below are some of the projects I have worked on, along with a little bit about me.',
  footer: 'Thank you for visiting.',
};

export const about = {
  heading: 'A little about me',
  body: 'I am a student developer who enjoys building things that I would actually use myself. Both of my main projects came from wanting to see my own progress, whether it is in training, studying or meditating. Outside of coding, I enjoy reading webnovels and manhwa, and I am drawn to the style and atmosphere of dark fantasy games. A lot of my ideas come from these.',
  interests: [
    { label: 'Dark fantasy atmosphere', detail: 'like in Dark Souls and Bloodborne', color: 'var(--ember)' },
    { label: 'Webnovels and manhwa', detail: '', color: 'var(--mana)' },
    { label: 'Meditation', detail: '', color: 'var(--star)' },
    { label: 'Training and self-improvement', detail: '', color: 'var(--star)' },
  ],
};

export const whetstone = {
  name: 'Whetstone',
  line: 'A journal that judges your day, in the style of a dark fantasy game.',
  live: 'https://whetstone-mauve.vercel.app',
  source: '', // the repo is private for now; add 'https://github.com/Shakir31/whetstone' once it is public
  tags: ['React', 'Supabase', 'Gemini API', 'Vercel'],
  screenshot: '/screenshots/whetstone.png',
  whatItIs:
    'Whetstone is a journal where you write down what you did each day, and an AI called the System judges it. Each entry is scored on Body and Mind, and the System gives a short verdict on the day. Over time, these scores grow into levels, skills and a class. There are no quests to set up and no rewards to hand yourself. You only write, and the System decides what each day was worth.',
  idea:
    'I have always wanted a journal that felt like a game, where the effort I put into my day would show up as something I could watch grow. Most habit apps ask you to set your own goals and tick your own boxes, so I wanted one that would judge my day for me instead.',
  ideaMore:
    'The look and tone were inspired by the grim, gothic style of games like Dark Souls and Bloodborne. The project started out as Soul Journal, and I later renamed it Whetstone, after the stone used to sharpen a blade a little at a time. I have been using it myself every day for over a month now.',
  features: [
    'Each day is scored on Body and Mind, along with a short verdict from the System',
    'Doing the same activity five days in a row turns it into a skill, such as running becoming Iron Lungs',
    'A class based on what you do most, such as Ironclad or Scholar, which evolves over time',
    'Weekly judgements, as well as hidden achievements and titles',
    'A Chronicle of every past entry and a Codex that explains how everything works',
  ],
  stack: ['React', 'Vite', 'Supabase', 'Gemini API', 'Vercel', 'Vitest'],
  built:
    'Every stat, skill and class is worked out from the entries themselves instead of being stored. This means that whenever I change a rule, the whole history is recalculated under the new rule.',
  callout: {
    label: 'A problem I ran into',
    title: 'After about a month of daily use, judgements started to become slower and failed more often.',
    body: "After looking into it, I found two causes. The server was doing more date work as the journal grew, and Google's model was often too busy to answer. I fixed this by caching the date work and switching to a backup model whenever the main one is busy, which made judgements fast again.",
  },
};

export const manaheart = {
  name: 'Manaheart',
  line: 'A meditation and study tracker where your logged time slowly grows into a glowing mana heart.',
  live: 'https://manaheart-timer.vercel.app',
  source: 'https://github.com/Shakir31/manaheart-timer',
  tags: ['React 19', 'TypeScript', 'Supabase', '230+ tests'],
  screenshot: '/screenshots/manaheart.png',
  logo: '', // e.g. '/manaheart-logo.svg'
  whatItIs:
    'Manaheart is a meditation and study tracker. Every minute you log becomes mana, which slowly gathers into a glowing heart that grows and changes as the hours add up. I built it to be quiet, so there are no streak flames, scores or notifications. You simply log a session, glance at the heart and get on with your day.',
  idea:
    "The idea came from the webnovels and manhwas I read, where a mage's power starts as a mana heart and every circle formed around it marks a hard-won step up. I liked how it turns slow, invisible effort into something you can see, and I felt it was a good fit for meditation and studying.",
  steps: [
    'After five hours of meditation or study, a heart forms and beats softly on the home screen.',
    'More hours draw up to five circles that orbit the heart.',
    'Practising most days keeps the circles stable, while long gaps leave them flickering. One missed day is forgiven, and nothing is ever taken away.',
    'Once all five circles are steady, they fold into a denser heart and a new rank begins.',
  ],
  ranks: ['Apprentice', 'Adept', 'Magus', 'Archmagus', 'Sage'],
  features: [
    'A focus timer and manual logging, with optional notes',
    'The Constellation, a night sky that fills in as you practise',
    'The Grimoire, a small book with a page of lore for each rank',
    'Mage paths, where the heart takes on an Elemental, Arcane or Spirit style',
    'Session history with editing and undo, plus a CSV export',
  ],
  stack: ['React 19', 'TypeScript', 'Vite', 'Supabase (row-level security)', 'Vercel', '230+ automated tests'],
  built:
    'Each account can only read its own sessions, and over 230 automated tests cover the progression rules and every screen.',
  callout: {
    label: 'How the data works',
    title: 'The app only stores raw facts, such as sessions and settings.',
    body: "The heart, circles and stars are all worked out from those facts each time. This means I can change the rules without touching anyone's data.",
  },
};

export type SmallProject = {
  name: string;
  line: string;
  tags: string[];
  live: string;
  source: string;
};

// The other projects. Each one also appears as a small planet in the solar system
// (up to four fit on the outer orbits).
export const smallProjects: SmallProject[] = [
  {
    name: 'Color Generator',
    line: 'A simple tool that lets users generate, view and copy custom color palettes with adjustable shades. It is perfect for designers looking for some quick color inspiration.',
    tags: ['React', 'Netlify'],
    live: 'https://color-generator-react-prac.netlify.app/',
    source: 'https://github.com/Shakir31/colors-generator-react',
  },
];
