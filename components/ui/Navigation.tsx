export default function Navigation() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 w-full border-b border-border">
        {/* BRANDING */}
        <div>
            <h1 className="font-semibold">Ops.</h1>
        </div>

        {/* PROFILE */}
        <div className="flex items-center space-x-8">
            <div>
                JC
            </div>
            <div>
                Juan Dela Cruz
            </div>
        </div>
    </nav>
  );
}
