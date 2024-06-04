import React, { useState } from 'react';
import { Transition } from "../Transition"
import { FaRegPaperPlane } from "react-icons/fa"

export function JoinCommunity() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name === "" || email === "" || message === "") {
            alert("Por favor, completa todos los campos antes de enviar.");
            return;
        }
        
    };

    return (
        <Transition className="grid items-center px-4 py-8 md:py-44 md:grid-cols-2 bg-secondary">
            <h3 className="max-w-lg text-4xl font-semibold text-white">Contactate con nosotros para obtener mas información sobre nuestros proyectos, hay uno esperando por tí.</h3>
            <div className="mt-8">
                <form onSubmit={handleSubmit} className="grid gap-4">
                    <label className="flex flex-col">
                        <span className="mb-2 text-lg text-white">Nombre:</span>
                        <input autoComplete='name' type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ingresa tu nombre" className="p-2 rounded-md border border-gray-300" required />
                    </label>
                    <label className="flex flex-col">
                        <span className="mb-2 text-lg text-white">Email:</span>
                        <input autoComplete='email' type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ingresa tu email" className="p-2 rounded-md border border-gray-300" required />
                    </label>
                    <label className="flex flex-col">
                        <span className="mb-2 text-lg text-white">Mensaje:</span>
                        <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Escribe tu mensaje aquí" className="p-2 rounded-md border border-gray-300" required />
                    </label>
                    <button type="submit" className="flex items-center justify-center p-2 text-white bg-black rounded-md cursor-pointer hover:bg-white hover:text-black">
                        <FaRegPaperPlane className="mr-2" /> Enviar
                    </button>
                </form>
            </div>
        </Transition>
    )
}



