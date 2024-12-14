

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
        review: "This camping resort was an absolute dream! The facilities were spotless, which made the stay so much more enjoyable. The staff was incredibly friendly and attentive, always going out of their way to ensure we had everything we needed. The views of the surrounding nature were breathtaking, especially during sunrise and sunset. It was the perfect place to unwind and disconnect from the hustle and bustle of daily life. Highly recommend this resort for anyone looking for a peaceful and rejuvenating getaway!"
    },
    {
        imageUrl: "/images/users/user-2.png",
        name: "Jane Smith",
        review: "We loved every moment at this resort. The hiking trails were well-maintained, providing a safe and enjoyable experience for both beginners and seasoned hikers. In the evenings, the campfire nights were a highlight, with everyone gathering around to share stories and roast marshmallows. The atmosphere was so warm and welcoming, making it a perfect destination for families. Our kids especially loved the outdoor activities and made memories that will last a lifetime. We can't wait to come back!"
    },
    {
        imageUrl: "/images/users/user-3.png",
        name: "Emily Brown",
        review: "The experience was truly amazing. The glamping tents offered the perfect blend of comfort and adventure, with luxurious bedding and beautiful decor that still gave us that authentic camping vibe. Waking up to the sounds of nature was so refreshing, and the starry nights were nothing short of magical. We spent hours stargazing and enjoying the tranquility of the surroundings. This was one of the best vacations we've ever had, and we would definitely visit again without hesitation!"
    },
    {
        imageUrl: "/images/users/user-4.jpg",
        name: "Michael Johnson",
        review: "This resort is a hidden gem for nature lovers. The staff provided all the essentials we needed, from comfortable camping gear to helpful tips on exploring the area. The range of activities, from kayaking to nature walks, was fun and engaging, ensuring there was never a dull moment. The scenery was absolutely stunning, and every corner of the resort seemed to offer a postcard-worthy view. If you're an adventure seeker or simply someone who loves the great outdoors, this place is a must-visit!"
    },
    {
        imageUrl: "/images/users/user-5.jpg",
        name: "Sophia Lee",
        review: "We had a fantastic time at this camping resort. The food options exceeded our expectations, with delicious meals that catered to a variety of tastes and dietary needs. The environment was so serene, surrounded by lush greenery and calming sounds of nature, making it the perfect place to relax and recharge. We particularly enjoyed the yoga sessions offered in the mornings, which added an extra layer of relaxation to our trip. This resort truly has something for everyone, and we left feeling completely rejuvenated."
    }
];


export interface CampingPackage {
    title: string;
    description: string;
    img: string;
    buttonTitle: string;
}

export const campingPackages: CampingPackage[] = [
    {
        title: "Scenic Campsites",
        description: "Pitch your tent in stunning natural settings with amenities like clean washrooms, fire pits, and drinking water.",
        img: "/images/rooms/camping-1.jpg",
        buttonTitle: "Check Availability",
    },
    {
        title: "Cozy Cottages",
        description: "Relax in fully furnished cottages with private decks and modern comforts, surrounded by breathtaking nature.",
        img: "/images/rooms/camping-4.jpg",
        buttonTitle: "Check Availability",
    },
    {
        title: "Luxurious Glamping",
        description: "Enjoy plush bedding, ambient lighting, and en-suite bathrooms in our luxury tents.",
        img: "/images/rooms/camping-3.jpg",
        buttonTitle: "Check Availability",
    },

]