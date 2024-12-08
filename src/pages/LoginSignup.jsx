import React, { useState } from "react";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agree: false,
  });
  const [isEmailValid, setIsEmailValid] = useState(true);

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsEmailValid(emailRegex.test(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state === "Login") {
      await login();
    } else {
      await signup();
    }
  };

  const login = async () => {
    console.log("Login function executed");
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        responseData = data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(responseData);
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.errors);
    }
  };

  const signup = async () => {
    console.log("Signup function executed");
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        responseData = data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(responseData);
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.errors);
    }
  };

  return (
    <div className="w-full h-[80vh] flex items-center justify-center bg-gray-200 mt-8">
      <form
        onSubmit={handleSubmit}
        className="w-[400px] bg-white shadow-md rounded-md p-4"
      >
        <h1 className="text-2xl font-bold text-start mb-6 text-gray-700">
          {state}
        </h1>

        {/* Form Fields */}
        <div className="flex flex-col gap-4">
          {state === "Sign Up" && (
            <input
              type="text"
              name="name"
              placeholder="Username"
              value={formData.name}
              onChange={changeHandler}
              required
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-200"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={changeHandler}
            required
            className={`p-3 border rounded-md focus:outline-none focus:ring-1 ${
              isEmailValid
                ? "border-gray-300 focus:ring-green-200"
                : "border-red-500 focus:ring-red-200"
            }`}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={changeHandler}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-200"
          />
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-start mt-6 gap-2">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={changeHandler}
            required
            className="mt-1 focus:ring-2 focus:ring-green-200"
          />
          <p className="text-gray-500 text-sm">
            I agree to the{" "}
            <span className="text-green-500 cursor-pointer hover:underline">
              terms and conditions
            </span>
            .
          </p>
        </div>

        {/* Continue Button */}
        <button
          type="submit"
          className={`w-full mt-6 py-3 rounded-md font-bold transition duration-200 ${
            formData.agree && isEmailValid && formData.password
              ? "bg-green-400 text-white hover:bg-green-600"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!formData.agree || !isEmailValid || !formData.password}
        >
          Continue
        </button>

        {/* Toggle between Login and Sign Up */}
        {state === "Sign Up" ? (
          <p className="text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-green-500 cursor-pointer hover:underline"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="text-center text-gray-500 mt-4">
            Create an account{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-green-500 cursor-pointer hover:underline"
            >
              Click here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginSignup;
