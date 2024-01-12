function PaymentFacade() {
  let payments = [];

  let nextId = 1
  const createPayment = (user, item, amount) => {
    const payment = { 
        id: nextId,
        user: user, 
        item: item, 
        amount: amount };

        nextId++;
        payments.push(payment);

        return payment;
  };

  const deletePayment = (id) => {
    payments = payments.filter((payment) => payment.id !== id);
  };

  const getAllPayments = () => {
    return payments;
  };

  const getPayment = (id) => {
    return payments.find((payment) => payment.id === id);
  };

  return {
    createPayment,
    deletePayment,
    getAllPayments,
    getPayment,
  };
}
let paymentFunctions = PaymentFacade;
export default paymentFunctions;
