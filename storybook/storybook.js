import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import { configure, getStorybookUI } from '@storybook/react-native'
import { name as appName } from '../app.json'

// import stories
configure(() => {
    require('./stories')
}, module)

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUIRoot = getStorybookUI({
    asyncStorage: AsyncStorage,
    port: 7008,
    onDeviceUI: false,
    disableWebsockets: true,
})

// react-native hot module loader must take in a Class - https://github.com/facebook/react-native/issues/10991
// https://github.com/storybooks/storybook/issues/2081
// https://github.com/storybookjs/react-native/issues/11
class StorybookUIHMRRoot extends Component {
    render() {
        return <StorybookUIRoot />
    }
}

AppRegistry.registerComponent(appName, () => StorybookUIHMRRoot)
export default StorybookUIHMRRoot
