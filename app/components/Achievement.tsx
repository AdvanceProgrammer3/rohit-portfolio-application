export default function Achievement(){
    return(
        <div>
            {/*  Achievements:*/}
            <section className="p-4">
                <h2 className="text-2xl font-bold mb-4">Achievements</h2>

                <div className="mb-4">
                    <h3 className="text-lg font-bold mb-2">Certified Web Developer</h3>
                    <p>
                        Received certification as a Web Developer from [Certification
                        Authority].
                    </p>
                </div>

                <div className="mb-4">
                    <h3 className="text-lg font-bold mb-2">Employee of the Month</h3>
                    <p>
                        Awarded Employee of the Month at XYZ Company for outstanding
                        contributions.
                    </p>
                </div>

                <div className="mb-4">
                    <h3 className="text-lg font-bold mb-2">Hackathon Winner</h3>
                    <p>
                        Won first place in a national hackathon for developing an innovative
                        [describe the project].
                    </p>
                </div>
            </section>
            
        </div>
    )
}