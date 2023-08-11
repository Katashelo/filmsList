import React, { useState } from "react";

const ThemeButton = (props) => {

    const [isToggleOn, setIsToggleOn] = useState(true)

    const handleClick = () => {
        if (isToggleOn === true) {
            setIsToggleOn(false)
        } else if (isToggleOn === false) {
            setIsToggleOn(true)
        }
    }


    return (
        <div className="" onClick={handleClick}>
            {isToggleOn
                ? <img src="https://cdn-icons-png.flaticon.com/128/3386/3386346.png" alt="sun" width={50} height={50} />
                : <img src="https://cdn-icons-png.flaticon.com/128/15/15810.png" alt="moon" width={50} height={50} />}
        </div>
    )
}


export default ThemeButton;