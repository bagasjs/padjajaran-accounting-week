import { Link } from "react-router-dom"

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
                <Link to={lineURL} className="flex items-center">
                    <img src={lineLogo} alt="Line" className="h-7 mr-3 mb-1" />
                    <p className="text-green-800 text-sm md:text-lg">{lineID}</p>
                </Link>
                <Link to={whatsappURL} className="flex items-center">
                    <img src={whatsappLogo} alt="Whatsapp" className="h-7 mr-3 mb-1" />
                    <p className="text-green-800 text-sm md:text-lg">{whatsappNumber}</p>
                </Link>
            </div>
        </div>
    )
}
