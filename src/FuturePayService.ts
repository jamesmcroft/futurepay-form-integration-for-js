import { Agreement } from "./Agreement";
import { AgreementMap } from "./AgreementMap";
import { CancelAgreement } from "./CancelAgreement";

/**
 * Defines a class used to initiate recurring payments in FuturePay.
 */
export class FuturePayService {
    purchaseUrl: string;
    adminUrl: string;

    /**
     * Creates a new instance of the FuturePayService class.
     * @param isTestEnvironment Indicates whether the service should use the test environment or the production environment.
     */
    constructor(isTestEnvironment: boolean = false) {
        this.purchaseUrl = isTestEnvironment ? "https://secure-test.worldpay.com/wcc/purchase" : "https://secure.worldpay.com/wcc/purchase";
        this.adminUrl = isTestEnvironment ? "https://secure-test.worldpay.com/wcc/iadmin" : "https://secure.worldpay.com/wcc/iadmin";
    }

    /**
     * Initiates a payment in FuturePay.
     * @param agreement The agreement object to construct the form inputs used to initiate the payment in FuturePay.
     * @param callbackUrl The optional callback URL to be used by FuturePay to notify the payment status.
     * @param additionalProperties The optional additional properties to be used to construct the form inputs used to initiate the payment in FuturePay.
     * @returns A promise that resolves to the HTML form inputs used to initiate the payment in FuturePay.
     */
    initiateAgreement(agreement: Agreement, callbackUrl: string | null = null, additionalProperties: AgreementMap | null = null): Promise<string> {
        var formInputsHtml = "";

        for (var key in agreement) {
            if (agreement.hasOwnProperty(key)) {
                formInputsHtml += `<input type='hidden' name='${key}' value='${agreement[key]}'></input>`;
            }
        }

        formInputsHtml += this.generateAdditionalPropertiesInputs(additionalProperties);
        formInputsHtml += this.generateCallbackUrlInput(callbackUrl);

        if (document) {
            var form = document.createElement("form");
            form.setAttribute("method", "post");
            form.setAttribute("action", this.purchaseUrl);
            form.innerHTML = formInputsHtml;
            document.body.appendChild(form);

            try {
                form.submit();
            } catch (error) {
                console.log(error);
            }
        }

        return Promise.resolve(formInputsHtml);
    }

    /**
     * Cancels an agreement in FuturePay.
     * @param cancelAgreement The cancel agreement object to construct the form inputs used to cancel the agreement in FuturePay.
     * @param callbackUrl The optional callback URL to be used by FuturePay to notify the payment status.
     * @param additionalProperties The optional additional properties to be used to construct the form inputs used to cancel the agreement in FuturePay.
     * @returns A promise that resolves to the HTML form inputs used to cancel the agreement in FuturePay.
     */
    cancelAgreement(cancelAgreement: CancelAgreement, callbackUrl: string | null = null, additionalProperties: AgreementMap | null = null): Promise<string> {
        var formInputsHtml = "";

        for (var key in cancelAgreement) {
            if (cancelAgreement.hasOwnProperty(key)) {
                formInputsHtml += `<input type='hidden' name='${key}' value='${cancelAgreement[key]}'></input>`;
            }
        }

        formInputsHtml += `<input type='hidden' name='op-cancelFP'></input>`

        formInputsHtml += this.generateAdditionalPropertiesInputs(additionalProperties);
        formInputsHtml += this.generateCallbackUrlInput(callbackUrl);

        if (document) {
            var form = document.createElement("form");
            form.setAttribute("method", "post");
            form.setAttribute("action", this.adminUrl);
            form.innerHTML = formInputsHtml;
            document.body.appendChild(form);

            try {
                form.submit();
            } catch (error) {
                console.log(error);
            }
        }

        return Promise.resolve(formInputsHtml);
    }

    private generateCallbackUrlInput(callbackUrl: string | null) {
        let formInputsHtml = "";

        if (callbackUrl) {
            formInputsHtml += `<input type='hidden' name='MC_callback' value='${callbackUrl}'></input>`;
        }

        return formInputsHtml;
    }

    private generateAdditionalPropertiesInputs(additionalProperties: AgreementMap | null) {
        let formInputsHtml = "";

        if (additionalProperties) {
            for (var key in additionalProperties) {
                if (additionalProperties.hasOwnProperty(key) && (key.startsWith("C_") || key.startsWith("M_") || key.startsWith("MC_") || key.startsWith("CM_"))) {
                    formInputsHtml += `<input type='hidden' name='${key}' value='${additionalProperties[key]}'></input>`;
                }
            }
        }

        return formInputsHtml;
    }
}