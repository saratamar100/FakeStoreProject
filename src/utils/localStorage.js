export function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error("Error saving to storage", err);
  }
}

export function loadFromStorage(key) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (err) {
    console.error("Error loading from storage", err);
    return null;
  }
}

export function removeFromStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error("Error removing from storage", err);
  }
}

export function clearStorage() {
  try {
    localStorage.clear();
  } catch (err) {
    console.error("Error clearing storage", err);
  }
}
