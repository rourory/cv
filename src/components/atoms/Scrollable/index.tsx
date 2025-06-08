const Scrollable = () => {
  return (
    <>
      <div
        id="scrollable-left"
        className="absolute left-0 z-10 w-[30vw] h-full pointer-events-auto"
      />
      <div
        id="scrollable-right"
        className="absolute right-0 z-10 w-[30vw] h-full pointer-events-auto"
      />
    </>
  );
};

export default Scrollable;
