import React from 'react'

export const Alert = (props) => {
  return (
        props.alert !== null && (
            <div className='container my-2'>
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    {props.alert.msg}
                    <button onClick={props.clearAlert} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>  
        )
  )
}

export default Alert
