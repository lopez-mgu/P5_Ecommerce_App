import React, {useState} from "react";
import {Form, Alert} from 'react-bootstrap';
import './DateTime.css';

const DateTime = () =>{

    const [schedule, setSchedule] = useState({});
    const dateTime = {time_choose: '', date_choose: ''}

    const handleDateChange = (ev) => {
        dateTime[ev.name] = ev.value
        localStorage.setItem('CocktailAve' + ev.name, ev.value)
       
        if(!(localStorage.getItem('CocktailAvedate_choose')===null) && !(localStorage.getItem('CocktailAvetime_choose')===null)){
            setSchedule({
                date: localStorage.getItem('CocktailAvedate_choose'),
                time: localStorage.getItem('CocktailAvetime_choose')
            });
        }

    }

    return(
        <Form>
            <div className="d-flex container-form-schedule">
                <div className="col-md-6 form-schedule-inputs">
                    <Form.Group controlId="date_to_choose">
                            <Form.Label>Selecciona Fecha</Form.Label>
                            <Form.Control type="date" name="date_choose" placeholder="Fecha a Elegir" onChange={(e) => handleDateChange(e.target)}/>
                    </Form.Group>
                    <Form.Group controlId="time_to_choose">
                            <Form.Label>Selecciona Horario</Form.Label>
                            <Form.Control type="time" name="time_choose" placeholder="Horario a Elegir" onChange={(e) => handleDateChange(e.target)}/>
                    </Form.Group>
                    <Form.Group controlId="people_to_choose">
                            <Form.Label>Número de Personas</Form.Label>
                            <Form.Control type="number" name="people_choose" placeholder="Número de Personas" onChange={(e) => handleDateChange(e.target)}/>
                    </Form.Group>
                </div>
                <div className="col-md-6 form-schedule-display">
                    {(() => {
                        if(new Date(schedule.date + " " + schedule.time).getTime() >= new Date().getTime()){

                            return(
                                <Alert variant="info" className="alert-class">
                                    <Alert.Heading>Horario Seleccionado</Alert.Heading>
                                    <p>Fecha: {schedule.date}</p>
                                    <p>Hora: {schedule.time}</p>
                                    <hr />
                                    <p className="mb-0">
                                        La reservación queda sujeta a cambios por la administración.
                                    </p>
                                </Alert>
                            )
                        }else{

                            return(
                                <Alert variant="warning" className="alert-class">
                                    <Alert.Heading>Horario no Permitido</Alert.Heading>
                                    <p>
                                        Por favor segurate que el horario que estás seleccionando para reservar. El horario seleccionado no puede ser en el pasado.
                                    </p>
                                    <hr />
                                    <p className="mb-0">
                                        Ten en cuenta el horario mencionado arriba.
                                    </p>
                                </Alert>
                            )
                        }
                    })()}
                </div>
            </div>
        </Form>
    )
}

export default DateTime;