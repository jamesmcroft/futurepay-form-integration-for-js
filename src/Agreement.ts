import { CurrencyCode } from "./CurrencyCode";
import { FuturePayType } from "./FuturePayType";
import { AgreementMap } from "./AgreementMap";
import { TestMode } from "./TestMode";

export interface Agreement extends AgreementMap {
    /**
     * The type of future payment agreement.
     **/
    futurePayType: FuturePayType;

    /**
     * The merchant installation reference.
     **/
    instId: string;

    /**
     * The merchant reference for the agreement and immediate payment if present.
     **/
    cartId: string;

    /**
     * Should be set to 0 unless there is an immediate payment.
     **/
    amount: number;

    /**
     * The currency of the payment.
     **/
    currency: CurrencyCode;

    /**
     * The description of the payment.
     **/
    desc: string;

    /**
     * Determines whether to initiate the payment in test or live modes.
     **/
    testMode: TestMode;
}