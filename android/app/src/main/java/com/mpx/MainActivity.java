package com.mpx;

import com.facebook.react.ReactActivity;
import android.os.Bundle;  //add 
import org.devio.rn.splashscreen.SplashScreen; //add
// add start （react-native-gesture-handler）
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
// add end
public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "mpx";
    }
    // add start （react-native-gesture-handler）
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }
    // add end
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);   //add
        super.onCreate(savedInstanceState);
    }
}
