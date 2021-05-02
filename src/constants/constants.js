const LIVE_COURSES = [
    {
        title: 'Giraffe Ceramic Planters',
        creator: 'Amii Ceramics',
        views: '122',
        dimension: 'Pottery',
        image: require('../assets/0.png').default
    },
    {
        title: 'Plate Making at Home (⁎˃ᆺ˂)',
        creator: 'Lolita Olympia',
        views: '214',
        dimension: 'Pottery',
        image: require('../assets/1.png').default
    },
    {
        title: 'Minimalist Baking',
        creator: 'Daram’s Table',
        views: '924',
        dimension: 'Baking',
        image: require('../assets/2.png').default
    }
];

const MISSED_STREAMS = [
    {
        title: 'Pusheen Needle Felt Plushie',
        creator: 'Pufftique',
        time_ago: '10 hours ago',
        duration: '1:59:23',
        views: '8.2k',
        dimension: 'Crafts',
        image: require('../assets/3.png').default
    },
    {
        title: 'Beginners Watercolour',
        creator: 'Mmmmonexx',
        time_ago: '12 hours ago',
        duration: '3:21:50',
        views: '142k',
        dimension: 'Painting',
        image: require('../assets/4.png').default
    },
    {
        title: 'Deluxe Barista Recipes',
        creator: 'Hanse',
        time_ago: '20 hours ago',
        duration: '1:59:23',
        views: '1.2k',
        dimension: 'Cooking',
        image: require('../assets/5.png').default
    },
    {
        title: 'Custard Bear Buns',
        creator: 'Delicious Day',
        time_ago: '23 hours ago',
        duration: '1:21:22',
        views: '810',
        dimension: 'Baking',
        image: require('../assets/6.png').default
    }
];

const UPCOMING_STREAMS = [
    {
        title: 'Making Fresh Pasta',
        creator: 'Newt',
        date: 'May 1st @ 17:00',
        dimension: 'Cooking',
        image: require('../assets/profile1.png').default
    },
    {
        title: 'How to Use Slab Clay',
        creator: 'Lolita Olympia',
        date: 'May 2nd @ 09:00',
        dimension: 'Pottery',
        image: require('../assets/profile2.png').default
    },
    {
        title: 'Lunchbox Cakes',
        creator: 'Daram\'s Table',
        date: 'May 2nd @ 012:00',
        dimension: 'Baking',
        image: require('../assets/profile3.png').default
    }
];

const SUBSCRIBED_CHANNELS = [
    {
        creator: 'Lolita Olympia',
        live: 'Live Now',
        dimension: 'Pottery',
        image: require('../assets/profile2.png').default
    },
    {
        creator: 'Daram\'s Table',
        live: 'Live Now',
        dimension: 'Baking',
        image: require('../assets/profile3.png').default
    },
    {
        creator: 'Newt',
        live: 'Last live 4 hours ago',
        dimension: 'Cooking',
        image: require('../assets/profile1.png').default
    },
    {
        creator: 'Pufftique',
        live: 'Last live 10 hours ago',
        dimension: 'Crafts',
        image: require('../assets/profile1.png').default
    },
    {
        creator: 'Mmmmonexx',
        live: 'Last live 12 hours ago',
        dimension: 'Painting',
        image: require('../assets/profile1.png').default
    },
    {
        creator: 'Hanse',
        live: 'Last live 20 hours ago',
        dimension: 'Cooking',
        image: require('../assets/profile1.png').default
    }
];

const PREV_STREAMS = [
    {
        title: 'Bunny Ceramic Planter',
        creator: 'Amii Ceramics',
        time_ago: '2 days ago',
        duration: '2:33:21',
        views: '12.2k',
        image: require('../assets/prev1.png').default
    },
    {
        title: 'Octopus Ceramic Planter',
        creator: 'Amii Ceramics',
        time_ago: '3 days ago',
        duration: '1:19:12',
        views: '20.1k',
        image: require('../assets/prev2.png').default
    },
    {
        title: 'Hedgehog Ceramic Planter',
        creator: 'Amii Ceramics',
        time_ago: '1 week ago',
        duration: '2:21:50',
        views: '9.7k',
        image: require('../assets/prev3.png').default
    },
    {
        title: 'Controlling Your Wheel',
        creator: 'Amii Ceramics',
        time_ago: '1 week ago',
        duration: '2:21:50',
        views: '14.2k',
        image: require('../assets/prev4.png').default
    }
];

export { LIVE_COURSES, MISSED_STREAMS, UPCOMING_STREAMS, SUBSCRIBED_CHANNELS, PREV_STREAMS }
