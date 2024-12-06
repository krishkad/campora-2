

export const NAVLINKS = [
    {
        label: "Home",
        href: '/'
    },
    {
        label: "Rooms",
        href: '/rooms'
    },
    {
        label: "Galery",
        href: '/galery'
    },
    {
        label: "Contact",
        href: '/contact'
    },
]


export const dayHeader = [
    {
        day: 'sun',
        Label: "SUN",
        bg: "bg-[#f94144]",
        text: "text-white",
        hoverBg: "hover:bg-[#f94144] hover:text-white",
        active: "bg-[#f94144] text-white"
    },
    {
        day: 'mon',
        Label: "MON",
        bg: "bg-[#f3722c]",
        text: "text-white",
        hoverBg: "hover:bg-[#f3722c] hover:text-white",
        active: "bg-[#f3722c] text-white"
    },
    {
        day: 'tue',
        Label: "TUE",
        bg: "bg-[#f8961e]",
        text: "text-white",
        hoverBg: "hover:bg-[#f8961e] hover:text-white",
        active: "bg-[#f8961e] text-white"
    },
    {
        day: 'wed',
        Label: "WED",
        bg: "bg-[#f9c74f]",
        text: "text-white",
        hoverBg: "hover:bg-[#f9c74f] hover:text-white",
        active: "bg-[#f9c74f] text-white"
    },
    {
        day: 'thu',
        Label: "THU",
        bg: "bg-[#90be6d]",
        text: "text-white",
        hoverBg: "hover:bg-[#90be6d] hover:text-white",
        active: "bg-[#90be6d] text-white"
    },
    {
        day: 'fri',
        Label: "FRI",
        bg: "bg-[#43aa8b]",
        text: "text-white",
        hoverBg: "hover:bg-[#43aa8b] hover:text-white",
        active: "bg-[#43aa8b] text-white"
    },
    {
        day: 'sat',
        Label: "SAT",
        bg: "bg-[#577590]",
        text: "text-white",
        hoverBg: "hover:bg-[#577590] hover:text-white",
        active: "bg-[#577590] text-white"
    },
];



type Review = {
    imageUrl: string;
    name: string;
    review: string;
  };
  
  export const campingResortReviews: Review[] = [
    {
      imageUrl: "/images/users/user-1.png",
      name: "John Doe",
      review: "This camping resort was an absolute dream! The facilities were spotless, the staff was incredibly friendly, and the views were breathtaking. Highly recommend for a peaceful getaway!"
    },
    {
      imageUrl: "/images/users/user-2.png",
      name: "Jane Smith",
      review: "We loved every moment at this resort. The hiking trails were well-maintained, and the campfire nights were unforgettable. Perfect for families!"
    },
    {
      imageUrl: "/images/users/user-3.png",
      name: "Emily Brown",
      review: "The experience was amazing. The glamping tents were luxurious yet gave us that camping vibe. The starry nights were magical. Would definitely visit again!"
    },
    {
      imageUrl: "/images/users/user-4.jpg",
      name: "Michael Johnson",
      review: "A hidden gem for nature lovers. The staff provided all the essentials, and the activities were fun and engaging. A must-visit for adventure seekers!"
    },
    {
      imageUrl: "/images/users/user-5.jpg",
      name: "Sophia Lee",
      review: "We had a fantastic time at this camping resort. The food options were surprisingly good, and the environment was so serene. Perfect place to relax and recharge!"
    }
  ];
  
  export default campingResortReviews;
  