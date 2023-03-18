import './App.css';
import { useState } from 'react';
import Flames from './Flames/Flames';
import { Form, Card } from 'react-bootstrap'

const initialState = {
  name1: "",
  name2: ""
}

function App() {

  const [values, setValues] = useState(initialState)
  const [dis, setDis] = useState("")
  const[gender,setGender]=useState("Male")
  const radioChange=(e)=>{
    setGender(e.target.value)
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const display = (dis) => {
    if (values.name1 !== "" && values.name2 !== "") {
      setDis(dis)
    }
  }

  const reset = () => {
    setValues(initialState)
    setDis("")
  }

  return (
    <div className='App'>
      <Card className='container col-3 card'>
        <Card.Title className='title mt-3 p-2 text-center' >
          FLAMES Calculator
        </Card.Title>
        <Card.Body className='text-center' >
          <p className="fst-italic ">***Fun purpose only.Kindly don't this take serious***</p>
        </Card.Body>
        <Form onSubmit={handleSubmit} >
          <p className="fw-bold fs-5">Please select your gender</p>
          <Form.Group className="d-flex" >
            <Form.Check label="Male" type="radio" value="Male" onChange={radioChange} checked={gender === "Male"}  className="px-4"/>
            <Form.Check label="Female" type="radio" value="Female" onChange={radioChange} checked={gender === "Female"} />
          </Form.Group>
          <Form.Group className='mt-2'>
            <Form.Label className="fw-bold fs-5">Your Name</Form.Label>
            <Form.Control placeholder="eg:  romeo" className='border-primary' type="text" name='name1' value={values.name1} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className='mt-4 mb-3'>
            <Form.Label className="fw-bold fs-5">Your Crush Name</Form.Label>
            <Form.Control placeholder="eg:  juliet" className='border-primary' type="text" name='name2' value={values.name2} onChange={handleChange} required />
          </Form.Group>
          <Flames gender={gender} date={values} data2={dis} display={display} reset={reset} />
        </Form>
      </Card>
    </div>
  );
}

export default App;