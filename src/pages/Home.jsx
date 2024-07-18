import { useRef, useState } from "react";
//import { useQuery } from "@tanstack/react-query";
function Home() {
    const usernameRef = useRef('')
    const passwordRef = useRef('')
    /*const {isPending, error,data} = useQuery({
        queryKey:['repoData'],
        queryFn: ()=>

            fetch(`${import.meta.env.VITE_URL_C}`).then((res) =>
                res.json(),
    ),
    })
    if(isPending) return 'is loading';
    if(error) return 'error'+ error.message;*/
    const handerClick = (e) => {
        fetch(`${import.meta.env.VITE_URL_C}/users/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',

            },
            body:JSON.stringify({
                email: usernameRef.current.value,
                password: passwordRef.current.value
            })
        })
        .then(response=> {
            if(response.ok){
                localStorage.setItem('token',response.headers.get.apply('Authorization'))
                return response.json()
            }
        })
        .then(data=> {
            console.log(data);
            localStorage.setItem('token',data.token)
        })
        .catch(error=> {
            alert(JSON.stringify(error))
        })
        e.preventDefault()
    }
    const handleView = (e)=> {
        fetch(`${import.meta.env.VITE_URL_C}/users/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',

            },

    })
}
    return ( 
        
    <>
    <section className="flex items-center justify-center w-full h-screen">
        <div className="w-1/3 h-1/2 bg-white shadow-lg shadow-indigo-500/40 rounded-md" >
    <form method="post" className="flex flex-col p-6 gap-2">
        <label> Name</label>
            <input type="text" className="block w-2/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ref={usernameRef} required/> 
        <label>Lastname</label> 
            <input type="text" className="block w-2/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ref={passwordRef} required/>
     
        <button type="button" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-slate-400" onClick={handerClick}>Insertar registro</button>
             
        <button type="button" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-slate-400" onClick={handerView}>Insertar registro</button>
    </form>
    </div>
    </section>
    </> 
     
    

);
}

export default Home;