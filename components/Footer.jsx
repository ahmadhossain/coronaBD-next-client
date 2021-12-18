function Footer(){
    return (
        <div className="flex justify-center pt-16  text-gray-500">
            <div className="">
                <div className="flex justify-center space-x-1">
                    <a className="hover:text-green-400" href="https://www.facebook.com/ahmad.hossaian/">Facebook</a> 
                    <div>|</div>
                    <a className="hover:text-green-400" href="https://www.linkedin.com/in/ahmad-hossain-999b3b219/">LinkedIn</a>
                    <div>|</div>
                    <a className="hover:text-green-400" href="https://twitter.com/ahmadhossain_bu">Twitter</a>
                </div>
                <div className="text-center"><a className="hover:text-green-400" href="https://www.disease.sh/">Source</a></div>
                <div className="text-center">© 2021 Ahmad Hossain</div>
            </div>
        </div>
    )
}

export default Footer;