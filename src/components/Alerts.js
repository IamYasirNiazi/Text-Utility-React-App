import React from 'react'

export default function Alerts(props) {
    const Capitalize = (word)=>{
        let newText = word.charAt(0).toUpperCase() + word.slice(1);
        return newText;
    }

  return (
    <div style={{height: '60px'}}>
    
  {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{Capitalize(props.alert.type)}</strong> : {props.alert.msg}
                  </div>}

    </div>
  )
}
