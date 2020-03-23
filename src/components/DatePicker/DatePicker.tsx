import React from 'react';
import ReactDatePicker from 'react-datepicker';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';

import './DatePicker.scss';

export interface DatePickerProps {
    onChange: (event: any) => void
    date: Date
    dateFormat?: string
    label?: string
    disabled?: boolean
    invalid?: boolean
    placeholder?: string
    children?: React.ReactNode
}

const DatePicker = ({children, placeholder, disabled=false,
                        label, dateFormat="yyyy/MM/dd", date, onChange}: DatePickerProps) => {
    return (
        <div className="datepicker__wrapper">
            { label ? <label className="datepicker__label">{label}</label> : null }
            <ReactDatePicker
                locale={ru}
                selected={date}
                dateFormat={dateFormat}
                onChange={onChange}
                placeholderText={placeholder}
                disabled={disabled}
                todayButton={`Сегодня ${format(date, 'dd.MM.yyyy')}`}
            />
        </div>
    );
};

export default DatePicker;