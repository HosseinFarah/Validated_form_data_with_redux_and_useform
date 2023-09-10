import { useForm } from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import {getAge,getEmail,getFname,getGender,getLname,getPass} from './store'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
export const Test = () => {
  const selector = useSelector((state)=>state.form);
  const dispatch = useDispatch();

    const schema = yup.object().shape({
    fname: yup.string().required(),
    lname:yup.string().required(),
    gender:yup.string().required(),
    age:yup.number().min(18,"Age>=18").required().typeError("Enter Number"),
    password:yup.string().min(4,"Min Pass 4 Char").max(15,"Max Pass 15 Char").matches(/[a-z]+/,"Enter One Char a-z").required(),
    repassword:yup.string().oneOf([yup.ref("password")]).required(),
    email:yup.string().email("Enter Valid Email").required(),
    reemail:yup.string().email("Enter Valid Email").oneOf([yup.ref("email")],"Email not Match!").required()
  })
  const {register,handleSubmit,reset,formState:{errors}} = useForm({resolver:yupResolver(schema)});

  const [name,setName] = useState("");
  const [family,setFamily] = useState("");
  const [sex,setSex] = useState("")
  const [uage,setUage] = useState("")
  const [pass,setPass] = useState("")
  const [mail,setMail] = useState("")
  const chkSubmit = ()=>{
    console.log("form Submited!");
    dispatch(getFname({data:name}))
    dispatch(getLname({data:family}))
    dispatch(getGender({data:sex}))
    dispatch(getAge({data:uage}))
    dispatch(getPass({data:pass}))
    dispatch(getEmail({data:mail}))
    reset();
    console.log(selector.allUser);
  }


  return (
    <>
    <form className="row g-3" onSubmit={handleSubmit(chkSubmit)}>
      <div className="col-md-6">
        <input className="form-control" type="text" placeholder="Firstname" name="fname" {...register("fname")} onChange={(e)=>setName(e.target.value)}/>
        {errors.fname && <h5>{errors.fname.message}</h5>}
      </div>
      <div className="col-md-6">
        <input className="form-control" type="text" placeholder="Lastname" name="lname" {...register("lname")} onChange={(e)=>setFamily(e.target.value)}/>
        {errors.lname && <h5>{errors.lname.message}</h5>}
      </div>
      <div class="col-md-4">
        <select className="form-control" name="gender" {...register("gender")} onChange={(e)=>setSex(e.target.value)}>
        {errors.gender && <h5>{errors.gender.message}</h5>}
          <option selected>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
      <div class="col-md-4">
        <input className="form-control" type="number" placeholder="Age" name="age" {...register("age")} onChange={(e)=>setUage(e.target.value)}/>
        {errors.age && <h5>{errors.age.message}</h5>}
      </div>
      <div class="col-md-6">
        <input name="password"
          className="form-control"
          type="password"
          placeholder="Password"
          {...register("password")}
          onChange={(e)=>setPass(e.target.value)}
        />
        {errors.password && <h5>{errors.password.message}</h5>}
      </div>
      <div class="col-md-6">
        <input name="password"
          className="form-control"
          type="password"
          placeholder="password"
          {...register("repassword")}
        />
        {errors.repassword && <h5>{errors.repassword.message}</h5>}
      </div>
      
      <div class="col-md-6">
        <input name="email" className="form-control" type="email" placeholder="Email" {...register("email")} />
        {errors.email && <h5>{errors.email.message}</h5>}
      </div>
      <div class="col-md-6">
        <input name="email"
          className="form-control"
          type="email"
          placeholder="Enter Email Again!"
          {...register("reemail")}
          onChange={(e)=>setMail(e.target.value)}
        />
        {errors.reemail && <h5>{errors.reemail.message}</h5>}
      </div>

      <button type="submit" className="btn btn-primary">Add to List</button>
    </form>
    {<h5>Check The submitted data with:<Link to={`/${selector.fname}`}>{selector.fname}</Link></h5>}
    </>
  );
};
