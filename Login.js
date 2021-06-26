import React, { createRef, useState } from 'react'
import '../style.css'
import LoginRegistration from './LoginRegistration';
import { urls } from '../config.json';
import axios from "axios";
import toObject from '../utilities/toObject';
import { useDispatch } from 'react-redux';
import { loading, notloading } from '../utilities/ReduxStore/reducers/loading';
import { Redirect } from 'react-router';
import { setuser } from '../utilities/ReduxStore/reducers/user';


const Login = () => {
  const [error, setError] = useState({ email: '', password: '', error: '' });
  const [redirect, setRedirect] = useState(false)
  // const form = createRef();
  const dispatch = useDispatch()

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(loading());
    try {
      const user = await axios.post(urls.login, toObject(e.target), {
        headers: {
          "Content-Type": 'application/json',
        },
        "withCredentials":true,
      })
      dispatch(setuser(user.data.data));
      setRedirect(true);
    } catch (e) {
      if (e.response) setError(e.response.data.error)
      else alert("Something went wrong!!");
    }
    dispatch(notloading())
  }
  
  return  redirect? <Redirect to="/home"/> : <LoginRegistration propError={error} onSubmit={onSubmit} />
}

export default Login;