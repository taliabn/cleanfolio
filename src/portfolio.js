import pongDemo from './assets/pong-demo.gif'
import chessDemo from './assets/chess-demo.gif'
import myResume from './assets/resume.pdf'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://taliabn.github.io/cleanfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Talia Ben-Naim',
  role: 'Aspiring Software Engineer',
  description:
    "Hello! I am a third year Northwestern University student pursuing a combined BS/MS degree in Computer Science and Computer Engineering respectively with an anticipated graduation date in June 2025. My passion lies in software development and possess a wide range of skills spanning from assembly to databases to python to React. I am constantly excited about learning new technologies, and my pursuit of computer science is fueled by a strong desire to make a meaningful impact. Feel free to connect with me through the provided contact details or explore my skills and projects on this website.",
  social: {
    linkedin: 'https://www.linkedin.com/in/talia-ben-naim/',
    github: 'https://github.com/taliabn/',
  },
  resume: myResume,
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Numble',
    description:
      'A wordle-inspired daily arithmetic puzzle game.',
    stack: ['Python', 'Django', 'Javascript', 'HTML', 'Bootstrap'],
    sourceCode: 'https://github.com/numble',
    livePreview: 'https://numble.fly.dev/',
  },
  {
    name: 'Chess',
    description:
      'A chess engine inspired by lichess.org and written in C++.',
	collaborator: 'Justin Aronson',
	collaboratorSite: 'https://github.com/JustinAronson',
    stack: ['C++'],
    sourceCode: 'https://github.com/taliabn/chess',
    livePreview: chessDemo,
  },
  {
    name: 'Pong',
    description:
      'An implementation of the Atari classic Pong that is written from scratch in ARM assembly.',
    stack: ['ARM Assembly'],
    sourceCode: 'https://github.com/taliabn/pong',
	livePreview: pongDemo,
  },
  {
    name: 'Evolutionary Robotics',
    description:
      'Conducting evolutionary robotics simulations to explore the impact of various neural network controller architectures on robots evolved for locomotion.',
    stack: ['Python', 'Data Analysis'],
    sourceCode: 'https://github.com/taliabn/my-ludobots',
	livePreview: 'https://youtu.be/uux9ZBXE7Lc',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'C',
  'C++',
  'Verilog',
  'HTML',
  'JavaScript',
  'React',
  'AWS',
  'Docker',
  'Git',
  'Bash',
  'SQL',
  'MATLAB',
  'R'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'taliaben-naim2025@u.northwestern.edu',
}

export { header, about, projects, skills, contact }
