export default function InteractiveResume(){
    return(
        <div>
            {/*  Interactive Resume:*/}
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Interactive Resume</h2>

                {/* Personal Information */}
                <section className="mb-6">
                    <h3 className="text-lg font-bold mb-2">Personal Information</h3>
                    <p>Name: Rohit Patel</p>
                    <p>Email: rohitmcmt90@gmail.com</p>
                    <p>Phone: +91 7071853247</p>
                    {/* Add more personal information as needed */}
                </section>

                {/* Skills */}
                <section className="mb-6">
                    <h3 className="text-lg font-bold mb-2">Skills</h3>
                    <ul className="list-disc pl-4">
                        <li>JavaScript (ES6+)</li>
                        <li>React.js</li>
                        <li>Next.js</li>
                        <li>Tailwind CSS</li>
                        {/* Add more skills as needed */}
                    </ul>
                </section>

                {/* Education */}
                <section className="mb-6">
                    <h3 className="text-lg font-bold mb-2">Education</h3>
                    <p>Bachelor's in Computer Science - Mahatma Gandhi Kashi Vidyapith</p>
                    <p>Graduation Year: 2019</p>
                </section>

                {/* Work Experience */}
                <section className="mb-6">
                    <h3 className="text-lg font-bold mb-2">Work Experience</h3>
                    <p>Software Developer - TATA CONSULTANCY SERVICES</p>
         
                    {/* Add more work experience as needed */}
                </section>

                {/* Projects */}
                <section>
                    <h3 className="text-lg font-bold mb-2">Projects</h3>
                    <div className="mb-4">
                        <h4 className="font-bold">Project 1: Amazon Clone</h4>
                        <p>Developed Amazon Clone using Next Js and Tailwind CSS</p>
                    </div>
                    <div className="mb-4">
                        <h4 className="font-bold">Project 2: Hotstar Clone</h4>
                        <p>Created a Hotstar Clone using Next JS and tailwind CSS using backend with Firebase</p>
                    </div>
                    {/* Add more projects as needed */}
                </section>
            </div>
            
        </div>
    )
}