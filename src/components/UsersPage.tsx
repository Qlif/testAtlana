import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import List from "./List";
import UserItem from "./UserItem";
import { useNavigate } from 'react-router-dom';
import { Octokit}  from "@octokit/core";

const UsersPage:FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const navigate = useNavigate();
    // TODO: move to .env
    const octokit = new Octokit({ auth: `` });

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await octokit.request('GET /search/users', {q: '*'})
            console.log(response)
            setUsers(response.data.items)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <List
            items={users}
            renderItem={(user: IUser) =>
                <UserItem
                    onClick={(user) => navigate('/users/' + user.id)}
                    user={user}
                    key={user.id}
                />}

        />
    );
};

export default UsersPage;