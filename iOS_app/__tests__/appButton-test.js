import React from 'react'
import { mount, shallow, render } from 'enzyme'
import { spy } from 'sinon'
import { expect } from 'chai'

jest.dontMock('../components/AppButton')
const AppButton = require('../components/AppButton')

describe('AppButton', () => {
  let testButton
  let handleAction

  beforeEach(() => {
    handleAction = spy()
    testButton = shallow(<AppButton onAction={handleAction} />)
  })

  it('should display the button', () => {
    testButton.find('TouchableHighlight').first().simulate('press')
    console.log((handleAction.calledOnce))
    expect(handleAction.calledOnce).to.be.true
  })
})
