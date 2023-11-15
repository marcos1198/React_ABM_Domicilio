import {Spinner} from 'react-bootstrap'

const Loader = () => {
  return (
    <>
    <div className="loader">
        <Spinner animation="border" role='status' variant='primary' style={{display:"flex",position:"absolute",left:"50%",top:"50%" }}>
        <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
    </>
  )
}

export default Loader