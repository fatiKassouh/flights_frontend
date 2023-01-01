import React, { useState } from 'react'
import { DateRange, DateRangePicker } from 'react-date-range'
import './Search.css'
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Box, Button, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, Switch, TextField } from '@material-ui/core';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Filter from './Filter';


function Search() {

    const [startDate, setStartDate] =useState  (new Date());
    const [endDate, setEndDate] = useState (new Date());
    const [showNext, setShow] = useState (false);
    const [Class, setClass] = useState("");
    const [hideDateRange, setHide] = useState (true);
    const [isAllerRetour, setIsAllerRetour] = useState(false);
    const [isTypeEco, setTypeEco] = useState(false);
    const [MaxPrice, setMaxPrice] = useState("");
    const [MaxReturn, setMaxReturn] = useState("");
   
    
    const currencies = [
        {
          value: 'USD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
        {
            value: 'MAD',
            label: 'MAD',
          },
      ];
    
    const [isToggled, setIsToggled] = useState(false);


   const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
    const handleSelect=(ranges)=>{
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    const handleShow=()=>{
        setShow(!showNext);
        setHide(!hideDateRange);
    }


    return (
    <div className='search'>
        <DateRange
        className='date_ranger'
            editableDateInputs={true}
            onChange={item => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
        />
        <div className='vol__info'>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-check">
      
                        <FormControl>               
                            <FormLabel id="demo-radio-buttons-group-label">Aller-retour<Switch
                                className='inputs'
                                checked={isAllerRetour}
                                onChange={() => setIsAllerRetour(!isAllerRetour)}
                                color="primary"
                                name="Aller-retour"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                            </FormLabel>
                            <FormLabel id="demo-radio-buttons-group-label">Type-economique<Switch
                                className='inputs'
                                checked={isTypeEco}
                                onChange={() => setTypeEco(!isTypeEco)}
                                color="primary"
                                name="Aller-retour"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                            </FormLabel>
                            <br/>
                                <FormLabel id="demo-radio-buttons-group-label" className="inputs">Nombre d'enfants</FormLabel>
                                <input min={0} defaultValue={2} name='nb_personne' className="inputs" type="number"/>

                                <FormLabel id="demo-radio-buttons-group-label" className="inputs">Nombre de bébés</FormLabel>
                                <input min={0} defaultValue={2} name='nb_personne' className="inputs" type="number"/>

                                <FormLabel id="demo-radio-buttons-group-label"className="inputs">Nombre d'adultes</FormLabel>
                                <input min={0} defaultValue={2} name='nb_personne' className="inputs" type="number"/><br/>
                                
                                <FormLabel id="demo-radio-buttons-group-label" className="inputs">Sièges</FormLabel>
                                <RadioGroup aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="radio-buttons-group">
                                    <FormControlLabel value="female" name="Class" control={<Radio />} label="Première classe" style={{ fontWeight: 200 }}  />
                                    <FormControlLabel value="male" name="Class" control={<Radio />} label="Deuxième classe" style={{ fontWeight: 200 }} />
                                </RadioGroup>
                                <div>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    ></Box>
                                    <TextField
                                        id="standard-select-currency-native"
                                        select
                                        label="la monnaie"
                                        defaultValue="EUR"
                                        SelectProps={{
                                        native: true, }}
                                        helperText="Selectionner votre monnaie"
                                        variant="standard"
                                    >
                                        {currencies.map((option) => (
                                            <option key={option.value} value={option.value}>
                                            {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </div>
                        </FormControl>
                    </div>
                </div>
            </div>    
        </div>
        <Button>Rechercher mon vol</Button>
    </div>

)
}
 
export default Search