import React from "react";
import { useNavigate } from 'react-router-dom'

function RepoList({repos, setSelectedRepo}) {
    const navigate = useNavigate()

    const handleClick = (repo) => {
        setSelectedRepo(repo)
        navigate('/repo')
    }
    return (
        <ul>
            {repos.map(repo => <li key={repo.id}><a onClick={() => handleClick(repo)}>{repo.name}</a></li>)}
        </ul>
    )
}

export default RepoList