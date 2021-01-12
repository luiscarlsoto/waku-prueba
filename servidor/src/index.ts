import createApp from './app';
import { loadDB } from './controllers/games.controller';

const app = createApp();
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
    loadDB()
  }); 