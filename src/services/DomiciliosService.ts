import { Domicilio } from "../types/Domicilio";

const BASE_URL= 'https://example-service-thrid.onrender.com';

export const DomicilioService= {
    //declaramos nuestros metodos

    //fetch permite realizar solicitudes HTTP a un servidor
    //Async/Await para manejar promesas
    //Async para declarar una fc asincrona,devuelve una promesa
    //Await lo uso dentro una fc asincrona para pausar la ejecucion de la fc y espera promesa(resuelta/rechazada)

    getDomicilios:async (): Promise<Domicilio[]> => {
        const response= await fetch(`${BASE_URL}/api/v1/domicilio`);
        const data= await response.json();

        return data;
    },
    
    getDomicilio:async (id:number): Promise<Domicilio> => {
        const response= await fetch(`${BASE_URL}/api/v1/domicilio/${id}`);
        const data= await response.json();
        return data;
    },

    createDomicilio:async (product:Domicilio):Promise<Domicilio> => {
        const response= await fetch(`${BASE_URL}/api/v1/domicilio`,{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        const data= await response.json();
        return data;
    },

    updateDomicilio:async (id:number, product:Domicilio):Promise<Domicilio> => {
        const response= await fetch(`${BASE_URL}/api/v1/domicilio/${id}` ,{
            method: "PUT",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        const data= await response.json();
        return data;
    },

    deleteDomicilio:async (id:number):Promise<void> => {
        await fetch(`${BASE_URL}/api/v1/domicilio/${id}` ,{
            method: "DELETE"
        });

    }
}