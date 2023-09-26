import { Agreement } from "./Agreement";

export class FuturePayService {
    url: string;

    constructor(isTestEnvironment: boolean = false) {
        this.url = isTestEnvironment ? "https://secure-test.worldpay.com/wcc/purchase" : "https://secure.worldpay.com/wcc/purchase";
    }

    initiateAgreement(agreement: Agreement, callbackUrl: string | null = null): Promise<void> {
        var formInputsHtml = "";

        for (var key in agreement) {
            if (agreement.hasOwnProperty(key)) {
                formInputsHtml += `<input type='hidden' name='${key}' value='${agreement[key]}'></input>`;
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
                form?.submit();
            } catch (error) {
                console.log(error);
            }
        }

        return Promise.resolve();
    }
}