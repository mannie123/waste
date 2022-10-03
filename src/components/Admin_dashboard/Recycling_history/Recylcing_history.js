import React from 'react'
import { FcAddImage } from 'react-icons/fc';

function Recylcing_history() {
  return (
    <div className='recyclng-history'>
        <div className="recylcing-history-con">
            <h2 style={{color: '#003D3D', 'font-size': '1.5rem'}} className='bold'>Recyilng History</h2>
            <div className='div' >
            <table className='rh-table'>
                <tr style={{'font-size': '1.5rem'}}>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Image</th>
                    <th>Coins Approval</th>
                </tr>

                <tr className='small-text'>
                    <td>Fuji and Sons Limited</td>
                    <td>No.6, Hellbound Street,Heavenly way</td>
                    <td> <FcAddImage size={29}/> </td>
                    <td><button className='primary-btn'>approved</button></td>

                </tr>
                <tr className='small-text'>
                    <td>Fuji and Sons Limited</td>
                    <td>No.6, Hellbound Street,Heavenly way</td>
                    <td><FcAddImage size={28}/></td>
                    <td><button className='secondary-btn'>approved</button></td>

                </tr>
                <tr className='small-text'>
                    <td>Fuji and Sons Limited</td>
                    <td>No.6, Hellbound Street,Heavenly way</td>
                    <td><FcAddImage size={28}/></td>
                    <td><button className='primary-btn'>approved</button></td>

                </tr>
                <tr className='small-text'>
                    <td>Fuji and Sons Limited</td>
                    <td>No.6, Hellbound Street,Heavenly way</td>
                    <td><FcAddImage size={28}/></td>
                    <td><button className='secondary-btn'>approved</button></td>

                </tr>
                <tr className='small-text'>
                    <td>Fuji and Sons Limited</td>
                    <td>No.6, Hellbound Street,Heavenly way</td>
                    <td><FcAddImage size={28}/></td>
                    <td><button className='primary-btn'>approved</button></td>

                </tr>
            </table>
            </div>

        </div>
        

    </div>
  )
}


export default Recylcing_history