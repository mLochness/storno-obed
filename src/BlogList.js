import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {

    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}> 
                        <h3>{blog.title}</h3>
                        <p> Written by {blog.author} </p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;