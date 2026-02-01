// icons
import { MdOutlineMailOutline } from "react-icons/md";
// components
import InputText from "../../components/auth/InputText";
export default function Register() {
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
          />
        </div>
      </div>
    </div>
  );
}
