export default function verifyEmail(email) {
  const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;

  return email ? email.toString().match(emailRegex) : false;
}
