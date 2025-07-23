export default function copyToClipboard(text: string, setInfo: React.Dispatch<React.SetStateAction<boolean>>) {
    navigator.clipboard.writeText(text)
        .then(() => {
            setInfo?.(true)

            setTimeout(() => {
                setInfo?.(false)
            }, 3000)

        })
        .catch((error) => {
            console.error('', error);
        });

}