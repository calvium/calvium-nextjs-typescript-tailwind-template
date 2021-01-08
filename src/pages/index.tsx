import React from 'react';
import Link from 'next/link';

const Index = () => {
  return (
    <div className="h-full flex flex-col items-center p-8">
      <div className="w-1/2 bg-gray-100 flex flex-col items-center p-8">
        <h1>This is an h1</h1>
        <h2>This is an h2</h2>
        <h3>This is an h3</h3>
        <Link href="/page2">
          <a className="underline hover:text-blue-700">Page 2</a>
        </Link>
      </div>
    </div>
  );
};

export default Index;
