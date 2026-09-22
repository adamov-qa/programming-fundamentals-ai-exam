const revenueInput = document.getElementById("revenue");
const orderValueInput = document.getElementById("orderValue");
const leadRateInput = document.getElementById("leadRate");
const prospectRateInput = document.getElementById("prospectRate");

const prospectsOutput = document.getElementById("prospects");
const leadsOutput = document.getElementById("leads");
const customersOutput = document.getElementById("customers");

function calculateResults() {
    const revenue = Number(revenueInput.value);
    const orderValue = Number(orderValueInput.value);
    const leadRate = Number(leadRateInput.value) / 100;
    const prospectRate = Number(prospectRateInput.value) / 100;

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
}

revenueInput.addEventListener("input", calculateResults);
orderValueInput.addEventListener("input", calculateResults);
leadRateInput.addEventListener("input", calculateResults);
prospectRateInput.addEventListener("input", calculateResults);

calculateResults();