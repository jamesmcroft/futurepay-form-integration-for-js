import { AgreementMap } from "./AgreementMap";

export interface CancelAgreement extends AgreementMap {
    /**
     * The ID of the future payment agreement.
     */
    futurePayId: string;

    /**
     * The merchant installation reference.
     */
    instId: string;

    /**
     * The remote authorisation password for the merchant installation.
     */
    authPW: string;
}