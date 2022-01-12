import React from "react";

function RepoList({repos, setSelectedRepo}) {
    const handleClick = (repo) => {
        setSelectedRepo(repo)
    }
    return (
        <ul>
            {repos.map(repo => <li key={repo.id}><a onClick={() => handleClick(repo)}>{repo.name}</a></li>)}
        </ul>
    )
}

export default RepoList