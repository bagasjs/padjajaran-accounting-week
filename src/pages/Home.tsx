import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
    const home = useRef<HTMLDivElement>(null);

    useEffect(() => {
        home.current?.focus();
    }, []);

    return (
        <>
            <Navbar/>
            <div ref={home} tabIndex={1} 
            className="snap-y snap-mandatory snap-always h-full w-screen 
            overflow-y-scroll overflow-x-hidden bg-gradient-to-r from-cyan-500 to-blue-500">
                <section id="index" className="h-screen snap-start">
                    <h1>Welcome to PAW</h1>
                </section>
                <section id="about" className="h-screen snap-start max-w-md">
                    <h1 className="text-2xl">Padjajaran Accounting Week</h1>
                    <p>Padjadjaran Accounting Week is an annual accounting event held by Himpunan Mahasiswa Akuntansi Fakultas Ekonomi dan Bisnis Universitas Padjadjaran (Hima Akuntansi FEB Unpad) as a place to compete, communicate, share, and evaluate students as future accountants. PAW consists of a competition and a conference related to this year’s grand theme of “Driving Sustainable Business Practice: The Role of Audit and Assurance”, around the field of economics, especially in accounting. PAW intends to expand and sharpen the skills of the participants in accounting and/or nonaccounting, and a place for them to gain insights.</p>
                </section>
            </div>
        </>
    )
}
