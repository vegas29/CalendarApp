import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks";

export const FabAddNew = () => {

    const { openDateModal } = useUiStore();

    const { setActiveEvent } = useCalendarStore();

    const onClickNew = () => {
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours( new Date(), 2),
            bgColor: '#fafafa',
            user:{
                _id: '123',
                name: 'Alejandro'
            }
        })
        openDateModal();
    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={onClickNew}
        > 
           <i className="fas fa-plus"></i> 
        </button>
    )
}
