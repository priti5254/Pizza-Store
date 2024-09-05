import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function DisplayAllitems() {
    const [DisplayAllitems, setDisplayAllitems] = useState([]);

    useEffect(() => {
        fetchDisplayAllitems();
    
    }, []);



    const fetchDisplayAllitems = () => {
        axios.get('http://localhost:5000/DisplayAllitems')
            .then(response => {
               setDisplayAllitems(response.data);
            })
        .catch(error => {
            console.error('There was an error fetching the displayAllitems data', error)
            })

    }

    const handleDelete = (id)=> {
        axios.delete(`http://localhost:5000/DisplayAllitems/${id}`)
        .then(response => {
           fetchDisplayAllitems();
        })
    .catch(error => {
        console.error('There was an error deleting the displayAllitems data', error)
        })

    }

    return (
        <div className="container mt-4">
            <h2>DisplayAllitems List</h2>
            <div className="row">
                {DisplayAllitems.map(DisplayAllitems => (
                    <div className="col-md-4" key={DisplayAllitems.id}>
                        <div className="card mb-4">
                            <img src={DisplayAllitems.image} height={300} className="card-img-top" alt={DisplayAllitems.name} />
                            <div className="card-body">
                                <h5 className="card-title">{DisplayAllitems.name}</h5>
                                <p className="card-text">Price: ${DisplayAllitems.price}</p>
                                <p className="card-text">Type: {DisplayAllitems.type}</p>
                                <p className="card-text">Description: {DisplayAllitems.description}</p>
                                <button className="btn btn-danger me-2" onClick={()=> handleDelete(DisplayAllitems.id)}>DELETE</button>
                                <button className="btn btn-warning"onClick={()=> Navigate('/UpdateDisplayAllitems/${DisplayAllitems.id}')}>UPDATE</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DisplayAllitems;
