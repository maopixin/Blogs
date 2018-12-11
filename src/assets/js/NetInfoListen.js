import {NetInfo} from 'react-native'
import {Toast} from 'teaset'
NetInfo.addEventListener(
    'connectionChange',
    (connectionInfo)=>{
        switch(connectionInfo.type){
            case "none" :
                Toast.fail("网络未连接");
                break;
            case "wifi" :
                Toast.smile("网络已连接到超快的wifi");
                break;
            case "cellular" :
                Toast.smile("网络当前正在使用数据流量");
                break;
            case "unknown" :
                Toast.fail("网络异常");
                break;
            default:
                Toast.fail("未知网络");
        }
    }
);