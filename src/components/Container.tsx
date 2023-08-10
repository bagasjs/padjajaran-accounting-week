import { Children, PropsWithChildren, useEffect, useRef } from "react";

import background from "../assets/bg.png";

type ContainerProps = PropsWithChildren & {
    accessories?: boolean
};

export default function Container({ children  }: ContainerProps) {
    const container = useRef<HTMLDivElement>(null);
    useEffect(() => {
        container.current?.focus();
    });
    return (
        <div ref={container} className="w-screen h-screen overflow-scroll bg-no-repeat bg-cover bg-center snap-y snap-mandatory" 
        style={{ backgroundImage:  `url(${background})` }}>
            {children}
        </div>
    )
}