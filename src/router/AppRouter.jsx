import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar/pages/CalendarPage";
import { RegisterPage } from "../auth/pages/Register/RegisterPage";
import { useAuthStore } from "../hooks";
import { Loader } from "../ui/components/Loader";

export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, []);

    if ( status === 'checking') {
        return (
            <Loader />
        )
    }

    return (
        <Routes>
            {
                (status === 'not-authenticated')
                    ? (
                        <>
                            <Route path="/auth/login" element={<LoginPage/>} />
                            <Route path="/auth/register" element={<RegisterPage/>} />
                            <Route path="/*" element={<Navigate to="/auth/login"/>} />
                        </>
                    )
                    :  (
                        <>                        
                            <Route path="/" element={<CalendarPage/>} />
                            <Route path="/*" element={<Navigate to="/"/>} />
                        </>
                    )
            }


        </Routes>
    )
}
