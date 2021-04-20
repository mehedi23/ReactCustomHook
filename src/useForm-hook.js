import {useState} from "react";

const useFormCustomHook = () => {

    const [formInfo, setFormInfo] = useState({
        firstName: "", 
        secondName: "", 
        email: ""
    });

    const inputChangeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            firstName: e.target.name === "first name" ? e.target.value : formInfo.firstName,
            secondName: e.target.name === "second name" ? e.target.value : formInfo.secondName,
            email: e.target.name === "third name" ? e.target.value : formInfo.email
        });
    };

    const outPut = () => {
        console.log(formInfo)
        setFormInfo({
            firstName: "", 
            secondName: "", 
            email: ""
        });
    };

    return {
        inputChangeHandler,
        outPut,
        formInfo
    }
}

export default useFormCustomHook;