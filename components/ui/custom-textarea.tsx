import * as React from "react"
import { cn } from "@/lib/utils"

export interface CustomTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const CustomTextarea = React.forwardRef<HTMLTextAreaElement, CustomTextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-lg border border-[#d1d5db] bg-white px-4 py-3.5 text-base text-foreground placeholder:text-[#9ca3af] transition-all resize-y",
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
CustomTextarea.displayName = "CustomTextarea"

export { CustomTextarea }
