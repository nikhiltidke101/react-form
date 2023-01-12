import React from 'react';
import { useState } from "react";
import SubmitPage from './SubmitPage';
import data from "../country.json";

function isEmailValid(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


const BusinessForm = () => {
  const [page, setPage] = useState(1);
  const [errors, setErrors] = useState(null);
  const [formData, setFormData] = useState({});
  const [currency, setCurrency] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    switch(name){
      case "businessName":
        if(!isEmailValid(event.target.value)){
          setErrors((errors) => ({ ...errors, [name]: "'Please enter a valid email address'"}));
        }else{
          setErrors(({[name]: deleted, ...state }) => state);
        }
        break;
      case "email":
        if(!isEmailValid(event.target.value)){
          setErrors((errors) => ({ ...errors, [name]: "'Please enter a valid email address'"}));
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

  function restart(){
    setPage(1);
    setFormData({});
  }

  function handleNext(e) {
    e.preventDefault();
    setPage(page + 1);
  }

  function handlePrev() {
    setPage(page - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
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
        <form onSubmit={handleNext} className="flex flex-col gap-4 w-full m-8 rounded-2xl">
          <label>
            <input type="text" required className='border-b border-slate-300 p-3 w-full outline-none' placeholder="Business Name" value={formData.businessName ? `${formData.businessName}`: ""} name="businessName" onChange={handleChange} />
          </label>
          <label>
            <input type="email" required className='border-b border-slate-300 p-3 w-full outline-none' placeholder="Email" value={formData.email ? `${formData.email}`: ""} name="email" onChange={handleChange} />
            {errors && <span className='ml-3 mt-2 text-xs text-red-500'>Enter a vaild Email</span>} 
          </label>
          <label>
            <input type="text" required className='border-b border-slate-300 p-3 w-full outline-none' placeholder="Phone Number" value={formData.phoneNumber ? `${formData.phoneNumber}`: ""} name="phoneNumber" onChange={handleChange} />
          </label>
          <div className="flex gap-4 mt-5">
            <input type="submit" value="Next" className="px-5 py-1 cursor-pointer rounded-md bg-blue-600 text-white border shadow-lg shadow-blue-500/50" />
          </div>
        </form>
      )}
      {page === 2 && (
        <form onSubmit={handleNext}  className="flex flex-col gap-4 w-full m-8 rounded-2xl">

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
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
                  "/>
                  <label className="ml-2 text-sm font-medium">Local Bank Details</label>
              </div>
              <div className="flex items-center">
                  <input type="radio" value={2} name="bankFormat" 
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"/>
                  <label className="ml-2 text-sm font-medium">Swift Code</label>
              </div>
            </div>
            {
                formData.bankFormat == 1 && (
                    
                    <>
                        <label>
                            <input type="text" required placeholder="IFSC" name="IFSC"  className='border-b border-slate-300 p-3 w-full outline-none' value={formData.IFSC ? `${formData.IFSC}`: ""} onChange={handleChange} />
                        </label>
                        <label>
                            <input type="text" required placeholder="Account Number" name="accountNumber" className='border-b border-slate-300 p-3 w-full outline-none' value={formData.accountNumber ? `${formData.accountNumber}`: ""} onChange={handleChange} />
                        </label>
                    </>
                    
                )
            }
            {
                formData.bankFormat == 2 && (
                    <>
                        <label>
                            <input type="text" required placeholder="ACH Routing Number" className='border-b border-slate-300 p-3 w-full outline-none' value={formData.achRoutingNumber ? `${formData.achRoutingNumber}`: ""} name="achRoutingNumber" onChange={handleChange} />
                        </label>
                        <label>
                            <input type="text" required placeholder="Account Number" className='border-b border-slate-300 p-3 w-full outline-none' value={formData.accountNumber ? `${formData.accountNumber}`: ""} name="accountNumber" onChange={handleChange} />
                        </label>
                        <label>
                            <input type="text" required placeholder="Account Type" className='border-b border-slate-300 p-3 w-full outline-none' value={formData.accountType ? `${formData.accountType}`: ""} name="accountType" onChange={handleChange} />
                        </label>
                    </>
                )
            }


          <div className="flex gap-4 mt-5">
            <button onClick={handlePrev} className="px-5 py-1 rounded-md bg-slate-200 border border-blue-600 text-blue-600">Prev</button>
            <input type="submit" value="Next" className="px-5 py-1 cursor-pointer rounded-md bg-blue-600 text-white border shadow-lg shadow-blue-500/50" />
          </div>
        </form>
      )}
      {page === 3 && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full m-8 rounded-2xl">

          <label>
            <input type="text" disabled value={formData.country} className='border-b border-slate-300 p-3 w-full outline-none'/>
          </label>
          <label>
            <input type="text" placeholder="City" value={formData.city} className='border-b border-slate-300 p-3 w-full outline-none' name="city" onChange={handleChange} />
          </label>
          <label>
            <input type="text" placeholder="Post Code" value={formData.postCode} className='border-b border-slate-300 p-3 w-full outline-none' name="postCode" onChange={handleChange} />
          </label>
          <label>
            <input type="text" placeholder="Address" value={formData.address} className='border-b border-slate-300 p-3 w-full outline-none' name="address" onChange={handleChange} />
          </label>
          <div className="flex gap-4 mt-5">
            <button onClick={handlePrev} className="px-5 py-1 rounded-md bg-slate-200 border border-blue-600 text-blue-600">Prev</button>
            <input type="submit" value="Submit" className="px-5 py-1 cursor-pointer rounded-md bg-blue-600 text-white border shadow-lg shadow-blue-500/50"/>
          </div>
        </form>
      )}
      {
        page === 4 && (
            <SubmitPage data={formData} type={2} restart={restart}/>
        ) 
      }
    </div>
  )
}

export default BusinessForm