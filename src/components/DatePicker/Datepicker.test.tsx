import React from "react";
import { shallow, mount } from 'enzyme';
import DatePicker from "./DatePicker";

const onChange = jest.fn();
const date = new Date();

describe('DatePicker component', () => {
    let component: any;
    beforeEach(() => {
        component = shallow(<DatePicker onChange={onChange} date={date} label="Дата" placeholder="Введите дату" dateFormat="yyyy.MM.dd" />);
    });

    it('Renders DatePicker component', () => {
        expect(component).toMatchSnapshot();
    });

    describe('Default values', () => {

        it('Should have correct default disabled value', () => {
            const wrapper = component.find('t');
            expect(wrapper.prop('disabled')).toBe(false);
        });
        it('Renders correct default dateFormat value', () => {
            const component = shallow(<DatePicker onChange={onChange} date={date} />);
            const wrapper = component.find('t');
            expect(wrapper.prop('dateFormat')).toBe('yyyy/MM/dd');
        });
    });

    describe('Component Props', () => {
        it('Receives correct placeholder in props', () => {
            const wrapper = component.find('t');
            expect(wrapper.prop('placeholderText')).toBe('Введите дату');
        });
        it('Receives correct dateFormat in props', () => {
            const wrapper = component.find('t');
            expect(wrapper.prop('dateFormat')).toBe('yyyy.MM.dd');
        });
        it('Renders Label if have props', () => {
            const component = shallow(<DatePicker onChange={onChange} date={date} label="Дата"/>);
            const wrapper = component.find('label');
            expect(wrapper.text()).toEqual('Дата');
        });
        it('Receives correct disabled in props', () => {
            const component = shallow(<DatePicker onChange={onChange} date={date} disabled={true} />);
            const wrapper = component.find('t');
            expect(wrapper.prop('disabled')).toBe(true);
        });
    });

    describe('Component State', () => {
        it('State updates correctly', () => {
            const component = mount(<DatePicker onChange={onChange} date={date} placeholder="Введите дату" dateFormat="yyyy.MM.dd" />);
            component.find('input[type="text"]').simulate('change', {
                target: {
                    value: '2020/03/04',
                },
            });
            expect(component.find('input[type="text"]').prop('value')).toEqual(
                '2020/03/04',
            );
        });
    });

    describe('NOT Render', () => {
        const component = shallow(<DatePicker onChange={onChange} date={date} />);
        it('Not render label if props not received', () => {
            const wrapper = component.find('label');
            expect(wrapper.length).toEqual(0);
        })
    });

});