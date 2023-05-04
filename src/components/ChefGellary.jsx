import React from 'react';

const ChefGellary = () => {

    return (
        <div>
            <h1 className='my-10 font-bold text-4xl text-center'>Chef Gallery</h1>
            <div className="carousel mb-10 w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/d62tyPB/chef2.jpg" className="w-full rounded-md" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/Xp0fvH8/chef1.jpg" className="w-full rounded-md" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/hVQ06HS/chef3.jpg" className="w-full rounded-md" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://i.ibb.co/CJwHpqC/chef4.jpg" className="w-full rounded-md" />
                </div>
                <div id="item5" className="carousel-item w-full">
                    <img src="https://i.ibb.co/HKZBjLy/chef5.jpg" className="w-full rounded-md" />
                </div>
                <div id="item6" className="carousel-item w-full">
                    <img src="https://i.ibb.co/h2G9MVT/chef6.jpg" className="w-full rounded-md" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">5</a>
                <a href="#item6" className="btn btn-xs">6</a>
            </div>
        </div>
    );
};

export default ChefGellary;