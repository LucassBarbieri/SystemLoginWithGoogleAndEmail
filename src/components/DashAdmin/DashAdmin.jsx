import React from 'react'

import { app } from "../../firebase/";
import { getAuth, signOut } from 'firebase/auth';

// import Landing from '../Landing/Landing'

const auth = getAuth(app);

const DashAdmin = (user) => {

  return (
    <>
      <h2>Dashboard ADMIN</h2>
      <button onClick={() => signOut(auth)}>Cerrar</button>
    </>
  )
}

export default DashAdmin
