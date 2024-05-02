import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DeleteForm({ hiredPeople, setHiredPeople }) {
    const params = useParams();
    const navigate = useNavigate();

    function handleDelete() {
        const updatedPeople = hiredPeople.filter(p => p.index !== Number(params.index));
        setHiredPeople(updatedPeople);
        navigate('/dashboard');
    }

    return (
        <div>
            <p>Are you sure you want to delete this person?</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}