import axios from "axios";

const LoginUser = ({ email, password }) => {
  if (!email && !password) {
    return Promise.reject("Please enter Email and Password");
  } else if (!email) {
    return Promise.reject("Please enter the Email");
  } else if (!password) {
    return Promise.reject("PLease enter the Password");
  }

  const config = {
    method: "post",
    data: {
      email,
      password
    },
    url: "https://reqres.in/api/login"
  };
  console.log(email, password);
  return axios(config);
};

export { LoginUser };
