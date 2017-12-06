import React from 'react';
import ReactDOM from 'react-dom';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MakeHtml from '../MakeHtml';
import MakeHtmlHomeButton from '../MakeHtmlHomeButton';
import MakeHtmlDropDowns from '../MakeHtmlDropDowns';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'sanity');
configure({adapter: new Adapter()});

describe('WebCrafts MakeHtml Tests', function () {

    'use strict';

    it('expects true to be true', function () {
        expect(true).toBe(true);
    });

    it('loads component MakeHtml without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MakeHtml/>, div);
    });

    it('expects MakeHtmlHomeButton in MakeHtml', () => {
        const wrapper = shallow(<MakeHtml/>);
        const component = <MakeHtmlHomeButton/>;
        elfDebugEnzyme.getAll(wrapper, true);
        expect(wrapper.contains(component)).toEqual(true);
    });

    it('expects MakeHtmlDropDowns in MakeHtml', () => {
        const wrapper = shallow(<MakeHtml/>);
        const component = <MakeHtmlDropDowns/>;
        elfDebugEnzyme.getAll(wrapper, true);
        expect(wrapper.contains(component)).toEqual(true);
    });

});
