import { createContext, useContext, useState } from "react";

const mernContext = createContext()

export const MernContextAPI = (props) => {
    console.log(props);
    const [course, setCourse] = useState(["MongoDB", "Express Js", "React Js", "Node Js"])
    return (
        <>
            <mernContext.Provider value={{ course, setCourse }}>
                {props.children}
            </mernContext.Provider>
        </>
    )
}

export const useMern = () => {
    const mernData = useContext(mernContext)
    return mernData
}