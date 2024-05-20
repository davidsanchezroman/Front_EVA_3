"use client"

import { Transition } from "../Transition"
import { Slider } from "./Slider"

export function Services() {
    return (
        <Transition className="grid px-4 py-8 md:py46 md:px-36 md:grid-cols-2 md:gap-28">
            <div className="max-w-xl mb-7">
                <h4 className="text-secondary">Preguntas Frecuentes</h4>
                <h2 className="my-4 text-3xl font-semibold">Tienes dudas, encuentra aquí respuestas a las consultas recurrentes</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus provident sapiente debitis vitae nam aspernatur, modi unde facere quisquam saepe repellat sequi libero suscipit natus eos, soluta corrupti voluptatibus quo.</p>
            </div>
            <div className="flex items-center justify-center">
                <Slider />
            </div>
        </Transition>
        
    )
}
