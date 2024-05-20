import { FloatedSearch } from "../FloatedSearch";

export function Banner() {
    return (
        <div className="container relative mx-auto">
            <div className="pt-20 md:pt-0 min-h-[80vh] bg-banner bg-no-repeat bg-cover bg-center rounded-3xl relative flex flex-col items-center md:justify-center">
                <div className="max-w-3xl text-center text-white">
                    <h2 className="text-5xl font-semibold">Propiedades Terrasol Parcelas en el Sur de Chile</h2>
                    <p className="mt-2 tex-xl md:met-8">
                    ¿Buscas Un Condominio o un Terreno? Tenemos un proyecto ideal para ti
                    </p>
                </div>
                <FloatedSearch/>
            </div>

        </div>
    )
}

