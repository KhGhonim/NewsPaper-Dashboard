"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

export default function SingIn() {
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [loading, setloading] = useState(false);
  const HandleSignIn = async (eo) => {
    eo.preventDefault();
    setloading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!res.ok) {
      setloading(false);
      toast.error(res.error);
    }

    if (res.ok) {
      toast.success("Login Successful");
      setloading(false);
    }
    eo.target.reset();
    setloading(false);
  };
  return (
    <form onSubmit={HandleSignIn} className="login">
      <div className="field">
        <input
          onChange={(eo) => {
            let value = eo.target.value;
            setemail(value.toLowerCase());
          }}
          type="email"
          placeholder="Email Address"
          required
        />
      </div>
      <div className="field">
        <input
          onChange={(eo) => {
            let value = eo.target.value;
            setpassword(value.toLowerCase());
          }}
          type="password"
          placeholder="Password"
          required
        />
      </div>
      <div className="pass-link">
        <a href="#">Forgot password?</a>
      </div>
      <div className="field btn">
        <div className="btn-layer"></div>
        <button type="submit">{loading ? "Loading..." : "Sign In"}</button>
      </div>
    </form>
  );
}
