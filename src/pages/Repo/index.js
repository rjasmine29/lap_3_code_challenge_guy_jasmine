import React from "react";
import {BackButton} from '../../components'

function Repo({selectedRepo}) {
    const date = new Date(selectedRepo.updated_at)
    return(
        <>
        <BackButton />
        <h1>{selectedRepo.name}</h1>
        {selectedRepo.description && <p>{selectedRepo.description}</p>}
        <ul>
            <li>Issue count: {selectedRepo.open_issues_count}</li>
            <li>Forks: {selectedRepo.forks_count}</li>
            <li>Stargazers: {selectedRepo.stargazers_count}</li>
            <li>Watchers: {selectedRepo.watchers_count}</li>
            <li>Last updated: {date.toDateString()}</li>
        </ul>
        </>
    )
}

export default Repo