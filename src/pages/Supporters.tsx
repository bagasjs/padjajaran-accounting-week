import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Section from "../components/Section";

import kincir1 from "../assets/kincir1.png";
import pohon1 from "../assets/pohon1.png";
import pohon2 from "../assets/pohon2.png";
import gedung1 from "../assets/gedung1.png";
import ourSponsors1 from "../assets/our-sponsors-1.png";
import ourSponsors2 from "../assets/our-sponsors-2.png";

export default function Supporters() {
    return (
        <Container>
            <Navbar/>
            <Section className="w-full flex items-center justify-center">
                <div className="md:max-w-xl space-x-8 w-full md:p-1 relative z-0 flex flex-col justify-center items-center">
                <img src={ourSponsors1} className="h-full w-full" />
                <img className="absolute -z-10 -top-20 -left-20 hidden md:block h-44" src={gedung1} alt="Gedung"/>
                <img className="absolute -top-20 -right-20 hidden md:block h-44" src={pohon1} alt="Pohon"/>
                <img className="absolute -z-10 -bottom-20 -left-40 hidden md:block w-64" src={pohon2} alt="Cemara"/>
                <img className="absolute -z-10 -bottom-20 -right-20 hidden md:block w-56" src={kincir1} alt="Kincir"/>
                </div>
            </Section>
            <Section className="w-full flex items-center justify-center">
                <div className="md:max-w-xl space-x-8 w-full md:p-1 relative z-0 flex flex-col justify-center items-center">
                <img src={ourSponsors2} className="h-full w-full" />
                <img className="absolute -z-10 -top-20 -left-20 hidden md:block h-44" src={gedung1} alt="Gedung"/>
                <img className="absolute -top-20 -right-20 hidden md:block h-44" src={pohon1} alt="Pohon"/>
                <img className="absolute -z-10 -bottom-20 -left-40 hidden md:block w-64" src={pohon2} alt="Cemara"/>
                <img className="absolute -z-10 -bottom-20 -right-20 hidden md:block w-56" src={kincir1} alt="Kincir"/>
                </div>
            </Section>
        </Container>
    )
}
