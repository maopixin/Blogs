// applyMiddleware: redux通过该函数来使用中间件
// createStore: 用于创建store实例
import { applyMiddleware, createStore } from 'redux'
// 中间件，作用：如果不使用该中间件，当我们dispatch一个action时，需要给dispatch函数传入action对象；但如果我们使用了这个中间件，那么就可以传入一个函数，这个函数接收两个参数:dispatch和getState。这个dispatch可以在将来的异步请求完成后使用，对于异步action很有用
import thunk from 'redux-thunk'
// 引入reducer
import reducers from './reducers.js'

// 创建store实例 第一个参数是reducer集合（reducers），第二个参数初始化的store（initialState），第三个参数是applyMiddleware函数，来使用中间件 ，因为只在reducer里面初始化了值，所以这里并没有传入初始化store的值
export default store = createStore(
    reducers,
    applyMiddleware(thunk)
)
  