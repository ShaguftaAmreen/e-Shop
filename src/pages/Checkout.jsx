import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Checkout = ({setOrder}) => {
    const [billingToggle,setBillingToggle] = useState(true)
    const [shippingToggle,setShippingToggle] = useState(false)
    const cart = useSelector(state => state.cart)
    const navigate=useNavigate()
    const [shippingInfo,setShippingInfo]=useState({
        address:'',
        city:"",
        zip:''
    })
    const handleOrder=()=>{
        const newOrder={
            products:cart.products,
            orderNumber:"12344",
            shippingInformation:shippingInfo,
            totalPrice:cart.totalPrice,
        }
        setOrder(newOrder)
        navigate('/order-confirmation')
    }
    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
            <h3 className='text-2xl font-semibold mb-4'>CHECKOUT PAGE</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-2/3'>
                    {/* Billing Information Section */}
                    <div className='border p-2 mb-6' onClick={() => setBillingToggle(!billingToggle)}>
                        <div className='flex items-center justify-between'>
                            <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
                            {billingToggle ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                            <div>
                                <label className='block text-gray-700'>Name</label>
                                <input type="text" name='name' placeholder='Enter Name' className='w-full px-3 py-2 border' />
                            </div>
                            <div>
                                <label className='block text-gray-700'>Email</label>
                                <input type="email" name='email' placeholder='Enter Email' className='w-full px-3 py-2 border' />
                            </div>
                            <div>
                                <label className='block text-gray-700'>Phone</label>
                                <input type="text" name='phone' placeholder='Enter Phone #' className='w-full px-3 py-2 border' />
                            </div>
                        </div>
                    </div>
                    {/* Shipping Information Section */}
                    <div className='border p-2 mb-6' onClick={() => setShippingToggle(!shippingToggle)}>
                        <div className='flex items-center justify-between'>
                            <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
                            {shippingToggle ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                            <div>
                                <label className='block text-gray-700'>Address</label>
                                <input type="text" name='address' onChange={(e)=>setShippingInfo({...shippingInfo,address:e.target.value})} placeholder='Enter Address' className='w-full px-3 py-2 border' />
                            </div>
                            <div>
                                <label className='block text-gray-700'>City</label>
                                <input type="text" name='city' onChange={(e)=>setShippingInfo({...shippingInfo,city:e.target.value})} placeholder='Enter City' className='w-full px-3 py-2 border' />
                            </div>
                            <div>
                                <label className='block text-gray-700'>Zip Code</label>
                                <input type="text" name='zip'onChange={(e)=>setShippingInfo({...shippingInfo,zip:e.target.value})} placeholder='Enter Zip Code' className='w-full px-3 py-2 border' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                    <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
                    <div>
                        {cart.products.map((product, index) => (
                            <div key={index} className='flex items-center mb-4'>
                                <img src={product.image} alt={product.name} className='w-16 h-16 mr-4' />
                                <div>
                                    <h4 className='text-md font-semibold'>{product.name}</h4>
                                    <p className='text-gray-600'>{product.price} x {product.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-between text-lg font-semibold mt-4'>
                        <span>Total Price:</span>
                        <span>${cart.totalPrice.toFixed(2)}</span>
                    </div>
                    <button onClick={handleOrder} className='w-full mt-6 bg-red-500 text-white py-2 rounded-lg'>Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout






