export const SquareData = ({ title, value }: { title: string, value: string }) => {
    return <div className="flex flex-col gap-2 rounded-md p-4 lg:min-w-[20rem] lg:min-h-[10rem] border-2 border-gray-200 shadow-lg">
        <h2 className="lg:text-2xl text-sm font-bold">{title}</h2>
        <p className="lg:text-6xl text-md text-gray-500">{value}</p>
    </div>
}