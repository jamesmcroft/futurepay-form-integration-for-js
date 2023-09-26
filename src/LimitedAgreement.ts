import { Agreement } from "./Agreement";
import { DelayUnit } from "./DelayUnit";
import { LimitedAgreementOption } from "./LimitedAgreementOption";

export interface LimitedAgreement extends Agreement {
    /**
     * The date from which payments can occur. 
     * 
     * The start date must be in the future.
     * 
     * The date format is yyyy-mm-dd.
     **/
    startDate: string | null;

    /**
     * The unit of the delay between when the agreement is created and when the payments can occur.
     * 
     * Cannot be set if `startDate` is specified.
     **/
    startDelayUnit: DelayUnit | null;

    /**
     * The delay unit multiplier.
     * 
     * Should not be set if `startDate` is specified.
     * 
     * The actual delay is obtained by multiplying the `startDelayUnit` by the `startDelayMult`.
     * 
     * Must be a positive integer.
     **/
    startDelayMult: number | null;

    /**
     * The number of payments to be made.
     * 
     * If `option` is set to `LimitedAgreementOption.Default`, must be a positive integer, or leave unset for unlimited.
     * 
     * If `option` is set to `LimitedAgreementOption.Interval`, must be a positive integer.
     * 
     * If `option` is set to `LimitedAgreementOption.Limited` or `LimitedAgreementOption.IntervalLimited`, must be unset.
     **/
    noOfPayments: number | null;

    /**
     * The unit of the interval between payments.
     * 
     * If `option` is set to `LimitedAgreementOption.Default`, can be left unset. Must not be set if `noOfPayments` is 1.
     * 
     * If `option` is set to `LimitedAgreementOption.Interval`, must be set.
     * 
     * If `option` is set to `LimitedAgreementOption.Limited`, must be unset.
     * 
     * If `option` is set to `LimitedAgreementOption.IntervalLimited`, must be set.
     **/
    intervalUnit: DelayUnit | null;

    /**
     * The interval unit multiplier.
     * 
     * The actual interval is obtained by multiplying the `intervalUnit` by the `intervalMult`.
     * 
     * If `option` is set to `LimitedAgreementOption.Default`, can be left unset. Must not be set if `noOfPayments` is 1.
     * 
     * If `option` is set to `LimitedAgreementOption.Interval`, must always be set to the value 1.
     * 
     * If `option` is set to `LimitedAgreementOption.Limited`, must be unset.
     * 
     * If `option` is set to `LimitedAgreementOption.IntervalLimited`, must always be set to the value 1.
     **/
    intervalMult: number | null;

    /**
     * The payment amount limit.
     * 
     * If `option` is set to `LimitedAgreementOption.Default`, leave unset or set to zero for unlimited.
     * 
     * If `option` is set to `LimitedAgreementOption.Interval`, `LimitedAgreementOption.Limited`, or `LimitedAgreementOption.IntervalLimited`, must be set to a positive, non-zero value.
     **/
    amountLimit: number | null;

    /**
     * The end date of the agreement, past which no payments are possible. 
     * 
     * Must be in the future and not before the `startDate`. Can be left unset.
     * 
     * The date format is yyyy-mm-dd.
     **/
    endDate: string | null;

    /**
     * The unit of the period of time for which payments will be possible under the agreement.
     * 
     * Cannot be set if `endDate` is specified
     **/
    lengthUnit: DelayUnit | null;

    /**
     * The unit multiplier for the period of time for which payments will be possible under the agreement.
     * 
     * The period is calculated by multiplying `lengthUnit` by `lengthMult`.
     * 
     * The period must be at least one day.
     * 
     * Cannot be set if `endDate` is specified.
     **/
    lengthUnitMult: number | null;

    /**
     * The agreement option.
     **/
    option: LimitedAgreementOption;
}