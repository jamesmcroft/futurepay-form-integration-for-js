import { FuturePayService } from "../src/FuturePayService";
import { limitedAgreement, regularAgreement } from "./fakers/AgreementFaker";

describe("when initiating an agreement", () => {
    it("should generate regular agreement", async () => {
        // Arrange
        const futurePayService = new FuturePayService(true);

        var agreement = regularAgreement();

        // Act & Assert
        expect(async () => await futurePayService.initiateAgreement(agreement)).not.toThrow();
    });

    it("should generate limited agreement", async () => {
        // Arrange
        const futurePayService = new FuturePayService(true);

        var agreement = limitedAgreement();

        // Act & Assert
        expect(async () => await futurePayService.initiateAgreement(agreement)).not.toThrow();
    });
});