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
}: {
    primaryText: string;
    secondaryText?: string;
    className?: string;
    href?: string;
}) {
    const content = (
        <span className="flex flex-col items-center justify-center gap-0">
            <span className="text-base leading-tight">{primaryText}</span>
            {secondaryText ? <span className="text-xs font-normal leading-tight">{secondaryText}</span> : null}
        </span>
    );

    if (href) {
        return (
            <Button
                asChild
                size="lg"
                className={cn("bg-accent hover:bg-accent-hover hover:cursor-pointer text-black font-semibold px-12 py-4 h-14 rounded-sm", className)}
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
            className={cn("bg-accent hover:bg-accent-hover hover:cursor-pointer text-black font-semibold px-12 py-4 h-14 flex flex-col items-center justify-center gap-0 rounded-sm", className)}
        >
            {content}
        </Button>
    );
}

export default CTAButton;
