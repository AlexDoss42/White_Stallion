import React, { useState } from 'react'
import axios from 'axios';
import { storage } from '../firebase';
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from 'uuid';

import { Link } from 'react-router-dom';

function AddVehicle() {
    const [error, setError]  = useState('');
    const [imageUpload, setImageUpload] = useState();
    const [vehicleData, setVehicleData] = useState({
        make: '',
        model: '',
        year: '',
        miles: 0,
        user_id: 1
    });

    const selectImage = (e) => {
        const types = ['image/png', 'image/jpeg'];
        if(!types.includes(e.target.files[0].type)) {
            setError('File type must be png or jpeg');
            setImageUpload(null);
        }
    }

    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/vehicles/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then(() => {
            alert("Image Uploaded");
        })
    }

    const addVehicle = (newVehicle) => {
        axios.post('/api/vehicle', newVehicle).then(res => {
            setVehicleData({
                make: '',
                model: '',
                year: '',
                miles: 0,
                user_id: 1
            });
        }).catch(err => console.log('Houston, we have a problem: ', err))
    };

    const handleClick = () => {
        let { make, model, year, miles } = vehicleData;
        
        
        if(make === '') { 
            alert('Make is required')
        }
        if(model === '') {
            alert('Model is required')
        }
        if(year === '') {
            alert('Year is required')
        }
        if(miles === '') {
            alert('Miles are required')
        } else {
            addVehicle(vehicleData);
            uploadImage();
        }
    };

  return (
    <form className='addInputs'>
        <input
            onChange={(e) => setImageUpload(e.target.files[0])}
            name="car-image"
            type="file"
        />
        {error && <p>{error}</p>}
        <input
        onChange={(e) => setVehicleData({ ...vehicleData, make: e.target.value })}
        name = 'make'
        type = 'text'
        placeholder = 'Make'
        value={vehicleData.make}
        />
        <input
        onChange = {(e) => setVehicleData({ ...vehicleData, model: e.target.value })}
        name = 'model'
        type = 'text'
        placeholder = 'Model'
        value={vehicleData.model}
        />
        <input
        onChange = {(e) => setVehicleData({ ...vehicleData, year: e.target.value })}
        name = 'year'
        type = 'number'
        placeholder = 'Year'
        value={vehicleData.year}
        />
        <input
        onChange = {(e) => setVehicleData({ ...vehicleData, date_of_service: e.target.value })}
        name = 'miles'
        type = 'number'
        placeholder='Miles'
        value={vehicleData.date_of_service}
        />
        <div className='editBtns'>
          <i className="fas fa-plus" onClick={handleClick} />
          <Link to="/">
            <i className="far fa-window-close" />
          </Link>
        </div>
      </form>
  )
}

export default AddVehicle;
