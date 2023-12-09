import { createPortal } from "react-dom"

const LogIn = () => {
    return createPortal(
        <div>

        </div>,
        document.getElementById("login")
    );
}

export default LogIn