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
  description: "Hello! I am a senior at Northwestern University pursuing a combined BS/MS degree in Computer Science and Computer Engineering respectively with an anticipated graduation date of June 2025. My passions lie in software, hardware, and the intersections between the two. I have a wide range of skills spanning from hardware description languages to assembly to python to React. I am excited about learning new technologies, and my pursuit of computer science and engineering is fueled by a strong desire to make a meaningful impact. I invite you to explore my skills and projects on this website.",
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
    sourceCode: 'https://github.com/taliabn/numble',
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
  {
    name: 'FPGA Tank Game',
    description:
      'A two-player shooter game implemented on an FPGA',
	collaborator: 'Jackson Bremen',
	collaboratorSite: 'https://github.com/readjfb',
    stack: ['VHDL'],
    sourceCode: 'https://github.com/taliabn/FPGA-tank-game',
    livePreview: 'https://youtube.com/shorts/_J6evomLnn8?feature=share',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'C',
  'C++',
  'Verilog',
  'VHDL',
  'Git',
  'HTML',
  'React',
  'AWS',
  'Docker',
  'Bash',
  'Assembly',
  'SQL',
  'MATLAB',
  'R'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'taliaben-naim2025@u.northwestern.edu',
}

export { header, about, projects, skills, contact }
