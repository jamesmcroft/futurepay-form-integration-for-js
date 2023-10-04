import { AgreementMap } from "./AgreementMap";

/**
 * Defines the configuration options used when interacting with FuturePay.
 */
export default interface FuturePayAgreementConfig {
    /**
     * The optional callback URL to be used by FuturePay to notify of the interaction status.
     */
    callbackUrl: string | null;

    /**
     * The optional additional properties to be used to construct the form inputs used when interacting with FuturePay.
     */
    additionalProperties: AgreementMap | null;

    /**
     * The optional flag to indicate whether the FuturePay interaction should be initiated in a new tab.
     */
    openInNewTab: boolean;
}