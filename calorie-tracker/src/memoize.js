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
export function memoize(fn, { MAXSIZE = Infinity, strategy = "LRU" } = {}) {
  const map = new Map();
  return function (...arr) {
    const key = JSON.stringify(arr);
    if (map.has(key)) {
      const value = map.get(key);
      map.delete(key);
      map.set(key, value);
      return value;
    }
    const result = fn(...arr);
    if (map.size === MAXSIZE) {
      map.delete(map.keys().next().value);
    }
    map.set(key, result);
    return result;
  };
}
