import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar/pages/CalendarPage";
import { RegisterPage } from "../auth/pages/Register/RegisterPage";
import { useAuthStore } from "../hooks";

export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, []);

    if ( status === 'checking') {
        return (
            <h3>Cargando...</h3>
        )
    }

    // const authStatus = "not-authenticated" //'authenticated'; //'not-authenticated';

    return (
        <Routes>
            {
                (status === 'not-authenticated')
                    ? 
                        <>
                            <Route path="/auth/login" element={<LoginPage/>} />
                            <Route path="/auth/register" element={<RegisterPage/>} />
                        </>
                    : <Route path="/*" element={<CalendarPage/>} />
            }

            <Route path="/*" element={<Navigate to="/auth/login"/>} />

        </Routes>
    )
}
