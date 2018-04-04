import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <div className="center-align" style={{ marginTop: "200px" }}>
      <h1>Oops, page not found!</h1>
      <p>Sorry about that :-|</p>
    </div>
  );
};

export default {
  component: NotFoundPage
};