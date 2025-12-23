import * as React from "react"
import { cn } from "@/lib/utils"

export interface CustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-lg border bg-white px-4 py-3.5 text-base text-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 transition-all",
          error
            ? "border-red-500 shadow-[0_0_0_1px_#ef4444]"
            : "border-[#d1d5db] hover:border-[#d1d5db] hover:shadow-[0_0_0_1px_#d1d5db] focus:border-accent focus:shadow-[0_0_0_1px_#D0AB74] focus:outline-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
CustomInput.displayName = "CustomInput"

export { CustomInput }
