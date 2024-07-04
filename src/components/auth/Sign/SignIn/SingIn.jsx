"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function SingIn() {
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [loading, setloading] = useState(false);
  const router = useRouter();
  const HandleSignIn = async (eo) => {
    eo.preventDefault();
    setloading(true);


  };
  return (
    <form onSubmit={HandleSignIn} className="login">
      <div className="field">
        <input
          onChange={(eo) => {
            let value = eo.target.value;
            setemail(value);
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
            setpassword(value);
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
