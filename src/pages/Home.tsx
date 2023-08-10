import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Section from "../components/Section";
import kincir1 from "../assets/kincir1.png";
import pohon1 from "../assets/pohon1.png";
import pohon2 from "../assets/pohon2.png";
import gedung1 from "../assets/gedung1.png";
import trailer from "../assets/trailer.mp4";

export default function Home() {
    return (
        <Container>
            <Navbar/>
            <Section id="video" className="flex items-center justify-center">
                <div className="md:max-w-3xl w-full md:p-1 relative z-0">
                    <video autoPlay className="w-full h-full z-10" controls={true}>
                        <source src={trailer} type="video/mp4" />
                    </video>
                    <img className="absolute -z-10 -top-20 -left-20 hidden md:block w-36" src={kincir1} alt="Kincir"/>
                    <img className="absolute -top-20 -right-20 hidden md:block h-28" src={pohon1} alt="Pohon"/>
                    <img className="absolute -z-10 -bottom-20 -left-40 hidden md:block w-64" src={pohon2} alt="Pohon"/>
                    <img className="absolute -z-10 -bottom-20 -right-20 hidden md:block w-56" src={gedung1} alt="Gedung"/>
                </div>
            </Section>
            <Section id="description" className="flex items-center justify-center">
                <div className="md:max-w-3xl w-full md:p-1 relative z-0">
                    <div className="w-full flex flex-col items-center justify-center">
                        <h1 className="text-xl md:text-3xl text-center mb-3 font-bold text-blue-950">PADJADJARAN ACCOUNTING WEEK</h1>
                        <p className="w-3/4 font-balmond font-bold text-justify text-sm md:text-lg text-blue-900">Padjadjaran Accounting Week is an annual accounting event held by Himpunan Mahasiswa Akuntansi Fakultas Ekonomi dan Bisnis Universitas Padjadjaran (Hima Akuntansi FEB Unpad) as a place to compete, communicate, share, and evaluate students as future accountants. PAW consists of a competition and a conference related to this year’s grand theme of “Driving Sustainable Business Practice: The Role of Audit and Assurance”, around the field of economics, especially in accounting. PAW intends to expand and sharpen the skills of the participants in accounting and/or non-accounting, and a place for them to gain insights.</p>
                    </div>
                    <img className="absolute -top-20 -left-20 hidden md:block w-36" src={kincir1} alt="Kincir"/>
                    <img className="absolute -top-20 -right-20 hidden md:block h-28" src={pohon1} alt="Pohon"/>
                    <img className="absolute -z-10 -bottom-20 -left-40 hidden md:block w-64" src={pohon2} alt="Pohon"/>
                    <img className="absolute -bottom-20 -right-20 hidden md:block w-56" src={gedung1} alt="Gedung"/>
                </div>
            </Section>
            <Section id="theme" className="flex items-center justify-center">
                <div className="md:max-w-3xl w-full md:p-1 relative z-0">
                    <div className="w-full lg:py-20 flex flex-col items-center justify-center">
                        <div className="w-full flex flex-col items-center mb-6">
                            <h1 className="text-xl md:text-3xl text-center font-poppins font-extrabold text-blue-950">GRAND THEME</h1>
                            <p className="w-3/4 text-center font-balmond font-bold text-sm md:text-lg text-yellow-600">
                            “Driving Sustainable Business Practice: The Role of Audit and Assurance”
                            </p>
                        </div>
                        <div className="w-full flex flex-col items-center">
                            <h1 className="text-xl md:text-2xl text-center font-bold text-blue-950">SUB THEMES</h1>
                            <p className="w-3/4 text-center font-bold font-balmond text-sm md:text-md text-yellow-600">“Is it profitable to invest in green financial instruments?” and “Big challenges on audit sustainability report”</p>
                        </div>
                    </div>
                    <img className="absolute -top-20 -left-20 hidden md:block w-36" src={kincir1} alt="Kincir"/>
                    <img className="absolute -top-20 -right-20 hidden md:block h-28" src={pohon1} alt="Pohon"/>
                    <img className="absolute -z-10 -bottom-20 -left-40 hidden md:block w-64" src={pohon2} alt="Pohon"/>
                    <img className="absolute -bottom-20 -right-20 hidden md:block w-56" src={gedung1} alt="Gedung"/>
                </div>
            </Section>
        </Container>
    )
}
