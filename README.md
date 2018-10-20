# Material design style menu for react native

> A MDL style menu for react native with cross platform support for android and iOS

![Example](https://media.giphy.com/media/6A9SMHdkFKSTh2kRtO/giphy.gif)

## Code Samples



```
        import QuickMenu from './src/QuickMenu'

        export default class App extends React.Component {
            render() {
                const items = [
                {
                    name: "Connections",
                    icon: "router-wireless"
                },
                {
                    name: "Cooking",
                    icon: "stove"
                },
                {
                    name: "Food",
                    icon: "food"
                },
                {
                    name: "Riding",
                    icon: "motorbike"
                }
                ]
                return (
                <View style={styles.container}>
                    <QuickMenu
                    items={items}
                    dotColor={'#3E92CC'}
                    fabColor={'#3E92CC'}
                    iconColor={'#FFF'}
                    iconType={'material-community'}
                    onItemPressed={this.handlePress}
                    />
                </View>
                );
            }

            handlePress = (item) => console.log(item)
        }
```

## Usage

> Add `<QuickMenu>` component to the root of your main view

`<QuickMenu>` takes the following props: 
 * `items` Array of objects to be rendererd with `name` and `icon` as required keys
 * `dotColor` Color of menu item dots
 * `fabColor` Color of main action button
 * `iconColor` Color of icons in menu items and main action button
 * `iconType` Icon collection to use for icons rendered from `icon` key in data items
 * `onItemPressed` Callback for menu item press which receives all the data passed through in menu items

## Installation

>This project requires expo to run. You can get it [here](https://docs.expo.io/versions/latest/introduction/installation).

## Starting the project


`npm run start`

or if you're using yarn

`yarn start`

## Pull Requests

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request