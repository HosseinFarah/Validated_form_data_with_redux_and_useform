import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export const Data = ()=>{
    const {id} = useParams()
    const selector = useSelector((state)=>state.form)
    return(
        <div className="alert alert-info">
        Data set with redux from the valid submitted form with useForm,yup,yupresolver
{<h5>{selector.fname},{selector.lname},{selector.gender},{selector.age},{selector.password},{selector.email}</h5>}
        </div>
    )
}