import React from 'react'
const DateInput = (props) =>{
    return(
        <div className="d-flex full-width">
            <div className="date-input ac">
                <div className="react-datepicker-wrapper">
                    <div>
                        <input type="date"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DateInput;
