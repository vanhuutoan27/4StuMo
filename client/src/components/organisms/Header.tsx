interface HeaderProps {
  title: string;
  desc: string;
}

function Header({ title, desc }: HeaderProps) {
  return (
    <div className="mb-4 mt-2">
      <h2 className="font-bold text-4xl text-primary cursor-pointer duration-300 transition-all">
        {title}
      </h2>
      <p className="text-gray-400 ml-[1px]">{desc}</p>
    </div>
  );
}

export default Header;
