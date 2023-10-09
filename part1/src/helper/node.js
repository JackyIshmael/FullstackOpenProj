// helper for post request
import axios from 'axios'

axios
  .post('http://flt-travix-edm-ssr.fws.qa.nt.ctripcorp.com/pages/render2Html', {
    app_id: 'appl_DecZvPaAHAF2OTo',
    locale: 'nl-NL',
    page_id: 'file_S8M7sarSHem0N8e',
    reqvar: {
      emailType: 'TRAVIX_PAYMENT_SUCCESS',
      orderId: '36868349094',
      requestToken: 'H4sIAAAAAAAAAKtWKsnMTfXJzM0sUbJSMlLSUSooyk8pTS4JqSxIBYoYKtUCAMXXQDIjAAAA',
      affiliate: 'BUDGETAIRUK'
    }
  })
  .then((res) => {
    console.log(`状态码: ${res.statusCode}`)
    console.log(res)
  })
  .catch((error) => {
    console.error(error)
  })
