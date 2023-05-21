import { useCalendarStore } from "../../hooks";
import Swal from 'sweetalert2'

export const FabDelete = () => {


    const { startDeletingEvent, hasEventSelected } = useCalendarStore();

    const onDeleteClick = () => {
        startDeletingEvent();
        
        Swal.fire({
            icon: 'success',
            title: 'Evento eliminado',
            text: 'Evento removido con éxito',
        });
    }

    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={onDeleteClick}
            style={{
                display: hasEventSelected ? '' : 'none'
            }}
        > 
           <i className="fas fa-trash-alt fs-5"></i> 
        </button>
    )
}
