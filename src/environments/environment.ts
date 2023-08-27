// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    urlApiAccount:'https://banquito-accounts-try-production.up.railway.app/api/v1/accounts',
    urlApiAccountProduct: 'https://banquito-ws-passive-products-zsorzzk5da-uc.a.run.app/api/v1/productAccount',
    urlApiAccountTransaction: 'https://banquito-accounts-try-production.up.railway.app/api/v1/transactions',

    /*
    urlApiLoanRepayment: 'http://localhost:9003/api/v1/repayment',
    */
    urlApiLoan: 'https://banquito-ws-loans-zsorzzk5da-uc.a.run.app//api/v2/loans',
    urlApiLoanProduct: 'https://banquito-ws-active-products3-zsorzzk5da-uc.a.run.app/api/v1/loanProduct',
    urlApiLoanAmortization: 'https://banquito-ws-loans-zsorzzk5da-uc.a.run.app//api/v1/amortization',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
