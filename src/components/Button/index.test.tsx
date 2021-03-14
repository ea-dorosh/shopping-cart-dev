import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Button from "components/Button";

configure({
    adapter: new Adapter()
})

describe('<Button />', () => {

    it('Should render button with text', () => {
        const wrapper = shallow(<Button type={'button'} text={'some text'}/>)
        expect(wrapper.find('button').text()).toEqual('some text');
    })

    it('Should render button which is disabled', () => {
        const wrapper = shallow(<Button type={'button'} text={'some text'} disabled={true}/>)
        expect(wrapper.props().disabled).toEqual(true);
    })
})

