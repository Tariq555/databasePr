const STORAGE_KEY = 'saved_names';

function saveNameToDatabase(name) {
  const existingData = localStorage.getItem(STORAGE_KEY);
  const names = existingData ? JSON.parse(existingData) : [];
  names.push(name);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(names));
}

function getDatabase() {
  const existingData = localStorage.getItem(STORAGE_KEY);
  return existingData ? JSON.parse(existingData) : [];
}

export { saveNameToDatabase, getDatabase };
