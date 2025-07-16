import Link from "@/components/ui/Link";

type Props = {
    data: {
        description: string;
        buttonHref: string;
    }
}

export default function UsHelp({ data }: Props) {

    return (
        <section className="section !pt-0">
            <div className="bg-[#002DD1] py-16">
                <div className="container space-y-14 text-center">

                    <h2 className="text-5xl font-bold text-orange-600">
                        Let Us Help.
                    </h2>

                    <p className="font-medium text-xl text-white">
                        {data.description}
                    </p>

                    <Link href={data.buttonHref}>
                        <button className="button mt-14 !text-base">
                            Start Your Citizenship Journey Today – Request a Free Consultation
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}