import { PropsWithChildren } from "react";

type ListGroupProps = PropsWithChildren & {
    id?: string;
    className?: string
};

type ListItemProps = PropsWithChildren & {
    icon?: string;
    href?: string;
}

export default function ListGroup({ children, className }: ListGroupProps) {
    return (
        <div className={`text-gray-900 bg-white border border-gray-800 rounded-lg ${className}`}>
            {children}
        </div>
    )
}

const Item = ({ children, icon, href }: ListItemProps) => {
    return (
        <a href={href} className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
            { icon ? <img className="w-6 h-6 mr-2.5" src={icon} alt="ICON" />: "" }
            {children}
        </a>
    )
}

ListGroup.Item = Item;