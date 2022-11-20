import React from "react";

const FrequentQues = () => {
  return (
    <div className="mb-4">
      <h2 className="text-center">Frequently Asked Questions</h2>
      <article
        className="blogs"
        data-aos="zoom-in-right"
        data-aos-duration="2000"
      >
        <h5 className="blogs-Que">
          1: What are the differences between html4 and html5?
        </h5>
        <p className="blogs-Ans">
          Html5 is the updated version of HTML. Based on this, we can say that
          html5 includes many newer topics in HTML. Some of the differences are
          as below:
        </p>
        <p>
          <ul>
            <li>Html5 has a canvas tag but html4 has not included that tag.</li>
            <li>Html5 has advanced features while html4 has some features.</li>
            <li>
              The Doctype declaration is very simple in html5. On the other
              hand, it's very difficult in html4 to include document type or
              doctype declaration.
            </li>
          </ul>
        </p>
      </article>
      <article
        className="blogs"
        data-aos="zoom-in-right"
        data-aos-duration="2000"
      >
        <h5 className="blogs-Que">
          2: What are semantic tags in HTML? Give me some examples.
        </h5>
        <p className="blogs-Ans">
          <span className="fw-bold">CORS:</span> Cross-Origin Resource Sharing
        </p>
        <p className="blogs-Ans">
          Semantic tags are those tags that give a specific meaning by their
          name. For example: ‘Div’ has no semantic meaning while ‘article’ or
          ‘section’ has a unique meaning. Besides, ‘footer’, ‘header’, ‘main’
          are also semantic tags.
        </p>
      </article>
      <article
        className="blogs"
        data-aos="zoom-in-right"
        data-aos-duration="2000"
      >
        <h5 className="blogs-Que">
          3: What is a CSS Preprocessor? What are some benefits of Sass?
        </h5>
        <p className="blogs-Ans">
          A CSS Preprocessor is a program. It helps to generate CSS. Some
          benefits of Sass are:
        </p>
        <p className="blogs-Ans">
          <ul>
            <li>Make it quicker to generate CSS.</li>
            <li> It is more powerful</li>
            <li>Helps to write clean and easy CSS.</li>
          </ul>
        </p>
      </article>
      <article
        className="blogs"
        data-aos="zoom-in-right"
        data-aos-duration="2000"
      >
        <h5 className="blogs-Que">4: What are the properties of flexbox?</h5>
        <p className="blogs-Ans">The properties of flexbox are:</p>
        <p className="blogs-Ans">
          <ul>
            <li>flex-direction.</li>
            <li>flex-wrap</li>
            <li>justify-content</li>
            <li>align-items</li>
            <li>align-content</li>
          </ul>
        </p>
      </article>
    </div>
  );
};

export default FrequentQues;
