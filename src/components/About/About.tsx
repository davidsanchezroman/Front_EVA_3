import { Transition } from "../Transition";
import Image from "next/image";
import React, { useEffect } from 'react';
import axios from 'axios';

export function About() {
    return (
        <Transition className="grid gap-4 px-4 py-8 md:py-44 md:px-36 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center max-w-xl mb-7" is="about">
                <h4 className="text-secondary">Sobre Nosotros</h4>
                <h2 className="my-4 text-3xl font-semibold">Te asesoramos en la compra de tu Terreno o Parcela, para que hagas realidad tus sueños</h2>
                <p className="mb-10 mt-7 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusamus, sunt necessitatibus praesentium nisi facere assumenda optio, nesciunt soluta repudiandae a libero, labore esse unde! Explicabo eius repudiandae provident molestias.</p>
                <button className="px-4 py-3 text-white transition-all duration-200 rounded-lg bg-secondary hover:bg-black">Cargar más</button>
            </div>
            <div className="flex items-center justify-center">
            <Image src="/assets/house.jpeg" alt="About" width={350} height={450} className="w-auto h-auto priority"/>
            </div>

        </Transition>
    )
}
 
export function Aboutdata() {
    const [data, setData] = useState(response.data); // Estado para almacenar los datos de la API
  
    useEffect(() => {
      const apiUrl = 'http://localhost/back-ciisa/api/v2/historia.php';
      const token = 'get'; // Reemplaza con tu token real (preferiblemente desde una variable de entorno)
  
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      axios
        .get(apiUrl, config)
        .then((response) => {
          setData(response.data); // Almacena los datos en el estado
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    return (
      <div>
        {/* Renderiza los datos aquí (por ejemplo, en un párrafo o una lista) */}
        {data && <p>{data}</p>}
      </div>
    );
  }
 