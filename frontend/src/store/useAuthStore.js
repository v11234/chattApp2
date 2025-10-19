import {create} from  "zustand"
import {axiosInstance }from "../lib/axios"
import toast from "react-hot-toast"

export const useAuthStore = create((set)=>({
authUser:null,
isCheckingAuth:true,
isSignedUp:false,
isLoggingIn:false,

checkAuth:async()=>{
    try {
        const res=await axiosInstance.get("/auth/check");
        set({authUser:res.data});
    } catch (error) {
        console.log("Error in chack auth",error);
        set({authUser:null})
       
    }finally{
 set({isCheckingAuth:false});
    }
},
signup:async(data)=>{
    set({isSignedUp:true})
    try {
        const res= await axiosInstance.post("/auth/signup",data);
        set({authUser:res.data});
        toast.success("Account created successfully");

    } catch (error) {
       toast.error(error.response.data.message);
      
    }finally{
       set({isSignedUp:false});
    }
},
login:async(data)=>{
set({isLoggingIn:true});
try {
 const res =   await  axiosInstance.post("/auth/login",data);
 set({authUser:res.data})
 toast.success("Logged in successfully");
} catch (error) {
    toast.error(error.response.data.message);
}finally{
    set({isLoggingIn:false});
}
},

}))