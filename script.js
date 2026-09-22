const revenueInput = document.getElementById("revenue");
const orderValueInput = document.getElementById("orderValue");
const leadRateInput = document.getElementById("leadRate");
const prospectRateInput = document.getElementById("prospectRate");

const leadRateValue = document.getElementById("leadRateValue");
const prospectRateValue = document.getElementById("prospectRateValue");

const prospectsOutput = document.getElementById("prospects");
const leadsOutput = document.getElementById("leads");
const customersOutput = document.getElementById("customers");

const prospectsBar = document.getElementById("prospectsBar");
const leadsBar = document.getElementById("leadsBar");
const customersBar = document.getElementById("customersBar");

const prospectsChartValue = document.getElementById("prospectsChartValue");
const leadsChartValue = document.getElementById("leadsChartValue");
const customersChartValue = document.getElementById("customersChartValue");

function updateChart(prospects, leads, customers) {
    const maxValue = Math.max(prospects, leads, customers, 1);
    const maxHeight = 180;

    prospectsBar.style.height = `${(prospects / maxValue) * maxHeight}px`;
    leadsBar.style.height = `${(leads / maxValue) * maxHeight}px`;
    customersBar.style.height = `${(customers / maxValue) * maxHeight}px`;

    prospectsChartValue.textContent = prospects;
    leadsChartValue.textContent = leads;
    customersChartValue.textContent = customers;
}

function calculateResults() {
    const revenue = Math.max(0, Number(revenueInput.value) || 0);
    const orderValue = Math.max(0, Number(orderValueInput.value) || 0);
    const leadRate = Math.max(0, Number(leadRateInput.value) || 0) / 100;
    const prospectRate = Math.max(0, Number(prospectRateInput.value) || 0) / 100;

    leadRateValue.textContent = `${leadRateInput.value}%`;
    prospectRateValue.textContent = `${prospectRateInput.value}%`;

    let customers = 0;
    let leads = 0;
    let prospects = 0;

    if (orderValue > 0) {
        customers = Math.ceil(revenue / orderValue);
    }

    if (leadRate > 0) {
        leads = Math.ceil(customers / leadRate);
    }

    if (prospectRate > 0) {
        prospects = Math.ceil(leads / prospectRate);
    }

    customersOutput.textContent = customers;
    leadsOutput.textContent = leads;
    prospectsOutput.textContent = prospects;

    updateChart(prospects, leads, customers);
}

revenueInput.addEventListener("input", calculateResults);
orderValueInput.addEventListener("input", calculateResults);
leadRateInput.addEventListener("input", calculateResults);
prospectRateInput.addEventListener("input", calculateResults);

calculateResults();