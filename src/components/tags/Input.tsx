import { useState, forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

type Props = {
  id?: string;
  type: string;
  placeholder: string;
};

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const isPassword = props.type === "password";

  return (
    <div className="relative">
      <input
        {...props}
        ref={ref}
        required
        autoComplete="off"
        type={isPassword && showPassword ? "text" : props.type}
        className="border w-full text-[10px] lg:text-lg border-slate-300 rounded-full px-4 py-1 pr-10"
      />
      {isPassword && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-500"
        >
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </button>
      )}
    </div>
  );
});

export default Input;
