export default function NotFound() {
  return (
    <div className="mb-16 mt-16 text-center">
      <h1 className="mb-6 text-5xl max-sm:text-4xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="text-sm">
        Oops! Looks like you took the wrong turn. You can head back to the{" "}
        <a
          href="/"
          className="notfound-highlight"
        >
          Home
        </a>{" "}
        page, or stick around and check out the{" "}
        <a
          href="/ps3"
          className="notfound-highlight"
        >
          PS3
        </a>{" "}
        games I&apos;m currently playing just below!
      </p>
    </div>
  );
}
