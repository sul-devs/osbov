export default function Button({text}:{text: string}) {
    return (
        <button className="bg-orange-600 py-3 px-4 rounded hover:bg-orange-700 text-white">{text}</button>
    )
}