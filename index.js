import {AppRegistry} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import App from './App';
import {name as appName} from './app.json';

// const theme = {
//   ...DefaultTheme,
//   roundness: 2,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#FFA500',
//     accent: '#FFA500',
//     placeholder: '#FFA500',
//     background: '#FFA500',
//     surface: '#FFA500',
//   },
// };

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}
AppRegistry.registerComponent(appName, () => App);
