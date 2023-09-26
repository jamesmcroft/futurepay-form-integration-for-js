import { Agreement } from "./Agreement";
import { AgreementMap } from "./AgreementMap";

/**
 * Defines a class used to initiate recurring payments in FuturePay.
 */
export class FuturePayService {
    url: string;

    /**
     * Creates a new instance of the FuturePayService class.
     * @param isTestEnvironment Indicates whether the service should use the test environment or the production environment.
     */
    constructor(isTestEnvironment: boolean = false) {
        this.url = isTestEnvironment ? "https://secure-test.worldpay.com/wcc/purchase" : "https://secure.worldpay.com/wcc/purchase";
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

        if (additionalProperties) {
            for (var key in additionalProperties) {
                if (additionalProperties.hasOwnProperty(key) && (key.startsWith("C_") || key.startsWith("M_") || key.startsWith("MC_") || key.startsWith("CM_"))) {
                    formInputsHtml += `<input type='hidden' name='${key}' value='${additionalProperties[key]}'></input>`;
                }
            }
        }

        if (callbackUrl) {
            formInputsHtml += `<input type='hidden' name='MC_callback' value='${callbackUrl}'></input>`;
        }

        if (document) {
            var form = document.createElement("form");
            form.setAttribute("method", "post");
            form.setAttribute("action", this.url);
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
}