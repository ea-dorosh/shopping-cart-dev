import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Input from "components/Input";

configure({
    adapter: new Adapter()
})

describe('<Input />', () => {

    it('Should render input with value', () => {
        const wrapper = shallow(<Input defaultValue={'some default value'} name={'name'} labelText={'some text'} handler={()=>{}}/>)
        expect(wrapper.find('input').props().value).toEqual('some default value');
    })

    it('Should render label with text', () => {
        const wrapper = shallow(<Input defaultValue={'some default value'} name={'name'} labelText={'some text'} handler={()=>{}}/>)
        expect(wrapper.find('label').text()).toEqual('some text');
    })

    it('Should render input with attribute name', () => {
        const wrapper = shallow(<Input defaultValue={'some default value'} name={'name'} labelText={'some text'} handler={()=>{}}/>)
        expect(wrapper.find('input').props().name).toEqual('name');
    })

    it('Should render input with attribute pattern', () => {
        const wrapper = shallow(<Input defaultValue={'some default value'} name={'name'} labelText={'some text'} handler={()=>{}} pattern={'[/0-9]*'}/>)
        expect(wrapper.find('input').props().pattern).toEqual('[/0-9]*');
    })
})
