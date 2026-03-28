export function calculateBMR(age, weight, height, gender, activity) {
  let bmr = 0;
  if (gender === "female") {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  }

  const activitylevel = {
    1: 1.2,
    2: 1.375,
    3: 1.55,
    4: 1.725,
    5: 1.9,
  };
  return Math.round(bmr * activitylevel[activity]);
}
export function memoize(
  fn,
  { MAXSIZE = Infinity, strategy = "LRU", ttl = Infinity } = {},
) {
  const map = new Map();
  const freqMap = new Map();
  const TimeMap = new Map();
  return function (...arr) {
    const key = JSON.stringify(arr);
    if (map.has(key)) {
      const value = map.get(key);
      map.delete(key);
      map.set(key, value);
      freqMap.set(key, freqMap.get(key) + 1);
      TimeMap.set(key, Date.now());
      return value;
    }
    const result = fn(...arr);

    if (map.size >= MAXSIZE) {
      if (typeof strategy === "function") {
        const keytodelete = strategy(map);
        map.delete(keytodelete);
      } else if (strategy === "LRU") {
        map.delete(map.keys().next().value);
      } else if (strategy === "LFU") {
        const minFreq = Math.min(...freqMap.values());
        for (const [key, freq] of freqMap) {
          if (freq === minFreq) {
            freqMap.delete(key);
            map.delete(key);
            break;
          }
        }
      } else if (strategy === " TIME") {
        for (const [key] of TimeMap) {
          const time = Data.now() - TimeMap();
          if (time > ttl) map.delete(key);
          TimeMap.delete(key);
        }
      }
    }
    map.set(key, result);
    freqMap.set(key, 1);
    return result;
  };
}
export const memoizedBMR = memoize(calculateBMR, { MAXSIZE: 100 });
