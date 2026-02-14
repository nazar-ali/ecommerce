import axios from "axios";

const api = axios.create();

const SignupService = {
  signup: async (
    username,
    email,
    fullName,
    password,
    confirmPassword,
    config = {}
  ) => {
    const response = await api.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/signup`, {
      username,
      email,
      fullName,
      password,
      confirmPassword,
      config,
    });
    return response.data;
  },
};

export default SignupService;
