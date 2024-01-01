'use client'
export default function InteractiveFeatures(){


    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your interactive feature logic here (e.g., form submission, AJAX request, etc.)
        console.log("Form submitted!");
    };
    return(
        <div>
            {/*Interactive Features:*/}

            <section className="p-4">
                <h2 className="text-2xl font-bold mb-4">Interactive Features</h2>

                <form onSubmit={handleSubmit} className="mb-4">
                    <label className="block mb-2 text-lg font-bold">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />

                    <label className="block mb-2 text-lg font-bold">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />

                    <button
                        type="submit"
                        className="bg-[#e67e22] text-white py-2 px-4 rounded"
                        >
                        Submit
                    </button>
                </form>

                {/* Add more interactive features as needed */}
            </section>
            
        </div>
    )
}