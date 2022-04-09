import { publicRequest } from "../methods";
import { registerFailure, registerStart, registerSuccess } from "./newUserRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { useridFailure,useridSuccess, useridStart } from "./userIdRedux";


export const login = async(dispatch, user)=>{
    dispatch(loginStart())
    try{
        const res = await publicRequest.post("login",user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure())
    }
}

export const register = async(dispatch, newuser) => {
    dispatch(registerStart())
    try{
        const res = await publicRequest.post("register",newuser)
        dispatch(registerSuccess(res.data))
    }
    catch(err){
        dispatch(registerFailure())
    }
}

// export const change = async(dispatch, userid)=>{
//     dispatch(useridStart())
//     try{
//         const res = await get
//         dispatch(loginSuccess(res.data))
//     }catch(err){
//         dispatch(loginFailure())
//     }
// }