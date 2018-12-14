import { AppRegistry ,StatusBar ,Platform ,YellowBox} from 'react-native';
import App from './App'
// 监听网络变化
import './src/assets/js/NetInfoListen'
// 出现此错误提示的原因是源代码内有已被React舍弃的代码，但此并不影响程序运行。
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

if (!__DEV__) {
	global.console = {
		info: () => {
		},
		log: () => {
		},
		warn: () => {
		},
		debug: () => {
		},
		error: () => {
		},
	};
}
AppRegistry.registerComponent('mpx', () => App);
