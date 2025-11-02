import { Card } from './Card';

const books = [
  { Judul : 'Refactoring UI'},
  { Judul : 'Clean Code'},
  { Judul : 'The Pragmatic Programmer'},
  { Judul : 'Design Patterns'},
];

function Library() {
  return (
    <div>
      <Card />
    </div>
  );
}

export default Library;
