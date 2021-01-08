import Link from 'next/link';
import React from 'react';

const SecondPage = () => {
  return (
    <div className="flex flex-col">
      <Link href="/">
        <a className="underline">home</a>
      </Link>
    </div>
  );
};

export default SecondPage;
