import { useAuthStore } from "../../hooks";

export const Navbar = () => {

    const { startLogout, user } = useAuthStore();
    const { name } = user;
    return (
        <div className="navbar navbar-dark bg-dark mb-4 px-4">
            <span className="navbar-brand">
                <i className="fas fa-calendar-alt me-3"></i>
                {name}
            </span>

            <button 
                className="btn btn-outline-danger" 
                onClick={startLogout}
            >
                <i className="fas fa-sign-out-alt me-3"></i>
                <span>Exit</span>
            </button>
        </div>
    )
}
