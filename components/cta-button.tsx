import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
    primaryText: string;
    secondaryText?: string;

    className?: string;
};

import Link from "next/link";

export function CTAButton({
    primaryText,
    secondaryText,
    className,
    href,
    icon: Icon,
    onClick,
}: {
    primaryText: string;
    secondaryText?: string;
    className?: string;
    href?: string;
    icon?: React.ElementType;
    onClick?: () => void;
}) {
    const content = (
        <span className="flex items-center justify-center gap-3">
            {Icon && <Icon className="w-5 h-5 fill-current" />}
            <span className="flex flex-col justify-center gap-0">
                <span className="text-base leading-tight">{primaryText}</span>
                {secondaryText ? <span className="text-xs font-normal leading-tight">{secondaryText}</span> : null}
            </span>
        </span>
    );

    if (href) {
        return (
            <Button
                asChild
                size="lg"
                className={cn("bg-accent hover:bg-accent-hover hover:cursor-pointer text-black font-semibold px-12 py-4 h-14 rounded-sm", className)}
            >
                <Link href={href} onClick={onClick}>
                    {content}
                </Link>
            </Button>
        );
    }

    return (
        <Button
            size="lg"
            className={cn("bg-accent hover:bg-accent-hover hover:cursor-pointer text-black font-semibold px-12 py-4 h-14 flex flex-col items-center justify-center gap-0 rounded-sm", className)}
            onClick={onClick}
        >
            {content}
        </Button>
    );
}

export default CTAButton;
