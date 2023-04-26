export function filterData(searchrestaurant, restaurant) {
  const filteredRes = restaurant.filter((res) =>
    res.data.name.toLowerCase().includes(searchrestaurant.toLowerCase())
  );
  return filteredRes;
}


