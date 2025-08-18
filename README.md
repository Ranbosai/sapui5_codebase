# SAPUI5 Sales Dashboard

This repository contains a minimal SAPUI5 application. Employees can log in, validate their employee ID via SAP SuccessFactors and view their sales order details from an SAP S/4HANA system.

## Project Structure

- `webapp/index.html` – bootstrap and component container.
- `webapp/Component.js` – root component initializing models and router.
- `webapp/manifest.json` – descriptor with data sources for S/4HANA and SuccessFactors.
- `webapp/view` – XML views for the login page and dashboard.
- `webapp/controller` – controllers implementing application logic.
- `webapp/model/models.js` – factory methods for device and OData models.
- `webapp/css/style.css` – basic styling using CSS.

## Development

Install dependencies and run the application locally:

```bash
npm install
npm start
```

Run a simple build or test:

```bash
npm run build
npm test
```
