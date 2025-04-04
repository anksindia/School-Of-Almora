import React from 'react';

import PageHeading from '../Components/PageHeading';
import CardCollection from '../Components/Hero-Section/CardCollection'

const Admissions = () => {
    return (
        <div>
            
            <PageHeading content={"Meet the Admissions Team"} imageUrl={"/photo4.webp"} />

            
            <div className="flex flex-col md:flex-row justify-between gap-10 pt-10 pb-10 px-5 md:px-40">
                
                
                <div className="md:w-2/3 px-5 py-10 ">
                    <h3 className="text-4xl font-semibold mb-5">Welcome!</h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                        We appreciate your interest and look forward to getting to know your family.  
                        <br /><br />
                        When a family chooses **School of Almora**, they are joining a community of learners. We are connected by an appreciation for our educational ideals in a setting that fosters **collaboration, not competitiveness**. Our graduates continue on to a variety of colleges and universities, all matched to their individual academic strengths and personal purpose.  
                        <br /><br />
                        As you learn more about our **close-knit community**, we are here to answer any questions you may have. There are several ways to learn more about the educational experience at School of Almora, including **campus tours, open houses, community events, virtual informational sessions, and one-on-one conversations**.  
                        <br /><br />
                        We look forward to connecting with your family at an upcoming event and guiding you through the admissions process.  
                    </p>

                    
                    <p className="mt-5 font-medium text-gray-700">
                        Warm wishes,  
                        <br /> Emma & Rahul  
                        <br /> The School of Almora Admissions Team
                    </p>

                    
                    <div className="mt-5">
                        <h4 className="text-2xl text-teal-600 font-semibold">Contact Us</h4>
                        <p className="text-lg text-teal-600">
                            <a href="mailto:admissions@schoolofalmora.org" className="underline">admissions@schoolofalmora.org</a>
                        </p>
                        <p className="text-lg text-teal-600">
                            <a href="tel:+911234567890" className="underline">+91 1234567890</a>
                        </p>


                        {/* bhai yha pe slider gkkkkkkk */}
                        <CardCollection className={'mt-10'}/>

                    </div>
                </div>

               
                <div className="md:w-1/3">
                    <h3 className="text-2xl text-center  mb-5">Admissions Office</h3>

                    
                    <div className="flex flex-col items-center mb-10">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBNqQiUOfbPw3m_t5RLhw5M87r_1J9EIYqg&s" 
                            alt="Director of Admissions" 
                            className="w-40 h-40 rounded-full mb-3 object-cover"
                        />
                        <h4 className="text-lg font-medium">Jennifer Chapa</h4>
                        <p className="text-gray-600">Director of Admissions</p>
                        <a href="mailto:jennifer@schoolofalmora.org" className="text-teal-600 underline">
                            jennifer@schoolofalmora.org
                        </a>
                    </div>

                    
                    <div className="flex flex-col items-center">
                        <img 
                            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                            alt="Assistant Director of Admissions" 
                            className="w-40 h-40 rounded-full mb-3 object-cover"
                        />
                        <h4 className="text-lg font-medium">Jen Battad</h4>
                        <p className="text-gray-600">Assistant Director of Admissions</p>
                        <a href="mailto:jen@schoolofalmora.org" className="text-teal-600 underline">
                            jen@schoolofalmora.org
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Admissions;
