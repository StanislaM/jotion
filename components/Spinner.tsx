import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Loader } from "lucide-react";
import React from "react";

const spinnerVariants = cva("text-muted-foreground animate-spin", {
    variants: {
        size: {
            default: "h-4 w-4",
            sm: "h-2 w-2",
            lg: "h-6 w-6",
            icon: "h-10 w-10",
        },
    },
    defaultVariants: {
        size: "default",
    },
});

type Props = {} & VariantProps<typeof spinnerVariants>;

function Spinner({ size }: Props) {
    return <Loader className={cn(spinnerVariants({ size }))} />;
}

export default Spinner;
