export default function NotFound() {
  return (
    <div className="mb-16 mt-16 text-center">
      <h1 className="mb-6 text-5xl max-sm:text-4xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="text-sm">
        Oops! It looks like you’ve taken a wrong turn. No worries, you can head back to the{" "}
        <a
          href="/"
          className="notfound-highlight"
        >
          Home
        </a>{" "}
        page, or if you’re curious, check out the{" "}
        <a
          href="/ps3"
          className="notfound-highlight"
        >
          PS3
        </a>{" "}
        games I&apos;ve been enjoying lately or the{" "}
        <a
          href="/books"
          className="notfound-highlight"
        >
          books
        </a>{" "}
        I&apos;m currently reading!
      </p>
    </div>
  );
}
