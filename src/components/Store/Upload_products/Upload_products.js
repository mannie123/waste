import React from 'react'

function Upload_products() {
  return (
    <div className='upload-products'>
        <div className="upload-products-con">
            <form className='up-form mid-text' action="submit">
                <label htmlFor="">Product Name</label> <br />
                <input type="text" placeholder='Product Name' />  <br />
                <label htmlFor="">Product Owner</label> <br />
                <input type="text" placeholder='Product Owner Details' /> <br />
                <label htmlFor="">Owners Details</label> <br />
                <input type="text" placeholder='Owner Details' /> <br />
                <label htmlFor="">Price</label> <br />
                <input type="text" placeholder='Price' /> <br />
                <label htmlFor="">Add Picture</label> <br />
                <input type="text" placeholder='Add Picture' /> <br />
                <input className='upload-btn' type="button" value="Upload" />
            </form>
        </div>

    </div>
  )
}

export default Upload_products