import lineLogo from "../assets/line.png"
import whatsappLogo from "../assets/whatsapp.png"

type ContactCardProps = {
    name: string
    lineID: string
    lineURL: string
    whatsappNumber: string
    whatsappURL: string
}

export default function ContactCard({ name, lineID, lineURL, whatsappNumber, whatsappURL }: ContactCardProps) {
    return (
        <div className="font-extrabold">
            <h1 className="text-blue-900 mb-1 text-md md:text-lg">{name}</h1>
            <div>
                <a href={lineURL} className="flex items-center">
                    <img src={lineLogo} alt="Line" className="h-7 mr-3 mb-1" />
                    <p className="text-green-800 text-sm md:text-lg">{lineID}</p>
                </a>
                <a href={whatsappURL} className="flex items-center">
                    <img src={whatsappLogo} alt="Whatsapp" className="h-7 mr-3 mb-1" />
                    <p className="text-green-800 text-sm md:text-lg">{whatsappNumber}</p>
                </a>
            </div>
        </div>
    )
}
