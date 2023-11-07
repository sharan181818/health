import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // const response = await axios.post('http://localhost:3000/login', {
            //     username,
            //     password,
            // });

            // const token = response.data.token;

            // // Store the token in local storage or a state management tool
            // console.log('Token:', token);

            console.log(username )
            console.log(password)

            if(username==="sharan@gmail.com" && password==="password"){

                router.push("/dashboard");
            }else{
                alert('Invalid credentials');
            }
        } catch (error) {
            console.error('Error logging in', error);
            alert('Invalid credentials');
        }
    };
  return (
    <>
    
    
  
  <div class=" bg-gray-100 flex h-full items-center py-16">
    <div class="w-full max-w-md mx-auto p-6">
      <div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm ">
        <div class="p-4 sm:p-7">
        

          <div class="mt-5">
          

 
            <form>
              <div class="grid gap-y-4">
            
                <div>
                  <label for="email" class="block text-sm mb-2 " value={username} onChange={(e) => setUsername(e.target.value)}>Email address</label>
                  <div class="relative">
                    <input type="email" id="email" name="email" class="py-3 px-4 block w-full border-gray-200 rounded-md border text-sm focus:border-blue-500 focus:ring-blue-500 " required aria-describedby="email-error"/>
                    <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                      <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>
                  </div>
                  <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                </div>
              
                <div>
                  <div class="flex justify-between items-center">
                    <label for="password" class="block text-sm mb-2 " value={password} onChange={(e) => setPassword(e.target.value)}>Password</label>
                 
                  </div>
                  <div class="relative">
                    <input type="password" id="password" name="password" class="py-3 px-4 block w-full border-gray-200 border  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 " required aria-describedby="password-error"/>
                    <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                      <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>
                  </div>
                  <p class="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
                </div>
             
          

                <button onClick={handleSubmit} class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm ">Sign in</button>
              </div>
            </form>
      
          </div>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}

export default Login