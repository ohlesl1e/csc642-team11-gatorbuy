import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <Container>
                <h3 class="text-center" style={{ fontWeight: 'bold', marginTop: '30px', color: 'purple' }}>Login to GatorBuy</h3>
                <form action="/" style={{ width: '600px', margin: 'auto', fontWeight: 'bold', fontSize: '20px' }}>
                    <div class="form-group">
                        <label for="email" style={{ marginTop: '20px', marginBottom: '10px' }}>*SF State Email</label>
                        <input type="email" name="email" id="emial" class="form-control" placeholder="your@mail.sfsu.edu OR your@sfsu.edu" required
                            style={{ border: '2px solid black', borderRadius: '20px' }} />
                    </div>
                    <div class="form-group">
                        <label for="password" style={{ marginTop: '20px', marginBottom: '10px' }}>*Password</label>
                        <input type="password" name="password" id="password" class="form-control" placeholder="your password" required
                            maxlength="16" style={{ border: '2px solid black', borderRadius: '20px' }} />
                    </div>
                    <div>
                        <button type="submit" class="btn btn-success btn-lg" id="cancel-button"
                            style={{ width: '300px', height: '70px', marginTop: '40px', marginLeft: '150px' }}>Login</button>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '30px' }}>
                        <a href="http://www.sfsu.edu">Forget Password?</a><br />
                        <label style={{ marginTop: '10px', marginBottom: '10px' }}>OR</label><br />
                        <a href="/Registration">Create your account</a>
                    </div>
                </form>

            </Container>
        </div >
    )
}


export default Login