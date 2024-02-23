const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
let password = "";
const passwordResultElement = document.getElementById("passwordResult");

const generate = () => {
  const length = parseInt(document.getElementById("length").value);

  if (isNaN(length) || length <= 0) {
    console.error("Invalid password length");
    return;
  }

  for (let i = 0; i < Math.floor(length / 3); i++) {
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
  }

  for (let i = 0; i < Math.floor(length / 3); i++) {
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
  }

  for (let i = 0; i < Math.floor(length / 3); i++) {
    password += numbers[Math.floor(Math.random() * numbers.length)];
  }

  password = Array.from(password).sort(() => 0.5 - Math.random()).join("");
  console.log(password);
  passwordResultElement.textContent = "Generated Password: " + password;
};
