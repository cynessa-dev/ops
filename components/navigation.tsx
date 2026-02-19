export default function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 bg-(--card)">
      {/* COMPANY LOGO */}
      <h1 className="text-2xl font-bold">Ops</h1>

      {/* MENU OPTIONS */}
      <ul className="flex gap-4">
        <li className="px-4 py-6 cursor-pointer hover:bg-foreground/10">Documentation</li>
        <li className="px-4 py-6 cursor-pointer hover:bg-foreground/10">About Us</li>
        <li className="px-4 py-6 cursor-pointer hover:bg-foreground/10">Contact Us</li>
        <li className="px-4 py-6 cursor-pointer hover:bg-foreground/10">Get Started</li>
      </ul>
    </nav>
  );
}
