import React from 'react'
import PropTypes from 'prop-types'

class InputField extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    onFocus: PropTypes.func,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
  }
  static defaultProps = {
    type: 'text',
    className: 'c-input-field',
    onFocus: () => {},
    onChange: () => {},
    onBlur: () => {}
  }
  state = {
    value: this.props.value,
    propsValue: this.props.value
  }

  static getDerivedStateFromProps (props, state) {
    const { value } = props
    const { propsValue } = state
    if (value !== propsValue) {
      return {
        ...state,
        value,
        propsValue: value
      }
    }
    return {
      ...state
    }
  }

  render () {
    const {
      type,
      name,
      className
    } = this.props
    const { value } = this.state
    return (
      <input
        type={type}
        name={name}
        className={className}
        onFocus={this._onFocus}
        onChange={this._onChange}
        onBlur={this._onBlur}
        value={value}
      />
    )
  }

  _onFocus = (evt) => {
    const { onFocus } = this.props
    onFocus(evt)
  }

  _onChange = (evt) => {
    const { target: { value } } = evt
    const { onChange } = this.props
    this.setState({
      value
    })
    onChange(evt)
  }

  _onBlur = (evt) => {
    const { onBlur } = this.props
    onBlur(evt)
  }
}

export default InputField
