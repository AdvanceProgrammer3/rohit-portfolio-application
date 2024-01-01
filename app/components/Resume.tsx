export default function Resume(){
    return(
        <div className="p-4 bg-gray-200">
            {/*Resume/CV:*/}
            <h2 className="text-2xl font-bold mb-4">Resume</h2>
            <section className="grid grid-cols-2">
               

                <div>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold mb-2">Education</h3>
                        <p>Bachelor of Science in Computer Science</p>
                        <p>Your University, Graduation Year</p>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-lg font-bold mb-2">Experience</h3>
                        <p>Web Developer at XYZ Company</p>
                        <p>Worked on various web projects using React and Node.js</p>
                    </div>
                </div>

                <div>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold mb-2">Skills</h3>
                        <ul>
                            <li>JavaScript (React, Node.js)</li>
                            <li>HTML, CSS (Tailwind CSS)</li>
                            <li>Git, GitHub</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-lg font-bold mb-2">Certifications</h3>
                        <p>Certified Web Developer - Example Certification</p>
                    </div>
                </div>
            </section>
        </div>
    )
}