let x = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\n'];
let time = 0;

const spinner = function() {
  for (const items of x) {
    setTimeout(() => {
      process.stdout.write(items);
    }, time);
    time += 500;
  }
};

spinner();