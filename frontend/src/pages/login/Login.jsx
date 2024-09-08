

const login = () => {
  return (
    <div className="fex fex-col item-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">Login
            <span className="text-blue-500">ChatApp</span>
            
            </h1>
            <form>
                <div>
                    <label className="label p-2">
                        <span className="text-red-600 text-base label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10"></input>
               </div>
               <div>  <label className="label p-2">
                        <span className="text-red-600 text-base label-text">Password</span>
                    </label>
                    <input type="text" placeholder="Enter password" className="w-full input input-bordered h-10"></input>

               </div>
               <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                {"Don't"} have a account?

               </a>
               <div>
                <button className="btn btn-outline  btn-success">Login</button>
               </div>
            </form>
            
            </div>
        
      
    </div>
  )
}

export default login;
