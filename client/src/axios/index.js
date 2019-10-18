import axios from "axios";

export default function WithAuth() {
  const token = localStorage.getItem("token");
  const instance = axios.create({
    header: {
      "content-type": "application/json",
      Authorization: token
    }
  });
  return instance;
}
