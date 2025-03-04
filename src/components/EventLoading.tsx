const EventLoading = () => {
    return (
        <div className="w-full h-lvh flex flex-center">
            <div role="status"
                 className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex-row justify-center md:items-center flex flex-col w-full h-full">
                <div
                    className="flex items-center justify-center w-full lg:w-1/2 xl:w-1/3 h-[300px] md:h-1/3 rounded-3xl bg-gray-300 dark:bg-gray-700">
                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path
                            d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                </div>
                <div className="w-full">
                    <div className="grid grid-cols-7 grid-rows-4 gap-4 w-full">
                        <div className="col-span-2 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="col-span-2 col-start-1 row-start-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                        <div className="col-span-2 col-start-1 row-start-3 h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                        <div className="col-span-2 col-start-1 row-start-4 h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                        <div className="col-start-3 row-start-1 h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                        <div className="col-start-3 row-start-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                        <div className="col-start-3 row-start-3 h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                        <div className="col-start-3 row-start-4 h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                        <div className="col-span-4 col-start-4 row-start-1 h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                        <div className="col-span-4 col-start-4 row-start-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                        <div className="col-span-4 col-start-4 row-start-3 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="col-span-4 col-start-4 row-start-4 h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EventLoading
