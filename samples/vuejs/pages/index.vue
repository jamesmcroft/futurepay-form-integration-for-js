<script lang="ts" setup>
import { RegularAgreementOption, CurrencyCode, DelayUnit, FuturePayService, FuturePayType, RegularAgreement, CancelAgreement } from '../../../src';

const initiateRegularAgreement = () => {
    const service = new FuturePayService(true);
    service.initiateAgreement({
        instId: '<Worldpay FuturePay installation ID>',
        futurePayType: FuturePayType.Regular,
        intervalUnit: DelayUnit.Month,
        intervalMult: 1,
        startDelayUnit: DelayUnit.Month,
        startDelayMult: 1,
        amount: 5,
        currency: CurrencyCode.GBP,
        normalAmount: 5,
        option: RegularAgreementOption.Default,
        cartId: 'MerchantReference',
        testMode: 100
    } as RegularAgreement, {
        openInNewTab: true,
        callbackUrl: null,
        additionalProperties: null
    });
};

const cancelAgreement = () => {
    const service = new FuturePayService(true);
    service.cancelAgreement({
        instId: '<Worldpay FuturePay installation ID>',
        futurePayId: '<Worldpay FuturePay agreement ID>',
        authPW: '<Worldpay FuturePay auth password>',
    } as CancelAgreement);
}
</script>

<template>
    <Card>
        <template #title>
            FuturePay Sample App
        </template>
        <template #content>
            <Panel header="Initite Regular Agreement" class="mb-4">
                <Button @click="initiateRegularAgreement">Submit</Button>
            </Panel>

            <Panel header="Cancel Agreement" class="mb-4">
                <Button @click="cancelAgreement">Submit</Button>
            </Panel>

        </template>
    </Card>
</template>