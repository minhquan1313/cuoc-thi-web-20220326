const storage = {
  read(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  write(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  },
};
export default storage;
