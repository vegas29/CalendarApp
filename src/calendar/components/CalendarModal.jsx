import { useMemo, useState } from 'react';
import Modal from 'react-modal';

import { addHours, differenceInSeconds } from 'date-fns';
import es from 'date-fns/locale/es';

import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Swal from 'sweetalert2';
import { useUiStore } from '../../hooks';

registerLocale('es', es);

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const initialState = {
    title: 'Alejandro',
    notes: 'Fullstack Developer',
    start: new Date(),
    end: addHours( new Date(), 2),
}

export const CalendarModal = () => {

    const { isDateModalOpen, closeDateModal } = useUiStore();

    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formValues, setFormValues] = useState(initialState);

    const {title, notes, start, end} = formValues;

    const titleClass = useMemo( () => {
        if (!formSubmitted) return '';

        return (title.length > 0)
            ? 'is-valid'
            : 'is-invalid'
    }, [title, formSubmitted])

    const onCloseModal = () => {
        closeDateModal();
    }

    const handleInputChange = ({target}) =>{
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onDateChanged = (event, changing) => {
        setFormValues({
            ...formValues,
            [changing]: event
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(!formSubmitted);
        
        const difference = differenceInSeconds(end, start);
        
        if (isNaN( difference) || difference <= 0) {
            Swal.fire('Fechas incorrectas', 'Revisar las fechas ingresadas', 'error');
            return;
        }

        if (title.length <= 0) return;
    }

    return (
        <Modal
            isOpen={isDateModalOpen}
            onRequestClose={ onCloseModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
        >
            <h1> Nuevo evento </h1>
            <hr />

            <form 
                className="container"
                onSubmit={onSubmit}
            >

                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>
                    <DatePicker
                        selected={start} 
                        className={`form-control`}
                        onChange={ (event) => onDateChanged(event, 'start')}
                        dateFormat="Pp"
                        showTimeSelect
                        locale="es"
                        timeCaption='Hora'
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <DatePicker
                        minDate={start}
                        selected={end} 
                        className='form-control'
                        onChange={ (event) => onDateChanged(event, 'end')}
                        dateFormat="Pp"
                        showTimeSelect
                        locale="es"
                        timeCaption='Hora'
                    />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className={`form-control ${titleClass}`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={title}
                        onChange={handleInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={notes}
                        onChange={handleInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>

        </Modal>
    )
}
