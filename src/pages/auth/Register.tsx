import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// icons
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
// components
import InputText from "../../components/auth/InputText";
// defs
import { emailInputValidator } from "../../utils/input.validators";
// hooks
import { useAppDispatch } from "../../hooks";
// slices
// users
import { register } from "../../features/users/users.slice";
export default function Register() {
  // states
  // email
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  // password
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  // hooks
  const dispatch = useAppDispatch();

  // effects
  useEffect(() => {
    setEmailError("");
  }, [email]);
  useEffect(() => {
    setPasswordError("");
  }, [password]);

  // handlers
  const validateInputs = () => {
    let inputErrors = {
      email: "",
      password: "",
    };
    // email
    if (!email.trim()) {
      inputErrors.email = "Email address required";
    } else if (!emailInputValidator(email)) {
      inputErrors.email = "Invalid email address";
    }
    // password
    if (!password) {
      inputErrors.password = "Password required";
    } else if (password.length < 3) {
      inputErrors.password = "Password is too short";
    }
    return inputErrors;
  };
  const registerHandler = () => {
    const errors = validateInputs();
    setEmailError(errors.email);
    setPasswordError(errors.password);
    if (errors.email || errors.password) {
      return;
    }
    dispatch(register({ email, password }));
  };

  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center">
      <div className="min-w-64 sm:min-w-72 md:min-w-80 p-3 sm:p-4 md:p-5 rounded-sm sm:rounded-md lg:rounded-xl bg-white shadow-sm sm:shadow-lg md:shadow-xl">
        <h3 className="sm:text-lg md:text-xl  font-medium text-green-600">
          Register
        </h3>
        <div className="mt-3">
          {/* email */}
          <InputText
            icon={MdOutlineMailOutline}
            type="text"
            placeholder="Enter email address"
            value={email}
            setValue={setEmail}
            error={emailError}
          />
          {/* password */}
          <InputText
            icon={RiLockPasswordLine}
            type="password"
            placeholder="Enter password"
            value={password}
            setValue={setPassword}
            error={passwordError}
          />

          <div className="text-end mb-5 text-sm italic text-neutral-600">
            <p>
              Already have an account ?{" "}
              <Link
                className=" text-green-600 hover:underline"
                to={"/auth/login"}
              >
                Login
              </Link>
            </p>
          </div>

          <div className="">
            <button
              onClick={registerHandler}
              className="text-sm text-white px-5 py-1.5 rounded-sm bg-green-600 transition-colors ease-in-out duration-500 hover:bg-green-500 cursor-pointer"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
