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
      <div className="relative flex items-center justify-between">
        {/* Background Line */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -z-10 -translate-y-[50%] top-[20px]" />
        
        {/* Active Progress Line */}
        <div 
          className="absolute left-0 h-[2px] bg-black transition-all duration-500 ease-in-out -z-10 -translate-y-[50%] top-[20px]"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />

        {/* Steps */}
        {steps.map((step, index) => {
          const stepNumber = index + 1
          const isCompleted = currentStep > stepNumber
          const isCurrent = currentStep === stepNumber
          
          return (
            <div key={index} className="flex flex-col items-center bg-transparent z-10"> 
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
  )
}
