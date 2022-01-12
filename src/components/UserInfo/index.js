import React, {useState, useEffect} from "react";

function UserInfo({repos, username}){
    const [userImg, setUserImg] = useState()
    useEffect(async () => {
        if(repos.length === 0){
            let {data} = await axios.get(`https://api.github.com/users/${username}`)
            setUserImg(data.avatar_url)
        } else {
            setUserImg(repos[0].owner.avatar_url)
        }
    }, [username])
    
    return(
        <>
        <img />
        <p>{username.toLowerCase()}</p>
        </>
    )
}

export default UserInfo