for (let i = 1; i<=100; i++) {
  let out = '';
  if (0 === i%3) {
    out += 'Java';
  }
  if (0 === i%5) {
    out += 'Script';
  }
  console.log(out || i);
}

for (let i = 1; i<=100; i++) {
  if (0 === i%3 && 0 === i%5) {
    console.log('JavaScript');
  } else if (0 === i%3) {
    console.log('Java');
  } else if (0 === i%5) {
    console.log('Script');
  } else {
    console.log(i);
  }
}
