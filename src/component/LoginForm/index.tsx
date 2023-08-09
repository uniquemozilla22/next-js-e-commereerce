"use client";

import Button from "@/UI/Button";
import Input from "@/UI/Input";
import { useState } from "react";

interface ILoginForm {
  handleSubmit: () => void;
}

interface IFormState {
  username: string;
  password: string;
}
const LoginFrom: React.FC<ILoginForm> = ({ handleSubmit }) => {
  const [form, setForm] = useState<IFormState>({
    username: "",
    password: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      <Input
        className={"m-2"}
        type="text"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        placeholder="Username"
      />
      <Input
        className={"m-2"}
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <Button className="btn-primary">Login</Button>
    </form>
  );
};

export default LoginFrom;
