import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'
import { Audio, ColorRing } from 'react-loader-spinner'
;
export const UserView = () => {
    let user = [12,4,5,7,8]
    const state = useSelector((state) => state)
    const dispatch = useDispatch();

    const fetchUsersFunc  = () => {
         dispatch(fetchUsers())
    }
    return (
    <>
        <button style={{display:"block"}} onClick={fetchUsersFunc} >
            Get List
        </button>
        <div>

        {
            state.user.loading ? 
            <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['black']}
            />:
            <ol>
        {
            state.user.user?.map((i) => <li key={i} >{i}</li>)
        }
        </ol>
        }
        </div>
    </>
 )
}
