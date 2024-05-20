import { useState } from "react";
import { GrFormDown, GrTag, GrFormUp } from "react-icons/gr";

export function SearchPriceRange() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}>
            
            <GrTag/>
            <div>
                <p>Rango de Precio</p>
                <p className="text-xs">Selecciona el rango deseado</p>
            </div>
            {isOpen ? (<GrFormUp/> 
            ):(<GrFormDown/>)}

            {isOpen && (
                <div className='absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0'>
                    <p>Todos</p>
                    <p>100 a 1.000 UF</p>
                    <p>1.000 a 5.000 UF</p>
                    <p>5.000 a 10.000 UF</p>
                    <p>más de 10.000 UF</p>

                </div>
            )}            

        </div>
    )
}
