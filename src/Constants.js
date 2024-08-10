import { TfiWorld, FaFacebookF, FaXTwitter, TiSocialLinkedin } from "./icon";

export const ticketPlanDetails = [
  {
    id: "1",
    ticket_plan_type: "Free Plan",
    ticket_description:
      "This is a ticket description. This is a free ticket. This ticket is uncategorised",
    ticket_venue:
      "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
    ticket_additional_heading: "This is additional venue details.",
    ticket_timestamp: "Available Till: 31st Aug 2034, 06:00 PM IST",
    ticket_type: "FREE",
    button_name: "Register",
  },
  {
    id: "2",
    ticket_plan_type: "Paid Ticket",
    ticket_description:
      "This is a ticket description. This is a paid ticket. This ticket is uncategorised.",
    ticket_venue:
      "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
    ticket_additional_heading: "This is additional venue details.",
    ticket_timestamp: "Available Till: 31st Aug 2034, 06:00 PM IST",
    ticket_type: "₹1,000",
    button_name: "Register",
  },
  {
    id: "3",
    ticket_plan_type: "Donation Ticket",
    ticket_description:
      "This is a ticket description. This is a free ticket. This ticket is uncategorised",
    ticket_venue:
      "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
    ticket_additional_heading: "This is additional venue details.",
    ticket_timestamp: "Available Till: 31st Aug 2034, 06:00 PM IST",
    ticket_type: "Min ₹10 - Max ₹1,000",
    button_name: "Donate",
  },
  {
    id: "4",
    ticket_plan_type: "Ticket With Coupon",
    ticket_description:
      "This is a ticket description. This is a paid ticket. This ticket is uncategorised. This ticket also has a coupon. Buy minimum - 1 and maximum - 1000000 and avail 10% off.",
    ticket_venue:
      "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
    ticket_additional_heading: "This is additional venue details.",
    ticket_timestamp: "Available Till: 31st Aug 2034, 06:00 PM IST",
    ticket_type: "₹1,000",
    button_name: "Register",
  },
];

export const accordionCardData = [
  {
    id: "1",
    ticket_name: "This is a category",
    description:
      "This is category description. This category is collapsed by default.",
    tickets: [
      {
        id: "1",
        ticket_plan_type: "Free Ticket in Category1",
        ticket_description:
          "This is a ticket description. This is a free ticket. This ticket is categorized.",
        ticket_venue: "",
        ticket_additional_heading: "This is additional venue details.",
        ticket_timestamp: "Available Till: 31st Aug 2034, 06:00 PM IST",
        ticket_type: "Free",
        button_name: "Register",
      },
      {
        id: "2",
        ticket_plan_type: "Ticket With Coupon",
        ticket_description:
          "This is a ticket description. This is a paid ticket. This ticket is uncategorised. This ticket also has a coupon. Buy minimum - 1 and maximum - 1000000 and avail 10% off.",
        ticket_venue:
          "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
        ticket_additional_heading: "This is additional venue details.",
        ticket_timestamp: "Available Till: 31st Aug 2034, 06:00 PM IST",
        ticket_type: "₹1,000",
        button_name: "Register",
      },
    ],
  },
  {
    id: "2",
    ticket_name:
      "This is also a category.But with a little longer name. Also note, this category expanded by default.",
    description:
      "This is category description. This category is expanded by default. This is a little longer description. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer. Adding more content to make the description look longer.",
    tickets: [
      {
        id: "1",
        ticket_plan_type: "Free Ticket in Category1",
        ticket_description:
          "This is a ticket description. This is a free ticket. This ticket is categorized.",
        ticket_venue:
          "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
        ticket_additional_heading: "This is additional venue details.",
        ticket_timestamp: "Available Till: 31st Aug 2034, 06:00 PM IST",
        ticket_type: "Free",
        button_name: "Register",
      },
      {
        id: "2",
        ticket_plan_type: "Ticket With Coupon",
        ticket_description:
          "This is a ticket description. This is a paid ticket. This ticket is uncategorised. This ticket also has a coupon. Buy minimum - 1 and maximum - 1000000 and avail 10% off.",
        ticket_venue:
          "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
        ticket_additional_heading: "This is additional venue details.",
        ticket_timestamp: "Available Till: 31st Aug 2034, 06:00 PM IST",
        ticket_type: "₹1,000",
        button_name: "Register",
      },
    ],
  },
];

export const speakersData = [
  {
    id: "1",
    profile_url:
      "https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg",
    profile_name: "Bruce Wayne",
    profile_designation: "Chairman",
    profile_details: "Wayne Enterprises",
    social_media_links: [
      { icon: <FaFacebookF />, url: "https://facebook.com" },
      { icon: <FaXTwitter />, url: "https://twitter.com" },
      { icon: <TiSocialLinkedin />, url: "https://linkedin.com" },
      { icon: <TfiWorld />, url: "https://example.com" },
    ],
  },
  {
    id: "2",
    profile_url:
      "https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg",
    profile_name: "Dark Knight",
    wesite: "https://darkknight.in",
    location: "",
    profile_designation: "Batman",
    profile_details: "Gotham",
    social_media_links: [
      { icon: <FaFacebookF />, url: "https://facebook.com" },
      { icon: <FaXTwitter />, url: "https://twitter.com" },
      { icon: <TiSocialLinkedin />, url: "https://linkedin.com" },
      { icon: <TfiWorld />, url: "https://example.com" },
    ],
  },
];

export const workshopData = [
  {
    id: "1",
    profile_url: [
      "https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg",
    ],
    workshop_timestamp: "Jun 1st, 2034 at 10:00 AM (IST)",
    workshop_description: "How to make more money",
    website: "",
    location:
      "KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India",
    workshop_topic_img_url:
      "https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717977949758-0e87f502-f5b9-4799-b857-623780fc1415.png&w=1920&q=75",
  },
  {
    id: "2",
    profile_url: [
      "https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg",
    ],
    workshop_description: "How to fight crime",
    workshop_timestamp: "Jun 1st, 2034 at 10:00 AM (IST)",
    website: "https://darkknight.in",
    location: "",
    workshop_topic_img_url:
      "https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978156489-c8a828a9-13ca-4572-b117-0483bafd34d9.jpg&w=1920&q=75",
  },
  {
    id: "3",
    profile_url: [
      "https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg",
      "https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg",
    ],
    workshop_timestamp: "Jun 1st, 2034 at 10:00 AM (IST)",
    website: "",
    location: "",
    workshop_description: "This is a workshop connected to a ticket",
    workshop_topic_img_url:
      "https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978363785-8225249d-f4dd-4572-826e-84093b5eb32f.jpg&w=1920&q=75",
  },
];
