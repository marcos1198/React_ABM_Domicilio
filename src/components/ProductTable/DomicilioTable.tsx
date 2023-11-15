import { useEffect, useState } from "react"

import { Button, Table } from "react-bootstrap";
import Loader from "../Loader/Loader";
import { ModalType } from '../../types/ModalTypes';
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import { Domicilio } from "../../types/Domicilio";
import { DomicilioService } from "../../services/DomiciliosService";
import DomicilioModal from "../ProductModal/DomicilioModal";




const DomicilioTable = () => {
    //var q va a contener los datos recibidos x la API
    const[domicilios, setDomicilios]= useState<Domicilio[]>([]);
    //var q muestra el componente Loader hasta q se reciban los datos de la API
    const[isLoading, setIsLoading]=useState(true);
    
    //var q va a actualizar los datos de la tabla luego de c/operacion exitosa
    const[refreshData, setRefreshData]=useState(false);

    //hook q se va a ejecutar c/vez q se renderice el componente
    //o refresData cambie de estado
    useEffect(()=> {
        //llamada a la fc para obtener todos los productos declarados en DomicilioService
        const fetchDomicilios=async () => {
            const domicilios = await DomicilioService.getDomicilios();
            setDomicilios(domicilios);
            setIsLoading(false);
        };

        fetchDomicilios();
    }, [refreshData]);
    //Test, log modificado parta mostrar datos de manera mas legible
    console.log(JSON.stringify(domicilios, null, 2));
    //stringify es convertir un objeto JavScript en una cadena JSON
    //CONST para inicializar un producto x defecto y evitar 'undefined'
//cuando vayamos a crear un producto nuevo
const initializableNewDomicilio = (): Domicilio => {
  return {
    id: 0,
    calle: "",
    numero: 0,
    codigoPostal: 0,
    localidad: "",
    numeroDpto: 0,
    pisoDpto: 0,
 
  };
};
    //Prod seleccionado q se va a pasar como prop al Modal
    const  [domicilio, setDomicilio]= useState<Domicilio>(initializableNewDomicilio);
    //const para manejar el estado del modal
    const[showModal, setShowModal]= useState(false);
    const[modalType, setModalType]= useState<ModalType>(ModalType.NONE);
    const[title, setTitle]= useState("");

    //logica del modal
    const handleClick= (newTitle: string, prod: Domicilio, modal:ModalType)=> {
      setTitle(newTitle);
      setModalType(modal);
      setDomicilio(prod);
      setShowModal(true);
    };

  return (
    <>
    <Button onClick={()=> handleClick("Nuevo domicilio", initializableNewDomicilio(),
    ModalType.CREATE)}> Nuevo Domicilio </Button>
      {isLoading ? <Loader/>: (
        <Table hover>
          <thead>
            <tr>
              
              <th>Calle</th>
              <th>Numero</th>
              <th>Codigo postal</th>
              <th>Localidad</th>
              <th>Numero departamento</th>
              <th>Piso departamento</th>
              <th>Editar</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            {domicilios.map(domicilio =>(
              <tr key={domicilio.id}>
                <td>{domicilio.calle}</td>
                <td>{domicilio.numero}</td>
                <td>{domicilio.codigoPostal}</td>
                <td>{domicilio.localidad}</td>
                <td>{domicilio.numeroDpto}</td>
                <td>{domicilio.pisoDpto}</td>
                <td><EditButton onClick={() => handleClick("Editar Domicilio", domicilio, ModalType.UPDATE)}/></td>
                <td><DeleteButton onClick={() => handleClick("Borrar Domicilio", domicilio, ModalType.DELETE)}/></td>


              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {showModal && (
        <DomicilioModal
        show={showModal} 
        onHide={()=> setShowModal(false)}
        title={title}
        modalType={modalType}
        dom={domicilio}
        refreshData={setRefreshData}
        />
      )}

    </>
  )
}

export default DomicilioTable