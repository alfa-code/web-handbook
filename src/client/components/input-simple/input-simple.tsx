import React, { ReactNode } from 'react';

import styles from './input-simple.module.scss';

interface Props {
    placeholder?: string;
    children?: any;
}
interface State {
    value: string;
}

export class InputSimple extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || '',
    };
  }

    inputOnChange = (e) => {
      this.setState({ value: e.target.value });
    }

    render(): ReactNode {
      const { placeholder } = this.props;
      const { value } = this.state;

      return (
        <span className={styles.inputSimple}>
          <input
            type="text"
            onChange={this.inputOnChange}
            value={value}
            className={styles.input}
          />
          <span className={`${styles.label} ${(value ? styles.labelFilled : '')}`}>
            { placeholder }
          </span>
        </span>
      );
    }
}
