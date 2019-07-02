const spinner = function() {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 1000);
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 1300);
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 1600);
  setTimeout(() => {
    process.stdout.write('\r\\   ');
  }, 1900);
  setTimeout(() => {
    process.stdout.write('\n');
  }, 3000);
};

spinner();