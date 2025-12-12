import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
    primaryText: string;
    secondaryText?: string;

    className?: string;
};

export function CTAButton({
    primaryText,
    secondaryText,
    className,
}: {
    primaryText: string;
    secondaryText?: string;
    className?: string;
}) {
    return (
        <Button
            size="lg"
            className={cn("bg-accent hover:bg-accent-hover hover:cursor-pointer text-black font-semibold px-12 py-4 h-14 flex flex-col items-center justify-center gap-0 rounded-sm", className)}
        >
            <span className="text-base leading-tight">{primaryText}</span>
            {secondaryText ? <span className="text-xs font-normal leading-tight">{secondaryText}</span> : null}
        </Button>
    );
}

export default CTAButton;
