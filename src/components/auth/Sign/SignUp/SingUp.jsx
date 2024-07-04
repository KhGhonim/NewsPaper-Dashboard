"use client";
import { toast } from "react-toastify";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function SingUp() {
  const [email, setemail] = useState(null);
  const [loading, setloading] = useState(false);
  const [password, setpassword] = useState(null);
  const [ConfirmPW, setConfirmPW] = useState(null);
  const router = useRouter();

  const HandleSignUp = async (eo) => {
    eo.preventDefault();
    setloading(true);
    if (password !== ConfirmPW) {
      setloading(false);
      toast.error("Password does not match");
      return;
    }

    const IsUserExists = await fetch("api/userExist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const DataFromMongoDB = await IsUserExists.json();

    if (DataFromMongoDB.user) {
      setloading(false);
      toast.warning("User already exists");
      return;
    }

    const response = await fetch("api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, ConfirmPW }),
    });
    console.log(response);
    if (response.ok) {
      toast.success("Account created");
      setloading(false);
      router.replace("/");
    } else {
      toast.warning("Account is not created, try again later");
      setloading(false);
    }
    eo.target.reset();
    setloading(false);
  };
  return (
    <form onSubmit={HandleSignUp} className="signup">
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
      <div className="field">
        <input
          onChange={(eo) => {
            let value = eo.target.value;
            setConfirmPW(value);
          }}
          type="password"
          placeholder="Confirm Password"
          required
        />
      </div>
      <div className="field btn">
        <div className="btn-layer"></div>
        <button disabled={loading} type="submit">
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </div>
    </form>
  );
}
