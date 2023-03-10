import {Cinema} from "./cinema.js";

const cinema = new Cinema('Cineopolis');
const res = await cinema.addMovie({title: 'The Matrix', year: 1999});
console.log(res);
