import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import ContactCard from "../components/Card";

import tiktokLogo from "../assets/tiktok.png"
import instagramLogo from "../assets/instagram.png"
import kincir1 from "../assets/kincir1.png";
import pohon1 from "../assets/pohon1.png";
import pohon2 from "../assets/pohon2.png";
import gedung1 from "../assets/gedung1.png";

type Contact = {
    name: string
    status: string
    whatsappURL: string
    whatsappNumber: string
    lineID: string
    lineURL: string
}

export default function Contact() {
    const contactData: Contact[] = [
        {
            name : "Rendy Chandra",
            status : "Public Relation",
            whatsappURL : "https://wa.me/6281297967525",
            whatsappNumber : "081297967525",
            lineID: "rendyyy_ch",
            lineURL: "",
        },
        {
            name : "Siti Wahyuni",
            status : "National Competition",
            whatsappURL : "https://wa.me/6285603504938",
            whatsappNumber : "085603504938",
            lineID: "yunii_y",
            lineURL: "",
        },
        {
            name : "Kayla Syahrenisa",
            status : "Intenational Seminar",
            whatsappURL : "https://wa.me/6285975152492",
            whatsappNumber : "085975152492",
            lineID: "kaylasyhh",
            lineURL: "",
        },
    ];

    return (
        <Container>
            <Navbar/>
            <Section className="flex flex-col justify-center items-center">
                <div className="md:max-w-3xl w-full md:p-1 relative z-0 flex flex-col justify-center items-center">
                    <img className="absolute -top-20 -left-20 hidden md:block w-36" src={kincir1} alt="Kincir"/>
                    <img className="absolute -top-20 -right-20 hidden md:block h-28" src={pohon1} alt="Pohon"/>
                    <img className="absolute -z-10 -bottom-20 -left-40 hidden md:block w-64" src={pohon2} alt="Pohon"/>
                    <img className="absolute -bottom-20 -right-20 hidden md:block w-56" src={gedung1} alt="Gedung"/>
                    <h1 className="text-yellow-700 mb-6 text-xl font-extrabold">CONTACT US</h1>
                    <div className="flex w-full md:w-3/4 items-center justify-around">
                        { contactData.map((data: Contact, i: number) => 
                            <ContactCard key={i} name={data.name} whatsappURL={data.whatsappURL} whatsappNumber={data.whatsappNumber} lineID={data.lineID} lineURL={data.lineURL} />)
                        }
                    </div>
                    <div className="max-w-sm w-full mt-12 grid grid-cols-4">
                        <a href="https://instagram.com/padjajaranaccountingweek" className="w-full flex items-center justify-center col-span-1">
                            <img src={instagramLogo} alt="Instagram" className="h-12 mr-3 mb-1" />
                        </a>
                        <a href="https://instagram.com/padjajaranaccountingweek" className="w-full flex flex-col justify-center items-start col-span-3">
                            <h1 className="text-sm md:text-lg text-blue-900 font-extrabold">INSTAGRAM</h1>
                            <p>@padjajaranaccountingweek</p>
                        </a>
                        <a href="https://tiktok.com/@PAW18th" className="w-full flex items-center justify-center col-span-1">
                            <img src={tiktokLogo} alt="Tiktok" className="h-24 mr-3 mb-1" />
                        </a>
                        <a href="https://tiktok.com/@PAW18th" className="w-full flex flex-col justify-center items-start col-span-3">
                            <h1 className="text-blue-900 font-extrabold">TIKTOK</h1>
                            <p>@PAW18th</p>
                        </a>
                    </div>
                </div>
            </Section>
        </Container>
    )
}
