// Constants
function calculateLoan() {
    const loanAmount = document.getElementById('loanAmount').value;
    const interestRate = document.getElementById('interestRate').value;
    const loanTerm = document.getElementById('loanTerm').value;

    // Describing variable R
    const monthlyInterestRate = (interestRate / 100) / 12;

    // Loan Term
    const numberOfMonths = loanTerm;

    // Numerator
    const numerator = monthlyInterestRate * (1 + monthlyInterestRate) ** numberOfMonths
    
    // Denominator
    const denominator = (1 + monthlyInterestRate) ** numberOfMonths - 1;

    // Monthly Payment calculation
    const monthlyPayment = loanAmount * (numerator / denominator);

    // Total Monthly Payment calculation
    const totalRepayment = monthlyPayment * numberOfMonths;

    document.getElementById('monthlyPayment').textContent = `Monthly Payment: ₦${monthlyPayment.toFixed(2)}`;
    document.getElementById('totalRepayment').textContent = `Total Repayment: ₦${totalRepayment.toFixed(2)}`;
}
