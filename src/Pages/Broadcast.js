import React from "react";
import NavMenu from "../Components/NavMenu";
import Sidebar from "../Components/SidebarMenu";
import AsyncSelect from 'react-select/async';
import { ColourOption, colourOptions } from './docs/data';

// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
// ];

interface State {
    readonly inputValue: string;
}

const filterColors = (inputValue: string) => {
    return colourOptions.filter((i) =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
};

const loadOptions = (
    inputValue: string,
    callback: (options: ColourOption[]) => void
) => {
    setTimeout(() => {
        callback(filterColors(inputValue));
    }, 1000);
};


const Broadcast = () => {
    state: State = { inputValue: '' };
    handleInputChange = (newValue: string) => {
        const inputValue = newValue.replace(/\W/g, '');
        this.setState({ inputValue });
        return inputValue;
    };
    return (
        <div className="flex h-full sm:h-full">
            <Sidebar />
            <div className="h-full sm:h-screen flex-1">
                <NavMenu />
                <div className="container-fluid max-h-screen px-2">
                    <h1 className="text-2xl font-semibold text-left mt-2 mb-2">Broadcast</h1>
                    <div className='flex max-h-screen'>
                        <div className="rounded-xl border p-5 shadow-md h-full w-full bg-white">
                            <AsyncSelect
                                cacheOptions
                                loadOptions={loadOptions}
                                defaultOptions
                                onInputChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Broadcast;