import React from 'react'
import { BsImage } from 'react-icons/bs';
import pic1 from '../../../images/pic1.jpeg'

function Products_in_stock() {
  return (
    <div className='products_in_stock'>
        <div className="products_in_stock-con">
          <div className='div' >
            <table className='pis-table' cellSpacing={0}>
                <tr style={{'font-size': '1.2rem', 'padding-left': '2rem'}}>
                    <th>Product Image</th>
                    <th>Company Name</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Color</th>
                    <th>Price</th>
                </tr>

                <tr className='small-text'>
                    <td><img className='product-image'  src={pic1} alt="" /></td>
                    <td>Semiwo Beauties</td>
                    <td>Garden Tyres</td>
                    <td>100</td>
                    <td>Yellow, Pink, Green</td>
                    <td>15000</td>

                </tr>
                <tr className='small-text'>
                    <td><img className='product-image'  src={pic1} alt="" /></td>
                    <td>Semiwo Beauties</td>
                    <td>Garden Tyres</td>
                    <td>100</td>
                    <td>Yellow, Pink, Green</td>
                    <td>15000</td>

                </tr>
                <tr className='small-text'>
                    <td><img className='product-image'  src={pic1} alt="" /></td>
                    <td>Semiwo Beauties</td>
                    <td>Garden Tyres</td>
                    <td>100</td>
                    <td>Yellow, Pink, Green</td>
                    <td>15000</td>

                </tr>
                <tr className='small-text'>
                    <td><img className='product-image'  src={pic1} alt="" /></td>
                    <td>Semiwo Beauties</td>
                    <td>Garden Tyres</td>
                    <td>100</td>
                    <td>Yellow, Pink, Green</td>
                    <td>15000</td>

                </tr>
                
            </table>
            </div>

        </div>
        

    </div>
  )
}

export default Products_in_stock