import React, { useMemo, useState } from 'react'
import '../style.css'
import Image from './assets/image'
import { Link } from 'react-router-dom'


const Component = ({ propError, registration, onSubmit }) => {
  const [error, setError] = useState(propError);

  useMemo(() => setError(propError), [propError]);

  const onChange = (e) => {
    const iTag = e.target;
    setError({ ...error, [iTag.name]: '', error: '' });
  } 

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex justify-content-center align-items-center bg-white login-container py-4" style={{ minHeight: 'calc(100vh - 56px)' }}>
        <Image />
        <form className="border-0 px-3"  onSubmit={onSubmit} >
          <h3 className="mb-3 text-success">Just take a step to unlock the world</h3>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input onChange={onChange} required type="email" name="email" placeholder="Enter a valid email address" className={`form-control ${error.email ? "text-danger border-danger" : ''}`} />
            <small className="text-danger">{error.email}</small>
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input onChange={onChange} required pattern="\S{6,}" type="password" name="password" placeholder="Enter password" className={`form-control ${error.password ? "text-danger border-danger" : ''}`} />
            <small className="text-danger">{error.password}</small>
          </div>

          {registration && <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input onChange={onChange} required pattern="\S{6,}" type="password" name="confirmpassword" placeholder="Confirm Password" className={`form-control ${error.confirmpassword ? "text-danger border-danger" : ''}`} />
            <small className="text-danger">{error.confirmpassword}</small>
          </div>}

          {!registration && <div className="mb-3">
            <Link to="#" className="ml-auto mb-0 text-sm">Forgot Password?</Link>
          </div>}

          {error.error && <div className="alert alert-danger">{error.error}</div>}

          <button type="submit" className="btn btn-blue mb-3">{registration ? "Let's Begin The Journey" : "Let's join again"}</button>

          {!registration ?
            <small className="font-weight-bold d-block">
              Don't have an account? <Link className="text-info" to='/register'>Register</Link>
            </small> :
            <small className="font-weight-bold d-block">
              Already have an account? <Link className="text-info" to='/login'>Sign In</Link>
            </small>
          }
        </form>
      </div>
      <div className="bg-blue py-3 px-4">
        <Link to="#" className="text-white">Contact Us</Link>
      </div>
    </div>
  )
}

export default Component;