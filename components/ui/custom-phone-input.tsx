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

const CustomFlagComponent = ({ country, countryName }: { country: string, countryName: string }) => {
  if (country === 'DE') {
    return (
      <svg viewBox="0 0 5 5" style={{ width: '100%', height: '100%', display: 'block' }}>
        <rect width="5" height="2" y="0" fill="#000000"/>
        <rect width="5" height="2" y="1.66" fill="#DD0000"/>
        <rect width="5" height="2" y="3.33" fill="#FFCE00"/>
      </svg>
    )
  }
  return (
    <img 
      src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`} 
      alt={countryName} 
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  )
}

const CustomPhoneInput = React.forwardRef<HTMLInputElement, CustomPhoneInputProps>(
  ({ className, placeholder, value, onChange, error, ...props }, ref) => {
    return (
      <PhoneInput
        international
        withCountryCallingCode
        autoComplete="tel"
        defaultCountry="DE"
        value={value}
        onChange={onChange as any}
        placeholder={placeholder}
        flagComponent={CustomFlagComponent}
        className={cn("custom-phone-input", className)}
        numberInputProps={{
          className: cn(
            "flex w-full rounded-lg border bg-white px-4 py-3.5 text-base text-foreground placeholder:text-[#9ca3af] transition-all",
            error
              ? "border-red-500 shadow-[0_0_0_1px_#ef4444]"
              : "border-[#d1d5db] hover:border-[#d1d5db] hover:shadow-[0_0_0_1px_#d1d5db] focus:border-[#f8d24a] focus:shadow-[0_0_0_1px_#f8d24a] focus:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50"
          ),
          type: "tel",
        }}
      />
    )
  }
)
CustomPhoneInput.displayName = "CustomPhoneInput"

export { CustomPhoneInput }
