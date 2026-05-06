
import { useEffect } from "react"

//HOC ES UNA FUNCION
export const withLogging = (WrappedComponent)=> {

    //Creamos el component
    const ComponentWithLogging = (props)=> {
        useEffect(()=>{
            console.log(`${WrappedComponent.name} se montó! 🥳`)
        },[])



        return(
            <WrappedComponent {...props}/>
        )
    }
//nuevo componente que crea hoc
    return ComponentWithLogging
}