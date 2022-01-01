import React from "react";

import FAQs from "components/faq";
import { FaqQnaItem } from "components/faq/interface";

const PRICING_FAQ_LIST: FaqQnaItem[] = [
  {
    query: "How do Grida make money?",
    answer:
      "Grida makes money from Enterprise B2B plans. It's free and opensource for individual and startups.",
  },
  {
    query: "What are the limitations with free plan?",
    answer: "There are no limitations with the free plan.",
  },
  {
    query: "I cannot see images anymore. What happened?",
    answer:
      "Your image is uploaded and hosted on Grida cloud for 24 hours for development mode. If you enable publishing option for the screen / component you selected, all the resources will be long-lived. long-lived resource hosting is only available for paid plan. for free plan, you have to download the asset, add manually to your repository.",
  },
  // {
  //   query: "How does the standard extra cloud usage fee calculated?",
  //   answer: "TBD",
  // },
  {
    query: "Do I need enterprise plan?",
    answer:
      "If you are a team of 5 or more, We highly recommand to contact us for enterprise plan. You can benefit the most from the enterprise plan, by customized build that will match your existing design, working process.",
  },
];

export default function PricingFAQs() {
  return <FAQs questions={PRICING_FAQ_LIST} />;
}
