
import { useState } from "react"
import { useSelector } from "react-redux"
import HeaderCM from "../HeaderCM.js"

import "./crudUser.scss"
import FormAddNewUser from "./FormAddNewUser.js"

function CRUDUser() {
    const [state, setState] = useState({
        dataUser: {},
        showForm: false,
        showBtnCreate: true
    })
    let user = useSelector((state) => {
        return state.user
    })

    let btnCreatUserClick = () => {
        let copyState = { ...state }
        copyState.showForm = !copyState.showForm;
        copyState.showBtnCreate = !copyState.showBtnCreate;
        setState({
            ...copyState
        })
    }

    let check = true;
    if (user.role !== "Admin") {
        check = false;
        alert("you have't permittion to access!")
        let newURL = "http://" + window.location.host + "/";
        window.location.assign(newURL)
    }
    return (
        <>
            <HeaderCM />
            <div className="cruduser" style={check ? { display: "block" } : { display: "none" }}>
                <div className="createUser"                 >
                    {
                        state.showBtnCreate ?
                            <button onClick={() => { btnCreatUserClick() }}>
                                Create New User
                            </button> :
                            <></>
                    }

                </div>
                {state.showForm ? <FormAddNewUser btnCreatUserClick={btnCreatUserClick} /> : <></>}
            </div>
        </>
    );
}

export default CRUDUser;