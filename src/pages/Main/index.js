import React, {useState} from "react";
import { SearchBar, RepoList } from "../../components";

function Main({username, setUsername, repos, setSelectedRepo}) {
    
    return (
        <>
        <SearchBar setUsername={setUsername} />
        {username && <RepoList repos={repos} setSelectedRepo={setSelectedRepo} />}
        </>
    )
}

export default Main