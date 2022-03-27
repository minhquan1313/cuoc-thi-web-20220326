const mailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export default function emailCheck(value) {
  if (value.match(mailFormat)) return true;
  return false;
}
