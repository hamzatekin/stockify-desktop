const Content = ({ children }: ContentProps) => {
  return (
    <div
      className="flex flex-col w-100"
      style={{ height: 'calc(100% - 14px)' }}
    >
      {children}
    </div>
  );
};

export default Content;
