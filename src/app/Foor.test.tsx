
import * as React from 'react';
import { mount } from 'enzyme';
import { Floor } from './Floor';

test('Floor exists', (): void => {
    const el = (<Floor level={1} />);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});

test('Floor is at the first level', (): void => {
    const el = (<Floor level={1} firstLevel={true} />);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});

test('Floor is at the last level', (): void => {
    const el = (<Floor level={1} lastLevel={true} />);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});
