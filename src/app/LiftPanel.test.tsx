
import * as React from 'react';
import { mount } from 'enzyme';
import { LiftPanel } from './LiftPanel';

test('LiftPanel highlighs the currentLevel', (): void => {
    const el = (<LiftPanel currentLevel={3} floors={5} />);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});
