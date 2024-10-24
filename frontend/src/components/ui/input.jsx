import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ suffix, className, type, ...props }, ref) => {
  // Determine the appropriate autocomplete attribute based on the type or name
  const getAutoComplete = () => {
    switch (type) {
      case "email":
        return "email";
      case "password":
        return "new-password";
      case "confirmPassword":
        return "new-password";
      case "username":
        return "username";
      default:
        return undefined;
    }
  };

  return (
    <div className="flex gap-2 items-center">
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-stone-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-stone-950 placeholder:text-stone-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-stone-800 dark:file:text-stone-50 dark:placeholder:text-stone-400 dark:focus-visible:ring-stone-300",
          className
        )}
        ref={ref}
        // autoComplete={getAutoComplete()}
        {...props}
      />
      {suffix}
    </div>
  );
});
Input.displayName = "Input";

export { Input };
