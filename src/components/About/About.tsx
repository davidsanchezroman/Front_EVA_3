import { Transition } from "../Transition"; 
import Image from "next/image";


export function About(){
    return (
        <Transition className="grid px-4 py-7 md:py-44 md:px-36 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center max-w-xl-mb-7" id="about">
                <h4 className="my-4 text-secondary text-2xl">Sobre Nosotros</h4>
                <h2 className="my-4 text-3xl font-semibold">Terrasol Parcelas no solo ofrece tierras, sino también un estilo de vida</h2>
                <p className="mb-10 mt-7">Terrasol Parcelas emerge como un referente en el mercado inmobiliario de la zona centro sur de Chile, ofreciendo una oportunidad única para aquellos que buscan invertir en la naturaleza y la tranquilidad de este idílico paisaje. Especializados en la venta de parcelas de 5000 metros cuadrados, Terrasol Parcelas facilita el acceso a la propiedad de tierras con una inversión inicial accesible, comenzando desde tan solo 1 millón de pesos.</p>
            </div>
            <div className="flex items-center justify-center">
                <Image src="/assets/house.jpeg" alt="nosotros" width={350} height={450} className="w-auto h-auto rounded-lg" priority />

            </div>
        </Transition>
    )
}


 