import React from 'react'

const SubmitPage = ({data, type}) => {
  return (
    <div className='flex justify-center'>   
        <form  className="flex flex-col p-3 gap-6 w-full m-8">
            {
                type == 1 && (
                    <>
                        <div className='flex flex-col gap-2'>
                            <h3 className='font-bold'>Personal Details</h3>
                            <div className='bg-slate-200 p-3'>
                                <h3 className='font-semibold'>First Name: <span className='font-light' >{data.firstName}</span></h3>
                                <h3 className='font-semibold'>Last Name: <span className='font-light'>{data.lastName}</span></h3>
                                <h3 className='font-semibold'>Email: <span className='font-light'>{data.email}</span></h3>
                                <h3 className='font-semibold'>Phone Number: <span className='font-light'>{data.phoneNumber}</span></h3>
                                <h3 className='font-semibold'>Country: <span className='font-light'>{data.country}</span></h3>
                            </div>
                        </div>
                        {
                            data.bankFormat == 1 && (
                                
                                <div className='flex flex-col gap-2'>
                                    <h3 className='font-bold'>Local Account Details</h3>
                                        <div className='bg-slate-200 p-3'>
                                        <h3 className='font-semibold'>IFSC code: <span className='font-light'>{data.IFSC}</span></h3>
                                        <h3 className='font-semibold'>Account Number: <span className='font-light'>{data.accountNumber}</span></h3>
                                    </div>
                                </div>
                                
                            )
                        }
                        {
                            data.bankFormat == 2 && (
                                <div className='flex flex-col gap-2'>
                                    <h3 className='font-bold'>Swiss Code</h3>
                                    <div className='bg-slate-200 p-3'>
                                        <h3 className='font-semibold' >ACH Routing Number: <span className='font-light' >{data.achRoutingNumber}</span></h3>
                                        <h3 className='font-semibold'>Account Number: <span className='font-light'>{data.accountNumber}</span></h3>
                                        <h3 className='font-semibold'>Account Type: <span className='font-light'>{data.accountType}</span></h3>
                                    </div>
                                </div>
                            )
                        }
                        <div className='flex flex-col gap-2'>
                            <h3 className='font-bold' >Address</h3>
                            <div className='bg-slate-200 p-3'>
                                <h3 className='font-semibold'>City: <span className='font-light'>{data.city}</span></h3>
                                <h3 className='font-semibold'>Post Code: <span className='font-light'>{data.postCode}</span></h3>
                                <h3 className='font-semibold'>Address: <span className='font-light'>{data.address}</span></h3>
                            </div>
                        </div>
                    </>
                )
            }
            {
                type == 2 && (
                    <>
                        <div className='flex flex-col gap-2'>
                            <h3 className='font-bold'>Personal Details</h3>
                            <div className='bg-slate-200 p-3'>
                                <h3 className='font-semibold'>Business Name: <span className='font-light'>{data.businessName}</span></h3>
                                <h3 className='font-semibold'>Email: <span className='font-light'>{data.email}</span></h3>
                                <h3 className='font-semibold'>Phone Number: <span className='font-light'>{data.phoneNumber}</span></h3>
                                <h3 className='font-semibold'>Country: <span className='font-light'>{data.country}</span></h3>
                            </div>
                        </div>
                        {
                            data.bankFormat == 1 && (
                                
                                <div className='flex flex-col gap-2'>
                                    <h3 className='font-bold'>Local Account Details</h3>
                                        <div className='bg-slate-200 p-3'>
                                        <h3 className='font-semibold'>IFSC code: <span>{data.IFSC}</span></h3>
                                        <h3 className='font-semibold'>Account Number: <span>{data.accountNumber}</span></h3>
                                    </div>
                                </div>
                                
                            )
                        }
                        {
                            data.bankFormat == 2 && (
                                <div className='flex flex-col gap-2'>
                                    <h3 className='font-bold'>Swiss Code</h3>
                                    <div className='bg-slate-200 p-3'>
                                        <h3 className='font-semibold' >ACH Routing Number: <span className='font-light' >{data.achRoutingNumber}</span></h3>
                                        <h3 className='font-semibold'>Account Number: <span  className='font-light' >{data.accountNumber}</span></h3>
                                        <h3 className='font-semibold'>Account Type: <span  className='font-light' >{data.accountType}</span></h3>
                                    </div>
                                </div>
                            )
                        }
                        <div className='flex flex-col gap-2'>
                            <h3 className='font-bold'>Address</h3>
                            <div className='bg-slate-200 p-3'>
                                <h3 className='font-semibold'>City: <span  className='font-light' >{data.city}</span></h3>
                                <h3 className='font-semibold'>Post Code: <span  className='font-light' >{data.postCode}</span></h3>
                                <h3 className='font-semibold'>Address: <span  className='font-light' >{data.address}</span></h3>
                            </div>
                        </div>
                    </>
                )
            }
            
                
        </form>
    </div>
  )
}

export default SubmitPage