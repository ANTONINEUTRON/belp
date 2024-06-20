import FloatingActionButton from "@/components/floating_action_button";
import ReviewItem from "@/components/review_item";
import Image from 'next/image'
import { FaGlobe } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import Link from "next/link";

const OpenProjects = ({ params }: { params: { slug: string } })=>{
    return (
        <div className=" m-14">
            {/* Overview of the project */}
            <div>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <Image
                            src="/bitcoin_img.svg"
                            alt="Bitcoin Logo"
                            // className={styles.vercelLogo}
                            width={220}
                            height={35}
                            priority
                            className='mb-5'
                            />
                        <div className=" ml-5">
                            <div className="font-bold text-2xl">BITcoin</div>
                            <div className="font-sm line-clamp-1 text-sm">tagline that is not more than two lines</div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        {/* Website url*/}
                        <Link href="">
                            <button><FaGlobe size={24}/></button>
                        </Link>
                        {/* Whitepaer url */}
                        <Link href="">
                            <button><GrDocumentText  size={24}/></button>
                        </Link>
                    </div>
                </div>
                <div className="p-5 ">
                    <div>Tags go here</div>
                    <div>
                        Description of project goes here
                    </div>
                    <span className="font-semibold text-lg">Products</span>
                </div>
            </div>

            {/* Reviews here */}
            <div className="mt-8">
                <div className="font-bold text-2xl">
                    Reviews
                </div>
                <div>
                    <ReviewItem />
                    <ReviewItem />
                    <ReviewItem />
                </div>
            </div>

            <FloatingActionButton/>
                
            {/* </FloatingActionButton> */}
        </div>
    );
}

export default OpenProjects