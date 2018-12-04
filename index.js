import { AppRegistry,NetInfo } from 'react-native';
import App from './App';
import RootTab from './src/navigation/RootTab'

import { YellowBox } from 'react-native';
// 出现此错误提示的原因是源代码内有已被React舍弃的代码，但此并不影响程序运行。
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


AppRegistry.registerComponent('mpx', () => RootTab);
