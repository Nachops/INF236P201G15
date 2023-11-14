import React, { Component } from 'react';
import axios from 'axios';

export default class DisplayHoras extends Component {
    state = {
        horas: [],
    };

    async componentDidMount() {
        const res = await axios.get('http://localhost:5000/api/horas');
        this.setState({ horas: res.data });
    }

    render() {
        return (
            <div className='row justify-content-center'>
                <div className='col-md-4'>
                    <ul className='list-group'>
                        {this.state.horas.map((hora) => (
                            <li key={hora._id} className='list-group-item d-flex justify-content-between align-items-center'>
                                <div>
                                    <strong>Hora:</strong> {hora.hora}
                                    <br />
                                    <strong>Rut:</strong> {hora.rut}
                                    <br />
                                    <strong>Tipo de Examen:</strong> {hora.tipo_examen}
                                </div>
                                <div>
                                    <button
                                        type='button'
                                        className='btn btn-primary btn-sm mr-2'
                                        data-bs-toggle='modal'
                                        data-bs-target={`#pacienteEnCamino${hora._id}`}
                                        onClick={() => alert('Paciente en camino')}
                                    >
                                        Llamar paciente
                                    </button>
                                    <button
                                        type='button'
                                        className='btn btn-secondary btn-sm'
                                        data-bs-toggle='modal'
                                        data-bs-target={`#informacionPaciente${hora._id}`}
                                        onClick={() => alert('Información del paciente')}
                                    >
                                        Ver Ficha
                                    </button>
                                </div>

                                <div className='modal fade' id={`pacienteEnCamino${hora._id}`} tabIndex='-1' role='dialog'>
                                    <div className='modal-dialog'>
                                        <div className='modal-content'>
                                            <div className='modal-header'>
                                                <h5 className='modal-title'>Llamar paciente</h5>
                                                <button type='button' className='close' data-bs-dismiss='modal' aria-label='Close'>
                                                    <span aria-hidden='true'>&times;</span>
                                                </button>
                                            </div>
                                            <div className='modal-body'>
                                                <p>Paciente en camino</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='modal fade' id={`informacionPaciente${hora._id}`} tabIndex='-1' role='dialog'>
                                    <div className='modal-dialog'>
                                        <div className='modal-content'>
                                            <div className='modal-header'>
                                                <h5 className='modal-title'>Ver ficha</h5>
                                                <button type='button' className='close' data-bs-dismiss='modal' aria-label='Close'>
                                                    <span aria-hidden='true'>&times;</span>
                                                </button>
                                            </div>
                                            <div className='modal-body'>
                                                <p>Información del paciente</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
