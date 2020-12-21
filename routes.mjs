import db from './models/index.mjs';
import items from './controllers/items.mjs';
import root from './controllers/root.mjs';

export default function routes(app) {
  const RootController = root();
  app.get('/', RootController.rootPage);

  const ItemsController = items(db);
  app.get('/items', ItemsController.index);
}
