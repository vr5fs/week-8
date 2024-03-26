import React, { useState } from 'react';
function SignupForm() {
    const [formData, setFormData] = useState({
        email: '', password: ''
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can handle form submission, like sending data to the server
        console.log('Form submitted:', formData);
    };
    return (
        <div className='col-md-4'>
            <h4>Sign Up</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label> Name: </label>

                    <input type="text" name="text" className="form-control"

                        value={formData.Name}
                        onChange={handleChange}
                        required />
                </div>
                <div className="form-group">
                    <label> RollNo: </label>

                    <input type="text" name="roll no" className="form-control"

                        value={formData.RollNo}
                        onChange={handleChange}
                        required />
                </div>
                <div className="form-group mt-3">
                    <label> Email: </label>

                    <input type="email" name="email" className="form-control"

                        value={formData.email}
                        onChange={handleChange}
                        required />
                </div>
                <div className="form-group">
                    <label> Password: </label>

                    <input type="password" name="password" className="form-control"

                        value={formData.password}
                        onChange={handleChange}
                        required />
                </div>
                <div className="form-group">
                    <label> Confirm Password: </label>

                    <input type="password" name="password" className="form-control"

                        value={formData.Confirmpassword}
                        onChange={handleChange}
                        required />
                </div>
                <div className='mt-3'>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
}
export default SignupForm;