import React, { useState } from 'react';
import './FAQ.css';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is the purpose of this website?",
      answer: "The purpose of this website is to give you real information and help you get answers to your questions."
    },
    {
      question: "How can students use this website?",
      answer: "This website helps students considering admission at IET Lucknow by providing real, anonymous insights into the college's facilities, hostels, and more."
    },
    {
      question: "What is college life really like at IET Lucknow?",
      answer: "Don’t come with too many expectations, but yes, this can be a good option."
    },
    {
      question: "How are the hostel facilities at IET Lucknow?",
      answer: "In the first year, boys get allotted Ramanujan Hostel and girls alloted Sarojini. Four students stay in one room, and they get three wardrobes to share and 3 girls in a single room with three wardrobes"
    },
    {
      question: "How is the mess food at IET Lucknow?",
      answer: "In the beginning, the mess food is good, but later it gets a bit worse. Still, it's okay to eat."
    },
    {
      question: "How are the seniors at IET Lucknow?",
      answer: "I'm a senior too. Most seniors don’t interact much because they’re busy with their own stuff. But yes, there’s some interaction — especially if you’re an extrovert."
    },
    {
      question: "How is the crowd or student vibe at IET Lucknow?",
      answer: "There are nearly 70 students in each of the 8 branches."
    },
    {
      question: "What’s the best thing about IET Lucknow?",
      answer: "They don’t focus too much on attendance, just like HBTU. The attendance criteria are pretty chill."
    },
    {
      question: "How is the placement scenario at IET Lucknow?",
      answer: "Don’t expect too much from placements. You have to work hard on your own. Don’t rely too much on on-campus placements."
    },
    {
      question: "What is the campus like at IET Lucknow?",
      answer: "From the hostel, you can get to the crossing, sports complex, and the new lecture theatre (NLT)."
    },
    {
      question: "How do I reach IET Lucknow?",
      answer: "First, come to Charbagh station. Then, you can either book online or take a Vikram or auto for ₹25. Just tell the driver 'Engineering Chauraha' and they'll take you there."
    }
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? 'open' : ''}`}
          onClick={() => toggleAnswer(index)}
        >
          <div className="faq-question">
            <span>{faq.question}</span>
            <span className="icon">{openIndex === index ? '−' : '+'}</span>
          </div>
          <div className="faq-answer">
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
