import { Fragment } from 'react';
// import Image from 'next/image'
export default function Home() {
  return (
    <Fragment key={crypto.randomUUID()}>
      <h1>NextJS Boilerplate</h1>
    </Fragment>
  );
}
