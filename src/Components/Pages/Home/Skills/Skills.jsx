import html from '../../../../assets/icons/html-5 (1).png';
import css from '../../../../assets/icons/css.png';
import js from '../../../../assets/icons/square-js.svg';
import bootstrap from '../../../../assets/icons/bootstrap (1).png';
import tailwind from '../../../../assets/icons/tailwind-css.png';
import nodeJs from '../../../../assets/icons/node-js (1).png';
import react from '../../../../assets/icons/physics.png';
import firebase from '../../../../assets/icons/firebase.png';
import mongoDB from '../../../../assets/icons/mongodb.png';
import daisyUI from '../../../../assets/icons/daisy-ui.png';
import gitHub from '../../../../assets/icons/github.png';
import figma from '../../../../assets/icons/figma.png';
import expressJs from '../../../../assets/icons/icons8-express-js-500.png';

const Skills = () => {
    return (
        <div className="max-w-screen-2xl mx-auto my-24 mt-52 w-6/12">
            <div className='flex flex-col items-center'>
                <h3 className="uppercase text-4xl font-semibold text-[#15E0B7]">my skills</h3>
                <progress className="bg-[#15E0B7] progress w-56"></progress>
            </div>
            <div className='flex-none md:flex justify-between px-20 mt-20'>
                <ul className="flex flex-col gap-4" data-aos="fade-right">
                    <li className='flex gap-2 items-center'>
                        <img className='w-20 h-20 bg-gray-700 rounded p-2' src={html} alt="" />
                        <div>
                            <p className='text-xl font-semibold text-[#15E0B7] uppercase'>html : 92%</p>
                            <progress className="progress progress-accent w-56 bg-white" value="92" max="100"></progress>
                        </div>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <img className='w-20 h-20 bg-gray-700 rounded p-2' src={css} alt="" />
                        <div>
                            <p className='text-xl font-semibold text-[#15E0B7] uppercase'>css : 83%</p>
                            <progress className="progress progress-accent w-56 bg-white" value="83" max="100"></progress>
                        </div>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <img className='w-20 h-20 bg-gray-700 rounded p-2' src={bootstrap} alt="" />
                        <div>
                            <p className='text-xl font-semibold text-[#15E0B7]'>Bootstrap : 75%</p>
                            <progress className="progress progress-accent w-56 bg-white" value="92" max="100"></progress>
                        </div>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <img className='w-20 h-20 bg-gray-700 rounded p-2' src={tailwind} alt="" />
                        <div>
                            <p className='text-xl font-semibold text-[#15E0B7]'>Tailwind : 86%</p>
                            <progress className="progress progress-accent w-56 bg-white" value="92" max="100"></progress>
                        </div>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <img className='w-20 h-20 bg-gray-700 rounded p-2' src={daisyUI} alt="" />
                        <div>
                            <p className='text-xl font-semibold text-[#15E0B7]'>DaisyUI : 94%</p>
                            <progress className="progress progress-accent w-56 bg-white" value="92" max="100"></progress>
                        </div>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <img className='w-20 h-20 bg-gray-700 rounded p-2' src={figma} alt="" />
                        <div>
                            <p className='text-xl font-semibold text-[#15E0B7]'>Figma : 70%</p>
                            <progress className="progress progress-accent w-56 bg-white" value="92" max="100"></progress>
                        </div>
                    </li>
                </ul>
                <ul className="flex flex-col gap-4" data-aos="fade-left">
                    <li className='flex gap-2 items-center'>
                        <img className='w-20 h-20 bg-gray-700 rounded p-2' src={js} alt="" />
                        <div>
                            <p className='text-xl font-semibold text-[#15E0B7]'>JavaScript : 74%</p>
                            <progress className="progress progress-accent w-56 bg-white" value="74" max="100"></progress>
                        </div>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <img className='w-20 h-20 bg-gray-700 rounded p-2' src={nodeJs} alt="" />
                        <div>
                            <p className='text-xl font-semibold text-[#15E0B7]'> NodeJs : 62%</p>
                            <progress className="progress progress-accent w-56 bg-white" value="62" max="100"></progress>
                        </div>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <img className='w-20 h-20 bg-gray-700 rounded p-2' src={firebase} alt="" />
                        <div>
                            <p className='text-xl font-semibold text-[#15E0B7] '>Firebase : 79%</p>
                            <progress className="progress progress-accent w-56 bg-white" value="79" max="100"></progress>
                        </div>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <img className='w-20 h-20 bg-gray-700 rounded p-2' src={mongoDB} alt="" />
                        <div>
                            <p className='text-xl font-semibold text-[#15E0B7]'>MongoDB : 71%</p>
                            <progress className="progress progress-accent w-56 bg-white" value="71" max="100"></progress>
                        </div>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <img className='w-20 h-20 bg-gray-700 rounded p-2' src={react} alt="" />
                        <div>
                            <p className='text-xl font-semibold text-[#15E0B7]'>React : 72%</p>
                            <progress className="progress progress-accent w-56 bg-white" value="72" max="100"></progress>
                        </div>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <img className='w-20 h-20 bg-gray-700 rounded p-2' src={gitHub} alt="" />
                        <div>
                            <p className='text-xl font-semibold text-[#15E0B7]'>GitHub : 62%</p>
                            <progress className="progress progress-accent w-56 bg-white" value="62" max="100"></progress>
                        </div>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <img className='w-20 h-20 bg-gray-700 rounded p-2' src={expressJs} alt="" />
                        <div>
                            <p className='text-xl font-semibold text-[#15E0B7]'>ExpressJs : 52%</p>
                            <progress className="progress progress-accent w-56 bg-white" value="62" max="100"></progress>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Skills;