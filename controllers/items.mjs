export default function items(db) {
  const index = (request, response) => {
    console.log('inside items');
    db.Item.findAll()
      .then((itemsReturned) => {
        response.send({ itemsReturned });
        // response.render('items', { itemsReturned });
      })
      .catch((error) => console.log(error));
  };

  return {
    index,
  };
}
