import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../../../auth/helper';
import Dash from './dash';
import { payitback, updateUser } from './helper/userapicalls';


function UserDashboard() {

    const { user, token } = isAuthenticated();

    const [hasPaidEntry, setHasPaidEntry] = useState(user.hasPaidEntry)

    const [error, setError] = useState(null);

    const [val, setval] = useState({})
    const preLoad = async () => {
        const d = await payitback(user._id, token);

        setval(d);


    };

    useEffect(() => {
        preLoad();
    }, []);

    function launchBOLT() {
        console.log(val)
        window.bolt.launch({
            key: val.key,
            // salt: val.salt,
            txnid: val.txnid.toString(),
            hash: val.hash,
            amount: val.amount,
            firstname: val.firstname,
            email: val.email,
            phone: val.phone,
            productinfo: val.productinfo,
            udf5: val.udf5,
            surl: val.surl,
            furl: val.furl
        }, {
            responseHandler: function (BOLT) {
                if (BOLT.response.txnStatus !== 'CANCEL') {


                    updateUser(user._id, token, { hasPaidEntry: true }).then(data => {
                        if (data.error) {
                            setError(data.error);
                        }
                    }).catch(err => console.log(err))
                }

            },
            catchException: function (BOLT) {
                setError(BOLT.message);
            }
        });
    }
    const payForm = () => {
        return (

            < input onClick={launchBOLT} value="sub" type="button" />

        )
    }
    return (

        <Dash />
        /* {JSON.stringify(user)}
        <br></br>
        {hasPaidEntry.toString()}
        {payForm()} */
        /* <button onClick={payit}>pay</button> */


    )
}

export default UserDashboard
