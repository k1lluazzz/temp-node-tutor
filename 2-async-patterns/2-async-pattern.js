const { readFile, writeFile } = require("fs").promises;
const { result } = require("lodash");
// const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", 'utf8');
    console.log(first);
    const second = await readFile("./content/second.txt",'utf8');
    console.log(second);
    await writeFile('./content/result-mind-grenade.txt', `THIS IS AWESOME: ${first} ${second}`)
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
