export default function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 pt-4 lg:pt-6 xl:pt-16">
      {/* MENU */}
      <div>
        <button type="button" className="text-(--secondary) text-[1rem] xl:text-[1.5rem] font-light tracking-[0.1rem] cursor-pointer">MENU</button>
      </div>

      {/* COMPANY LOGO */}
      <div>
        <button type="button" className="text-foreground text-[1rem] xl:text-[2rem] font-light tracking-[0.5rem] cursor-pointer">OPS</button>
      </div>

      {/* CONTACT */}
      <div>
        <button type="button" className="text-(--secondary) text-[1rem] xl:text-[1.5rem] font-light tracking-[0.1rem] cursor-pointer">CONTACT ME</button>
      </div>

    </nav>
  );
}
