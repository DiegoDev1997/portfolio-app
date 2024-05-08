import { createContext, ReactNode, useContext, useState } from "react"

type Props={
    children:ReactNode
}

type ContextType={
    onMenuMobile:boolean,
    handleMenuMobile:(state:boolean)=>void
}

export const context=createContext<ContextType>({} as ContextType)


export const ContextProvider=({children}:Props)=>{
    const [onMenuMobile,handleMenuMobile]=useState(false)


    const values={
        onMenuMobile,handleMenuMobile
    }
    return <context.Provider value={values}>
        {children}
    </context.Provider>
}


export const useAppContext=()=>useContext(context)