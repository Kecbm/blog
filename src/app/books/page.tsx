import Image from "next/image";
import StatusBadge from "../../components/StatusBadge";

interface Book {
  name: string;
  imageUrl: string;
  status: "in-progress" | "done" | "pending";
}

const books: Book[] = [
  {
    name: "Python e Django",
    imageUrl: "https://m.media-amazon.com/images/I/81RvLKtdlrL._UF894,1000_QL80_.jpg",
    status: "in-progress",
  },
  {
    name: "Fluent React",
    imageUrl: "https://m.media-amazon.com/images/I/71LeIRBPrtL.jpg",
    status: "pending",
  },
  {
    name: "Clean Code",
    imageUrl: "https://m.media-amazon.com/images/I/51E2055ZGUL.jpg",
    status: "pending",
  },
  {
    name: "Self-Taught Programmer",
    imageUrl: "https://m.media-amazon.com/images/I/51+Z8QVq+WL.jpg",
    status: "pending",
  },
  {
    name: "Learn Domain-Driven Design",
    imageUrl: "https://m.media-amazon.com/images/I/819gVKYN7HL.jpg",
    status: "pending",
  },
  {
    name: "Refactoring",
    imageUrl: "https://m.media-amazon.com/images/I/71e6ndHEwqL.jpg",
    status: "pending",
  },
  {
    name: "Design Patterns",
    imageUrl: "https://m.media-amazon.com/images/I/81IGFC6oFmL._UF894,1000_QL80_.jpg",
    status: "pending",
  },
  {
    name: "Production-Ready Microservices",
    imageUrl: "https://m.media-amazon.com/images/I/81D4AHNvMsL._UF1000,1000_QL80_.jpg",
    status: "pending",
  },
];

function BookCard({ name, imageUrl, status }: Book) {
  return (
    <div className="flex flex-col overflow-hidden rounded dark:ring-zinc-500 h-[324px] w-[280px] relative">
      <Image
        src={imageUrl}
        width={280}
        height={324}
        alt={`Cover for ${name}`}
        className="absolute inset-0 w-full h-full"
      />
      <StatusBadge status={status} inProgressLabel={"Reading"} />
    </div>
  );
}

export default function BooksPage() {
  return (
    <>
      <div className="relative">
        <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
          Books
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 justify-items-center">
          {books.map((book) => (
            <BookCard key={book.name} {...book} />
          ))}
        </div>
      </div>
    </>
  );
}
