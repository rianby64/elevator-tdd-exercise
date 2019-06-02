
import * as React from 'react';
import { mount } from 'enzyme';
import { FloorPanel } from './FloorPanel';

test('FloorPanel has up and down buttons', (): void => {
    const el = (<FloorPanel upButton={true} downButton={true} />);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});

test('FloorPanel has only up button', (): void => {
    const el = (<FloorPanel upButton={true} downButton={false} />);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});

test('FloorPanel has down button', (): void => {
    const el = (<FloorPanel upButton={false} downButton={true} />);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});

test('FloorPanel has no buttons', (): void => {
    const el = (<FloorPanel upButton={false} downButton={false} />);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});

test('FloorPanel allows to call the lift', (): void => {
    let liftCalled = false;
    const callLift = (): void => {
        liftCalled = true;
    }
    const el = (<FloorPanel
        upButton={true} downButton={false}
        callLift={callLift} />);
    const sh = mount(el);
    sh.find('li').simulate('click');
    expect(liftCalled).toBe(true);
});
