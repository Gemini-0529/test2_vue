import App from '../App'

// export default [{
//     path: '/',
//     component: App,
//     children: [
//         {
//             path: '',
//             component: function(r) {
//                 return require.ensure([], function() {
//                   return r(require('../page/home'));
//                 }, 'home');
//               }
//         }, 
//         {
//             path: '/item',
//             component: function(r) {
//                 return require.ensure([], function() {
//                     return r(require('../page/item'));
//                  }, 'item') 
//                 } 
//         }, 
//         {
//             path: '/score',
//             component: function(r) {
//                 return require.ensure([], function() {
//                     return r(require('../page/score'));
//                 } , 'score')
//             } 
//         },
//         {
//             path:'/test',
//             component:function(r){
//                 return require.ensure([],function(){
//                     return r(require('../page/test'));
//                 },'test')
//             }
//         }
//     ]
// }]
export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../page/home')), 'home')
    }, {
        path: '/item',
        component: r => require.ensure([], () => r(require('../page/item')), 'item')
    }, {
        path: '/score',
        component: r => require.ensure([], () => r(require('../page/score')), 'score')
    },{
        path:'/test',
        component:test
    }
]
}]