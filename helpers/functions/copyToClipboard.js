export default function CopyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('Bağlantı kopyalandı.', text);
        })
        .catch((error) => {
            console.error('', error);
        });

}