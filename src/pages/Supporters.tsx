import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Section from "../components/Section";

export default function Supporters() {
    return (
        <Container>
            <Navbar/>
            <Section className="flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-xl md:text-3xl font-extrabold font-poppins text-center mb-3 font-bold text-yellow-600">About PAW</h1>
                </div>
            </Section>
        </Container>
    )
}
