"use client"

import * as React from "react"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"
import { cn } from "@/lib/utils"

export interface CustomPhoneInputProps {
  value?: string
  onChange?: (value?: string) => void
  placeholder?: string
  className?: string
  error?: boolean
}

const CustomPhoneInput = React.forwardRef<HTMLInputElement, CustomPhoneInputProps>(
  ({ className, placeholder, value, onChange, error, ...props }, ref) => {
    return (
      <PhoneInput
        international
        defaultCountry="DE"
        value={value}
        onChange={onChange as any}
        placeholder={placeholder}
        className={cn("custom-phone-input", className)}
        numberInputProps={{
          className: cn(
            "flex w-full rounded-lg border bg-white px-4 py-3.5 text-base text-foreground placeholder:text-[#9ca3af] transition-all",
            error
              ? "border-red-500 shadow-[0_0_0_1px_#ef4444]"
              : "border-[#d1d5db] hover:border-[#6b7280] hover:shadow-[0_0_0_1px_#6b7280] focus:border-[#6b7280] focus:shadow-[0_0_0_1px_#6b7280] focus:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50"
          ),
        }}
      />
    )
  }
)
CustomPhoneInput.displayName = "CustomPhoneInput"

export { CustomPhoneInput }
