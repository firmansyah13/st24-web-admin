import { useCookies } from "react-cookie";

const useAuth = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["userAppLogin"]);

  const login = (user) => {
    const { password, username } = user;
    if (password !== "admin" && username !== "admin") {
      alert("unauthorize");
    } else {
      const expires = new Date();
      expires.setSeconds(expires.getSeconds() + 86400);

      setCookie("userAppLogin", user, {
        expires,
        path: "/",
      });
    }
  };

  const logout = () => {
    removeCookie("userAppLogin", { path: "/" });
  };

  return {
    login,
    isLogin:
      cookies.userAppLogin?.password === "system" &&
      cookies.userAppLogin?.username === "system",
    logout,
  };
};

export default useAuth;
