// react icons;
import { FaPhoneSquareAlt, FaMapMarkerAlt } from "react-icons/fa";
// hero icons;
import { } from '@heroicons/react/24/solid';

const ContactMe = () => {
    return (
        <div className="mt-[200px] max-w-screen-2xl mx-auto">
            <div className="flex flex-col items-center">
                <div className="flex gap-2 justify-center">
                    <h3 className="uppercase text-4xl font-semibold text-[#15E0B7] inline-block">contact </h3> <span className="uppercase text-4xl font-semibold text-[#42b9c2]"> me</span>
                </div>
                <progress className="bg-[#15E0B7] progress w-60"></progress>
                <p className="my-5 font-light text-[#15E0B7] text-xl font-sans">Get in Touch</p>
            </div>
            <div className="flex">
                <div className="w-5/12">
                    <div className="flex items-center gap-4">
                        <span className="border-2 border-[#15E0B7] text-2xl p-2 rounded-full"><FaPhoneSquareAlt /></span>
                        <div>
                            <p className="text-3xl font-bold text-[#15E0B7]">Phone :</p>
                            <p className="text-xl font-light">+8801580590037</p>
                            <p className="text-xl font-light">+8801857400322</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 my-5">
                        <span className="border-2 border-[#15E0B7] text-4xl p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>

                        </span>
                        <div>
                            <p className="text-3xl font-bold text-[#15E0B7]">Email :</p>
                            <p className="text-xl font-light">abdurrahim99100@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="border-2 border-[#15E0B7] text-2xl p-2 rounded-full"><FaMapMarkerAlt /></span>
                        <div>
                            <p className="text-3xl font-bold text-[#15E0B7]">Location :</p>
                            <p className="text-xl font-light">Nazirpur, Pirojpur, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 text-black w-7/12">
                    <input type="name" name="name" placeholder="Name" className="input input-bordered input-success" />
                    <input type="email" name="email" placeholder="Email" className="input input-bordered input-success" />
                    <input type="subject" name="subject" placeholder="Subject" className="input input-bordered input-success" />
                    <textarea type='text' name="text" className="textarea textarea-accent" placeholder="Message"></textarea>

                    <div className="flex btn btn-accent w-2/12">
                        <button className="uppercase">send</button>
                        <span>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
