import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Directory from './Directory';


describe("Directory Component", () => {

  let wrapper: ShallowWrapper;
  let mockOnMenuItemClick: jest.Mock<any, any>

  beforeEach(() => {
    mockOnMenuItemClick = jest.fn()

    const mockProps = {
      sections: [],
      onMenuItemClick: mockOnMenuItemClick
    }

    wrapper = shallow(<Directory {...mockProps} />)
  })
  it('should render Directory component', () => {
    expect(wrapper).toMatchSnapshot();
  });
})

