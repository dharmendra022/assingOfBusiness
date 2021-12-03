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
                    console.log(user);
                    return (
                        <>

                            <div >
                                <h3>{curElem.title}</h3>
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
