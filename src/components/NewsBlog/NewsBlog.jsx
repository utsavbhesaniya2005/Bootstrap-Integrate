import './NewsBlog.css'

const blogs = [
    {
        id: 1,
        blogImg: '../src/assets/images/News-&-Blogs/blog-1.png',
        dept: 'Marketing',
        blogDate: '20 July, 2024',
        blogUpload: 'by Admin',
        blogTitle: 'How To Become idiculously Self-Aware In 20 Minutes'
    },
    {
        id: 2,
        blogImg: '../src/assets/images/News-&-Blogs/blog-2.png',
        dept: 'Marketing',
        blogDate: '20 July, 2024',
        blogUpload: 'by Admin',
        blogTitle: 'Get Started With UI Design With Tips To Speed'
    },
    {
        id: 3,
        blogImg: '../src/assets/images/News-&-Blogs/blog-3.png',
        dept: 'Marketing',
        blogDate: '20 July, 2024',
        blogUpload: 'by Admin',
        blogTitle: 'Make Your Own Expanding Contracting Content'
    },
    {
        id: 4,
        blogImg: '../src/assets/images/News-&-Blogs/blog-4.png',
        dept: 'Marketing',
        blogDate: '20 July, 2024',
        blogUpload: 'by Admin',
        blogTitle: 'What we are capable to usually discovered'
    }
]

const NewsBlog = () => {
    return(
        <>
            <section className="blogs mb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title text-center">
                                <h4 className="btn-1" href="#">News & Blogs</h4>
                                <h2>Our Latest News Feed</h2>
                                <p>when known printer took a galley of type scrambl edmake</p>
                            </div>
                        </div>

                        {
                            blogs.map((blog, id) => (
                                <div key={id} className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="card p-3 rounded-4">
                                        <div className="card-img rounded-4">
                                            <img src={blog.blogImg} className="card-img-top" alt={"Blog Image" + "-" + blog.id} />
                                            <span className="rounded-pill">{blog.dept}</span>
                                        </div>
                                        <div className="card-body blog-body">
                                            <div className="blog-details d-flex align-items-center column-gap-3 pb-4 pt-2">
                                                <a href="#" className="d-flex align-items-center column-gap-2">
                                                    <i className="fa-regular fa-calendar"></i>
                                                    <span>{blog.blogDate}</span>
                                                </a>
                                                <a href="#" className="d-flex align-items-center column-gap-2">
                                                    <i className="fa-regular fa-circle-user"></i>
                                                    <span>{blog.blogUpload}</span>
                                                </a>
                                            </div>
                                            <h5 className="card-title">{blog.blogTitle}</h5>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
export default NewsBlog;