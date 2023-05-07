export function storeToPersistentStorage<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromPersistentStorage<T>(key: string, defaultValue: T): T {
  try {
    return JSON.parse(localStorage.getItem(key) || "") as T;
  } catch (e) {
    return defaultValue;
  }
}
