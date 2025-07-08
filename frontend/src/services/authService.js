import axiosInstance from "../api/axiosInstance";

const signUp = async (userData) => {
  const response = await axiosInstance.post("/auth/signup", userData);
  return response.data;
};

export { signUp };
