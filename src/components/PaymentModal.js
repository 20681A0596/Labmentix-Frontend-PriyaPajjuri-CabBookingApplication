import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";

function PaymentModal({ amount, onSuccess }) {

    const [time, setTime] = useState(300);

    useEffect(() => {

        const timer = setInterval(() => {

            setTime((t) => {

                if (t <= 1) {
                    clearInterval(timer);
                    return 0;
                }

                return t - 1;

            });

        }, 1000);

        return () => clearInterval(timer);

    }, []);

    const minutes =
        String(Math.floor(time / 60)).padStart(2, "0");

    const seconds =
        String(time % 60).padStart(2, "0");

    return (

        <div className="payment-overlay">

            <div className="payment-modal">

                <h3>Pay with UPI</h3>

                <QRCodeCanvas
                    value={`upi://pay?pa=demo@upi&pn=RideX&am=${amount}&cu=INR`}
                    size={200}
                />

                <p className="amount">
                    Amount: ₹{amount}
                </p>

                <p className="timer">

                    Time left: {minutes}:{seconds}

                </p>

                <button
                    className="pay-btn"
                    onClick={onSuccess}
                >
                    Payment Done
                </button>

                <button
                    className="cancel-btn"
                    onClick={() => window.location.reload()}
                >
                    Cancel
                </button>

            </div>

        </div>

    );

}

export default PaymentModal;