import React from 'react';
import {SelectOption,} from '../../commons/types';
import Label from "./Label";
import Select, {StylesConfig} from "react-select";


interface InputProps {
    style: StylesConfig;
    testid: string;
    label?: string;
    type?: string;
    options: SelectOption[],
    onChange: (value: any) => void;
}

function SelectMenu(props: InputProps) {
    const {
        style,
        testid,
        label,
        options,
        type = 'text',
        onChange = () => {
        }
    } = props;

    return (
        <div data-testid={testid} style={{display: 'flex'}}>
            {label && <Label style={{lineHeight: '54px', marginRight: 10}}>{label}</Label>}
            <div style={{width: 200, marginRight: 10}}>
                <Select styles={style} isClearable={true}
                        onChange={(v: any) => onChange(v ? v.value : (type === 'number' ? -1 : ''))}
                        options={options}/>
            </div>
        </div>
    );
}

export default SelectMenu;
