import project1 from '../../../../assets/myProject/project-one.png';
import project2 from '../../../../assets/myProject/project-two.png';
import project3 from '../../../../assets/myProject/project-three.png';

import '../Project/project.css';

const Project = () => {
    return (
        <div className="max-w-screen-2xl mx-auto mt-[300px]">
            <div className="flex flex-col items-center">
                <h3 className="uppercase text-4xl font-semibold text-[#15E0B7]">my project</h3>
                <progress className="bg-[#15E0B7] progress w-56"></progress>
            </div>
            <div className='flex gap-5 mt-20'>
                <div className='w-4/12 flex flex-col items-center'>
                    <div className='project'>
                        <img src={project1} alt="" />
                    </div>
                    <div className='flex gap-2'>
                        <a className='btn btn-success' href="https://toy-car-5ee84.web.app">Live Link</a>
                        <a className='btn btn-success' href="https://github.com/abdurrahim99100/toy_cars_client">Client side</a>
                        <a className='btn btn-success' href="https://github.com/abdurrahim99100/toy_cars_server">Server side link</a>
                    </div>
                </div>
                <div className='w-4/12 flex flex-col items-center'>
                    <div className='project'>
                        <img src={project2} alt="" />
                    </div>
                    <div className='flex gap-2'>
                        <a className='btn btn-success' href="https://toy-car-5ee84.web.app">Live Link</a>
                        <a className='btn btn-success' href="https://github.com/abdurrahim99100/toy_cars_client">Client side</a>
                        <a className='btn btn-success' href="https://github.com/abdurrahim99100/toy_cars_server">Server side link</a>
                    </div>
                </div>
                <div className='w-4/12 flex flex-col items-center'>
                    <div className='project'>
                        <img src={project3} alt="" />
                    </div>
                    <div className='flex gap-2'>
                        <a className='btn btn-success' href="https://toy-car-5ee84.web.app">Live Link</a>
                        <a className='btn btn-success' href="https://github.com/abdurrahim99100/toy_cars_client">Client side</a>
                        <a className='btn btn-success' href="https://github.com/abdurrahim99100/toy_cars_server">Server side link</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;