import { authModelState } from '@/atoms/authModelAtom';
import React from 'react';
import { useSetRecoilState } from 'recoil';

type SignupProps = {
    
};

const Signup:React.FC<SignupProps> = () => {
    const setAuthModelState = useSetRecoilState(authModelState);
    const handleClick = () => {
		setAuthModelState((prev) => ({ ...prev, type: "login" }));
	};
    return (
    <form className="space-y-6 px-6 py-3 pb-8 pt-0">
        <h3 className="text-xl font-mono text-gray-800">Register to LeapCode</h3>
        <div>
            <label htmlFor='email' className='text-sm font-mono block mb-2 text-gray-600'>
                Email:
            </label>
            <input type='email' name='email' id='email' 
            className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5
            bg-gray-200 border-gray-500 placeholder-gray-400 text-gray-800 font-mono'
            placeholder='name@company.com'
            />
        </div>
        <div>
            <label htmlFor='userName' className='text-sm font-mono block mb-2 text-gray-600'>
                Username:
            </label>
            <input type='userName' name='userName' id='userName' 
            className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5
            bg-gray-200 border-gray-500 placeholder-gray-400 text-gray-800 font-mono'
            placeholder='firstname.lastname'
            />
        </div>
        <div>
            <label htmlFor='password' className='text-sm font-mono block mb-2 text-gray-600'>
                Password:
            </label>
            <input type='password' name='password' id='password' 
            className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5
            bg-gray-200 border-gray-500 placeholder-gray-400 text-gray-800 font-mono'
            placeholder='******'
            />
        </div>
        <button type='submit' className='w-full text-white focus:ring-blue-300 font-mono rounded-lg
                text-lg px-5 py-3 text-center bg-red-500 hover:bg-red-700'>
        Register
        </button>
			<div className='text-sm font-mono text-red'>
				Already have an account?{" "}
				<a href='#' className='text-blue-700 hover:underline' onClick={handleClick}>
					Log In
				</a>
			</div>
    </form>
    );
}
export default Signup;