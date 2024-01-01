export default function HomePage(){
    return(
        <div className="w-full">
            {/*Home/About Me:*/}
            <section className=" flex flex-col items-center lg:justify-center ">
                <div className="text-center   ">

                    <img
                        src="https://wallpapercave.com/dwp1x/wp11872234.jpg"
                        alt="Random"
                        className="rounded-md pt-10 w-[80rem]"
                    />

                    <h1 className="text-3xl font-bold mb-4  pt-10">Rohit Patel</h1>
                    <p className="text-lg">Welcome to Our Web Devoloper Community</p>
                </div>
            </section>
        </div>
    )
}