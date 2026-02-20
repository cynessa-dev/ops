import Button from "./button";

export default function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-6">
      {/* MENU */}
      <div>
        <button type="button" className="text-(--secondary) text-[1.5rem] font-light tracking-[0.1rem]">MENU</button>
      </div>

      {/* COMPANY LOGO */}
      <div>
        <button type="button" className="text-foreground text-[2rem] font-light tracking-[0.5rem]">OPS</button>
      </div>

      {/* CONTACT */}
      <div>
        <button type="button" className="text-(--secondary) text-[1.5rem] font-light tracking-[0.1rem]">CONTACT ME</button>
      </div>

    </nav>
  );
}
