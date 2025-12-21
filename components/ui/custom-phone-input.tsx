"use client"

import * as React from "react"
import { getCountries, getCountryCallingCode, parsePhoneNumber } from "react-phone-number-input"
import de from "react-phone-number-input/locale/de.json"
import { Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export interface CustomPhoneInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value?: string
  onChange?: (value?: string) => void
  error?: boolean
}

const CustomFlagComponent = ({ country, countryName }: { country: string, countryName: string }) => {
  return (
    <img 
      src={`https://purecatamphetamine.github.io/country-flag-icons/1x1/${country}.svg`} 
      alt={countryName} 
      className="w-full h-full object-cover"
    />
  )
}

const CustomPhoneInput = React.forwardRef<HTMLInputElement, CustomPhoneInputProps>(
  ({ className, value, onChange, error, id, placeholder, ...props }, ref) => {
    const [open, setOpen] = React.useState(false)
    const [country, setCountry] = React.useState<string>("DE")
    const [nationalNumber, setNationalNumber] = React.useState("")

    // Parse value if it changes from outside
    React.useEffect(() => {
      if (value) {
        const parsed = parsePhoneNumber(value)
        if (parsed) {
          setCountry(parsed.country || "DE")
          setNationalNumber(parsed.nationalNumber)
        } else if (value.startsWith("+")) {
           // If we have a partial number like "+49", try to identify the country
           const countries = getCountries()
           for (const c of countries) {
             const code = getCountryCallingCode(c)
             if (value === `+${code}`) {
               setCountry(c)
               setNationalNumber("")
               return
             }
           }
        }
      } else {
        setNationalNumber("")
      }
    }, [value])

    const handleNationalNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Allow digits, spaces, and hyphens but store only full string for the parent
      const val = e.target.value.replace(/[^\d]/g, "")
      setNationalNumber(val)
      const callingCode = getCountryCallingCode(country as any)
      onChange?.(val ? `+${callingCode}${val}` : `+${callingCode}`)
    }

    const handleCountrySelect = (newCountry: string) => {
      setCountry(newCountry)
      setOpen(false)
      const callingCode = getCountryCallingCode(newCountry as any)
      onChange?.(nationalNumber ? `+${callingCode}${nationalNumber}` : `+${callingCode}`)
    }

    const callingCode = getCountryCallingCode(country as any)

    return (
      <div className={cn(
        "flex items-center w-full rounded-lg border bg-white transition-all overflow-hidden relative",
        error
          ? "border-red-500 shadow-[0_0_0_1px_#ef4444]"
          : "border-[#d1d5db] focus-within:border-[#f8d24a] focus-within:shadow-[0_0_0_1px_#f8d24a]",
        className
      )}>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-1.5 h-14 pl-4 pr-3 rounded-none hover:bg-slate-50 hover:cursor-pointer border-r border-[#d1d5db] shrink-0"
            >
              <div className="w-5 h-5 overflow-hidden rounded-[2px] flex-shrink-0">
                <CustomFlagComponent country={country} countryName={de[country as keyof typeof de] || country} />
              </div>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0" align="start">
            <Command className="max-h-[400px]">
              <CommandInput placeholder="Land suchen..." className="h-11" />
              <CommandList>
                <CommandEmpty>Kein Land gefunden.</CommandEmpty>
                <CommandGroup>
                  {getCountries().map((c) => (
                    <CommandItem
                      key={c}
                      onSelect={() => handleCountrySelect(c)}
                      className="flex items-center gap-2 cursor-pointer py-2.5"
                    >
                      <div className="w-5 h-5 overflow-hidden rounded-[2px] flex-shrink-0">
                        <CustomFlagComponent country={c} countryName={de[c as keyof typeof de] || c} />
                      </div>
                      <span className="flex-1 truncate text-sm">{de[c as keyof typeof de] || c}</span>
                      <span className="text-muted-foreground text-xs">+{getCountryCallingCode(c)}</span>
                      {country === c && <Check className="h-4 w-4 ml-auto text-primary" />}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <div className="flex items-center flex-1 pl-3 pr-4 h-14 bg-transparent select-none">
          <span className="text-base text-foreground font-medium mr-1.5 shrink-0 select-none">+{callingCode}</span>
          <input
            type="tel"
            id={id}
            ref={ref}
            value={nationalNumber}
            onChange={handleNationalNumberChange}
            placeholder={placeholder}
            className="flex-1 bg-transparent border-none outline-none text-base text-foreground placeholder:text-[#9ca3af] p-0 min-w-0"
            {...props}
          />
        </div>
      </div>
    )
  }
)
CustomPhoneInput.displayName = "CustomPhoneInput"

export { CustomPhoneInput }
