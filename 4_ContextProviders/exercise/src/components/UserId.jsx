import React,{ useContext }  from "react";
import { AppContext } from "../contexts/AppContext";

function UserId() {
    const { userId } = useContext(AppContext);

    return (
        <div>
            <h5>{userId}</h5>
        </div>
    )
}

export default UserId;
