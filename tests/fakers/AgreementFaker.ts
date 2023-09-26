import { faker } from '@faker-js/faker';
import { LimitedAgreement } from '../../src/LimitedAgreement';
import { LimitedAgreementOption } from '../../src/LimitedAgreementOption';
import { RegularAgreement } from "../../src/RegularAgreement";
import { RegularAgreementOption } from "../../src/RegularAgreementOption";
import { FuturePayType } from "../../src/FuturePayType";
import { DelayUnit } from "../../src/DelayUnit";
import { CurrencyCode } from "../../src/CurrencyCode";

export const regularAgreement = (): RegularAgreement => {
    return {
        futurePayType: FuturePayType.Regular,
        startDate: new Date().toISOString().slice(0, 10),
        startDelayUnit: DelayUnit.Day,
        startDelayMult: 1,
        intervalUnit: DelayUnit.Month,
        intervalMult: 1,
        normalAmount: 60,
        currency: CurrencyCode.GBP,
        option: RegularAgreementOption.Default,
        cartId: faker.finance.accountNumber(),
        desc: faker.lorem.sentence(),
    } as RegularAgreement;
};

export const limitedAgreement = (): LimitedAgreement => {
    return {
        futurePayType: FuturePayType.Limited,
        startDate: new Date().toISOString().slice(0, 10),
        startDelayUnit: DelayUnit.Day,
        startDelayMult: 1,
        noOfPayments: 1,
        intervalUnit: DelayUnit.Month,
        intervalMult: 1,
        endDate: faker.date.future().toISOString().slice(0, 10),
        option: LimitedAgreementOption.Default,
        currency: CurrencyCode.GBP,
        cartId: faker.finance.accountNumber(),
        desc: faker.lorem.sentence(),
    } as LimitedAgreement;
}