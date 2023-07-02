import { Link } from 'react-router-dom';
import profileImg from '../../../assets/profilePicture/20190119_133806~2.png';
const NavBar = () => {
    const users = false;
    const navItems =
        <>
            <li className='hover:bg-gray-300 rounded'> <Link>home</Link> </li>
            <li className='hover:bg-gray-300 rounded'> <Link>about</Link> </li>
            <li className='hover:bg-gray-300 rounded'> <Link>skills</Link> </li>
            <li className='hover:bg-gray-300 rounded'> <Link>project</Link> </li>
            <li className='hover:bg-gray-300 rounded'> <Link>comments</Link> </li>
            {
                users ?
                    <>
                        <li className='hover:bg-gray-300 rounded'> <Link>logout</Link> </li>
                    </> :
                    <>
                        <li className='hover:bg-gray-300 rounded'> <Link>login</Link> </li>
                    </>
            }
        </>
    return (
        <div className="navbar justify-between max-w-screen-2xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black uppercase items-start">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <button className='flex items-center gap-2'>
                    <img className='w-10 h-10 rounded-full' src={profileImg} alt="" />
                    <p className='text-2xl font-semibold'>Abdur Rahim</p>
                </button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 uppercase font-semibold items-center">
                    {
                        navItems
                    }
                </ul>
            </div>
        </div>
    );
};

export default NavBar;