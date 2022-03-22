import React, { useState } from "react";
import Link from 'next/link';


function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);

    return (
        <aside className="w-64" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded bg-sky-300">
                <ul className="space-y-2">
                    <li>
                        <a href="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="ml-3 mx-4 font-medium">Dashboard</span>
                        </a>
                    </li>
                    <hr></hr>
                    <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className="flex-1 ml-3 font-medium">Add Employees</span>
                        </a> 
                    </li>
                    <hr></hr>
                    <li>
                        <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" 
                        data-collapse-toggle="dropdown-example" onClick = {() => setIsOpen(!isOpen)}>
                            <span className="flex-1 ml-3 text-left whitespace-nowrap ml-3 font-medium">General Mangement</span>
                        </button>
                        {isOpen ? (
                                                    <div className="visibility: visible">
                                                        <ul id="dropdown-example" className="py-2 space-y-2">
                                                            <li>
                                                                <Link href="/general-management/department">
                                                                    <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-600 
                                                                    rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 font-medium">Department</a>
                                                                </Link>
                                                            </li>
                                                            <hr></hr>
                                                            <li>
                                                                <Link href="/general-management/division">
                                                                    <a className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-600 
                                                                    rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 font-medium">Divison</a>
                                                                </Link>
                                                            </li>
                                                            <hr></hr>
                                                            <li>
                                                                <Link href="/general-management/country">
                                                                    <a className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-600 
                                                                rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 font-medium">
                                                                 Country
                                                                </a>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                            ): (
                                <div></div>
                            )
                        }
                    </li>
                </ul>
            </div>
        </aside>

    );
}

export default Sidebar;