import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { returnIcon } from '../assets/icons/icons';
import "react-datepicker/dist/react-datepicker.css";

const DateInput = (props) =>{
    const [startDate, setStartDate] = useState(new Date());
    // const [visibleSelect, setVisibleSelect] = useState(false)  
    
    const ExampleCustomInput = ({ value, onClick }) => (
        <span className="d-flex mt-2"> 
            {value && <span>{value}</span>}
            {!value && <span> All Dates </span>}

            <span onClick={onClick} className="chevron-icons ml-1 alg-itens-c pointer clr-pink"> 
                {returnIcon('chevron-down')}
            </span> 
        </span>
    );

    //FUNTION TO CONTROL VISIBLE STATE FROM DATEPICKER
    // function selectDatePicker(){
    //     if(!visibleSelect) setVisibleSelect(true)
    //     else setVisibleSelect(false)
    // }

    return(
        <div className="d-flex full-width">
            <div className="date-input ac">
                <div className="react-datepicker-wrapper">
                    <div>

                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            customInput={<ExampleCustomInput />}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DateInput;
