import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    // we'll check if internet is working.
    
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect( () => {
        
        window.addEventListener("offline", () =>{
            setOnlineStatus(false);
        });

        window.addEventListener("online", () =>{
            setOnlineStatus(true);
        });

    }, []);

    // boolean value
    return onlineStatus;
}

export default useOnlineStatus;