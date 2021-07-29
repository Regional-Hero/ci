import React from 'react';
import PropTypes from 'prop-types';

import styles from '../public/css/paymentSelection.module.css';
import commonStyles from '../public/css/common.module.css';

/**
 * PaymentSelection class
 *
 */
export class PaymentSelection extends React.Component { // eslint-disable-line no-unused-vars
  /**
   * PaymentSelection constructor
   *
   * @param {object} props - The react properties
   * @return {void}
   **/
  constructor(props) {
    super(props);
  }

  /**
   * Render - renders
   * @return {object} - The element to be renderd
   *
   */
  render() {
    const paymentTranslations = {
      sofort: 'SOFORT Überweisung',
      giropay: 'Giropay',
      creditcard: 'Kreditkarte',
      paypal: 'PayPal',
      applepay: 'Apple Pay',
    };
    const paymentMethods = [
      <div key='sofort' className={styles.paymentLine} onClick={() => this.props.setPaymentMethod('sofort')}>
        <input className={styles.paymentRadio} type="radio" id="sofortbanking" name="paymentMethod" value="sofort" checked={this.props.paymentMethod === 'sofort'} onChange={() => this.props.setPaymentMethod('sofort')} />
        <img className={styles.paymentLogo} height="53" src="/images/paymentSelection/sofort.svg" alt="SOFORT Überweisung" title="SOFORT Überweisung" />
      </div>,
      <div key='giropay' className={styles.paymentLine} onClick={() => this.props.setPaymentMethod('giropay')}>
        <input className={styles.paymentRadio} type="radio" id="giropay" name="paymentMethod" value="giropay" checked={this.props.paymentMethod === 'giropay'} onChange={() => this.props.setPaymentMethod('giropay')} />
        <img className={styles.paymentLogo} height="53" src="/images/paymentSelection/giropay.svg" alt="Giropay" title="Giropay" />
      </div>,
      <div key='creditcard' className={styles.paymentLine} onClick={() => this.props.setPaymentMethod('creditcard')}>
        <input className={styles.paymentRadio} type="radio" id="creditcard" name="paymentMethod" value="creditcard" checked={this.props.paymentMethod === 'creditcard'} onChange={() => this.props.setPaymentMethod('creditcard')} />
        <img className={styles.paymentLogo} height="53" src="/images/paymentSelection/creditcard.svg" alt="Kreditkarte" title="Kreditkarte" />
      </div>,
      <div key='paypal' className={styles.paymentLine} onClick={() => this.props.setPaymentMethod('paypal')}>
        <input className={styles.paymentRadio} type="radio" id="paypal" name="paymentMethod" value="paypal" checked={this.props.paymentMethod === 'paypal'} onChange={() => this.props.setPaymentMethod('paypal')} />
        <img className={styles.paymentLogo} height="53" src="/images/paymentSelection/paypal.svg" alt="PayPal" title="PayPal" />
      </div>,
    ];

    if (window.ApplePaySession) {
      paymentMethods.push(<div key='applepay' className={styles.paymentLine} onClick={() => this.props.setPaymentMethod('applepay')}>
        <input className={styles.paymentRadio} type="radio" id="applepay" name="paymentMethod" value="applepay" checked={this.props.paymentMethod === 'applepay'} onChange={() => this.props.setPaymentMethod('applepay')} />
        <img className={styles.paymentLogo} height="53" src="/images/paymentSelection/applepay.svg" alt="Apple Pay" title="Apple Pay" />
      </div>);
    }


    return <div className={styles.paymentMethodBlock}>
      <label htmlFor="paymentMethod" className={`${commonStyles.labelEnhanced} ${this.props.paymentError ? commonStyles.errorLabel : ''}`}>Bezahlmethode: {paymentTranslations[this.props.paymentMethod]}</label>
      <div className={styles.paymentMethods}>
        {paymentMethods}
      </div>
      <div className={`${this.props.paymentError ? commonStyles.error : ''} ${commonStyles.errorMessage}`}>Diese Bezahlmethode kann momentan nicht verwendet werden.</div>
    </div>;
  }
}

PaymentSelection.propTypes = {
  paymentMethod: PropTypes.string,
  setPaymentMethod: PropTypes.func,
  paymentError: PropTypes.bool,
};
