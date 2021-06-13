import React from 'react';
import ListaPais from './ListaPaís';

export default function App() {
  return (
    <main>
      <article className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <ListaPais />
      </article>
    </main>
  );
}
