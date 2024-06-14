import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Dropdown } from 'react-bootstrap';

const Currency = () => {
    const {dispatch, currency } = useContext(AppContext);

    

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
    <div> 
    <Dropdown >
    <Dropdown.Toggle variant="success" style={{borderColor: "#7FE79A",backgroundColor: "#7FE79A"}} id="currencyDropdown">
      Currency ({currency})
    </Dropdown.Toggle>

    <Dropdown.Menu style={{backgroundColor: "#7FE79A"}}>
      <Dropdown.Item variant="success"  onClick={event=>changeCurrency('$ Dollar')} href="#/action-1">$ Dollar</Dropdown.Item>
      <Dropdown.Item variant="success"  onClick={event=>changeCurrency('€ Pound')} href="#/action-2">£ Pound</Dropdown.Item>
      <Dropdown.Item variant="success"  onClick={event=>changeCurrency('₹ Euro')} href="#/action-3">€ Euro</Dropdown.Item>
      <Dropdown.Item variant="success"  onClick={event=>changeCurrency('₹ Ruppee')} href="">₹ Ruppee</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  </div>
        /*<div className='alert alert-secondary'> 
            <span style={{backgroundColor: "#92F5AD", color: "white"}} >Currency</span>
      <select style={{backgroundColor: "#92F5AD"}} name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
        <option selected>Currency ({currency})</option>
        <option value="$" style={{backgroundColor: "#92F5AD"}}>$ Dollar</option>
        <option value="£" style={{backgroundColor: "#92F5AD"}}>£ Pound</option>
        <option value="€" style={{backgroundColor: "#92F5AD"}}></option>
        <option value="₹" style={{backgroundColor: "#92F5AD"}}>₹ Ruppee</option>
      </select>	
      
    </div>*/
    );
};

export default Currency;