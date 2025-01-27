import React from "react";
import blogImage1 from "../imgs/blogImg5.jpg";
import blogImage2 from "../imgs/blogImg3.jpg";
import blogImage3 from "../imgs/blogImg1.jpeg";
import blogImage4 from "../imgs/blogImg2.jpg";
import ApiSecuriy from "../imgs/api-security.jpg";

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
          <h4 className="post-link-title">
            Link |{" "}
            <a className="post-links" href="https://playcode.io/learn/react">
              React Playground @ playcode.io/react
            </a>
          </h4>
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
          <h4 className="post-link-title">
            Link |{" "}
            <a
              className="post-links"
              href="https://learning.oreilly.com/library/view/design-and-build/9781680508123/f_0020.xhtml#chp.http.git"
            >
              Read: Design & Build Great Web API's @ oreilly.com
            </a>
          </h4>
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
          <h4 h3 className="post-link-title">
            Link |{" "}
            <a className="post-links" href="https://exercism.org/tracks">
              76 Languages to Master @ exercism.com/tracks
            </a>
          </h4>
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
          <h4 className="post-link-title">
            Link |{" "}
            <a className="post-links" href="https://lawsofux.com/">
              Check out Laws of UX @ lawsofux.com
            </a>
          </h4>
        </div>
      </div>
      {/* Blog P{ost | 5 |1.26 -- API Security! } */}
      <div className="api-post">
        <img src={ApiSecuriy} alt="React 101 image" className="api-post-img" />
        <div className="api-post-content">
          <h2 className="api-post-title">API Security</h2>
          <h3>| API Security 101</h3>
          <p className="api-post-pargrphs">
            So what's the deal with security and API's? Why is it so important
            to ensure the security of our data? As data and inforamtion is
            transferred across various applications and services, if there isn't
            some form of security that data can be intercepted, lost or stolen
            before you even notice. Securing our API's is extremely critical and
            should be a priority - not an after thought.
          </p>
          <p>
            A good approach is conducting a full "Risk Assessment." Think of it
            this way: Do NOT assume people won't misuse your data; instead, err
            on the side of caution and assume that someone will intentionally
            try to misuse your API and mishandle your data. Be proactive, secure
            your data, and protect your users' information. What you deem as
            unimportant or non-sensitive information could actually be a key
            target for attackers.
          </p>
          <h3>| The CIA Triad</h3>
          <p>
            The CIA Triad was new to me when I first heard of it, but wow- it's
            an exceellent and well-known model for security policy developemnt
            and approach to implementing security into our API's.
          </p>
          <ul>
            <li>
              <strong>C : Confidentiality</strong>
              <p>
                Through the use of security mechanisms such as usernames,
                passwords, access control lists and encryption, confidentiality
                ensures that only authorized individuals have access to
                sensitive information. .
              </p>
            </li>
            <li>
              <strong>I : Integrity</strong>
              <p>
                Through the use of data encryption, backups procedures and
                systems of redundancy in place, we can ensure the integrity of
                the information remains in a format that is true to its intended
                original purpose.
              </p>
            </li>
            <li>
              <strong>A : Availability</strong>
              <p>
                Through dedicated hardware devices, routine software
                maintenance, and other redundancy procedures in place, we can
                ensure that informatio and resources can are available to those
                who need them when they need them.
              </p>
            </li>

            <a
              className="post-links"
              href="https://geek-university.com/confidentiality-integrity-and-availability-cia-triad/"
            >
              The CIA Triad
            </a>
          </ul>
          <h3>| Other Take Aways</h3>
          <p>
            <strong> Unhandled HTTP Methods</strong>: Since many API's use HTTP
            methods to request, save or delete data - be aware of the servers
            being used. Some can allow for other HTTP methods to be allowed and
            could even bypass authentication if their methods are not blocked.
            Check out the following article by{" "}
            <strong>Israel Aráoz Sanchez</strong> as he walks us through
            "Security Testing" and shows some HTTP method request examples ansd
            how easy it easy to change the price of an item to $0!
          </p>
          <a
            className="post-links"
            href="https://iaraoz.medium.com/web-security-academy-api-security-testing-walkthrough-11019ed93eae"
          >
            Web Security Academy — API Security Testing Walkthrough
          </a>
          <h3>| OWASP and API Security</h3>
          <p>
            OWASP (Open Worldwide Application Security Project) is a globally
            recognized organization focused on improving software security. Its
            API Security Top 10 is a great resource for developers and security
            teams, offering guidance on securing APIs against common
            vulnerabilities.
          </p>
          <p>
            The OWASP API Security Top 10 highlights the most common
            vulnerabilities and how to address them effectively. Take a look at
            their website to go more in-depth on each of their Top 10. Amongst
            those Top 10, there's also their "Authentication Cheat Sheet" that
            goes through various general guidelines for improving online
            security.
          </p>
          <p>
            Take a look at OWASP's API Security Top 10:{" "}
            <a
              href="https://owasp.org/www-project-api-security/"
              className="post-links"
            >
              OWASP | API Security
            </a>
            .
          </p>
          <p>
            Take a look at OWASP's API Authentication Cheat Sheet:{" "}
            <a
              href="https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"
              className="post-links"
            >
              OWASP | Authentication Cheat Sheet
            </a>
            .
          </p>
          <h3> Unhandled HTTP Methods</h3>: Since many API's use HTTP methods to
          request, save or delete data - be aware of the servers being used.
          Some can allow for other HTTP methods to be allowed and could even
          bypass authentication if their methods are not blocked. Check out the
          following article by <strong>Israel Aráoz Sanchez</strong> as he walks
          us through "Security Testing" and shows some HTTP method request
          examples ansd how easy it easy to change the price of an item to $0!
          <br />
          <br />
          <a
            className="post-links"
            href="https://iaraoz.medium.com/web-security-academy-api-security-testing-walkthrough-11019ed93eae"
          >
            Web Security Academy — API Security Testing Walkthrough
          </a>
          <h3>| Final Thoughts </h3>
          <p className="post-pargrphs">
            Securing API's should not be an after-thought but a priority and a
            necessity. API's are what power our modern applications across
            platforms - if not secured, we risk sensitive information being
            leaked, altered, and misused. All which can harm not just our
            programs but our users as well.
          </p>
          <p>
            By understanding the importance of "risk assesment" and implementing
            the CIA Triad we can proactively ensure that security measures are
            in place to safeguard sensitive data and information. Protecting
            API's helps build trust with our users and maintain the integrity of
            our applications.
          </p>
          <h4 className="post-link-title"> Other Links & Resources</h4>
          <ul>
            <li>
              {" "}
              <a
                className="post-links"
                href="https://www.reblaze.com/blog/api-security/api-security-4-quick-ways-to-check-your-api/"
              >
                API Security: 4 Quick Ways to Check Your API
              </a>
            </li>
            <li>
              {" "}
              <a
                className="post-links"
                href="https://security.stackexchange.com/questions/241575/what-are-the-risks-of-having-an-unsecured-api-if-theres-nothing-sensitive-in-t"
              >
                Risks of an unsecured API
              </a>
              <p>
                Interesting Q/A Thread where one user highlightd the importance
                of API security by talking about how a Fitness tracking app
                (Strava) revealed locations of US{" "}
                <a
                  className="post-links"
                  href="https://www.theguardian.com/world/2018/jan/28/fitness-tracking-app-gives-away-location-of-secret-us-army-bases"
                >
                  <strong> "military bases and spy outposts".</strong>{" "}
                </a>{" "}
                When they released their signature heatmaps, they inadvertently
                also made available a heatmap that was detailed enough to allow
                direct visualisation of extremely sensitive information of
                military baese, their layouts and their personnel on active
                services. Goes to show how an oversight like this can have great
                repurcussions and could ultimately be misused in dangerous ways.{" "}
              </p>
            </li>

            <li>
              {" "}
              <a
                className="post-links"
                href="https://books.google.com/books?hl=en&lr=&id=7TczEAAAQBAJ&oi=fnd&pg=PR11&dq=api+security+101&ots=h4XxLrT4yD&sig=axS96qfTC32LjYiLtIV0A1ais8U#v=onepage&q=api%20security%20101&f=false"
              >
                API Security In Action
              </a>
              <p>
                Neil Madden's book preview talks about the importance of API
                security, the best practices and approach of security
                implementations, like the CIA Triad method. The sections of the
                book preview were great resources - definitely recommend it.{" "}
              </p>
            </li>
            <li>
              {" "}
              <a
                className="post-links"
                href="https://curity.io/resources/learn/api-security-best-practices/"
              >
                API Security Best Practices
              </a>
            </li>
            <li>
              {" "}
              <a
                className="post-links"
                href="https://www.reblaze.com/blog/api-security/api-security-4-quick-ways-to-check-your-api/"
              >
                REST API Security Essentials
              </a>
              <p>
                The article outlines key security practices for RESTful APIs,
                emphasizing the use of HTTPS, authentication (like OAuth), input
                validation, and rate limiting to protect APIs against
                unauthorized access and common vulnerabilities such as injection
                attacks and{" "}
                <strong>
                  <a
                    className="post-links"
                    href="https://www.fortinet.com/resources/cyberglossary/ddos-attack"
                  >
                    DDoS
                  </a>
                </strong>
                . It highlights the importance of secure data transmission,
                proper logging, and enforcing strict access controls.
              </p>
            </li>
            <li>
              {" "}
              <a
                className="post-links"
                href="https://www.reblaze.com/blog/api-security/api-security-4-quick-ways-to-check-your-api/"
              >
                OAuth 2.0
              </a>
              <p>
                OAuth 2.0 is the industry-standard authorization protocol that
                enables secure access to resources and data without requiring
                users to share their credentials, making it ideal for web
                applications across platforms.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Posts;
