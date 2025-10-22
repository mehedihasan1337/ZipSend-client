import React from 'react';
const faqData = [
    {
        Qsn: "How does this posture corrector work?",
        Ans: "This posture corrector gently pulls your shoulders back using adjustable straps to keep your spine aligned in a neutral position. With regular use, it helps train your muscles to maintain a proper posture naturally."
    },
    {
        Qsn: "Is it suitable for all ages and body types?",
        Ans: "Yes, it is designed to fit most ages and body types. However, children under 8, pregnant women, or anyone recovering from recent surgery should consult a doctor before using it."
    },
    {
        Qsn: "Does it really help with back pain and posture improvement?",
        Ans: "Many users have reported reduced back pain and noticeable posture improvement after consistent use. It supports your back muscles and helps you develop better posture habits, though it’s not a replacement for medical treatment."
    },
    {
        Qsn: "Does it have smart features like vibration alerts?",
        Ans: "Yes, the Smart version includes Bluetooth connectivity and gentle vibration reminders to alert you whenever you slouch, helping you maintain good posture throughout the day."
    },
    {
        Qsn: "How will I be notified when the product is back in stock?",
        Ans: "You can click the 'Notify Me' button and enter your email or phone number. Once the product is restocked, you’ll receive an email, SMS, or push notification with the purchase link."
    }
];

const Frequently = () => {
    return (
        <div className=''>
            <div className='max-w-3xl mx-auto text-center mb-5'>
                <h2 className="text-2xl mt-10 sm:text-3xl font-bold text-[#03373D] border-primary inline-block pb-1">Frequently Asked Question (FAQ)</h2>
            <p className="text-black">Enhance posture, mobility, and well-being effortlessly with Posture Pro.
                 Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            <div className='max-w-6xl mx-auto px-4 text-center text-[#03373D]  '>
                {faqData.map((item, i) => (
                    <div key={i} className=" text-left mb-2 collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-semibold">{item.Qsn}</div>
                        <div className="collapse-content text-black text-sm">{item.Ans}</div>
                    </div>

                ))}

            </div>
        </div>
    );
};

export default Frequently;