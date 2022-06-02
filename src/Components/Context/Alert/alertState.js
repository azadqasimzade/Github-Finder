import React, { useReducer } from "react"
import AlertContext from "./alertContext"
import AlertReducer from "./alertReducer"

const AlertState = (props) =>{
    const initialState = null

    const [state, dispatch] = useReducer(AlertReducer, initialState)

    const setAlert = (msg, type) =>{
        dispatch({
            type: 'SET_ALERT',
            payload: {msg, type}
        })

        setTimeout(() => {
            dispatch({
                type: 'REMOVE_ALERT'
            })
        }, 2500);
    }

    const clearAlert = () =>{
        dispatch({
            type: 'REMOVE_ALERT'
        })
    }

    return(
        <AlertContext.Provider
            value={{
                alert: state,
                setAlert,
                clearAlert
            }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;