import React from 'react'
import { Spinner } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Loading/Loading.css'

const Loading = () => {
  return (
    <>
      <div className='container-loading'>
          <Spinner color='warning' className='spinnerCircle'/>
      </div>
    </>
  )
}

export default Loading;
