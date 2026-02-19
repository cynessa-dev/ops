export default function Navigation() {
  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-(--card)">
      {/* COMPANY LOGO */}
      <h1 className="text-2xl font-bold">Ops</h1>

      {/* MENU OPTIONS */}
      <ul className="flex gap-4">
        <li className="py-2 px-4 rounded hover:bg-zinc-800">Documentation</li>
        <li className="py-2 px-4 rounded hover:bg-zinc-800">About Us</li>
        <li className="py-2 px-4 rounded hover:bg-zinc-800">Contact Us</li>
        <li className="py-2 px-4 rounded hover:bg-zinc-800">Get Started</li>
      </ul>
    </nav>
  );
}
