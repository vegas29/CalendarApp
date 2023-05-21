import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
    _id: new Date().getTime(),
    title: 'Cumpleaños de Sassie',
    notes: 'Hay que comprar el pastel',
    start: new Date(),
    end: addHours( new Date(), 2),
    bgColor: '#fafafa',
    user:{
        _id: '123',
        name: 'Alejandro'
    }
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
       events: [
        tempEvent
       ],
       activeEvent: null
    },
    reducers: {
        onSetActiveEvent: ( state, { payload }) => {
            console.log('me llame')
            state.activeEvent = payload;
        }
    }
});

export const { onSetActiveEvent } = calendarSlice.actions;