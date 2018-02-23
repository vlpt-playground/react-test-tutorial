import React, { Component } from 'react';

class NameForm extends Component {
  static defaultProps = {
    onSubmit: () => console.warn('onSubmit not defined'),
    onChange: () => console.warn('onChange not defined'),
    value: ''
  }
  render() {
    const { onSubmit, onChange, value } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <label>이름</label>
        <input type="text" value={value} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default NameForm;