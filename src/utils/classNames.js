const beautiful = 0;

const push = (parent, child) => {
  return `${parent} ${child}`;
};

const classNames = (...rest) => {
  let s = "";

  for (const i of rest) {
    if (i) {
      if (typeof i === "string") {
        s = push(s, i);
      } else if (typeof i === "object" && !Array.isArray(i)) {
        for (const j in i) {
          s = i[j] ? push(s, j) : s;
        }
      }
    }
  }

  return beautiful ? s.trim().split(/\s+/).join(" ") : s;
};

export default classNames;
