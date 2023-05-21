import '../auth/styles/Auth.css';

export const AuthLayout = ({children}) => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                {children}
            </div>
        </div>
    )
}