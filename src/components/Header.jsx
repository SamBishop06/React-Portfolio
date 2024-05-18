import React from "react";
import "../styles/Header.css";
function Header({children, id}) {
    return(
        <h1 id={id && id} className="P-Header-Title">{children}

        </h1>
    )
}

export default Header;