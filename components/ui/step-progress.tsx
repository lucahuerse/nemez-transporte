import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface Step {
  label: string
}

interface StepProgressProps {
  currentStep: number // 1-indexed
  steps: Step[]
  className?: string
}

export function StepProgress({ currentStep, steps, className }: StepProgressProps) {
  return (
    <div className={cn("w-full max-w-2xl mx-auto mb-8", className)}>
    <div className={cn("w-full max-w-2xl mx-auto mb-8 relative", className)}>
      
      {/* Connection Lines Container - Constrained to centers of first/last steps */}
      {/* w-24 is 96px, center is 48px (3rem = 12 tailwind) */}
      <div className="absolute top-[20px] left-12 right-12 h-[2px] -translate-y-[50%] -z-0">
        <div className="absolute inset-0 bg-gray-300" />
        <div 
          className="absolute left-0 top-0 h-full bg-black transition-all duration-500 ease-in-out"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />
      </div>

      <div className="relative flex items-center justify-between z-10">
        {steps.map((step, index) => {
          const stepNumber = index + 1
          const isCompleted = currentStep > stepNumber
          const isCurrent = currentStep === stepNumber
          
          return (
            <div key={index} className="flex flex-col items-center bg-transparent w-24"> 
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 bg-white text-sm font-semibold mb-2",
                  isCompleted ? "border-black text-black" : 
                  isCurrent ? "border-black text-black" : "border-gray-200 text-gray-300"
                )}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : stepNumber}
              </div>
              <span className={cn(
                "text-xs font-medium uppercase tracking-wider transition-colors duration-300",
                isCurrent || isCompleted ? "text-black" : "text-gray-300"
              )}>
                {step.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
    </div>
  )
}
