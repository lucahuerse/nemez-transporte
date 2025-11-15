import { Button } from "@/components/ui/button";

type CtaButtonProps = {
  primaryText: string;
  secondaryText: string;
  className?: string;
};

export function CtaButton({
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
            className={`bg-accent hover:bg-accent-hover hover:cursor-pointer text-black font-semibold px-8 py-4 h-[60px] flex flex-col items-center justify-center gap-0 rounded-lg ${className ?? ""}`}
        >
            <span className="text-base leading-tight">{primaryText}</span>
            {secondaryText ? <span className="text-xs font-normal leading-tight">{secondaryText}</span> : null}
        </Button>
    );
}

export default CtaButton;
