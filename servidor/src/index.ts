import { loadDB } from './controllers/games.controller';
import createApp from './app';

const app = createApp();
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
    loadDB()
  }); 