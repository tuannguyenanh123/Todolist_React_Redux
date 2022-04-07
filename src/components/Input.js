import React, { useState } from 'react'

export default function Input() {
    const [formValue,setformValue] = useState({
        name: '',
        phone: '',
        password: '',
        address: '',
    })
    const handleChangeValue = (e) => {
        console.log(formValue);
        
        setformValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }
  return (
    <form>
        <div className="htmlForm-group row">
        <label htmlFor="inputName" className="col-sm-2 col-htmlForm-label">Name</label>
        <input type="text" className="htmlForm-control" id="inputName" placeholder="Name" name="name" onChange={handleChangeValue}/>
        </div>


        <div className="htmlForm-group row">
        <label htmlFor="inputPhone" className="col-sm-2 col-htmlForm-label">Phone</label>
        <input type="text" className="htmlForm-control" id="inputPhone" placeholder="Phone" name="phone" onChange={handleChangeValue}/>
        </div>
            
        <div className="htmlForm-group row">
        <label htmlFor="inputPassword" className="col-sm-2 col-htmlForm-label">Password</label>
        <input type="password" className="htmlForm-control" id="inputPassword" placeholder="Password" name="password" onChange={handleChangeValue}/>
        </div>

        <div className="htmlForm-group row">
        <label htmlFor="inputAddress" className="col-sm-2 col-htmlForm-label">address</label>
        <input type="text" className="htmlForm-control" id="inputaddress" placeholder="address" name="address" onChange={handleChangeValue}/>
        </div>
        <button type="submit" className="btn btn-primary mb-2">submit</button>
    </form>
  )
}
