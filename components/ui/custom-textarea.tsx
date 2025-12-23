import * as React from "react"
import { cn } from "@/lib/utils"

export interface CustomTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
}

const CustomTextarea = React.forwardRef<HTMLTextAreaElement, CustomTextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-lg border bg-white px-4 py-3.5 text-base text-foreground placeholder:text-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 resize-y transition-all",
          error
            ? "border-red-500 shadow-[0_0_0_1px_#ef4444]"
            : "border-[#d1d5db] hover:border-[#d1d5db] hover:shadow-[0_0_0_1px_#d1d5db] focus:border-accent focus:shadow-[0_0_0_1px_var(--accent-hover)] focus:outline-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
CustomTextarea.displayName = "CustomTextarea"

export { CustomTextarea }
