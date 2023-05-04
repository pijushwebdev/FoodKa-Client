import React from 'react';




const Categories = () => {
    return (
        <div className='mb-10'>
            <h1 className='my-10 font-bold text-4xl text-center'>Food Category</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20'>
                
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/GQzC5gK/desert.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Desert
                        </h2>
                        <p>Most sweetest food villa in town</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Spicy</div>
                            <div className="badge badge-outline">Food</div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/t8bfXQf/fast.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Fast Food
                        </h2>
                        <p>Most sweetest food villa in town</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Spicy</div>
                            <div className="badge badge-outline">Food</div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/4Scjr58/salad.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Salad
                            <div className="badge badge-secondary">new</div>
                        </h2>
                        <p>Most sweetest food villa in town</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Spicy</div>
                            <div className="badge badge-outline">Food</div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/kJSvDzK/soup.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Soup
                            <div className="badge badge-secondary">new</div>
                        </h2>
                        <p>Most sweetest food villa in town</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Spicy</div>
                            <div className="badge badge-outline">Food</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Categories;