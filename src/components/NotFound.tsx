const NotFound = () => {
  return (
    <div className="text-center mt-10 flex flex-col gap-10 items-center justify-center h-80">
      <h1 className="text-5xl">😕</h1>
      <h1 className="text-4xl">Not Found</h1>
      <p className="text-2xl">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead..
      </p>
    </div>
  );
}

export default NotFound