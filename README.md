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

## Sample Data

For local testing without back-end systems, the application loads sample
employees and sales orders from JSON files in `webapp/model`. Launch the
app with `npm start` and use employee ID `1000` or `1001` with the passwords
defined in `employees.json` to see the dashboard populated with sample
sales orders.
