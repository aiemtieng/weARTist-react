import React from 'react'
import './CommissionFooter.css'
import BackgroundFooter from '../../../assets/image/bgfooter.png'
import TextFooter from '../../../assets/image/footer.png'

function CommissionFooter() {
  return (
    <div className='CommissionFooter'>
        <div className='BGFooter'>
          <img src={BackgroundFooter} alt='bgfooter'></img>
        </div>

        <div className='TextFooter'>
          <img src={TextFooter} alt='textfooter'></img>
        </div>
    </div>
  )
}

export default CommissionFooter