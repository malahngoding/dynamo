import Axios from "axios";

export const standService = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_STAND_SERVICE_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});
