import { AppRegistry,NetInfo ,StatusBar ,Platform ,YellowBox} from 'react-native';
// import App from './App';
import Root from './src/navigation/Root'

const isAndroid = Platform.OS==="android"
// 出现此错误提示的原因是源代码内有已被React舍弃的代码，但此并不影响程序运行。
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
// 安卓设置沉浸式状态栏
if(isAndroid){
    StatusBar.setBackgroundColor("transparent")
    StatusBar.setTranslucent(true)
    StatusBar.setBarStyle("dark-content")
};


AppRegistry.registerComponent('mpx', () => Root);
