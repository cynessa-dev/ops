type CardProps = {
    title: string;
    data: string;
    icon: string;
}

export default function StatCard({ title, data, icon }: CardProps) {
  return (
    <div className="flex justify-start items-center pr-6 py-4 border border-border rounded-xl not-dark:shadow-card">
        <div className="flex px-10 w-10 h-10 shrink-0 justify-center items-center rounded-xl">
            <span className="material-symbols-rounded">
                { icon }
            </span>
        </div>
        <div>
            <div>
                <h2 className="text-[1rem] font-semibold uppercase">
                    { title }
                </h2>
            </div>
            <div>
                <h1 className="text-[1.75rem] font-bold">
                    { data }
                </h1>
            </div>
        </div>
    </div>
  );
}
