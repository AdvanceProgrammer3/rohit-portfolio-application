export default function ResponsiveDesign(){
    return(
        <div>
            {/*  Responsive Design:*/}

            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Responsive Component</h2>

                {/* Responsive Text Size */}
                <p className="text-lg md:text-xl lg:text-2xl">
                    This text will have different sizes on different screen sizes.
                </p>

                {/* Responsive Margin and Padding */}
                <div className="mt-4 md:mt-8 lg:mt-12">
                    {/* Content goes here */}
                </div>

                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {/* Grid items go here */}
                </div>

                {/* Responsive Visibility */}
                <div className="hidden md:block">
                    {/* Content visible from medium-sized screens and up */}
                </div>
            </div>
            
        </div>
    )
}