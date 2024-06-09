import React, { ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "small" | "medium" | "large";
  color?: string;
  titleColor?: string;
}

const Button: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  const sizes = {
    small: 2,
    medium: 5,
    large: 10,
  };

  const size = sizes[props.size];

  return (
    <button
      className="float-none p-2 inline-flex bg-gray-500 text-white rounded-lg hover:bg-gray-800 hover:text-gray-400 items-center justify-center"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
