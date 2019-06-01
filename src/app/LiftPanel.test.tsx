
import * as React from 'react';
import { mount } from 'enzyme';
import { LiftPanel } from './LiftPanel';

test('LiftPanel highlighs the currentLevel', (): void => {
    const el = (<LiftPanel currentLevel={3} floors={5} />);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});

test('LiftPanel highlighs the pressed button', (): void => {
    const el = (<LiftPanel currentLevel={3} floors={5} />);
    const sh = mount(el);
    sh.findWhere(el => el.key() === '2').find('button').simulate('click');
    expect(sh).toMatchSnapshot();
});
