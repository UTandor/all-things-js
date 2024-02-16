const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";

const generatePassword = (length) => {
  let password = "";
  for (let i = 0; i < Math.floor(length / 3); i++) {
    password += lowercase[Math.floor(Math.random(length * length) * length)];
  }
  for (let i = 0; i < Math.floor(length / 3); i++) {
    password += uppercase[Math.floor(Math.random(length * length) * length)];
  }
  for (let i = 0; i < Math.floor(length / 3); i++) {
    password += numbers[Math.floor(Math.random(length * length) * length)];
  }
  password = password
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
  console.log(password);
};

generatePassword(10);
