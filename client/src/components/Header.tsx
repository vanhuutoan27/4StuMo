function Header({ title, desc }) {
  return (
    <div className="h-46 relative rounded-b-3xl bg-primary px-5 py-10 text-center text-white">
      <div className="relative z-10">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Header
