export default function Testimonials(){
    return(
        <div>
            {/*Testimonials:*/}
            <section className="p-4">
                <h2 className="text-2xl font-bold mb-4">Testimonials</h2>

                <div className="mb-4">
                    <blockquote className="text-lg italic">
                        Rohit is an exceptional web developer. His attention to detail and problem-solving skills are impressive. It was a pleasure working with him.
                    </blockquote>
                    <p className="font-bold">John Doe, CEO at XYZ Company</p>
                </div>

                <div className="mb-4">
                    <blockquote className="text-lg italic">
                        I highly recommend Rohit for his expertise in front-end development. He delivers high-quality work and meets tight deadlines.
                    </blockquote>
                    <p className="font-bold">Jane Smith, UX Designer</p>
                </div>

                <div className="mb-4">
                    <blockquote className="text-lg italic">
                        Working with Rohit was a great experience. His communication skills and collaborative approach make him a valuable team member.
                    </blockquote>
                    <p className="font-bold">Alex Johnson, Project Manager</p>
                </div>
            </section>
            
        </div>
    )
}