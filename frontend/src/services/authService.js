import axiosInstance from "../api/axiosInstance";

const signUp = async (userData) => {
  const response = await axiosInstance.post("/auth/signup", userData);
  return response.data;
};

const loginWithEmail = async (email, password) => {
  const response = await axiosInstance.post("/auth/login", { username: null, email, password });
  return response.data;
};

const loginWithUsername = async (username, password) => {
  const response = await axiosInstance.post("/auth/login", { username, email: null, password });
  return response.data;
};

export { signUp, loginWithEmail, loginWithUsername };
