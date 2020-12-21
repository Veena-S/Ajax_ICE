export default function root() {
  const rootPage = (request, response) => {
    console.log('inside root request');
    response.render('root');
  };

  return {
    rootPage,
  };
}
