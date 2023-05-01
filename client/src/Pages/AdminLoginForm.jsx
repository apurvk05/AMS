import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import classnames from 'classnames'

import '../Style/facultyStudentLogin.css'
import { adminLogin } from '../redux/action/adminAction'

export default function AdminLogin() {
    const store = useSelector((store) => store)
    const dispatch = useDispatch()
    const [registrationNumber, setRegistrationNumber] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const history = useNavigate()
    useEffect(() => {
        if (store.admin.isAuthenticated) {
            history('/admin')
        }
    }, [store.admin.isAuthenticated])
    useEffect(() => {
        if (store.error) {
            setError(store.error)
        }
    }, [store.error])

    const formHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        dispatch(adminLogin({ registrationNumber, password }))

    }

    useEffect(() => {
        if (store.error ||
            store.admin.isAuthenticated) {
            setIsLoading(false)
        }

        else {
            setIsLoading(true)
        }
    }, [store.error, store.admin.isAuthenticated])


    return (
        < div className="row m-5" >
            <div className="col-md-8 m-auto border" style={{ backgroundColor: "#F1F6F9", borderRadius: "1rem", padding: "1rem 1rem 0rem 1rem" }}>
                <div>
                    <h3 className="text-center abo ">Login as Admin</h3>


                    <form noValidate onSubmit={formHandler}>
                        <div className="form-group">
                            <label htmlFor="facRegId">Registration Number</label>
                            <input onChange={(e) => setRegistrationNumber(e.target.value)} type="text" value={registrationNumber} className={classnames('form-control', {
                                'is-invalid': error.registrationNumber
                            })}
                                id="facRegId" />
                            {error.registrationNumber && (
                                <div className="invalid-feedback">{error.registrationNumber}</div>
                            )}
                        </div>

                        {/* Student login form */}

                        <div className="form-group">
                            <label htmlFor="passwordFacId">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} className={classnames("form-control", {
                                'is-invalid': error.password
                            })}
                                type="password" id="passwordFacId" />
                            {error.password && (
                                <div className="invalid-feedback">{error.password}</div>
                            )}
                        </div>

                        <div class="row justify-content-center">
                            <div class="col-md-1">
                                {
                                    isLoading && <div class="spinner" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                }
                            </div>
                        </div>

                        {!isLoading && <button type="submit" className="btn btn-info btn-block">Login</button>}
                    </form>


                    <p className="text-center mt-2 "><Link className="text-center" to="/">Forgot Password</Link></p>
                </div>
            </div>
        </div >
    );
}