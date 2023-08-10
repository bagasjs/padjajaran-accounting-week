import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren & {
    id?: string;
    className?: string
};

export default function Section({ children, id, className }: SectionProps) {
    return (
        <section id={id} className={`h-full snap-start ${className}`}>
            {children}
        </section>
    )
}