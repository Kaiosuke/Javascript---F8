const myAccount = {
  email: "trong@gmail.com",
  password: 12345,
};

const myInfo = {
  friendList: [],
  skills: [],
  address: "HD",
};

const myInformation = { ...myAccount, ...myInfo };
console.log(myInformation);
