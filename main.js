const bigSpenders = businesses.filter(business => {
    return business.orders.find(number => number > 9000)
})

console.log(bigSpenders)