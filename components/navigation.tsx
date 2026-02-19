import Button from "./button";

export default function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 bg-(--card)">
      {/* COMPANY LOGO */}
      <div className="flex items-center">
        <Button text="Company Logo" destination="/" />
      </div>

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
