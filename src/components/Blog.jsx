import React from 'react';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
    return (
        <div>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => (
                    <button
                        className="btn btn-warning flex mx-auto mb-8 md:mb-0 mt-8 font-bold"
                        onClick={toPdf}
                    >
                        Download Pdf
                    </button>
                )}
            </Pdf>
            <div ref={ref}>
                <div className='my-10'>

                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            <h1>Question 1: Tell us the differences between uncontrolled and controlled components</h1>
                        </div>
                        <div className="collapse-content">
                            <p>Answer: Uncontrolled components can be simpler to implement and maintain, especially for smaller applications or components that don't require complex state management. Controlled components, on the other hand, provide a more predictable and robust way to manage state and behavior, which can be beneficial for larger or more complex applications.</p>
                        </div>
                    </div>

                    <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            <h1>Question 2: How to validate React props using PropTypes</h1>
                        </div>
                        <div className="collapse-content">
                            <p>Answer: PropTypes is a library that comes bundled with React, which is used to define the types of props that are expected to be passed to a component. Using PropTypes, you can easily validate the props passed to your component, ensuring that they match the expected types and have required values.</p>
                        </div>
                    </div>

                    <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            <h1>Question 3: Tell us the difference between nodejs and express js</h1>
                        </div>
                        <div className="collapse-content">
                            <p>Answer: Node.js provides a runtime environment for running JavaScript on the server-side, while Express.js provides a framework for building web applications using Node.js. Express.js builds on top of Node.js, providing additional features and utilities for building web applications, such as routing, middleware, and templates.</p>
                        </div>
                    </div>

                    <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            <h1>Question 3: What is a custom hook, and why will you create a custom hook?</h1>
                        </div>
                        <div className="collapse-content">
                            <p>Answer: Custom hooks are created to solve common problems that cannot be easily solved with the existing React APIs. They allow you to encapsulate complex or repetitive logic and make it reusable across multiple components. Here are some reasons why you might want to create a custom hook.
                                <small>If you find yourself repeating the same logic or functionality in multiple components, it's a good indication that you should extract that code into a custom hook. This allows you to write the code once and reuse it across multiple components.</small>
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default Blog;