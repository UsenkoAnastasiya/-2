export function TimeoutIterator(iterator, timeout) {
  const startTime = Date.now();
  const timeoutMs = timeout * 1000;
  for (const value of iterator) {
    if (Date.now() - startTime >= timeoutMs) break;
    console.log(`${value}`);
  }
}
