import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import { Link } from "react-router-dom";

import ae from "../assets/AE.png"
import is from "../assets/IS.png"
import natcom from "../assets/NATCOM.png"
import kincir1 from "../assets/kincir1.png";
import pohon1 from "../assets/pohon1.png";
import pohon2 from "../assets/pohon2.png";
import gedung1 from "../assets/gedung1.png";
import timeline from "../assets/timeline.png";
import openingCeremony from "../assets/opening_ceremony.png";
import closingCeremony from "../assets/closing_ceremony.png";
import cityTour from "../assets/city_tour.png";
import timeLineIS from "../assets/TIMELINE_IS.png";

export default function Event() {
    return (
        <Container>
            <Navbar/>
            <Section className="w-full flex items-center justify-center">
                <div className="md:max-w-3xl space-x-8 w-full md:p-1 relative z-0 flex flex justify-center items-center">
                    <img className="absolute -z-10 -top-20 -left-20 hidden md:block h-44" src={gedung1} alt="Gedung"/>
                    <img className="absolute -top-20 -right-20 hidden md:block h-44" src={pohon1} alt="Pohon"/>
                    <img className="absolute -z-10 -bottom-20 -left-40 hidden md:block w-64" src={pohon2} alt="Cemara"/>
                    <img className="absolute -z-10 -bottom-20 -right-20 hidden md:block w-56" src={kincir1} alt="Kincir"/>
                    <div className="flex flex-col items-center">
                        <img src={natcom} className="w-48 mb-6" />
                        <a href="#natcom" className="text-black font-bold font-balmond bg-gray-200 hover:ring-4 hover:ring-gray-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                            See More
                        </a>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={ae} className="w-48 mb-6" />
                        <a href="#additionalEvents" className="text-black font-bold font-balmond bg-gray-200 hover:ring-4 hover:ring-gray-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                            See More
                        </a>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={is} className="w-48 mb-6" />
                        <a href="#internasionalSeminar" className="text-black font-bold font-balmond bg-gray-200 hover:ring-4 hover:ring-gray-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                            See More
                        </a>
                    </div>
                </div>
            </Section>
            <Section id="natcom" className="w-full flex items-center justify-center">
                <div className="md:max-w-3xl w-full md:p-1 relative z-0 flex flex-col justify-center items-center">
                    <img className="absolute -top-20 -left-20 hidden md:block w-36" src={pohon1} alt="Pohon"/>
                    <img className="absolute -top-20 -right-20 hidden md:block h-44" src={kincir1} alt="Kincir"/>
                    <img className="absolute -z-10 -bottom-20 -left-40 hidden md:block w-64" src={gedung1} alt="Gedung"/>
                    <img className="absolute -bottom-20 -right-20 hidden md:block w-56" src={pohon2} alt="Cemara"/>
                    <div className="mb-6 text-center">
                        <h1 className="text-yellow-600 font-extrabold font-poppins text-xl">OUR EVENTS</h1>
                        <h1 className="text-green-950 font-extrabold font-poppins text-2xl">NATIONAL COMPETITION</h1>
                    </div>
                    <p className="md:w-1/2 text-justify font-bold font-balmond">
                        National Competition is a series of nationally standardized competitions to test the competence and knowledge of the participants. There will be several rounds, which are the Preliminary Round, Main Round, and the Final Round. Various tests are designed to examine the competencies of the participants in the field of accounting and/or non-accounting. Moreover, participants can sharpen their skills in the field. This event can also expand the horizon of the participant in accounting and/or non-accounting.
                    </p>
                    <div className="mt-6 md:w-1/2 flex justify-around">
                        <Link to="https://bit.ly/BookletNatcomp23" className="text-white font-extrabold font-poppins bg-yellow-500 hover:ring-4 hover:ring-yellow-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                            BOOKLET
                        </Link>
                        <Link to="https://bit.ly/NatcompRegistration2023" className="text-white font-extrabold font-poppins bg-yellow-500 hover:ring-4 hover:ring-yellow-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                            REGISTER
                        </Link>
                    </div>
                </div>
            </Section>
            <Section className="w-full flex items-center justify-center">
                <div className="md:max-w-3xl w-full md:p-1 relative z-0 flex flex-col justify-center items-center">
                    <img className="absolute -top-20 -left-20 hidden md:block w-36" src={pohon1} alt="Pohon"/>
                    <img className="absolute -top-20 -right-20 hidden md:block h-44" src={kincir1} alt="Kincir"/>
                    <img className="absolute -z-10 -bottom-20 -left-40 hidden md:block w-64" src={gedung1} alt="Gedung"/>
                    <img className="absolute -bottom-20 -right-20 hidden md:block w-56" src={pohon2} alt="Cemara"/>
                    <div className="mb-6 text-center">
                        <h1 className="text-yellow-600 font-extrabold font-poppins text-xl">OUR EVENTS</h1>
                        <h1 className="text-green-950 font-extrabold font-poppins text-2xl">NATIONAL COMPETITION</h1>
                    </div>
                    <img src={timeline} alt="timeline" className="max-w-lg w-full" />
                </div>
            </Section>
            <Section id="internasionalSeminar" className="w-full flex items-center justify-center">
                <div className="md:max-w-3xl w-full md:p-1 relative z-0 flex flex-col justify-center items-center">
                    <img className="absolute -top-20 -left-20 hidden md:block w-36" src={pohon1} alt="Pohon"/>
                    <img className="absolute -top-20 -right-20 hidden md:block h-44" src={kincir1} alt="Kincir"/>
                    <img className="absolute -z-10 -bottom-20 -left-40 hidden md:block w-64" src={gedung1} alt="Gedung"/>
                    <img className="absolute -bottom-20 -right-20 hidden md:block w-56" src={pohon2} alt="Cemara"/>
                    <div className="mb-6 text-center">
                        <h1 className="text-yellow-600 font-extrabold font-poppins text-xl">OUR EVENTS</h1>
                        <h1 className="text-green-950 font-extrabold font-poppins text-2xl">INTERNATIONAL SEMINAR</h1>
                    </div>
                    <p className="md:w-1/2 text-justify font-bold font-balmond">
                        International Seminar is a meeting held with certain technicalities by conducting a thorough study of a particular topic along with problem-solving elaborated by experienced speakers in the respected field. International Seminar aims to convey information and new ideas to the general public through presentations and discussions surrounding the topic.
                    </p>
                    <p className="md:w-1/2 text-justify font-bold font-balmond">
                        Grand Topic: <span className="text-yellow-600">“Driving Sustainable Business Practice: The Role of Audit and Assurance”</span>
                    </p>
                    <div className="mt-6 md:w-1/2 flex justify-around">
                        <Link to="#" className="text-white font-extrabold font-poppins bg-yellow-500 hover:ring-4 hover:ring-yellow-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                            BOOKLET
                        </Link>
                        <Link to="#" className="text-white font-extrabold font-poppins bg-yellow-500 hover:ring-4 hover:ring-yellow-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                            REGISTER
                        </Link>
                    </div>
                </div>
            </Section>
            <Section className="w-full flex items-center justify-center">
                <div className="md:max-w-3xl w-full md:p-1 relative z-0 flex flex-col justify-center items-center">
                    <img className="absolute -top-20 -left-20 hidden md:block w-36" src={pohon1} alt="Pohon"/>
                    <img className="absolute -top-20 -right-20 hidden md:block h-44" src={kincir1} alt="Kincir"/>
                    <img className="absolute -z-10 -bottom-20 -left-40 hidden md:block w-64" src={gedung1} alt="Gedung"/>
                    <img className="absolute -bottom-20 -right-20 hidden md:block w-56" src={pohon2} alt="Cemara"/>
                    <div className="mb-6 text-center">
                        <h1 className="text-yellow-600 font-extrabold font-poppins text-xl">OUR EVENTS</h1>
                        <h1 className="text-green-950 font-extrabold font-poppins text-2xl">INTERNATIONAL SEMINAR</h1>
                    </div>
                    <img src={timeLineIS} alt="timeline-international-seminar" className="max-w-lg w-full" />
                </div>
            </Section>
            <Section id="additionalEvents" className="w-full flex items-center justify-center">
                <div className="md:max-w-3xl w-full md:p-1 relative z-0 flex flex-col justify-center items-center">
                    <img className="absolute -top-20 -left-20 hidden md:block w-36" src={pohon1} alt="Pohon"/>
                    <img className="absolute -top-20 -right-20 hidden md:block h-44" src={kincir1} alt="Kincir"/>
                    <img className="absolute -z-10 -bottom-20 -left-40 hidden md:block w-64" src={gedung1} alt="Gedung"/>
                    <img className="absolute -bottom-20 -right-20 hidden md:block w-56" src={pohon2} alt="Cemara"/>
                    <div className="mb-6 text-center">
                        <h3 className="text-yellow-600 font-extrabold font-poppins text-xl">OUR EVENTS</h3>
                        <h1 className="text-green-950 font-extrabold font-poppins text-2xl">ADDITIONAL EVENTS</h1>
                    </div>
                    <img src={openingCeremony} alt="timeline" className="max-w-lg w-full" />
                </div>
            </Section>
            <Section className="w-full flex items-center justify-center">
                <div className="md:max-w-3xl w-full md:p-1 relative z-0 flex flex-col justify-center items-center">
                    <img className="absolute -top-20 -left-20 hidden md:block w-36" src={pohon1} alt="Pohon"/>
                    <img className="absolute -top-20 -right-20 hidden md:block h-44" src={kincir1} alt="Kincir"/>
                    <img className="absolute -z-10 -bottom-20 -left-40 hidden md:block w-64" src={gedung1} alt="Gedung"/>
                    <img className="absolute -bottom-20 -right-20 hidden md:block w-56" src={pohon2} alt="Cemara"/>
                    <div className="mb-6 text-center">
                        <h3 className="text-yellow-600 font-extrabold font-poppins text-xl">OUR EVENTS</h3>
                        <h1 className="text-green-950 font-extrabold font-poppins text-2xl">ADDITIONAL EVENTS</h1>
                    </div>
                    <img src={cityTour} alt="timeline" className="max-w-lg w-full" />
                </div>
            </Section>
            <Section className="w-full flex items-center justify-center">
                <div className="md:max-w-3xl w-full md:p-1 relative z-0 flex flex-col justify-center items-center">
                    <img className="absolute -top-20 -left-20 hidden md:block w-36" src={pohon1} alt="Pohon"/>
                    <img className="absolute -top-20 -right-20 hidden md:block h-44" src={kincir1} alt="Kincir"/>
                    <img className="absolute -z-10 -bottom-20 -left-40 hidden md:block w-64" src={gedung1} alt="Gedung"/>
                    <img className="absolute -bottom-20 -right-20 hidden md:block w-56" src={pohon2} alt="Cemara"/>
                    <div className="mb-6 text-center">
                        <h3 className="text-yellow-600 font-extrabold font-poppins text-xl">OUR EVENTS</h3>
                        <h1 className="text-green-950 font-extrabold font-poppins text-2xl">ADDITIONAL EVENTS</h1>
                    </div>
                    <img src={closingCeremony} alt="timeline" className="max-w-lg w-full" />
                </div>
            </Section>
        </Container>
    )
}
