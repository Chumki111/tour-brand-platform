import { Link } from "react-router-dom";


const Register = () => {
    const handleRegister =(e) =>{
       
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;  
        console.log(name,email,password);
    }
    return (
      <div className="mt-12">
      <div className="w-full mx-auto lg:w-[800px] shadow-lg bg-white flex group text-black">
     
     <form onSubmit={handleRegister} className="p-8 flex-1">
       <h1 className="text-4xl pb-4">Sign Up</h1>
       <div className="space-y-5">
        {/* name field */}
       <label htmlFor="email" className="block">Name</label>
         <input id="name" name="name" type="text" placeholder="Jhon" className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-solid  invalid:border-red-700 valid:border-black"/>
         {/* email field */}
         <label htmlFor="email" className="block">Email</label>
         <input id="email" name="email" type="email" placeholder="example@example.com" className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-solid  invalid:border-red-700 valid:border-black"/>
         {/* password field */}
         <label htmlFor="password" className="block">Password</label>
         <input id="password" name="password" type="password" placeholder=".............." min={5} className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-solid invalid:border-red-700 valid:border-black"/>
         {/* image field */}
         <label htmlFor="password" className="block">Select Image</label>
         <input id="image" name="image" type="file" placeholder="Upload Image"  className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-solid invalid:border-red-700 valid:border-black"/>
       </div>
       {/* button type will be submit for handling form submission*/}
       <button type="submit" className="py-2 px-5 mb-4 mt-8 overflow-hidden shadow-lg border-2 rounded-md border-solid border-black before:block before:absolute before:translate-x-full before:inset-0 before:bg-black before:hover:translate-x-0  before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-black relative inline-block hover:text-white z-50">Submit</button>
       <p className="mb-3">Already have an account?<Link to="/login" className="underline">Login</Link></p>
     </form>
     <div className="w-1/2 min-h-full bg-black relative overflow-hidden hidden lg:block">
       <h1 className="text-white text-2xl absolute bottom-3 right-3 text-right">Hey! <br /> Welcome to<br /> Unify</h1>
       <span className="bg-white w-32 h-32 -top-8 -right-8 rounded-full absolute z-20 group-hover:w-56 group-hover:h-56 duration-500"></span>
       {/* <span className="bg-[#fff] w-36 h-36 -top-5 -left-5  rounded-full absolute z-10"></span> */}
     </div>
   </div>
     
     </div>
    );
};

export default Register;