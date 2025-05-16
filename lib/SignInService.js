import axios from "axios";
const api = axios.create();

const SignInService = {
  login: async (email, password) => {
    const { data } = await api.post(
      "/api/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  },
};

export default SignInService;
