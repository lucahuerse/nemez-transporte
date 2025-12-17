import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    primaryText: string;
    secondaryText?: string;
    href?: string;
    icon?: React.ElementType;
    variant?: "primary" | "outline";
}

export function CTAButton({
    primaryText,
    secondaryText,
    className,
    href,
    icon: Icon,
    onClick,
    variant = "primary",
    type = "button",
    ...props
}: CTAButtonProps) {
    const content = (
        <span className="flex items-center justify-center gap-3">
            {Icon && <Icon className="w-5 h-5" />}
            {primaryText && (
                <span className="flex flex-col justify-center gap-0">
                    <span className="text-base leading-tight">{primaryText}</span>
                    {secondaryText ? <span className="text-xs font-normal leading-tight">{secondaryText}</span> : null}
                </span>
            )}
        </span>
    );

    const paddingClasses = Icon ? "px-6" : "px-6 sm:px-10";
    const baseStyles = `hover:cursor-pointer font-semibold ${paddingClasses} py-4 h-14 rounded-sm transition-all`;
    const variantStyles = {
        primary: "bg-accent hover:bg-accent-hover text-black border-none w-fit",
        outline: "bg-transparent border-2 border-input hover:bg-transparent backdrop-blur-sm border border-white/40 text-white hover:border-white hover:text-white hover:bg-transparent font-medium h-14 rounded-sm"
    };

    if (href) {
        return (
            <Button
                asChild
                size="lg"
                className={cn(baseStyles, variantStyles[variant], className)}
            >
                <Link href={href}>
                    {content}
                </Link>
            </Button>
        );
    }

    return (
        <Button
            size="lg"
            type={type}
            className={cn(baseStyles, variantStyles[variant], "flex flex-col items-center justify-center gap-0", className)}
            onClick={onClick}
            {...props}
        >
            {content}
        </Button>
    );
}

export default CTAButton;
