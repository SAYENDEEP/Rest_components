import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loading, notloading } from '../utilities/ReduxStore/reducers/loading';
import LoginRegistration from './LoginRegistration';
import { urls } from '../config.json';
import toObject from '../utilities/toObject';
import { setuser } from '../utilities/ReduxStore/reducers/user';
import { Redirect } from 'react-router';



const Register = () => {
  const [error, setError] = useState({ email: '',password:'', confirmpassword: '', error: '' });
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (e.target.password.value !== e.target.confirmpassword.value) {
      setError({ confirmpassword: "Password Did't Match" });
      return;
    }
    dispatch(loading());
    
    try {
      const user = await axios.post(urls.register, toObject(e.target), {
        headers: {
          "Content-Type": 'application/json',
        },
        withCredentials:true
      })
      dispatch(setuser(user.data.data));
      setRedirect(true);
    } catch (err) {
      console.log(err.response.data.error);
      if (err.response) setError({ ...error, ...err.response.data.error });
      else alert("Something went wrong!!");
    }
    dispatch(notloading())
  }

  return redirect ? <Redirect to="/updateProfile"/> : <LoginRegistration propError={error} onSubmit={onSubmit} registration/>
}

export default Register;