# FuturePay (Worldpay) Form Integration Library for JavaScript

[![GitHub release](https://img.shields.io/github/release/jamesmcroft/futurepay-form-integration-for-js.svg)](https://github.com/jamesmcroft/futurepay-form-integration-for-js/releases)
[![npm](https://img.shields.io/npm/v/futurepay-form-integration-js.svg)](https://www.npmjs.com/package/futurepay-form-integration-js)
[![npm Downloads](https://img.shields.io/npm/dt/futurepay-form-integration-js.svg)](https://www.npmjs.com/package/futurepay-form-integration-js)
[![Build status](https://github.com/jamesmcroft/futurepay-form-integration-for-js/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/jamesmcroft/futurepay-form-integration-for-js/actions/workflows/ci.yml)
[![Twitter Followers](https://img.shields.io/twitter/follow/jamesmcroft?label=follow%20%40jamesmcroft&style=flat)](https://twitter.com/jamesmcroft)

The FuturePay (Worldpay) Form Integration Library for JavaScript is a library that allows you to integrate with FuturePay's hosted [Form Integration](http://support.worldpay.com/support/kb/bg/recurringpayments/rpfp.html) method for recurring payments with JavaScript applications.

## Install

```sh
npm install futurepay-form-integration-for-js
```

## Usage

### Initiating a recurring payment agreement

```js
import { FuturePayService, FuturePayType, CurrencyCode, DelayUnit, RegularAgreement, RegularAgreementOption } from 'futurepay-form-integration-for-js';

var service = new FuturePayService();

var agreement = {
        instId: '1234567'
        futurePayType: FuturePayType.Regular,
        intervalUnit: DelayUnit.Month,
        intervalMult: 1,
        startDelayUnit: DelayUnit.Month,
        starDelayMult: 1,
        amount: 60,
        currency: CurrencyCode.GBP,
        normalAmount: 60,
        option: RegularAgreementOption.Default,
        cartId: '1234',
        testMode: 100
    } as RegularAgreement;

/*
 * Calling this method will automatically submit the data to FuturePay and redirect the user to FuturePay's Form Integration page.
 */
await service.initiateAgreement(agreement);
```

## Contributing 🤝🏻

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/jamesmcroft/futurepay-form-integration-for-js/issues). You can also take a look at the [contributing guide](https://github.com/jamesmcroft/futurepay-form-integration-for-js/blob/main/CONTRIBUTING.md).

We actively encourage you to jump in and help with any issues!

## Support this project 💗

As many developers know, projects like this are built and maintained in spare time. If you find this project useful, please **Star** the repo.

## Author

👤 **James Croft**

* Website: <https://www.jamescroft.co.uk>
* Twitter: [@jamesmcroft](https://twitter.com/jamesmcroft)
* Github: [@jamesmcroft](https://github.com/jamesmcroft)
* LinkedIn: [@jmcroft](https://linkedin.com/in/jmcroft)

## License

This project is made available under the terms and conditions of the [MIT license](LICENSE).
