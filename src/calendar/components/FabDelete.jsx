import { useCalendarStore } from "../../hooks";

export const FabDelete = () => {


    const { startDeletingEvent, hasEventSelected } = useCalendarStore();

    const onDeleteClick = () => {
        startDeletingEvent();
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
