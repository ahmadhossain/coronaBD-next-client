function Heading (){
    var d = new Date();
    return (
        <div className="flex justify-center py-10">
            <div className="px-20">
                <div className="bg-gradient-to-r pb-1 text-transparent bg-clip-text from-green-400 to-blue-500 text-4xl font-normal">Covid-19 live update in Bangladesh.</div>
                <div className="text-gray-400 text-right text-md">Last updated: {d.toDateString()}</div>
            </div>
        </div>
    )
}

export default Heading;