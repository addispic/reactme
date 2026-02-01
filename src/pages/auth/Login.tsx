import { useState, useEffect } from "react";
// icons
import { MdOutlineMailOutline } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
// components
import TextInput from "../../components/commons/TextInput";
// utils
import { emailValidator } from "../../utils/input.validators";
export default function Login() {
  // states
  // email
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  // password
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  // effects
  useEffect(() => {
    setEmailError("");
  }, [email]);
  useEffect(() => {
    setPasswordError("");
  }, [password]);

  // handler
  const validateLogin = () => {
    const errors = {
      email: "",
      password: "",
    };

    // email
    if (!email.trim()) {
      errors.email = "Email address is required";
    } else if (!emailValidator(email)) {
      errors.email = "Invalid email address";
    }

    // password
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 3) {
      errors.password = "Password is too short";
    }

    return errors;
  };
  // login handler
  const loginHandler = () => {
    const errors = validateLogin();

    setEmailError(errors.email);
    setPasswordError(errors.password);

    // if any error exists → stop
    if (errors.email || errors.password) return;
    console.log({ email, password });
  };
  return (
    <div className="min-w-64 md:min-w-72 p-3 sm:p-4 md:p-5 lg:p-6 rounded-sm sm:rounded-md md:rounded-lg shadow-sm bg-white">
      <header>
        <h3 className="sm:text-lg md:text-xl font-medium text-green-600">
          Login
        </h3>
      </header>
      <div className="mt-5">
        {/* email */}
        <TextInput
          icon={MdOutlineMailOutline}
          placeholder="Email"
          type="text"
          value={email}
          setValue={setEmail}
          error={emailError}
        />
        {/* password */}
        <TextInput
          icon={TbLockPassword}
          placeholder="Password"
          type="password"
          value={password}
          setValue={setPassword}
          className="mt-5"
          error={passwordError}
        />

        {/* buttons */}
        <div className="mt-5">
          <button
            onClick={loginHandler}
            className="px-5 transition-colors ease-in-out duration-300 hover:bg-green-500 py-1.5 rounded-md bg-green-600 text-white text-sm cursor-pointer"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
