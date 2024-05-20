import Image from "next/image"
import Link from "next/link"

export function Error404() {
    return (
        <div className="flex flex-col items-center justify-center min-h.screen text-center px-5">
            <h1 className="text-5xl font-semibold mb-6"> Error 404</h1>
            <h2 className="text-3xl mb-5">¡UPS! no se encontró la propiedad que buscaba</h2>
            <Image src="/assets/404-not-found.jpg" alt="Not Foud" width={600} height={450} className="rounded-lg shadow-light"/>
            <div>
                <Link href="/" className="px-3 py-2 bg-secondary text-white rounded-lg hover:bg-black">Volver al Home</Link>
            </div>
        </div>
    )
}
