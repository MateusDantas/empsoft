// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes() {
  // create reusable async injectors using getAsyncInjectors factory

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        System.import('containers/HomePage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/user/:user_id',
      name: 'user',
      getComponent(nextState, cb) {
        System.import('containers/UserPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/profile/:user_id',
      name: 'profile',
      getComponent(nextState, cb) {
        System.import('containers/ProfilePage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
