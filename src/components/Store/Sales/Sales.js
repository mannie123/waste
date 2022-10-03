import React from 'react'
import pic1 from '../../../images/pic1.jpeg'

function Sales() {
  return (
    <div className='products_in_stock'>
        <div className="products_in_stock-con">
          <div className='div' >
            <table className='pis-table' cellSpacing={0}>
                <tr style={{'font-size': '1.2rem', 'padding-left': '2rem'}}>
                    <th>Product Name</th>
                    <th>Product Image</th>
                    <th>Colour Order</th>
                    <th>Cost</th>
                    <th>Status</th>
                </tr>

                <tr className='small-text'>
                    <td>Garden Tyres</td>
                    <td><img className='product-image'  src={pic1} alt="" /></td>
                    <td>Yellow</td>
                    <td>150,000</td>
                    <td><button className='primary-btn'>Paid</button></td>

                </tr>
                <tr className='small-text'>
                    <td>Garden Tyres</td>
                    <td><img className='product-image'  src={pic1} alt="" /></td>
                    <td>Yellow</td>
                    <td>150,000</td>
                    <td><button className='red-btn'>Unpaid</button></td>

                </tr>
                <tr className='small-text'>
                    <td>Garden Tyres</td>
                    <td><img className='product-image'  src={pic1} alt="" /></td>
                    <td>Yellow</td>
                    <td>150,000</td>
                    <td><button className='primary-btn'>Paid</button></td>

                </tr>
                <tr className='small-text'>
                    <td>Garden Tyres</td>
                    <td><img className='product-image'  src={pic1} alt="" /></td>
                    <td>Yellow</td>
                    <td>150,000</td>
                    <td><button className='green-btn'>Pending</button></td>

                </tr>
                
            </table>
            </div>

        </div>
        

    </div>
  )
}

export default Sales