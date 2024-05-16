import { Accordion } from "../components";

const AccordionPage = () => {
  const items = [
    {
      id: 1,
      label: "Book My Show",
      content:
        "Book My Show Is Ticket Booking Service. which allows users to book events nearby them via app and website.",
    },

    {
      id: 2,
      label: "Airbnb",
      content:
        "Airbnb Is Booking Service. which allows users to book hotels, villa , properties nearby them via app and website.",
    },

    {
      id: 3,
      label: "Swiggy",
      content:
        "Swiggy Is Food Ordering Service. which allows users to order food from  hotels, caffe , cloud kitchens nearby them via app and website.",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
