export default function ContactMe(){
    return(
        <div>
            {/*Contact Information:*/}
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <section className="p-4 grid grid-cols-2">
                

                <div>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold mb-2">Email</h3>
                        <p>rohit@example.com</p>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-lg font-bold mb-2">Phone</h3>
                        <p>+1 (555) 123-4567</p>
                    </div>
                </div>

                <div>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold mb-2">Address</h3>
                        <p>123 Main Street, Cityville, Country</p>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-lg font-bold mb-2">Social Media</h3>
                        <p>
                            <a href="https://linkedin.com/in/rohit" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </p>
                        <p>
                            <a href="https://twitter.com/rohit" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </p>
                        {/* Add more social media links as needed */}
                    </div>
                </div>
            </section>

            
        </div>
    )
}