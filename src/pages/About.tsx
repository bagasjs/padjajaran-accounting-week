import Container from "../components/Container";
import Section from "../components/Section";
import whatIsPaw from "../assets/what_is_paw_modified.png";
import grandTheme from "../assets/this_year_grand_theme.png";
import Navbar from "../components/Navbar";

export default function About() {
    return (
        <Container>
            <Navbar/>
            <Section className="flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-xl md:text-3xl font-extrabold font-poppins text-center mb-3 font-bold text-yellow-600">About PAW</h1>
                </div>
                <div className="md:flex md:px-10 justify-between w-10/12 items-center">
                    <div className="w-full md:max-w-md">
                        <h1 className="text-xl md:text-3xl mb-3 font-bold font-poppins text-blue-950">WHAT IS PAW</h1>
                        <img src={whatIsPaw} alt="What Is PAW" className="w-full"/>
                    </div>
                    <div className="mt-3 md:max-w-xl w-full md:p-1">
                        <p className="text-justify text-xs md:text-lg text-blue-900 font-bold font-balmond">Padjadjaran Accounting Week, as known as PAW is an event held by Himpunan Mahasiswa Akuntansi FEB Unpad to compete, examine, and evaluate participants as our future accountants, to prepare them in dealing with issues that are present, as well as to expand their abilities, in hope so that they can resolve the issues. This year’s PAW will consist of two main branches: International Seminar and National Competition. The International Seminar aims to bring up issues around economics to the surface, introduce them, enlighten them with different perspectives, and discuss and create the best solution for the issues. The National Competition aims to address the issue from the perspective of delegates with an accounting background.
                        </p>
                    </div>
                </div>
            </Section>
            <Section className="flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-xl md:text-3xl text-center mb-3 font-extrabold font-poppins text-yellow-600">About PAW</h1>
                </div>
                <div className="md:flex md:px-10 justify-between w-10/12 items-center">
                    <div className="w-full md:max-w-md md:order-last">
                        <h1 className="text-xl md:text-3xl mb-3 font-extrabold font-poppins text-blue-950">THIS YEAR'S GRAND THEME</h1>
                        <img src={grandTheme} alt="THIS YEAR GRAND THEME" className="w-full"/>
                    </div>
                    <div className="mt-3 md:max-w-xl w-full md:p-1">
                        <p className="text-justify text-xs md:text-lg text-blue-900 font-bold font-balmond">In a rapidly growing business era, sustainability is a responsibility for companies. Sustainable business practice does not only aim to reduce negative impacts on the environment but to also promote social responsibility. In this context, the role of audit and assurance in driving and measuring sustainable business efforts is essential. This year, the 18th Padjadjaran Accounting Week will raise the theme of "Driving Sustainable Business Practice: The Role of Audit and Assurance," with a focus on two important sub-themes: "Is it profitable to invest in green financial instruments?" and "Big Challenges on Audit Sustainability Report."</p>
                    </div>
                </div>
                <div className="hidden sm:flex justify-center mt-3">
                    <h1 className="text-xl w-3/4 md:text-3xl text-center font-bold text-yellow-600 font-bold font-balmond">
                        “Driving Sustainable Business Practice: The Role of Audit and Assurance”
                    </h1>
                </div>
            </Section>
        </Container>
    )
}
