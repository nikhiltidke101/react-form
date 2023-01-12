import React from 'react';
import { useState } from "react";
import SubmitPage from './SubmitPage';
import data from "../country.json";
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

function isEmailValid(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function hasSpecialCharacters(str) {
  const pattern = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  return pattern.test(str);
}

const isEmpty = (obj) => Object.keys(obj).length === 0;



const CustomerForm = () => {
  const [page, setPage] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({});
  const [currency, setCurrency] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    switch(name){
      case "firstName":
        if(hasSpecialCharacters(event.target.value)){
          setErrors((errors) => ({...errors, [name]: "Please Enter a Valid Name"}));
        }else{
          setErrors(({[name]: deleted, ...state }) => state);
        }
        break;

      case "lastName":
          if(hasSpecialCharacters(event.target.value)){
            setErrors((errors) => ({...errors, [name]: "Please Enter a Valid Name"}));
          }else{
            setErrors(({[name]: deleted, ...state }) => state);
          }
          break;

      case "email":
        if(!isEmailValid(event.target.value)){
          setErrors((errors) => ({ ...errors, [name]: "Please Enter a valid Email"}));
        }else{
          setErrors(({[name]: deleted, ...state }) => state);
        }
        break;

      case "phoneNumber":
        break;
      
      case "IFSC":
        if(hasSpecialCharacters(event.target.value)){
          setErrors((errors) => ({ ...errors, [name]: "Please Enter a valid IFSC Code"}));
        }else{
          setErrors(({[name]: deleted, ...state }) => state);
        }
        break;

      case "accountNumber":
          if(hasSpecialCharacters(event.target.value)){
            setErrors((errors) => ({ ...errors, [name]: "Please Enter a valid Account Number"}));
          }else{
            setErrors(({[name]: deleted, ...state }) => state);
          }
          break;

      case "city":
          if(hasSpecialCharacters(event.target.value)){
            setErrors((errors) => ({ ...errors, [name]: "Please Enter a valid City Name"}));
          }else{
            setErrors(({[name]: deleted, ...state }) => state);
          }
          break;

      case "postCode":
          if(hasSpecialCharacters(event.target.value)){
            console.log(event.target.value.length);
            setErrors((errors) => ({ ...errors, [name]: "Please Enter a valid Postal Code"}));
          }else{
            setErrors(({[name]: deleted, ...state }) => state);
          }
          break;

      case "country":
        var curr = data.find(item => item.country === event.target.value);
        setCurrency(curr.currency_code);
        break;
    }

    setFormData((formData) => ({ ...formData, [name]: value }));
  }

  function handleNext(e) {
    e.preventDefault();
    if(!isEmpty(errors)){
      console.log(errors);
      return;
    } 
    setPage(page + 1);
  }

  function handlePrev() {
    setPage(page - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(!isEmpty(errors)){
      console.log(errors);
      return;
    }
    setPage(page + 1);
  }

  return (
    <div className='flex flex-col justify-center items-center gap-7 p-5'>
        <div className='flex w-96 justify-between items-center m-3 gap-2'>
            <div className='flex flex-col justify-center items-center'>
                <h3 className= {page === 1 || page === 2 || page === 3 || page === 4 ? 'inline-block bg-blue-600 py-1 px-3 rounded-full text-white' : 'bg-slate-200 py-2 px-4 rounded-full'}>
                  {page === 2 || page === 3 || page ===4 ? <i class="fa-solid fa-check"></i> : 1} 
                </h3>
                <p className='absolute mt-[50px] text-xs'>Benificiary</p>
            </div>
            <div className= { page === 2 || page === 3 || page === 4 ? 'flex-1 border-b-2 border-blue-600' : 'flex-1 border-b-2 border-slate-200'}></div>
            <div className='flex flex-col justify-center items-center'>
                <h3 className= {page === 2 || page === 3 || page === 4 ? 'inline-block bg-blue-600 py-1 px-3 rounded-full text-white' : 'bg-slate-200 py-2 px-4 rounded-full'}>
                {page === 3 || page ===4 ? <i class="fa-solid fa-check"></i> : 2} 
                  </h3>
                <p className='absolute mt-[50px] text-xs'>Account Details</p>
            </div>
            <div className= {page === 3 || page === 4 ? 'flex-1 border-b-2 border-blue-600' : 'flex-1 border-b-2 border-slate-200'}></div>
            <div className='flex flex-col justify-center items-center'>
                <h3 className= {page === 3 || page === 4 ? 'inline-block bg-blue-600 py-1 px-3 rounded-full text-white' : 'bg-slate-200 py-2 px-4 rounded-full'}>
                  {page ===4 ? <i class="fa-solid fa-check"></i> : 3}
                </h3>
                <p className='absolute mt-[50px] text-xs'>Address</p>
            </div>
        </div>
      {page === 1 && (
        <form onSubmit={handleNext} className="flex flex-col gap-5 w-[100%] m-8 rounded-2xl ">
          <label >
            <input type="text" className='border-b border-slate-300 p-3 w-full outline-none'  required placeholder="First Name" value={formData.firstName ? `${formData.firstName}`: ""} name="firstName" onChange={handleChange} />
            {errors.firstName && <span className='ml-3 text-xs text-red-500'>{errors.firstName}</span>}
          </label>
          <label>
            <input type="text" className='border-b border-slate-300 p-3 w-full outline-none' required placeholder="Last Name" value={formData.lastName ? `${formData.lastName}`: ""} name="lastName" onChange={handleChange} />
            {errors.lastName && <span className='ml-3 text-xs text-red-500'>{errors.lastName}</span>} 
          </label>
          <label>
            <input type="email" className='border-b border-slate-300 p-3 w-full outline-none' required placeholder="Email" value={formData.email ? `${formData.email}`: ""} name="email" onChange={handleChange} />
            {errors.email && <span className='ml-3 text-xs text-red-500'>{errors.email}</span>} 
          </label>
          <label>
            <input type="number" max={9999999999} min={1000000000} className='border-b border-slate-300 p-3 w-full outline-none' required placeholder="Phone Number" value={formData.phoneNumber ? `${formData.phoneNumber}`: ""} name="phoneNumber" onChange={handleChange} />
            {errors.phoneNumber && <span className='ml-3 text-xs text-red-500'>{errors.phoneNumber}</span>} 
          </label>
          <div className="flex gap-4 mt-5">
            <input type="submit" value="Next" className="px-5 py-1 cursor-pointer rounded-md bg-blue-600 text-white shadow-lg shadow-blue-500/50 border border-blue-600" />
          </div>
        </form>
      )}
      {page === 2 && (
        <form onSubmit={handleNext} className="flex flex-col gap-4 w-full m-8 rounded-2xl">

          {/* <label>
            <input type="text" required placeholder="Country" className='border-b border-slate-300 p-3 w-full outline-none' value={formData.country ? `${formData.country}`: ""} name="country" onChange={handleChange} />
          </label> */}
          <select className='border-b border-slate-300 p-3 w-full outline-none' name="country" onChange={handleChange}>
            {formData.country ? <option selected value={formData.country}>{formData.country}</option> : <option selected>Default Country</option> }
             {
                data.map(item => {
                  return (
                    <option value={item.country}>{item.country}</option>
                  )
                })
             }
          </select>
          {
            currency && (
              <label>
                <input type="text" disabled className='border-b border-slate-300 p-3 w-full outline-none' placeholder= {currency ? currency : "Currency Code" } name="currencyCode" />
              </label>
            )
          }
          

          <div className='flex flex-col gap-4 m-4'>
            <p>Bank Details Format</p>
            <div className="flex items-center">
                <input type="radio" value={1} name="bankFormat" 
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 bg-blue-600 border-gray-300 
                "/>
                <label className="ml-2 text-sm font-medium">Local Bank Details</label>
            </div>
            <div className="flex items-center">
                <input type="radio" value={2} name="bankFormat" 
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 bg-blue-600 border-gray-300"
                />
                <label className="ml-2 text-sm font-medium">Swift Code</label>
            </div>
          </div>
          {
            formData.bankFormat == 1 && (
                
                <>
                    <label>
                        <input type="text" required className='border-b border-slate-300 p-3 w-full outline-none'  value={formData.IFSC ? `${formData.IFSC}`: ""}  placeholder="IFSC" name="IFSC"  onChange={handleChange} />
                        {errors.IFSC && <span className='ml-3 text-xs text-red-500'>{errors.IFSC}</span>} 
                    </label>
                    <label>
                        <input type="text" required className='border-b border-slate-300 p-3 w-full outline-none'  value={formData.accountNumber ? `${formData.accountNumber}`: ""}  placeholder="Account Number" name="accountNumber" onChange={handleChange} />
                        {errors.accountNumber && <span className='ml-3 text-xs text-red-500'>{errors.accountNumber}</span>} 
                    </label>
                </>
                
            )
          }
          {
            formData.bankFormat == 2 && (
                <>
                    <label>
                        <input type="text" required className='border-b border-slate-300 p-3 w-full outline-none' placeholder="ACH Routing Number" name="achRoutingNumber" onChange={handleChange} />
                    </label>
                    <label>
                        <input type="text" required className='border-b border-slate-300 p-3 w-full outline-none' placeholder="Account Number" name="accountNumber" onChange={handleChange} />
                    </label>
                    <label>
                        <input type="text" required className='border-b border-slate-300 p-3 w-full outline-none' placeholder="Account Type" name="accountType" onChange={handleChange} />
                    </label>
                </>
            )
          }
          
          <div className="flex gap-4 mt-5">
            <button onClick={handlePrev} className="px-5 py-1 rounded-md bg-slate-200 border border-blue-600 text-blue-600">Prev</button>
            <input type="submit" value="Next" className="px-5 py-1 cursor-pointer rounded-md bg-blue-600 text-white  shadow-lg shadow-blue-500/50 border border-blue-600"/>
          </div>
        
        </form>
      )}
      {page === 3 && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 m-8 w-full rounded-2xl">
          <label>
            <input type="text" disabled className='border-b border-slate-300 p-3 w-full outline-none' value={formData.country}/>
          </label>
          <label>
            <input type="text" placeholder="City" className='border-b border-slate-300 p-3 w-full outline-none' name="city" onChange={handleChange} />
            {errors.city && <span className='ml-3 text-xs text-red-500'>{errors.city}</span>}
          </label>
          <label>
            <input type="text" placeholder="Post Code" className='border-b border-slate-300 p-3 w-full outline-none' name="postCode" onChange={handleChange} />
            {errors.postCode && <span className='ml-3 text-xs text-red-500'>{errors.postCode}</span>}
          </label>
          <label>
            <input type="text" placeholder="Address" className='border-b border-slate-300 p-3 w-full outline-none' name="address" onChange={handleChange} />
          </label>
          <div className="flex gap-4 mt-5">
            <button onClick={handlePrev} className="px-5 py-1 rounded-md bg-slate-200 border border-blue-600 text-blue-600" >Prev</button>
            <input type="submit" value="Submit"className="px-5 py-1 cursor-pointer rounded-md bg-blue-600 text-white border shadow-lg shadow-blue-500/50 border border-blue-600" />
          </div>
        </form>
      )}


      {
        page === 4 && (
            <SubmitPage data={formData} type = {1}/>
        ) 
      }
    </div>
  )
}

export default CustomerForm;