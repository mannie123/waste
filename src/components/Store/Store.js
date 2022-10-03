import React from 'react'
import Products_in_stock from './Products_in_stock/Products_in_stock'
import Store_nav from './Store_nav/Store_nav'
import Store_table from './Sales/Sales'
import Upload_products from './Upload_products/Upload_products'


function Store() {
  return (
    <div className='admin-store'>
      <div className='admin-store-con'>
        <Store_nav/>
        {/* <Products_in_stock/> */}
        {/* <Store_table/> */}
        <Upload_products/>
        </div>
    </div>
  )
}

export default Store