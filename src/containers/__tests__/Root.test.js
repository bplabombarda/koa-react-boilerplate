import React from 'react'

import { Root } from '../Root'

describe('Root', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<Root />)
    expect(asFragment()).toMatchSnapshot()
  })
})
