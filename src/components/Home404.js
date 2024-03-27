// components/Home404.js
import React from 'react';

function Home404() {
  return (
    <section className="home">
      <h2>404</h2>
      <p>{"{\"status\":404,\"data\":{\"error\":{\"code\":\"404\",\"message\":\"Resource not found\"}}}"}</p>
    </section>
  );
}

export default Home404;
