import React, { useState } from 'react'
import Navfood from './Navfood'
import axios from 'axios'

const Addfood = () => {
    const [input,setInput]=new useState(
        {
            "name":"",
            "price":"",
            "place":""
        }
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/fooddelivery/add",input).then(
            (response)=()=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("successfull")
                } else {
                    alert("invalid")
                }
            }
        )
    }
  return (
    <div>
        <Navfood/>
        <br /><br />
        <div className="container">
            <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Price</label>
                        <input type="text" className="form-control" name="price" value={input.price} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">pLace</label>
                        <input type="text" className="form-control" name="place" value={input.place} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValues}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addfood