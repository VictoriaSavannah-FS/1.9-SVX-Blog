import React from "react";
import blogImage1 from "../imgs/blogImg5.jpg";
import blogImage2 from "../imgs/blogImg3.jpg";
import blogImage3 from "../imgs/blogImg1.jpeg";
import blogImage4 from "../imgs/blogImg2.jpg";

const Posts = () => {
  return (
    <div className="posts">
      <h1>Blog Posts</h1>

      {/* blog Post | 1 */}
      <div className="post-item">
        <img src={blogImage1} alt="React 101 image" className="post-img" />
        <div className="post-content">
          <h2 className="post-title">React 101</h2>
          <p className="post-pargrphs">
            By creating an account with playcode.io, you have access to CSS,
            HTML, JavaScript and React library interactive lessons. It's a great
            way of learning and sharpening your skills with instant feedback,
            notes and step by step walkthroughs to help you along the way. The
            React topics covered are vast - definitely recommend you check it
            out!
          </p>
          <a href="https://playcode.io/learn/react">
            React Playground @ playcode.io/react
          </a>
        </div>
      </div>

      {/* Blog P{ost | 2 } */}
      <div className="post-item">
        <img src={blogImage2} alt="React 101 image" className="post-img" />
        <div className="post-content">
          <h2 className="post-title">"User Experience"</h2>
          <p className="post-pargrphs">
            Overall great resource to get a rundown on best API practices and
            approaches. Biggest takeaway so far is the concept of the "User
            Experience" at the forefront of any design and trying to understand
            what the users' goal, tasks along the way and progress are in the
            process. Still need to finish reading it. On another hand, there's a
            chapter that goes over the importance of version control and
            managing and orgaize the different iterations of our code -
            especailly in large project settings with peers. interesting how
            we're literally working off of Github for version control.
          </p>
          <a href="https://learning.oreilly.com/library/view/design-and-build/9781680508123/f_0020.xhtml#chp.http.git">
            Read: Design & Build Great Web API's @ oreilly.com
          </a>
        </div>
      </div>

      {/* blog Post | 3 */}
      <div className="post-item">
        <img src={blogImage3} alt="React 101 image" className="post-img" />
        <div className="post-content">
          <h2 className="post-title">Exercism</h2>
          <p className="post-pargrphs">
            Create a profile and get started on your learning journey in any of
            their 76 differetn language courses. I joined last month when
            another classmate recommended and I fell in love with this resource!
            It's great! I began the TypeScript and JavaScript learning path.
            Recommend to anyone!
          </p>
          <a href="https://exercism.org/tracks">
            76 Languages to Master @ exercism.com/tracks
          </a>
        </div>
      </div>

      {/* Blog P{ost | 4 -- just for fun! } */}
      <div className="post-item">
        <img src={blogImage4} alt="React 101 image" className="post-img" />
        <div className="post-content">
          <h2 className="post-title">Laws of UX</h2>
          <p className="post-pargrphs">
            Great resource to get a rundown on best UX/UI Laws, priciples and
            best practices. Ever since I was gifted my Laws of UX Cards, I found
            them so fascinating and intereting and fueled my journey down web
            development. There's something neat in understanding the psychology
            behind why users are drawn to certain desings, layoiuts, patterns
            etc. Jon Yablonski did a phenominal job with this product launch and
            his other ogoing projects are just as great. This blog post was just
            for fun...
          </p>
          <a href="https://lawsofux.com/">
            Check out Laws of UX @ lawsofux.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Posts;
