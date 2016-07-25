const express = require('express');
const app = express();
const colors = require('colors');
app.use(express.static('.'));

app.listen(3000, () => {
  console.log(`

  ${"💖 CODE CONFERENCE JS WORKSHOP! 💖".underline.yellow}

  ${"Slides".blue}:

    ⭐️ ${"http://localhost:3000/slides/".underline}

  ${"Part 2".blue} - ${"Tutorial files are at:".grey}

    ⭐️ ${"http://localhost:3000/part2/docready.html".underline}

    ⭐️ ${"http://localhost:3000/part2/xhr.html".underline}

  ${"Part 3".blue} - ${"WebMob site:".grey}

    ⭐️ ${"http://localhost:3000/part3/".underline}

`);

});