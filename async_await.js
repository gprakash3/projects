console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  const getButter= new Promise ((resolve,reject) => {
      setTimeout(() => resolve('getbutter'),3000);
  })
  const getColdDrinks = new Promise ((resolve, reject) => {
      setTimeout(()=> resolve('getColdDrink'), 3000);
  })
   
  const getCandy =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('candy'), 3000);
  });
  
   const getCoke =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('coke'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;
  
    let [ popcorn, colddrink, candy, coke ] =
    await Promise.all([ getPopcorn,getColdDrinks, getCandy, getCoke  ]);

    console.log(`got ${popcorn}, ${colddrink}, ${candy}, ${coke}`);

  
  return ticket;
  
};

preMovie().then((t) => console.log(`person3 shows ${t}`));

console.log('person4 shows ticket');

