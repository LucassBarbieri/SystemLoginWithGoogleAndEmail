import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../Loading/Loading'

export const Landing = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  if (loading) {
    return (
      <Loading />
    )
  } else {
    return (

      <>
        <Link to={'/ingresar'}>
          <button>LOGIN</button>
        </Link>
        <Link to={'/registrar'}>
          <button>REGISTRAR</button>
        </Link>
      </>
    )
  }
}

export default Landing;