import { Domicilio } from "../../types/Domicilio";
import { Button, Form, FormLabel, Modal } from 'react-bootstrap';
import { ModalType } from "../../types/ModalTypes";
//dependencias para validar formularios
import * as Yup from 'yup'
import { useFormik } from "formik";

//notificaciones al usuario
import {toast} from 'react-toastify';
import { DomicilioService } from "../../services/DomiciliosService";

type DomicilioModalProps ={
    show: boolean;
    onHide: ()=> void;
    title: string;
    modalType: ModalType;
    dom: Domicilio 
    refreshData: React.Dispatch<React.SetStateAction<boolean>>;
}



const DomicilioModal = ({show, onHide, title, modalType, dom, refreshData}:DomicilioModalProps ) => {

    //CREATE-UPDATE
  const handleSaveUpdate= async (pro:Domicilio) => {
    try {
      const isNew = pro.id===0;
      if (isNew) {
        await DomicilioService.createDomicilio(pro);
      } else{
        await DomicilioService.updateDomicilio(pro.id, pro);
      }
      toast.success(isNew ? "Domicilio creado": "Domicilio actualizado",{
        position: "top-center",
      });

      onHide();
      refreshData(prevState => !prevState);
    } catch (error) {
      console.error(error);
      toast.error("Ha ocurrido un error")
    }
  };

  //DELETE
  const handleDelete=async () => {
    try {
      await DomicilioService.deleteDomicilio(dom.id);
      toast.success("Domicilio borrado",{
        position:"top-center",
      });

      onHide();
      refreshData(prevState => !prevState);
    } catch (error) {
      console.error(error);
      toast.error("Ha ocurrido un error")
    }
  }

  //Yup, esquema de validacion
  const validationSchema= () => {
    return Yup.object().shape({
      id: Yup.number().integer().min(0),
      calle: Yup.string().required('La calle es requerida'),
      numero: Yup.number().min(0).required('El numero es requerido'),
      /* description: Yup.string().min(0).required('La descripcion es requerida'), */
      codigoPostal: Yup.number().min(0).required('El codigo postal es requerido'),
      localidad: Yup.string().required('La localidad es requerida'),
      numeroDpto: Yup.number().min(0).required('El numero es requerido'),
      pisoDpto: Yup.number().min(0).required('El numero es requerido'),
    });
  };

  //Formik,usa el esquema de validacion para crear un formulario dinamico y que lo bloquee
  //en caso de haber errores
  const formik = useFormik({
    initialValues: dom,
    validationSchema: validationSchema(),
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (obj: Domicilio) => handleSaveUpdate(obj),
  });

  return (
    <>
    {modalType ===ModalType.DELETE ? (
      <>
      <Modal show={show} onHide={onHide} centered backdrop="static">

        <Modal.Header closeButton>
          <Modal.Title> {title} </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>¿Está seguro que desea eliminar el domicilio <br/>
          <strong> {dom.calle} </strong>?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}> Cancelar </Button>
          <Button variant="danger" onClick={handleDelete}> Eliminar </Button>
        </Modal.Footer>

      </Modal>
      </>
    ):(
      <>
        <Modal show={show} onHide={onHide} centered backdrop="static" className="modal-xl">
          <Modal.Header>
            <Modal.Title> { title }</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={formik.handleSubmit}>
            {/* Form.Group x c/campo para dar de alta o modificar un producto */}
            {/* Calle */}
              <Form.Group controlId='formTitulo'>
                <FormLabel> Titulo </FormLabel>
                <Form.Control 
                name="calle"
                type="text"
                value={formik.values.calle || ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(formik.errors.calle && formik.touched.calle)}
                />
                <Form.Control.Feedback type='invalid'>
                  {formik.errors.calle}
                </Form.Control.Feedback>
              </Form.Group>
            
            {/* numero */}
              <Form.Group controlId='formPrice'>
                <FormLabel> Numero </FormLabel>
                <Form.Control 
                name="numero"
                type="number"
                value={formik.values.numero || ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(formik.errors.numero && formik.touched.numero)}
                />
                <Form.Control.Feedback type='invalid'>
                  {formik.errors.numero}
                </Form.Control.Feedback>
              </Form.Group>
            
                 {/* codigo postal*/}
                 <Form.Group controlId='formPrice'>
                <FormLabel> Codigo Postal </FormLabel>
                <Form.Control 
                name="codigoPostal"
                type="number"
                value={formik.values.codigoPostal || ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(formik.errors.codigoPostal && formik.touched.codigoPostal)}
                />
                <Form.Control.Feedback type='invalid'>
                  {formik.errors.codigoPostal}
                </Form.Control.Feedback>
              </Form.Group>

            {/* localidad */}
              <Form.Group controlId='formDescription'>
                <FormLabel> Descripcion </FormLabel>
                <Form.Control 
                name="localidad"
                type="text"
                value={formik.values.localidad || ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(formik.errors.localidad && formik.touched.localidad)}
                />
                <Form.Control.Feedback type='invalid'>
                  {formik.errors.localidad}
                </Form.Control.Feedback>
              </Form.Group>

     {/* numero departamento*/}
     <Form.Group controlId='formPrice'>
                <FormLabel> Numero de departamento </FormLabel>
                <Form.Control 
                name="numeroDpto"
                type="number"
                value={formik.values.numeroDpto || ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(formik.errors.numeroDpto && formik.touched.numeroDpto)}
                />
                <Form.Control.Feedback type='invalid'>
                  {formik.errors.numeroDpto}
                </Form.Control.Feedback>
              </Form.Group>
                {/* piso departamento */}
                <Form.Group controlId='formPrice'>
                <FormLabel> Piso departamento </FormLabel>
                <Form.Control 
                name="pisoDpto"
                type="number"
                value={formik.values.numero || ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={Boolean(formik.errors.pisoDpto && formik.touched.pisoDpto)}
                />
                <Form.Control.Feedback type='invalid'>
                  {formik.errors.pisoDpto}
                </Form.Control.Feedback>
              </Form.Group>

              <Modal.Footer className="mt-4">
                <Button variant="secondary" onClick={onHide}> Cancelar </Button>
                <Button variant="primary" type="submit" disabled={!formik.isValid}> Guardar </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    )}
    </>
  )
}

export default DomicilioModal