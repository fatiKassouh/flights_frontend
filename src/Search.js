import React, { useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import './Search.css'
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Button } from '@material-ui/core';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


function Search() {

    const [startDate, setStartDate] =useState  (new Date());
    const [endDate, setEndDate] = useState (new Date());
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key:"selection"
    };

    const handleSelect=(ranges)=>{
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
    <div className='search'>

        <DateRangePicker 
            ranges={
            [selectionRange]}
            minDate={new Date()}
            onChange={handleSelect}
        /> 

        <h2>
            Nombre de personne
            <PersonAddIcon/>
        </h2>

        <input min={0} defaultValue={2} name='nb_personne' type="number"/>

        <Button>Rechercher mon Vol</Button>
    </div>

)
}
 
export default Search