export default function Portfolio(){
    return(
        <div>
            {/*Portfolio:*/}
            <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
            <section className="p-4 grid lg:grid-cols-2 grid-cols-1">
                

                <div>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold mb-2">Project 1: Example Project</h3>
                        <p>Description of the project goes here.</p>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-lg font-bold mb-2">Project 2: Another Project</h3>
                        <p>Description of another project goes here.</p>
                    </div>
                </div>

                <div>
                    <div className="mb-4">
                    <h3 className="text-lg font-bold mb-2">Project 3: Yet Another Project</h3>
                    <p>Description of yet another project goes here.</p>
                </div>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold mb-2">Project 4: Yet Another Project</h3>
                        <p>Description of yet another project goes here.</p>
                    </div>
                    
                </div>
            </section>

            
        </div>
    )
}