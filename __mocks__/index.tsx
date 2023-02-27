export default {
  '/api/users': () => {
    const investmentsData = {
      investor: {
        firstName: 'Faisal',
        lastName: 'Ashraf',
        totalInvested: '$320,650.00',
        currentValue: '$122,200.00',
        avgReturn: '19%',
        currentGrowth: 1.1,
        avgGrowth: -1.1,
      },
      investments: [
        {
          key: 1,
          image:
            'https://www.bproperty.com/blog/wp-content/uploads/2021/04/house-1867187_1920-1170x508.jpg',
          propertyName: '762 D R Placerville',
          propertyValue: '$150,000',
          propertyType: 'Commercial',
          date: 'Jan 10, 2023',
          roi: '17%',
        },
        {
          key: 2,
          image:
            'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80',
          propertyName: 'Bob Placerville',
          propertyValue: '$410,500',
          propertyType: 'Commercial',
          date: 'Feb 22, 2023',
          roi: '19%',
        },
        {
          key: 3,
          image:
            'https://www.investopedia.com/thmb/bfHtdFUQrl7jJ_z-utfh8w1TMNA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/houses_and_land-5bfc3326c9e77c0051812eb3.jpg',
          propertyName: 'Paul 762 Placerville',
          propertyValue: '$130,000',
          propertyType: 'Residential',
          date: 'Dec 05, 2022',
          roi: '11%',
        },
        {
          key: 4,
          image:
            'https://images.ctfassets.net/t014ej9w3ur1/1OYYdq7OHEx0Ho8StLGwq8/b3fb654a7b9f80a06a58912012651523/shutterstock_593346773.jpg',
          propertyName: 'Buleward 762 DC',
          propertyValue: '$90,000',
          propertyType: 'Commercial',
          date: 'Nov 11, 2022',
          roi: '27%',
        },
        {
          key: 5,
          image:
            'https://akm-img-a-in.tosshub.com/businesstoday/images/story/201908/house_prop_660_080719010504.jpg',
          propertyName: 'Lily',
          propertyValue: '$149,999',
          propertyType: 'Residential',
          date: 'Aug 14, 2022',
          roi: '20%',
        },
      ],
    };

    return {
      status: 200,
      data: investmentsData,
    };
  },
};
