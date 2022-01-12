import React from "react";
import {BackButton} from '../../components'

function Repo({selectedRepo}) {
    const date = new Date(selectedRepo.updated_at)
    return(
        <>
        <BackButton />
        <h1>{selectedRepo.name}</h1>
        <p>{selectedRepo.description}</p>
        <ul>
            <li>forks: {selectedRepo.forks_count}</li>
            <li>stargazers: {selectedRepo.stargazers_count}</li>
            <li>watchers: {selectedRepo.watchers_count}</li>
            <li>last updated: {date.toDateString()}</li>
        </ul>
        </>
    )
}

export default Repo