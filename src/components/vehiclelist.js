import { useEffect , useState } from "react";
import axios from 'axios';




function VehicleList(){
    const [vehicles , setVehicles] = useState([]);


    useEffect(()=>{
        axios.get('http://localhost:5001/vehicles')
            .then(response=>{
                setVehicles(response.data);


            })
            .catch(error=>{
                console.log('There was an error fetching the vehicles data!',error);
            })
    },[])


    return (
        <div className="container mt-4">
            <h2 style={{
                textAlign:"center",
                padding:"20px",
                backgroundColor:"green"

            }}>Vehicle List</h2>
            <div className="row">
                {vehicles.map(vehicle => (
                    <div className="col-md-4" key={vehicle.id}>
                        <div style={{ 
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '10px',
                        borderColor:'green',
                    }}>
                            <img src={vehicle.image} className="card-img-top" style={{ marginBottom: '20px' }}height={250} alt={vehicle.name}/>
                            <div className="card-body">
                                <h5 style={{color:'pink'}}className="card-title">{vehicle.name}</h5>
                                <p className="car-text">Price : ${vehicle.price}</p>
                                <p className="car-text">Mileage : {vehicle.mileage} </p>
                                <p className="car-text">Seats : {vehicle.seats} </p>
                                <p className="car-text">Color: { vehicle.color} </p>
                                <p className="car-text">Fuel : {vehicle.fuel } </p>
                                <p className="car-text">Gear : { vehicle.gear} </p>
                                <p className="car-text">Description : {vehicle.description } </p>
                            </div>
                        </div>


                    </div>


                ))}
            </div>


        </div>
    )
}


export default VehicleList;
