import { FuturePayService } from "../src/FuturePayService";
import { cancelAgreement, limitedAgreement, regularAgreement } from "./fakers/AgreementFaker";

describe("when initiating an agreement", () => {
    it("should generate regular agreement", async () => {
        // Arrange
        const futurePayService = new FuturePayService(true);

        var agreement = regularAgreement();

        // Act
        var formInputsHtml = await futurePayService.initiateAgreement(agreement);

        // Assert
        expect(formInputsHtml).not.toBeNull();
        expect(formInputsHtml).not.toContain("MC_callback");
    });

    it("should generate limited agreement", async () => {
        // Arrange
        const futurePayService = new FuturePayService(true);

        var agreement = limitedAgreement();

        // Act
        var formInputsHtml = await futurePayService.initiateAgreement(agreement);

        // Assert
        expect(formInputsHtml).not.toBeNull();
        expect(formInputsHtml).not.toContain("MC_callback");
    });

    it("should include callback URL", async () => {
        // Arrange
        const futurePayService = new FuturePayService(true);

        var agreement = regularAgreement();

        // Act
        var formInputsHtml = await futurePayService.initiateAgreement(agreement, {
            callbackUrl: "https://www.example.com", additionalProperties: null, openInNewTab: false
        });

        // Assert
        expect(formInputsHtml).not.toBeNull();
        expect(formInputsHtml).toContain("MC_callback");
    });

    it("should include additional FuturePay properties", async () => {
        // Arrange
        const futurePayService = new FuturePayService(true);

        var agreement = regularAgreement();

        // Act
        var formInputsHtml = await futurePayService.initiateAgreement(agreement, {
            callbackUrl: null, additionalProperties: { C_test: "C", M_test: "M", MC_test: "MC", CM_test: "CM" }, openInNewTab: false
        });

        // Assert
        expect(formInputsHtml).not.toBeNull();
        expect(formInputsHtml).toContain("C_test");
        expect(formInputsHtml).toContain("M_test");
        expect(formInputsHtml).toContain("MC_test");
        expect(formInputsHtml).toContain("CM_test");
    });

    it("should ignore invalid additional properties", async () => {
        // Arrange
        const futurePayService = new FuturePayService(true);

        var agreement = regularAgreement();

        // Act
        var formInputsHtml = await futurePayService.initiateAgreement(agreement, {
            callbackUrl: null, additionalProperties: { VAR_test: "test" }, openInNewTab: false
        });

        // Assert
        expect(formInputsHtml).not.toBeNull();
        expect(formInputsHtml).not.toContain("VAR_test");
    });
});

describe("when cancelling an agreement", () => {
    it("should generate cancel agreement", async () => {
        // Arrange
        const futurePayService = new FuturePayService(true);

        var agreement = cancelAgreement();

        // Act
        var formInputsHtml = await futurePayService.cancelAgreement(agreement);

        // Assert
        expect(formInputsHtml).not.toBeNull();
        expect(formInputsHtml).toContain("instId");
        expect(formInputsHtml).toContain("authPW");
        expect(formInputsHtml).toContain("futurePayId");
        expect(formInputsHtml).toContain("op-cancelFP");
        expect(formInputsHtml).not.toContain("MC_callback");
    });

    it("should include callback URL", async () => {
        // Arrange
        const futurePayService = new FuturePayService(true);

        var agreement = cancelAgreement();

        // Act
        var formInputsHtml = await futurePayService.cancelAgreement(agreement, {
            callbackUrl: "https://www.example.com", additionalProperties: null, openInNewTab: false
        });

        // Assert
        expect(formInputsHtml).not.toBeNull();
        expect(formInputsHtml).toContain("MC_callback");
    });

    it("should include additional FuturePay properties", async () => {
        // Arrange
        const futurePayService = new FuturePayService(true);

        var agreement = cancelAgreement();

        // Act
        var formInputsHtml = await futurePayService.cancelAgreement(agreement, {
            callbackUrl: null, additionalProperties: { C_test: "C", M_test: "M", MC_test: "MC", CM_test: "CM" }, openInNewTab: false
        });

        // Assert
        expect(formInputsHtml).not.toBeNull();
        expect(formInputsHtml).toContain("C_test");
        expect(formInputsHtml).toContain("M_test");
        expect(formInputsHtml).toContain("MC_test");
        expect(formInputsHtml).toContain("CM_test");
    });

    it("should ignore invalid additional properties", async () => {
        // Arrange
        const futurePayService = new FuturePayService(true);

        var agreement = cancelAgreement();

        // Act
        var formInputsHtml = await futurePayService.cancelAgreement(agreement, {
            callbackUrl: null, additionalProperties: { VAR_test: "test" }, openInNewTab: false
        });

        // Assert
        expect(formInputsHtml).not.toBeNull();
        expect(formInputsHtml).not.toContain("VAR_test");
    });
});