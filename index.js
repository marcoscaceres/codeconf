"use strict";
const express = require('express');
const app = express();
const colors = require('colors');
app.use(express.static('.'));

console.log(`
  ${"💖 CODE CONFERENCE JS WORKSHOP! 💖".underline.yellow}
`)

if(parseInt(/\d/.exec(process.version)[0]) < 6){
  console.error(`
  🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  🔥 ${"Please update to NodeJS 6.3.1+".red} 🔥
  🔥                                🔥
  🔥  ${"https://nodejs.org/".blue}           🔥
  🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  `);
}

app.listen(3000, () => {
  console.log(`

  ${"Slides".blue}:

    ⭐️ ${"http://localhost:3000/slides/".underline}

  ${"Part 2".blue} - ${"Tutorial files are at:".grey}

    ⭐️ ${"http://localhost:3000/part2/docready.html".underline}

    ⭐️ ${"http://localhost:3000/part2/xhr.html".underline}

  ${"Part 3".blue} - ${"Service Workers:".grey}

    ⭐️ ${"http://localhost:3000/part3/".underline}

`);

});