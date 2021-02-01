import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2199367Navigator from '../features/BlankScreen2199367/navigator';
import BlankScreen1199366Navigator from '../features/BlankScreen1199366/navigator';
import BlankScreen0199306Navigator from '../features/BlankScreen0199306/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2199367: { screen: BlankScreen2199367Navigator },
BlankScreen1199366: { screen: BlankScreen1199366Navigator },
BlankScreen0199306: { screen: BlankScreen0199306Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
