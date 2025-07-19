import Markdown from "markdown-to-jsx";

export default function Paragraph({ data }: { data: { value: string } }) {
    return (
        <Markdown className="text-lg leading-relaxed" options={{ forceInline: true }}>
            {data.value}
        </Markdown>
    )
}