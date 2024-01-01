export  default  function Skills(){
    return(
        <div>
            {/*Skills:*/}
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <section className="p-4 grid grid-cols-2 space-x-2">
                

                <div>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold mb-2">Programming Languages</h3>
                        <ul>
                            <li>JavaScript (ES6+)</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-lg font-bold mb-2">Web Development</h3>
                        <ul>
                            <li>React.js</li>
                            <li>Next.js</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </div>
                </div>

               <div>
                   <div className="mb-4">
                       <h3 className="text-lg font-bold mb-2">Version Control</h3>
                       <ul>
                           <li>Git</li>
                           <li>GitHub</li>
                       </ul>
                   </div>

                   <div className="mb-4">
                       <h3 className="text-lg font-bold mb-2">Other Skills</h3>
                       <ul>
                           <li>Responsive Web Design</li>
                           <li>Problem Solving</li>
                           <li>Team Collaboration</li>
                       </ul>
                   </div>
               </div>
            </section>
            
        </div>
    )
}