
import * as React from 'react';
import { mount } from 'enzyme';
import { Building } from './Building';

test('Building exists', (): void => {
    const el = (<Building />);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});

test('Building draws two floors', (): void => {
    const el = (<Building floors={2} />);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});

test('Building draws three floors', (): void => {
    const el = (<Building floors={3} />);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});
