import { useEffect } from "react";
import { server } from "../utils/server";
import Cookies from "js-cookie";

const useSetCookie = (path: string, id: string) => {
  useEffect(() => {
    if (!Cookies.get("userAddView")) {
      server
        .post(`/sw/v1/addView/?id=${id}`)
        .then(() => {
          Cookies.set("userAddView", "Y", {
            expires: 30,
            path,
          });
        })
        .catch((error) => {
          console.error("Ошибка при запросе:", error);
        });
    }
  }, []);
};
export default useSetCookie;
