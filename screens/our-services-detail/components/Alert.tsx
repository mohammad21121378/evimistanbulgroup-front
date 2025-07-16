import { RichContent, RichTextBlock } from "../types";
import RichTextRenderer from "./RichTextRenderer";

type Props = {
    data: RichContent
}

export default function Alert({ data }: Props) {
    return (
        <div className="text-center">
            <RichTextRenderer content={data} className="text-lg font-medium" />
        </div>
    )
}