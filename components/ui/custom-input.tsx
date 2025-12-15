import * as React from "react"
import { cn } from "@/lib/utils"

export interface CustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-lg border border-[#d1d5db] bg-white px-4 py-3.5 text-base text-foreground placeholder:text-[#9ca3af] transition-all",
          "hover:border-[#6b7280] hover:shadow-[0_0_0_1px_#6b7280]",
          "focus:border-[#6b7280] focus:shadow-[0_0_0_1px_#6b7280] focus:outline-none",
          "disabled:cursor-not-allowed disabled:opacity-50",
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
