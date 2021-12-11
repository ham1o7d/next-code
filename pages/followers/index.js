/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import FollowersListComponent from './Followers/FollowersListComponent';

const followers = () => {

    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        fetchFollowers()
    }, []);

    const fetchFollowers = async () => {
        const {data} = await axios.get("https://randomuser.me/api/?results=5")
        setFollowers(data.results)
    }

    return (
        <div className='container'>
            <h2>Followers</h2>
            <Link href={'/'}> Return to TodoList</Link>
            {followers.length !==0 ? <FollowersListComponent followers={followers}/> : <p>Loading...</p>} 
        </div>
    )
}

// 

export default followers
