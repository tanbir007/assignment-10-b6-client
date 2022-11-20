import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <>
      <h2 className="blogs-title mt-3 fw-bold text-decoration-underline">
        <span>C</span>
        oder's <span>B</span>logs <span>H</span>ouse!
      </h2>
      <div className="blogs-container">
        <article
          className="blogs"
          data-aos="zoom-in-right"
          data-aos-duration="2000"
        >
          <h5 className="blogs-Que">1: what is cors?</h5>
          <p className="blogs-Ans">
            <span className="fw-bold">CORS:</span> Cross-Origin Resource Sharing
          </p>
          <p className="blogs-Ans">
            Generally, we can not get access of any server site running in the
            different port. It has been injected some security issues. But cors
            helps to get that access.
          </p>
          <p className="blogs-Ans">
            <span className="fw-semibold text-decoration-underline">
              According to the developer.mozilla.org :
            </span>{" "}
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request.
          </p>
        </article>
        <article
          className="blogs"
          data-aos="zoom-in-left"
          data-aos-duration="2000"
        >
          <h5 className="blogs-Que">
            2: Why are you using firebase? What other options do you have to
            implement authentication?
          </h5>
          <p className="blogs-Ans">
            Firebase is great for quick projects: it's easy to set up, fast, in
            many cases requires only front-end logic. It lets you focus on your
            app instead of implementing custom authentication or database
            connections.
          </p>
          <p className="blogs-Ans">
            I'm using firebase in my recent projects. It's very user friendly
            and helps my site to implement authentication system quickly. It
            also helps to host my project without any cost!
          </p>
          <p className="blogs-Ans">
            Though firebase is the first choice for small to medium level
            projects, there are also some authentication platforms:
            <ul>
              <li>STYTCH</li>
              <li>Ory</li>
              <li>Supabase</li>
              <li>Okta</li>
              <li>Pingldentity</li>
            </ul>
          </p>
        </article>
        <article
          className="blogs"
          data-aos="zoom-in-right"
          data-aos-duration="2000"
        >
          <h5 className="blogs-Que">3: How does the private route work?</h5>
          <p className="blogs-Ans">
            The private route is also called the protected route. That means it
            has some restriction from the normal behaviors.
          </p>
          <br />
          <p className="blogs-Ans">
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in).
          </p>
        </article>
        <article
          className="blogs"
          data-aos="zoom-in-left"
          data-aos-duration="2000"
        >
          <h5 className="blogs-Que">3: What is Node? How does Node work?</h5>
          <p className="blogs-Ans">
            Node is a javascript runtime. It's not a programming language. V8
            engine has been used to run javascript on the browser. But Node
            helps to run javascript in the backend as well.
          </p>
          <p className="blogs-Ans">
            Node.js basically works on two concepts
            <ul>
              <li>Asynchronous</li>
              <li>Non-blocking I/O</li>
            </ul>
          </p>
          <p className="blogs-Ans">
            <span className="fw-semibold">Asynchronous:</span> Asynchronous is
            executing a callback function. The moment we get the response from
            the other server or database it will execute a callback function.
          </p>
          <p className="blogs-Ans">
            <span className="fw-semibold">Non-blocking I/O:</span> Non-blocking
            i/o means working with multiple requests without blocking the thread
            for a single request.
          </p>
        </article>
      </div>
    </>
  );
};

export default Blogs;
