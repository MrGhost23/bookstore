import './Register.css'

const Register = () => {
    return(
        <>
        <div className="login-box w-75 m-auto mt-5">
  <p className='fs-2'>Register</p>
  <form>
    <div className="user-box">
      <input  name="fName" type="text" id="fName"/>
      <label htmlFor="fName">First Name :</label>
    </div>
    <div className="user-box">
      <input  name="lName" type="text"  id="lName"/>
      <label htmlFor="lName">Last Name :</label>
    </div>
    <div className="user-box">
      <input  name="email" type="text" id="email"/>
      <label htmlFor="email">Email :</label>
    </div>
    <div className="user-box">
      <input name="password" type="password" id="password" className='mb-1'/>
      <label htmlFor="password">Password :</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
  <p className='mt-3'>Have an account? <a href="" className="a2">Login!</a></p>
</div>
        </>
    )
}

export default Register