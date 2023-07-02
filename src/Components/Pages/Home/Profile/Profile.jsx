import Banner from '../../../../assets/profilePicture/20190119_133806~2.png';
import { FaFacebookSquare, FaGitSquare, FaLinkedin, FaYoutubeSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="mt-36 max-w-screen-2xl mx-auto">
            <div className="avatar flex justify-center">
                <div className="w-28 rounded-full ring ring-primary ring-[#15E0B7] ring-offset-2">
                    <img src={Banner} />
                </div>
            </div>
            <div className='w-8/12 mx-auto'>
                <div className='p-10'>
                    <h3 className='text-5xl text-[#15E0B7] font-semibold'>Hi, <br /> I'm Abdur Rahim <br /> As a React developer </h3>
                    <p className='font-light text-xl'>I am a MERN Stack web developer. <br /> I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                </div>
            </div>
            <div>
                <ul className='text-5xl flex gap-5 justify-center'>
                    <li className='border-2 border-[#15E0B7] rounded'>
                        <Link to='https://www.facebook.com/abdurrahimm99100/'> < FaFacebookSquare /> </Link>
                    </li>
                    <li className='border-2 border-[#15E0B7] rounded'>
                        <Link to='https://github.com/abdurrahim99100'> < FaGitSquare /> </Link>
                    </li>
                    <li className='border-2 border-[#15E0B7] rounded'>
                        <Link to='https://www.linkedin.com/in/abdurrahim013/'> < FaLinkedin /> </Link>
                    </li>
                    <li className='border-2 border-[#15E0B7] rounded'>
                        <Link to='https://www.youtube.com/@rktvbangla9035/featured'> < FaYoutubeSquare /> </Link>
                    </li>
                    <li className='border-2 border-[#15E0B7] rounded'>
                        <Link> < FaTwitterSquare /> </Link>
                    </li>
                    <li className='border-2 border-[#15E0B7] rounded'>
                        <Link> < FaInstagramSquare /> </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;