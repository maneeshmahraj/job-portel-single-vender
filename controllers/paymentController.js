const paymentModel=require("../models/paymentModel")

const paymentData=async(req,res)=>{
    try {
        const payment = new paymentModel(req.body);
        await payment.save();
        res.status(201).json({ message: 'Payment method added', payment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const checkOut=async (req, res) => {
    try {
      const { deliveryAddress, paymentInfo, additionalNote, price, discount, deliveryCharges } = req.body;
      const totalPrice = price - discount + deliveryCharges;
      const newOrder = new Order({ 
        deliveryAddress, 
        paymentInfo, 
        additionalNote, 
        price, discount, 
        deliveryCharges,
         totalPrice });
      await newOrder.save();
      res.status(201).json({ message: "Order placed successfully", order: newOrder });
    } catch (error) {
      res.status(500).json({ message: "Error placing order", error });
    }
  }

module.exports={
    paymentData,
    checkOut
   
}