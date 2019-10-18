import axios from "axios";

export default function WithAuth() {
  const token = localStorage.getItem("token");
  const instance = axios.create({
    headers: {
      "content-type": "application/json",
      Authorization: token
    }
  });
  return instance;
}
