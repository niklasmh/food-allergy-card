const version = "2";

export function storeToPersistentStorage<T>(key: string, value: T) {
  localStorage.setItem("version", version);
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromPersistentStorage<T>(key: string, defaultValue: T | (() => T)): T {
  try {
    const storedVersion = localStorage.getItem("version");
    if (storedVersion !== version) {
      localStorage.clear();
      throw new Error("storage version mismatch");
    }
    return JSON.parse(localStorage.getItem(key) || "") as T;
  } catch (e) {
    if (typeof defaultValue === "function") {
      return (defaultValue as () => T)();
    }
    return defaultValue;
  }
}
