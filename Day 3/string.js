// const username = "nguyen van a";
// console.log(username);

// username = "trongleele@gmail.com";

const takeName = () => {
  const email = prompt("Vui lòng nhập email");
  let temp = email.lastIndexOf("@");
  return `${email.slice(0, temp)}`;
};

// console.log(takeName());

/**
 * Tạo hàm kiểm tra mật khẩu mạnh
 * 1. Dài ít nhất 8 ký tự, loại trừ khoảng trắng 2 đầu
 * 2. Bao gồm ít nhất 1 ký tự trong khoảng /A-Z/
 * 3. Bao gồm ít nhất 1 ký tự trong khoảng /a-z/
 * 4. Bao gồm ít nhất 1 ký tự trong khoảng /0-9/
 *
 */
const checkPassword = (ps) => {
  let password = ps;
  password.trim();
  if (password.length < 8) return false;
  // for (let i = 65; i <= 90; i++) {
  //   for (let j = 0; j < password.length; j++) {
  //     if (password[j] === String.fromCharCode(i)) {
  //       console.log(password[j]);
  //     }
  //   }
  // }
  if (password.search(/[A-Z]/) === -1) {
    return false;
  }
  if (password.search(/[a-z]/) === -1) {
    return false;
  }
  if (password.search(/[0-9]/) === -1) {
    return false;
  }
  return password;
};

// console.log(checkPassword("Ttrongleele1"));
