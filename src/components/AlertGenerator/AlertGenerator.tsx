import { Alert, AlertHeading } from "react-bootstrap"
//Se especifica los props y el tipo d dato q el hijo puede recibir
type AlertGeneratorProps={
    message:string;
}
//El componente hijo tiene "argumentos" del tipo "AlertGeneratorProps"
const AlertGenerator = ({message}:AlertGeneratorProps) => {

  return (
    <Alert variant="success" className="mt-2 w-25">
        <AlertHeading> Mensaje recibido</AlertHeading>
        <p>
            {message}
        </p>
    </Alert>
  )
}

export default AlertGenerator