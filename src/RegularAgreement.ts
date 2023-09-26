import { DelayUnit } from "./DelayUnit";
import { RegularAgreementOption } from "./RegularAgreementOption";
import { Agreement } from "./Agreement";

export interface RegularAgreement extends Agreement {
    /**
     * The date on which the first payment will be made. 
     * 
     * If this is set, the start date must be in the future and not today.
     *      * 
     * The date format is yyyy-mm-dd.
     **/
    startDate: string;

    /**
     * The unit of the delay between when the agreement is created and when the first payment will be made.
     **/ 
    startDelayUnit: DelayUnit;

    /**
     * The delay unit multiplier.
     * 
     * The actual delay is obtained by multiplying the `startDelayUnit` by the `startDelayMult`.
     * 
     * If set, must be >= 1.
     **/
    startDelayMult: number | null;

    /**
     * The number of payments which will be made under the agreement.
     * 
     * Positive integer. Set to 0 or leave unset for unlimited.
     **/
    noOfPayments: number | null;

    /**
     * The unit of the interval between payments.
     * 
     * Must be set except when number of payments is 1, in which case it cannot be set.
     **/
    intervalUnit: DelayUnit | null;

    /**
     * The interval unit multiplier.
     * 
     * The actual interval is obtained by multiplying the `intervalUnit` by the `intervalMult`.
     * 
     * If set must be >=1.
     **/
    intervalMult: number | null;

    /**
     * The amount of the initial payment.
     *
     * If not set, first payment will be for the normal amount.
     **/
    initialAmount: number | null;

    /**
     * The amount of the normal payment.
     * 
     * Must be set, cannot be zero.
     */
    normalAmount: number;

    /**
     * The agreement option.
     **/
    option: RegularAgreementOption;
}