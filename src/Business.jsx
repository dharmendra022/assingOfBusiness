import React, { useEffect, useState } from 'react';
// import AlbumIcon from '@mui/icons-material/Album';
import ReactDOM from 'react-dom';

function Business() {

    const [user, setUser] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://api.github.com/repos/facebook/react/issues');
        // const data = await response.json();
        // console.log(data);
        setUser(await response.json());

    }

    useEffect(() => {
        getUsers();

    }, [])



    return (

        <>
            {
                user.map((curElem) => {
                    console.log(curElem);
                    return (
                        <>

                            <div >
                                <h3>{curElem.title} <span className="color">{curElem.labels[0] && curElem.labels[0].name}</span></h3>
                                <h4 className="id">#{curElem.user.id}</h4>
                                <hr />


                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default Business;
