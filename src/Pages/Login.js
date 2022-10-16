import { HiOutlineLockClosed } from "react-icons/hi";
import React, {
  useState,
  useContext,
  useCallback,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({ setPassword, setUsername });

  const login = useCallback(
    (e) => {
      e.preventDefault();
      setUser({ username, password });
      // <Spiner />
      if (setUser === auth.login) {
        navigate("/login");
      } else {
        navigate("/");
      }
    }, [setUser, password, username]
  );

  const handleChange = (e, type) => {
    e.persist();
    const value = e.target.value;
    const current = {};
    current[type] = value;

    setUser((prev) => ({ ...prev, ...current }));
  };

  const handleLogin = () => {
    auth.login(user);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="flex items-center justify-center py-12 mt-2 px-4 sm:mt-48 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <svg
            className="mx-auto h-12 w-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3193.87 1080"
          >
            <g id="Layer_4" data-name="Layer 4">
              <path
                className="cls-1 fill-[#223e92]"
                d="M198.08,304A314.51,314.51,0,0,0,154.26,465.5c.44,172.63,144.66,315.88,317.29,315.2a314.74,314.74,0,0,0,140.13-33.32,81.22,81.22,0,0,1,93.72,15.36L825.93,883.26c38.33,38.33,29.14,102.61-18.27,128.88A542,542,0,0,1,539.81,1080C240.18,1077.58,0,835.32,0,535.68a541.76,541.76,0,0,1,96.16-309,40.72,40.72,0,0,1,62.3-5.67l33.41,33.41A40.73,40.73,0,0,1,198.08,304Z"
              />
              <path
                className="cls-2 fill-[#1dbded]"
                d="M879.3,776A314.6,314.6,0,0,0,923.12,614.5c-.44-174.11-143.18-315.88-317.29-315.2A314.74,314.74,0,0,0,465.7,332.62,81.21,81.21,0,0,1,372,317.26L251.45,196.74c-38.33-38.33-29.14-102.61,18.27-128.88A541.93,541.93,0,0,1,537.57,0c299.63,2.4,539.82,244.66,539.81,544.3a541.84,541.84,0,0,1-96.16,309,40.72,40.72,0,0,1-62.3,5.67L885.5,825.55A40.75,40.75,0,0,1,879.3,776Z"
              />
              <path
                className="cls-3 fill-gray-500"
                d="M1286,900.4q-15.4,0-25.85-4.69t-16-12.21a28.47,28.47,0,0,1-5.93-16,3.54,3.54,0,0,1,1.15-2.57,3.72,3.72,0,0,1,2.74-1.15h9a4.32,4.32,0,0,1,3.18,1.06,5.31,5.31,0,0,1,1.42,2.48,19.42,19.42,0,0,0,4.34,8.41,25.75,25.75,0,0,0,9.73,6.9q6.29,2.75,16.2,2.74,15.21,0,22.39-5.39a17.16,17.16,0,0,0,7.17-14.43,13.52,13.52,0,0,0-3.81-10q-3.81-3.81-11.59-6.82t-20.18-6.54a117.07,117.07,0,0,1-21.42-8.15q-8.49-4.41-12.65-11t-4.16-16.64a29.62,29.62,0,0,1,5.13-17.08,35.06,35.06,0,0,1,14.78-12q9.65-4.41,23.45-4.42a57.35,57.35,0,0,1,19.21,2.92,41.14,41.14,0,0,1,13.71,7.79,35.55,35.55,0,0,1,8.32,10.44,25.93,25.93,0,0,1,3,10.89,4,4,0,0,1-.88,2.39,3.39,3.39,0,0,1-2.84,1.15h-9.38a5.45,5.45,0,0,1-2.56-.71,4.59,4.59,0,0,1-2-2.66q-1.06-7.24-8.14-12.21t-18.41-5q-11.5,0-18.67,4.43t-7.17,13.81a15,15,0,0,0,3.36,10q3.36,4,10.62,7a184.66,184.66,0,0,0,18.94,6.37,141.4,141.4,0,0,1,23.19,8.23q9,4.33,13.36,10.8t4.34,16.55q0,11.15-5.84,19a36.41,36.41,0,0,1-16.38,12Q1300.28,900.4,1286,900.4Z"
              />
              <path
                className="cls-3 fill-gray-500"
                d="M1370,932.26a3.62,3.62,0,0,1-3.54-3.54,5.76,5.76,0,0,1,.18-1.42,8.84,8.84,0,0,1,.7-1.77L1381,893.14l-33.8-79.83a9.38,9.38,0,0,1-.89-3,3.62,3.62,0,0,1,3.72-3.72h8.67a4.26,4.26,0,0,1,2.83.88,4.31,4.31,0,0,1,1.42,2.13l26.9,64.43,27.62-64.43a6.06,6.06,0,0,1,1.5-2.13,4.21,4.21,0,0,1,2.92-.88h8.32a3.57,3.57,0,0,1,2.65,1.06,3.41,3.41,0,0,1,1.07,2.48,10.94,10.94,0,0,1-.89,3.18l-50.27,115.94a6,6,0,0,1-1.5,2.12,4.21,4.21,0,0,1-2.92.89Z"
              />
              <path
                className="cls-3 fill-gray-500"
                d="M1483.3,900.4a51.67,51.67,0,0,1-17-2.48,38.88,38.88,0,0,1-11.51-6,29.32,29.32,0,0,1-6.64-7.08,14.09,14.09,0,0,1-2.39-5.66,3.18,3.18,0,0,1,1.24-3,4.71,4.71,0,0,1,2.84-1.06h7.78a4.58,4.58,0,0,1,1.69.26,5.78,5.78,0,0,1,1.68,1.51,67.76,67.76,0,0,0,5.13,4.95,22.83,22.83,0,0,0,7,4.07,29,29,0,0,0,10.36,1.6q9,0,14.86-3.45a11.11,11.11,0,0,0,5.84-10.18,10.19,10.19,0,0,0-2.38-7.08q-2.4-2.65-8.5-4.78a150.2,150.2,0,0,0-16.73-4.43q-10.62-2.47-16.81-6.1a22.38,22.38,0,0,1-8.85-8.67,24.17,24.17,0,0,1-2.66-11.42,23.2,23.2,0,0,1,3.9-12.66,28.87,28.87,0,0,1,11.41-10q7.53-3.88,18.85-3.89a47.87,47.87,0,0,1,15.76,2.3,36,36,0,0,1,10.79,5.75,29.18,29.18,0,0,1,6.38,6.82,13.33,13.33,0,0,1,2.3,5.66,3.36,3.36,0,0,1-1.06,2.92,4.06,4.06,0,0,1-2.84,1.15h-7.43a3.56,3.56,0,0,1-2-.53,9.68,9.68,0,0,1-1.5-1.24,42.17,42.17,0,0,0-4.16-4.6,18.89,18.89,0,0,0-6.2-3.81,27.71,27.71,0,0,0-10-1.5q-8.85,0-13.27,3.72a11.72,11.72,0,0,0-4.43,9.38,9.92,9.92,0,0,0,2,6q2,2.65,7.44,4.77a125,125,0,0,0,16.28,4.61q11.68,2.29,18.41,6.19t9.56,9a24.22,24.22,0,0,1,2.83,11.86,23.28,23.28,0,0,1-4.34,13.63q-4.33,6.19-12.74,9.82T1483.3,900.4Z"
              />
              <path
                className="cls-3 fill-gray-500"
                d="M1577.64,898.63q-9.92,0-16.11-3.81a22,22,0,0,1-9-10.79,44.12,44.12,0,0,1-2.83-16.55V820.75h-13.8a3.93,3.93,0,0,1-4.07-4.07v-6a3.93,3.93,0,0,1,4.07-4.07h13.8V777a3.93,3.93,0,0,1,4.07-4.07h8.32a3.93,3.93,0,0,1,4.07,4.07v29.56h21.95a3.93,3.93,0,0,1,4.07,4.07v6a3.93,3.93,0,0,1-4.07,4.07h-21.95v45.49q0,8.32,2.84,13.1c1.88,3.18,5.25,4.78,10.08,4.78h10.8a3.93,3.93,0,0,1,4.07,4.07v6.37a3.93,3.93,0,0,1-4.07,4.07Z"
              />
              <path
                className="cls-3 fill-gray-500"
                d="M1647.55,900.4q-18.22,0-29-11.24t-11.85-30.71q-.18-2.3-.18-5.93c0-2.42.06-4.39.18-5.93a51.69,51.69,0,0,1,5.84-22,36.52,36.52,0,0,1,14.07-14.6q8.94-5.13,21-5.13,13.46,0,22.57,5.66A36.09,36.09,0,0,1,1684,826.59q4.79,10.44,4.78,24.43v3a3.85,3.85,0,0,1-1.15,3,4.14,4.14,0,0,1-2.92,1.07h-61.24v1.59a37.07,37.07,0,0,0,3.19,13.54,25.16,25.16,0,0,0,8.14,10.18,21,21,0,0,0,12.74,3.89,25.44,25.44,0,0,0,10.62-1.95,27,27,0,0,0,6.91-4.33,27.45,27.45,0,0,0,3.54-3.63,8.93,8.93,0,0,1,2.47-2.74,6.65,6.65,0,0,1,2.84-.45h8.49a4.37,4.37,0,0,1,2.92,1,3,3,0,0,1,1,2.74q-.18,2.66-2.84,6.46a33.94,33.94,0,0,1-7.61,7.52,42.55,42.55,0,0,1-12,6.11A51,51,0,0,1,1647.55,900.4Zm-24.07-54.52H1672v-.53a32.79,32.79,0,0,0-2.92-14.16,23.56,23.56,0,0,0-8.41-9.82,23.19,23.19,0,0,0-13.1-3.63,22.78,22.78,0,0,0-13,3.63,23.16,23.16,0,0,0-8.23,9.82,33.68,33.68,0,0,0-2.83,14.16Z"
              />
              <path
                className="cls-3 fill-gray-500"
                d="M1714.1,898.63a3.93,3.93,0,0,1-4.07-4.07v-83.9a3.93,3.93,0,0,1,4.07-4.07h8a3.93,3.93,0,0,1,4.07,4.07v6.19a30.17,30.17,0,0,1,10.27-8.76,31.41,31.41,0,0,1,14.86-3.27q20-.18,28.32,16.28a30.32,30.32,0,0,1,11.86-11.86,35.28,35.28,0,0,1,17.7-4.42,33.46,33.46,0,0,1,16.73,4.25,29.56,29.56,0,0,1,11.86,12.83q4.34,8.58,4.33,21.51v51.15a3.93,3.93,0,0,1-4.07,4.07h-8.32a3.93,3.93,0,0,1-4.07-4.07V845q0-9.91-2.83-15.58a16.68,16.68,0,0,0-7.61-8,23.69,23.69,0,0,0-10.44-2.3,21.41,21.41,0,0,0-9.38,2.3,18,18,0,0,0-7.88,8q-3.1,5.67-3.1,15.58v49.56a3.93,3.93,0,0,1-4.07,4.07H1772a3.93,3.93,0,0,1-4.07-4.07V845q0-9.91-3-15.58a17.56,17.56,0,0,0-7.79-8,22.83,22.83,0,0,0-10.08-2.3,21.48,21.48,0,0,0-9.39,2.3,18,18,0,0,0-7.87,8q-3.11,5.67-3.1,15.4v49.74a3.93,3.93,0,0,1-4.07,4.07Z"
              />
              <path
                className="cls-3 fill-gray-500"
                d="M1944.2,898.63a3.93,3.93,0,0,1-4.07-4.07V790.48h-34a3.93,3.93,0,0,1-4.07-4.07V779a4.18,4.18,0,0,1,1.15-3.1,3.93,3.93,0,0,1,2.92-1.15h85.31a4,4,0,0,1,4.25,4.25v7.43a4,4,0,0,1-1.15,2.92,4.18,4.18,0,0,1-3.1,1.15h-33.81V894.56a4,4,0,0,1-1.15,2.92,4.17,4.17,0,0,1-3.09,1.15Z"
              />
              <path
                className="cls-3 fill-gray-500"
                d="M2050.93,900.4q-13.45,0-22.48-5.13a34.5,34.5,0,0,1-13.8-14.25,48.93,48.93,0,0,1-5.31-20.8c-.12-2-.18-4.57-.18-7.7s.06-5.63.18-7.52a47.85,47.85,0,0,1,5.4-20.89A35.24,35.24,0,0,1,2028.63,810q9-5.13,22.3-5.13t22.3,5.13a35.33,35.33,0,0,1,13.9,14.16,48.13,48.13,0,0,1,5.4,20.89q.16,2.84.17,7.52c0,3.13-.06,5.69-.17,7.7a49.22,49.22,0,0,1-5.31,20.8,34.59,34.59,0,0,1-13.81,14.25Q2064.38,900.4,2050.93,900.4Zm0-13.63q11,0,17.53-7t7.08-20.45c.11-1.77.17-4,.17-6.72s-.06-5-.17-6.73q-.54-13.44-7.08-20.44t-17.53-7q-11,0-17.61,7t-7,20.44c-.12,1.77-.18,4-.18,6.73s.06,4.95.18,6.72q.35,13.45,7,20.45T2050.93,886.77Z"
              />
              <path
                className="cls-3 fill-gray-500"
                d="M2119.07,932.26a3.93,3.93,0,0,1-4.07-4.07V810.66a3.93,3.93,0,0,1,4.07-4.07h8.15a3.93,3.93,0,0,1,4.07,4.07v7.79a33.84,33.84,0,0,1,11.33-9.74q7.07-3.88,17.7-3.89,9.9,0,16.9,3.36a31.44,31.44,0,0,1,11.5,9.21,41.74,41.74,0,0,1,6.82,13.27,58,58,0,0,1,2.48,15.93q.17,2.83.17,6t-.17,6a58.42,58.42,0,0,1-2.48,15.84,40.41,40.41,0,0,1-6.82,13.27,32.72,32.72,0,0,1-11.5,9.21q-7,3.45-16.9,3.45-10.28,0-17.26-3.81a36.08,36.08,0,0,1-11.42-9.47v41.07a4.13,4.13,0,0,1-1.06,2.92,3.92,3.92,0,0,1-3,1.15Zm37.53-46.2q9.2,0,14.42-4a22.23,22.23,0,0,0,7.53-10.44,48.29,48.29,0,0,0,2.65-13.9q.18-5.13,0-10.26a48.29,48.29,0,0,0-2.65-13.9,22.23,22.23,0,0,0-7.53-10.44q-5.22-4-14.42-4-8.67,0-14.07,4.07a24.15,24.15,0,0,0-8,10.35,39.5,39.5,0,0,0-2.92,12.83c-.12,1.89-.17,4.14-.17,6.73s.05,4.9.17,6.9a31.42,31.42,0,0,0,2.92,12.22,24.39,24.39,0,0,0,8.23,9.91Q2148.28,886.06,2156.6,886.06Z"
              />
              <path
                className="cls-3 fill-gray-500"
                d="M2312.71,900.4q-14.86,0-25.57-5.31a36.7,36.7,0,0,1-16.47-16.2q-5.74-10.87-5.75-28V779a4.43,4.43,0,0,1,1.06-3.1,3.88,3.88,0,0,1,3-1.15h9a4,4,0,0,1,4.25,4.25v72.21q0,17.35,8.14,25.67t22.3,8.32q14,0,22.22-8.32t8.23-25.67V779a4.18,4.18,0,0,1,1.15-3.1,3.93,3.93,0,0,1,2.92-1.15h9.2a4,4,0,0,1,2.92,1.15,4.18,4.18,0,0,1,1.15,3.1v71.86q0,17.17-5.75,28a36.83,36.83,0,0,1-16.37,16.2Q2327.76,900.4,2312.71,900.4Z"
              />
              <path
                className="cls-3 fill-gray-500"
                d="M2392,932.26a3.93,3.93,0,0,1-4.07-4.07V810.66a3.93,3.93,0,0,1,4.07-4.07h8.15a3.93,3.93,0,0,1,4.07,4.07v7.79a33.84,33.84,0,0,1,11.33-9.74q7.07-3.88,17.7-3.89,9.9,0,16.9,3.36a31.52,31.52,0,0,1,11.5,9.21,41.74,41.74,0,0,1,6.82,13.27,58,58,0,0,1,2.48,15.93q.16,2.83.17,6t-.17,6a58.42,58.42,0,0,1-2.48,15.84,40.41,40.41,0,0,1-6.82,13.27,32.81,32.81,0,0,1-11.5,9.21q-7,3.45-16.9,3.45-10.27,0-17.26-3.81a36.08,36.08,0,0,1-11.42-9.47v41.07a4.13,4.13,0,0,1-1.06,2.92,3.92,3.92,0,0,1-3,1.15Zm37.53-46.2q9.19,0,14.42-4a22.23,22.23,0,0,0,7.53-10.44,48.29,48.29,0,0,0,2.65-13.9q.18-5.13,0-10.26a48.29,48.29,0,0,0-2.65-13.9,22.23,22.23,0,0,0-7.53-10.44q-5.22-4-14.42-4-8.67,0-14.07,4.07a24.15,24.15,0,0,0-8,10.35,39.5,39.5,0,0,0-2.92,12.83c-.12,1.89-.18,4.14-.18,6.73s.06,4.9.18,6.9a31.42,31.42,0,0,0,2.92,12.22,24.39,24.39,0,0,0,8.23,9.91Q2421.21,886.06,2429.53,886.06Z"
              />
              <path
                className="cls-3 fill-gray-500"
                d="M2536.26,898.63a3.93,3.93,0,0,1-4.07-4.07v-5.67a8.66,8.66,0,0,1,.88-3.54,13.45,13.45,0,0,1,3.54-4.24l37.53-37.53q9-7.61,14.24-13a37.4,37.4,0,0,0,7.44-10.35A25,25,0,0,0,2598,810q0-10.08-5.66-16T2575.55,788a24.35,24.35,0,0,0-12.21,2.92,21.32,21.32,0,0,0-8.05,8,31,31,0,0,0-3.81,11.42,4.19,4.19,0,0,1-1.86,3.18,5.52,5.52,0,0,1-2.74.89h-9.21a3.77,3.77,0,0,1-2.65-1A3.09,3.09,0,0,1,2534,811a39.88,39.88,0,0,1,2.83-13.54,37.35,37.35,0,0,1,7.88-12.3,40.29,40.29,0,0,1,12.92-8.94,43.56,43.56,0,0,1,18-3.45q14,0,22.92,5.05a31.88,31.88,0,0,1,13.19,13.36,39.53,39.53,0,0,1,4.25,18.23,37.13,37.13,0,0,1-2.66,14.25,48.85,48.85,0,0,1-7.7,12.57,102.56,102.56,0,0,1-12.48,12.47l-34,34.52h55.22a4.39,4.39,0,0,1,3.1,1.06,3.88,3.88,0,0,1,1.15,3v7.26a4,4,0,0,1-1.15,2.92,4.18,4.18,0,0,1-3.1,1.15Z"
              />
              <path
                className="cls-3 fill-gray-500"
                d="M2696.62,898.63a3.93,3.93,0,0,1-4.07-4.07V869.07H2635.2a3.93,3.93,0,0,1-4.07-4.07v-7.08a9,9,0,0,1,.44-2.21,11.32,11.32,0,0,1,1.51-3.1l53.1-74.87q2.12-3,6.54-3h12.75a3.93,3.93,0,0,1,4.07,4.07v74.87h15.93a4.22,4.22,0,0,1,3.1,1.15,4,4,0,0,1,1.15,2.92V865a3.93,3.93,0,0,1-4.07,4.07h-16.11v25.49a3.93,3.93,0,0,1-4.07,4.07ZM2650.07,854h42.65V793.31Z"
              />
              <path
                className="cls-3 fill-gray-500"
                d="M2831.14,900.4a64.36,64.36,0,0,1-17.08-2.21,42.53,42.53,0,0,1-14.34-6.91,34.43,34.43,0,0,1-10-11.77,38.31,38.31,0,0,1-4.07-16.63,3.9,3.9,0,0,1,1.06-2.75,3.69,3.69,0,0,1,2.83-1.15h9.56a4.22,4.22,0,0,1,3.1,1.15,5.64,5.64,0,0,1,1.5,2.92q.71,8,4.6,12.83a22.85,22.85,0,0,0,9.92,7.17,36.68,36.68,0,0,0,13.27,2.3q13.46,0,20.53-8.85T2859.1,853V790.13h-62.83a3.93,3.93,0,0,1-4.07-4.07V778.8a3.93,3.93,0,0,1,4.07-4.07h76.28a4,4,0,0,1,4.25,4.25v74.34q0,14.34-5.49,24.95a39,39,0,0,1-15.57,16.38Q2845.65,900.4,2831.14,900.4Z"
              />
              <path
                className="cls-3 fill-gray-500"
                d="M2929.9,900.4a36.26,36.26,0,0,1-16.11-3.54,31.15,31.15,0,0,1-11.68-9.56,22.41,22.41,0,0,1-4.42-13.63,22.92,22.92,0,0,1,9.91-19.47q9.92-7.25,25.84-9.56l26.37-3.71v-5.14q0-8.49-4.86-13.27t-15.85-4.78q-8,0-12.83,3.19a17,17,0,0,0-6.81,8.14,3.76,3.76,0,0,1-3.72,2.65h-8a3.6,3.6,0,0,1-2.92-1.15,4.08,4.08,0,0,1-1-2.74,14.87,14.87,0,0,1,2-6.55,26.9,26.9,0,0,1,6.28-7.61,36.07,36.07,0,0,1,10.89-6.28,45,45,0,0,1,16.19-2.57q10.62,0,17.88,2.74a28.69,28.69,0,0,1,11.41,7.35,28.09,28.09,0,0,1,6,10.44,38.91,38.91,0,0,1,1.86,11.86v57.35a3.93,3.93,0,0,1-4.07,4.07h-8.14a3.88,3.88,0,0,1-3-1.15,4.13,4.13,0,0,1-1.06-2.92V887a32.46,32.46,0,0,1-15.93,11.41A43.88,43.88,0,0,1,2929.9,900.4Zm3.72-13.28a28.63,28.63,0,0,0,13.27-3.09,22,22,0,0,0,9.47-9.65q3.45-6.54,3.45-16.46v-5l-20.53,3q-12.57,1.77-18.94,5.93c-4.25,2.78-6.37,6.28-6.37,10.53a11.88,11.88,0,0,0,2.92,8.23,17.58,17.58,0,0,0,7.43,4.87A27.8,27.8,0,0,0,2933.62,887.12Z"
              />
              <path
                className="cls-3 fill-gray-500"
                d="M3006,898.63a3.93,3.93,0,0,1-4.07-4.07v-83.9a3.93,3.93,0,0,1,4.07-4.07h8a3.93,3.93,0,0,1,4.07,4.07v6.19a30.36,30.36,0,0,1,10.27-8.76,31.46,31.46,0,0,1,14.87-3.27q20-.18,28.32,16.28a30.19,30.19,0,0,1,11.86-11.86,35.28,35.28,0,0,1,17.7-4.42,33.42,33.42,0,0,1,16.72,4.25,29.5,29.5,0,0,1,11.86,12.83q4.34,8.58,4.34,21.51v51.15a3.93,3.93,0,0,1-4.07,4.07h-8.32a3.93,3.93,0,0,1-4.07-4.07V845q0-9.91-2.84-15.58a16.64,16.64,0,0,0-7.61-8,23.63,23.63,0,0,0-10.44-2.3,21.44,21.44,0,0,0-9.38,2.3,18,18,0,0,0-7.88,8q-3.09,5.67-3.09,15.58v49.56a3.93,3.93,0,0,1-4.07,4.07h-8.32a4,4,0,0,1-4.08-4.07V845q0-9.91-3-15.58a17.61,17.61,0,0,0-7.79-8,22.9,22.9,0,0,0-10.09-2.3,21.41,21.41,0,0,0-9.38,2.3,18,18,0,0,0-7.88,8q-3.09,5.67-3.1,15.4v49.74a3.93,3.93,0,0,1-4.07,4.07Z"
              />
              <path
                className="cls-3 fill-gray-500"
                d="M1413.4,692.77q-55.68,0-93.44-17T1262,631.65q-20.16-27.2-21.44-57.92a12.84,12.84,0,0,1,4.16-9.28,13.55,13.55,0,0,1,9.92-4.16h32.64q7.68,0,11.52,3.84a19.06,19.06,0,0,1,5.12,9q3.19,15.36,15.68,30.4t35.2,25q22.71,9.93,58.56,9.92,55,0,81-19.52t25.92-52.16q0-22.4-13.76-36.16t-41.92-24.64q-28.17-10.87-73-23.68-46.73-13.44-77.44-29.44t-45.76-39.68q-15-23.67-15-60.16,0-34.56,18.56-61.76T1325.4,248q34.88-16,84.8-16,39.67,0,69.44,10.56t49.6,28.16q19.83,17.61,30.08,37.76t10.88,39.36a14,14,0,0,1-3.2,8.64q-3.21,4.17-10.24,4.16h-33.92a19.65,19.65,0,0,1-9.28-2.56q-4.8-2.55-7.36-9.6-3.84-26.24-29.44-44.16t-66.56-17.92q-41.61,0-67.52,16t-25.92,49.92q0,21.76,12.16,36.16t38.4,25.28q26.23,10.89,68.48,23,51.2,14.09,83.84,29.76t48.32,39q15.68,23.37,15.68,59.84,0,40.32-21.12,68.8t-59.2,43.52Q1465.24,692.76,1413.4,692.77Z"
              />
              <path
                className="cls-3 fill-gray-500"
                d="M1812.12,686.37a14.23,14.23,0,0,1-14.72-14.72V295.33H1674.52a14.23,14.23,0,0,1-14.72-14.72V253.73q0-7,4.16-11.2a14.31,14.31,0,0,1,10.56-4.16H1983q7,0,11.2,4.16t4.16,11.2v26.88a14.31,14.31,0,0,1-4.16,10.56q-4.17,4.17-11.2,4.16H1860.76V671.65a14.31,14.31,0,0,1-4.16,10.56q-4.17,4.17-11.2,4.16Z"
              />
              <path
                className="cls-3 fill-gray-500"
                d="M2105.24,521.25a14.23,14.23,0,0,1-14.72-14.72V482.21a14.23,14.23,0,0,1,14.72-14.72h192A14.23,14.23,0,0,1,2312,482.21v24.32a14.23,14.23,0,0,1-14.72,14.72Z"
              />
              <path
                className="cls-3 fill-gray-500"
                d="M2409.24,686.37a14.23,14.23,0,0,1-14.72-14.72V651.17a31.24,31.24,0,0,1,3.2-12.8q3.2-7,12.8-15.36L2546.2,487.33q32.64-27.51,51.52-47t26.88-37.44a90.15,90.15,0,0,0,8-37.12q0-36.48-20.48-57.92t-60.8-21.44q-25.61,0-44.16,10.56a77,77,0,0,0-29.12,28.8A112.3,112.3,0,0,0,2464.28,367q-1.29,8.33-6.72,11.52t-9.92,3.2h-33.28a13.65,13.65,0,0,1-9.6-3.52,11.25,11.25,0,0,1-3.84-8.64,144.61,144.61,0,0,1,10.24-49,135.41,135.41,0,0,1,28.48-44.48q18.87-19.83,46.72-32.32t65-12.48q50.55,0,82.88,18.24t47.68,48.32q15.36,30.09,15.36,65.92,0,28.17-9.6,51.52t-27.84,45.44q-18.24,22.08-45.12,45.12L2491.8,630.69h199.68q7,0,11.2,3.84t4.16,10.88v26.24a14.31,14.31,0,0,1-4.16,10.56q-4.17,4.17-11.2,4.16Z"
              />
              <path
                className="cls-3 fill-gray-500"
                d="M3021.08,686.37a14.23,14.23,0,0,1-14.72-14.72V579.49H2799a14.23,14.23,0,0,1-14.72-14.72v-25.6a32,32,0,0,1,1.6-8,41.37,41.37,0,0,1,5.44-11.2l192-270.72q7.68-10.87,23.68-10.88h46.08a14.23,14.23,0,0,1,14.72,14.72V523.81h57.6q7,0,11.2,4.16a14.34,14.34,0,0,1,4.16,10.56v26.24A14.23,14.23,0,0,1,3126,579.49H3067.8v92.16a14.23,14.23,0,0,1-14.72,14.72ZM2852.76,525.09H3007V305.57Z"
              />
            </g>
          </svg>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={login}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="email"
                required
                value={user.username}
                onChange={(e) => handleChange(e, "username")}
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Type username..."
              />
            </div>
            <div className="h-6">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Password"
                required
                value={user.password}
                onChange={(e) => handleChange(e, "password")}
                className="relative w-full rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              <button type="button" onClick={togglePassword} className="text-gray-500 relative bottom-9 focus:outline-none font-medium rounded-lg text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ marginLeft: "90%" }}>
                <FontAwesomeIcon icon={faKey} />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                value={false}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <HiOutlineLockClosed
                  className="h-5 w-5 text-white group-hover:text-white"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
