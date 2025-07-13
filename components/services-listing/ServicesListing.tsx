type Props = {
    title: string
}

export default function ServicesListing({title}: Props) {
    return(
        <div className="bg-slate-100 text-center rounded-lg py-3 text-xl px-6 text-gray-500 font-bold">
            {title}
        </div>
    );
}