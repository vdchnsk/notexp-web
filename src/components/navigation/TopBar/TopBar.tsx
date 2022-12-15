export const TopBar = (): JSX.Element => {
    return (
        <div
            className={`
                h-[60px]
                ml-auto
                flex flex-row
                bg-secondary
                fixed
                top-0
                w-full
                z-10
                border-b-8 border-border_primary
            `}
        ></div>
    );
};
