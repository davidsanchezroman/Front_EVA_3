import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Transition } from '../Transition'; // Asegúrate de importar correctamente el componente Transition
import Image from 'next/image'; // Importa el componente Image de Next.js

export function About() {
    const [parcelasData, setParcelasData] = useState([]);

    useEffect(() => {
        // Hacer la llamada a tu API y actualizar el estado con los datos
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost/back-ciisa/api/v2/historia.php', {
                    headers: {
                        // Agrega cualquier encabezado necesario (por ejemplo, token de autorización) aquí
                        Authorization: 'Bearer get'
                    },
                });
                setParcelasData(response.data.data); // Ajusta la ruta de los datos según la estructura real
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchData();
    }, []); // El segundo argumento vacío asegura que se ejecute solo una vez al montar el componente

    return (
        <Transition className="grid gap-4 px-4 py-8 md:py-44 md:px-36 md:grid-cols-2">
            <div id='about' className="flex flex-col items-center justify-center max-w-xl mb-7">
                {parcelasData.map((item) => (
                    <React.Fragment key={item.id}>
                        {item.texto === 'titulo' && <h2 className="my-4 text-3xl font-semibold">{item.texto}</h2>}
                        {item.tipo === 'subtitulo' && <h3 className="text-lg font-semibold">{item.texto}</h3>}
                        {item.tipo === 'parrafo' && <p className="mb-10 mt-7">{item.texto}</p>}
                        {item.tipo === 'imagen' && <img src={item.texto} alt="Terrasol Parcelas" />}
                    </React.Fragment>
                ))}
                <button className="px-4 py-3 text-white transition-all duration-200 rounded-lg bg-secondary hover:bg-black">
                    Cargar más
                </button>
            </div>
            <div className="flex items-center justify-center">
                {/* Aquí puedes renderizar otra imagen o componente relacionado */}
            </div>
        </Transition>
    );
}

export default About;



 