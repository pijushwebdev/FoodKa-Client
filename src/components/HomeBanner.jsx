import React from 'react';

const HomeBanner = () => {
    return (
        <div className='mb-10' style={{ backgroundImage: `url("https://i.ibb.co/TTpnhbj/food.png")`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', height: '100vh', borderRadius:'10px'}}>
            <div className='w-full lg:w-1/2 md:w-3/4 h-full flex flex-col justify-center p-4'>
                <p className='text-pink-500'><small>#cooking recipe</small></p>
                <h1 className='text-6xl text-pink-400 font-bold my-4'>Simple way to find yammy recipes</h1>
                <p className='text-stone-300 font-semibold my-3'>Food is one of the basic necessities of life. Food contains nutrients—substances essential
                    for the growth, repair, and maintenance of body tissues and for the regulation of vital processes. Nutrients provide the energy our bodies
                    need to function. The energy in food is measured in units called calories.
                </p>
                <div className='flex'>
                    <div className='mr-16'>
                        <h1 className='text-4xl text-rose-600'>320K <sup className='text-sm font-medium text-rose-400'>Active Users</sup></h1>
                    </div>
                    <div>
                        <h1 className='text-4xl text-rose-600'>4.2 <sup className='text-sm font-medium text-rose-400'>Avg. Rating</sup></h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeBanner;