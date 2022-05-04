import Axios from 'axios'
import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function Garage() {

    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        Axios.get('/api/service/1').then(res => { 
          setVehicles(res.data);
        })
        .catch(err => console.log('Houston we have a problem: ', err))
      }, [])
  return (
    <div>
        <Header />
        <h1>This is a garage page</h1>
        <Footer /> 
    </div>
  )
}

export default Garage