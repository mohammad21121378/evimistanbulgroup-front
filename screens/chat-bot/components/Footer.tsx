import Input from "@/components/ui/input"
import classNames from "classnames";
import { LucideSend } from "lucide-react";

type Props = {
    sendMessage: () => void;
    input: string;
    setInput: (val: string) => void;
    isTyping: boolean;
    activelimitation: boolean;

}

export default function Footer({ sendMessage, input, setInput, isTyping, activelimitation }: Props) {
    return (
        <div className="border-t px-4 py-3 bg-white">
            <form
                onSubmit={e => {
                    e.preventDefault()
                    sendMessage()
                }}
                className="flex items-center gap-2"
            >

                <Input
                    placeholder="text for send message ..."
                    className="!rounded-lg"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    disabled={activelimitation}
                />

                <button type="submit" className={classNames("h-12 w-14 outline outline-1 outline-orange-600 text-center text-white rounded-lg  bg-orange-600",
                    {
                        "cursor-wait": isTyping,
                        "cursor-not-allowed opacity-60": activelimitation
                    })}>
                    <LucideSend className={classNames(
                        "mx-auto w-7",
                        { "animate-pulse-custom": isTyping },
                    )} />
                </button>

            </form>
        </div>
    )
}