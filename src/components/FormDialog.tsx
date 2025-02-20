import {Dialog, DialogBackdrop, DialogPanel, DialogTitle} from "@headlessui/react";
import {Survey} from "survey-react-ui";
import 'survey-core/defaultV2.min.css';

const FormDialog = ({open,setOpen,survey}:{open:boolean,setOpen:(open: any)=>void,survey:any}) => {
    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-black/80 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-transparent text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-screen-sm data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >
                        <div className=" bg-transparent px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex flex-col sm:items-center">
                                <div className="mx-auto flex size-40 shrink-0 items-center justify-center rounded-full bg-[#b3e8dc] sm:mx-0">
                                    <img className="h-[40px] w-[40px] hover:scale-125 transition-all ease-in duration-300" src="https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/ahoubaLogo.svg"
                                         alt="icon"/>
                                </div>
                                <div className="mt-6 text-center  sm:ml-4 sm:text-left">
                                    <DialogTitle as="h3" className="text-3xl font-semibold text-white text-center">
                                        Complete Your Registration !
                                    </DialogTitle>
                                    <div className="mt-2 relative h-[60vh] overflow-y-auto border-2 overflow-x-auto border-blue-400 rounded-2xl">
                                        <Survey model={survey} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" flex justify-center p-4 gap-4">
                            <div onClick={() => setOpen((open: any)=>!open)}
                                 className="group flex gap-4 items-center relative overflow-hidden px-8 py-3 rounded-full w-fit h-fit border-2 border-red-600 bg-red-400 ">
                                <h1 className="text-3xl text-white font-Roobert group-hover:no-underline group-hover:cursor-pointer">
                                    Close
                                </h1>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
export default FormDialog
