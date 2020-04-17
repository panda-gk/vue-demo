import http from '../js/ajax'
export const exportWithdraw = params => http.get('/api/rebate/withdraw/excel', params)
export const watchEq = params => http.get('/api/heartBeat/page', params)
