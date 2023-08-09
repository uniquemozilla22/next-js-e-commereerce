"use client";

import Input from "@/UI/Input";
import LoginFrom from "@/component/LoginForm";

interface ILoginPage {}

const LoginPage: React.FC<ILoginPage> = () => {
  const handleSubmit = () => {
    console.log("Submit");
  };
  return (
    <>
      <div
        className={
          "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        }
      >
        <LoginFrom handleSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default LoginPage;
