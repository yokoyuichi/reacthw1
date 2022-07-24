// import React from "react";
// import{ useState } from "react";
// import {useForm} from "react-hook-form";

// export const form = () => {
//     const {register, handleSubmit} = useForm({
//         defaultValues:{
//             Name: "",
//             email: ""
//         }
//     });
//     return(
//         <div>
//             <form onSubmit={handleSubmit((data)=>{
//                 console.log(data)
//             })}
//             >
//             <input
//             {...register("Name", {required: true})}
//             placeholder="名前">
//             </input>
//             <input
//             {...register("email", {required: true})}
//             placeholder="メールアドレス">
//             </input>
//             <input type="submit"></input>
//             </form>
//         </div>
//     )
// }