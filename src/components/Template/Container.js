import React from 'react';

const Container = (props) => (
  <section className="container mx-auto px-4">
    {props.children}
  </section>
);

export default Container;

