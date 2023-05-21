import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar/pages/CalendarPage";
import { RegisterPage } from "../auth/pages/Register/RegisterPage";

export const AppRouter = () => {

    const authStatus = "not-aauthenticated" //'authenticated'; //'not-authenticated';

    return (
        <Routes>
            {
                (authStatus === 'not-authenticated')
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
