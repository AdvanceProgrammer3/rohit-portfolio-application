export default function VideoInroduction(){
    return(
        <div>
            {/*  Video Introduction:*/}

            <section className="p-4">
                <h2 className="text-2xl font-bold mb-4">Video Introduction</h2>

                <div className="relative">
                    <video
                        className="w-full rounded-lg shadow-lg"
                        controls
                        poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZA0zltWRFcsrjBBIg7za2-ERSLFzTvA1BQ&usqp=CAU" // Add a poster image for the video
                        >
                        <source
                            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" // Add the path to your video file
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>

                    {/* Optional: Add a play button overlay */}
                    {/*<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">*/}
                    {/*    <button className="bg-blue-500 text-white py-2 px-4 rounded">*/}
                    {/*        Play*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>
            </section>
        </div>
    )
}