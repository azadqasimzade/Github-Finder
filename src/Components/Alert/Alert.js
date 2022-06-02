import React, { useContext } from 'react'
import AlertContext from '../Context/Alert/alertContext'

export const Alert = () => {
    const {alert,clearAlert} = useContext(AlertContext)
  return (
        alert !== null && (
            <div className='container my-2'>
                <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                    {alert.msg}
                    <button onClick={clearAlert} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>  
        )
  )
}

export default Alert
