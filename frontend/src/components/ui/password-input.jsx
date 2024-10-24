import * as React from "react";
import { Input } from "./input";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = React.forwardRef(({ className, type, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Input
      type={showPassword ? "text" : "password"}
      suffix={
        showPassword ? (
          <Eye className="select-none" onClick={() => setShowPassword(false)} />
        ) : (
          <EyeOff
            className="select-none"
            onClick={() => setShowPassword(true)}
          />
        )
      }
      className={className}
      {...props}
      ref={ref}
    />
  );
});
PasswordInput.displayName = "Input";

export { PasswordInput };
