import React, { useState } from 'react';
import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { users } from '../../dummyData'
import { Link } from 'react-router-dom';


const UserList = () => {
    //@USESTATE
    const [data, setData] = useState(users);

    //@ FUNCTION FOR DELETE ONE USER FROM TABLE
    const handleDlete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    //@ CULUMNS TABLE DATAGRID
    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        { field: 'createdDate', headerName: 'Date de création', width: 200, },
        { field: 'status', headerName: 'Etat', width: 120 },
        { field: 'firstName', headerName: 'Nom', width: 120 },
        { field: 'lastName', headerName: 'Prénom', width: 170 },
        { field: 'userName', headerName: 'Nom d utilisateur', width: 170 },
        { field: 'registrationNumber', headerName: 'Matricule', width: 160 },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <DeleteOutline
                            className="userListDelete"
                            onClick={() => handleDlete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    //@ RETURN TABLE {DATAGRID} jsx
    return (
        <div className="container">
            <div className="userList">
                <DataGrid
                    rows={data}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                />
            </div>
            <div className="userAdd">
                <Link to="/newUser">
                    <button className="userButton">Ajouter utilisater</button>
                </Link>
            </div>
        </div>
    );
};

export default UserList;

