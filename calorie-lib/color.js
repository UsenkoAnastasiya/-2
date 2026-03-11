export function* ColorGenerator() {
  const colors = ["rgb(123, 104, 238)", "rgb(0, 0, 205)", "rgb(0, 206, 209)"];
  let i = 0;
  while (true) {
    yield colors[i];
    i = (i + 1) % colors.length;
  }
}
