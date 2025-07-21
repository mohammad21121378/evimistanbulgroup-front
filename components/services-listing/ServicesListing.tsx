import Link from "../ui/Link";

type Props = {
    title: string;
    link: string
}

export default function ServicesListing({title, link}: Props) {
    return(
        <Link href={link} className="bg-slate-100 text-center rounded-lg py-3 text-xl px-6 text-gray-500 font-bold outline outline-1 outline-transparent hover:outline-orange-600 hover:text-orange-600">
            {title}
        </Link>
    );
}