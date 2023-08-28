// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    urlApiAccount:'https://apiv18-62gh6lrj.uc.gateway.dev/api/v1/accounts',
    urlApiAccountProduct: 'https://apiv18-62gh6lrj.uc.gateway.dev/api/v1/productAccount',
    urlApiAccountTransaction: 'https://apiv18-62gh6lrj.uc.gateway.dev/api/v1/transactions',

    urlApiLoan: 'https://apiv18-62gh6lrj.uc.gateway.dev/api/v2/loans',
    urlApiLoanProduct: 'https://apiv18-62gh6lrj.uc.gateway.dev/api/v1/loanProduct',
    urlApiLoanAmortization: 'https://apiv18-62gh6lrj.uc.gateway.dev/api/v1/amortization',
    urlApiLoanRepayment: 'https://apiv18-62gh6lrj.uc.gateway.dev/api/v1/repayment',
    apiSecurity: '?key=AIzaSyDMQIDdAhNpwjoovbocJ1xJfzzMZZqGmFY',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
