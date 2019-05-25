import React from 'react'
// import axiosMock from 'axios'

import App from '../App'

describe('App component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<App />)
    // jest.spyOn(React, 'useEffect').mockImplementation(React.useLayoutEffect)
  })

  it('renders', () => {
    // const markets = [
    //   { FMID: 1, MarketName: 'Market Number One', city: 'Chicago', State: 'Illinois', zip: 60602 },
    //   { FMID: 2, MarketName: 'Market Number Two', city: 'Detroit', State: 'Michigan', zip: 48226 },
    //   { FMID: 3, MarketName: 'Market Number Three', city: 'Milwaukee', State: 'Wisconsin', zip: 53202 },
    // ]
    const { asFragment } = wrapper
    expect(asFragment()).toMatchSnapshot()
  })
})
