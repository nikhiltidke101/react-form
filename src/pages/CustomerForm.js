import React from 'react';
import { useState } from "react";
import SubmitPage from './SubmitPage';

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

const CustomerForm = () => {
  const [page, setPage] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    switch (name) {
        case 'email': 
          errors.email = 
            validEmailRegex.test(value)
              ? ''
              : 'Email is not valid!';
          break;

        default:
          break;
    }

    setFormData((formData) => ({ ...formData, [name]: value }));
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
    <div className='flex flex-col justify-center items-center gap-7'>
        <div className='flex w-96 justify-between items-center p-3 m-3 gap-2'>
            <div className='flex flex-col justify-center items-center'>
                <h3 className= {page === 1 || page === 2 || page === 3 || page === 4 ? 'inline-block bg-blue-600 py-1 px-3 rounded-full text-white' : 'bg-slate-200 py-2 px-4 rounded-full'}>
                  1
                </h3>
                <p className='absolute mt-[50px] text-xs'>Benificiary</p>
            </div>
            <div className= { page === 2 || page === 3 || page === 4 ? 'flex-1 border-b-2 border-blue-600' : 'flex-1 border-b-2 border-slate-200'}></div>
            <div className='flex flex-col justify-center items-center'>
                <h3 className= {page === 2 || page === 3 || page === 4 ? 'inline-block bg-blue-600 py-1 px-3 rounded-full text-white' : 'bg-slate-200 py-2 px-4 rounded-full'}>2</h3>
                <p className='absolute mt-[50px] text-xs'>Account Details</p>
            </div>
            <div className= {page === 3 || page === 4 ? 'flex-1 border-b-2 border-blue-600' : 'flex-1 border-b-2 border-slate-200'}></div>
            <div className='flex flex-col justify-center items-center'>
                <h3 className= {page === 3 || page === 4 ?   'inline-block bg-blue-600 py-1 px-3 rounded-full text-white' : 'bg-slate-200 py-2 px-4 rounded-full'}>3</h3>
                <p className='absolute mt-[50px] text-xs'>Address</p>
            </div>
        </div>
      {page === 1 && (
        <form onSubmit={handleNext} className="flex flex-col gap-4 w-full m-8 rounded-2xl ">
          <label>
            <input type="text" className='border-b border-slate-300 p-3 w-full outline-none'  required placeholder="First Name" value={formData.firstName ? `${formData.firstName}`: ""} name="firstName" onChange={handleChange} />
          </label>
          <label>
            <input type="text" className='border-b border-slate-300 p-3 w-full outline-none' required placeholder="Last Name" value={formData.lastName ? `${formData.lastName}`: ""} name="lastName" onChange={handleChange} />
          </label>
          <label>
            <input type="email" className='border-b border-slate-300 p-3 w-full outline-none' required placeholder="Email" value={formData.email ? `${formData.email}`: ""} name="email" onChange={handleChange} />
          </label>
          <label>
            <input type="text" className='border-b border-slate-300 p-3 w-full outline-none' required placeholder="Phone Number" value={formData.phoneNumber ? `${formData.phoneNumber}`: ""} name="phoneNumber" onChange={handleChange} />
          </label>
          <div className="flex gap-4 mt-5">
            <input type="submit" value="Next" className="px-5 py-1 cursor-pointer rounded-md bg-blue-600 text-white border shadow-lg shadow-blue-500/50" />
          </div>
        </form>
      )}
      {page === 2 && (
        <form onSubmit={handleNext} className="flex flex-col gap-4 w-full m-8 rounded-2xl">

          <label>
            <input type="text" required placeholder="Country" className='border-b border-slate-300 p-3 w-full outline-none' value={formData.country ? `${formData.country}`: ""} name="country" onChange={handleChange} />
          </label>

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
          {
            formData.bankFormat == 1 && (
                
                <>
                    <label>
                        <input type="text" required className='border-b border-slate-300 p-3 w-full outline-none'  value={formData.IFSC ? `${formData.IFSC}`: ""}  placeholder="IFSC" name="IFSC"  onChange={handleChange} />
                    </label>
                    <label>
                        <input type="text" required className='border-b border-slate-300 p-3 w-full outline-none'  value={formData.accountNumber ? `${formData.accountNumber}`: ""}  placeholder="Account Number" name="accountNumber" onChange={handleChange} />
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
            <button onClick={handlePrev} className="px-5 py-1 rounded-xl bg-slate-200 border border-blue-600 text-blue-600">Prev</button>
            <input type="submit" value="Next" className="px-5 py-1 cursor-pointer rounded-md bg-blue-600 text-white border shadow-lg shadow-blue-500/50"/>
          </div>
        
        </form>
      )}
      {page === 3 && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full m-8 rounded-2xl">
          <label>
            <input type="text" disabled value={formData.country}/>
          </label>
          <label>
            <input type="text" placeholder="City" className='border-b border-slate-300 p-3 w-full outline-none' name="city" onChange={handleChange} />
          </label>
          <label>
            <input type="text" placeholder="Post Code" className='border-b border-slate-300 p-3 w-full outline-none' name="postCode" onChange={handleChange} />
          </label>
          <label>
            <input type="text" placeholder="Address" className='border-b border-slate-300 p-3 w-full outline-none' name="address" onChange={handleChange} />
          </label>
          <div className="flex gap-4 mt-5">
            <button onClick={handlePrev} className="px-5 py-1 rounded-xl bg-slate-200 border border-blue-600 text-blue-600" >Prev</button>
            <input type="submit" value="Submit"className="px-5 py-1 cursor-pointer rounded-md bg-blue-600 text-white border shadow-lg shadow-blue-500/50" />
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