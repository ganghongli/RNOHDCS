import { ComponentsScreen } from './screens/ComponentsScreen';
import { ReduxScreen } from './screens/ReduxScreen';
import { SagasScreen } from './screens/SagasScreen';
import { CheckInternetConnectionScreen } from './screens/CheckInternetConnectionScreen';
import { UseIsConnectedScreen } from './screens/UseIsConnectedScreen';
import { View, ScrollView } from 'react-native';
import { NetworkProvider } from 'react-native-offline';

//react-native-offline demo入口
export const OfflineDemoTest = () => {
    return (
        <ScrollView>
            <View>
                <ComponentsScreen></ComponentsScreen>
                <ReduxScreen></ReduxScreen>
                <SagasScreen></SagasScreen>
                <CheckInternetConnectionScreen></CheckInternetConnectionScreen>
                <NetworkProvider pingServerUrl='https://www.baidu.com'>
                    <UseIsConnectedScreen></UseIsConnectedScreen>
                </NetworkProvider>
            </View>
        </ScrollView>
    );
};