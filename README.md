This repo contains reproducible demo of a problem with revalidation when non-fetch http agent is used

### Steps to reproduce
1. Start the application ```npm run dev```
2. Open http://localhost:3000/dashboard/invoices and observe rendered data
3. Switch between pages for at least 1min without refreshing the page and observer data on dashboard/invoices page again

### Expected result:
API endpoint is not triggered, data is being cached based on Route segment config ```export const revalidate = 60``` value in invoices/page.tsx file

### Actual result:
After some period of initial caching (approx. 1min), data is being requeted every time user opens Invoices page
![issue demo](https://github.com/eugen-kalitka/next-js-dashboard-non-fetch-revalidation/blob/main/docs/issue_demo.gif?raw=true) 
