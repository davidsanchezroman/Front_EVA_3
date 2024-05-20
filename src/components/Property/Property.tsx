
import { LiaStarSolid } from "react-icons/lia";
import { PropertyProps } from "./Property.types";
import { formatPrice } from "@/utils/formatPrice";

export function Property(props:PropertyProps) {
    const {house} = props;

    return (
        <main className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-[70%,1fr] my-3 py-5">
                <div className="px-6 ">
                    <h1 className="text-3xl mb-4 text-secondary flex justify-between"> 
                    <span>Propiedad {house.id}</span>
                    <span className="font-semibold">{formatPrice(house.price)}</span>
                    </h1>
                </div>
                    <div className="flex items-center px-2 py-1 rounded-lg bg-secondary top-2 right-2 text-white">
                        <LiaStarSolid />
                        <span className="ml-1 font-semibold">{house.star}</span>
                    </div>                
            </div>
            <p>{house.location}</p>
        </main>
    )
}
