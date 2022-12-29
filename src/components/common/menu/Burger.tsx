export const Burger: React.FC = (): JSX.Element => (
    <div className={`w-[30px] md:hidden rounded-sm overflow-hidden cursor-pointer`}>
        {[...Array(3)].map((elem, index) => (
            <div key={index} className="w-full h-[3px] rounded-md bg-secondary_light mb-1"></div>
        ))}
    </div>
);
