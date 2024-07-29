import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Started with the 1D6 API

1D6 uses a small monolithic server as its backend, allowing for user logins and holding all the mods that 1D6 has to offer.\
The source code can be viewed [here](https://github.com/OneDSix/1d6-api).

Each language has it's own SDK, and as such the documentation and inner workings for each of them is slightly different.\
Below you can choose what language you want to use and it will carry across the whole page.

## Installing

<Tabs groupId="languages" queryString>
<TabItem value="java" label="Java (Gradle)" default>

<Tabs queryString="manager">
<TabItem value="gradle" label="Gradle">

You can grab the .jar from Jitpack.\
Add this to your `build.gradle` file.

```groovy
plugins {
    id 'application' // assuming you don't already have it
}

repositories {
    maven { url "https://jitpack.io" }
}

dependencies {
    implementation 'com.github.OneDSix:1d6-api:main-SNAPSHOT'
}
```

</TabItem>
<TabItem value="gradle-kts" label="Gradle.kts">

You can grab the .jar from Jitpack.\
Add this to your `build.gradle.kts` file.

```kotlin
plugins {
    id("application") // assuming you don't already have it
}

repositories {
    maven { url = uri("https://jitpack.io") }
}

dependencies {
    implementation("com.github.OneDSix:1d6-api:main-SNAPSHOT")
}
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="kotlin" label="Kotlin (Gradle)">

<Tabs queryString="manager">
<TabItem value="gradle" label="Gradle">

You can grab the .jar from Jitpack.\
Add this to your `build.gradle` file.

```groovy
plugins {
    id 'application' // assuming you don't already have it
}

repositories {
    maven { url "https://jitpack.io" }
}

dependencies {
    implementation 'com.github.OneDSix:1d6-api:main-SNAPSHOT'
}
```

</TabItem>
<TabItem value="gradle-kts" label="Gradle.kts">

You can grab the .jar from Jitpack.\
Add this to your `build.gradle.kts` file.

```kotlin
plugins {
    id("application") // assuming you don't already have it
}

repositories {
    maven { url = uri("https://jitpack.io") }
}

dependencies {
    implementation("com.github.OneDSix:1d6-api:main-SNAPSHOT")
}
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="scala" label="Scala (SBT)" default>

You can grab the .jar from Jitpack.\
Add this to your `build.sbt` file.

```scala
resolvers += "jitpack" at "https://jitpack.io"
libraryDependencies += "com.github.OneDSix" % "1d6-api" % "main-SNAPSHOT"
```

</TabItem>
<TabItem value="csharp" label="C# (NuGet)">

:::danger Not Recommended!

This SDK isn't as documented or maintained as the others, as its only used in the Playnite plugin.\
If you have the option, please use the JVM, JS, or any Community Maintained SDKs instead.

If you know C# and want to document, improve, or maintain this SDK, you know where to find us.

:::

:::danger Not Yet Written!

TODO

:::

</TabItem>
<TabItem value="javascript" label="Javascript (NPM)">

:::note Not The Modding SDK!

This is not the JS Modding SDK, this is for interacting with the 1D6 API via Javascript.\
While they are compatible, and even included inside the Modding SDK, they are not the same thing.

:::

<Tabs queryString="manager">
<TabItem value="npm" label="NPM">
:::danger Not Yet Written!

TODO

:::
</TabItem>
<TabItem value="yarn" label="Yarn">
:::danger Not Yet Written!

TODO

:::
</TabItem>
<TabItem value="deno" label="Deno">
:::danger Not Yet Written!

TODO

:::
</TabItem>
</Tabs>

If you want to target Browsers, here is a Webpack config that should work in most environments. You may need to edit it slightly to correct the directory names.

```js title="./webpack.config.js"
const path = require('path');

module.exports = {
    entry: './src/main.ts',
    mode: "development",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
```

Don't forget to install the needed dependencies for webpack!

<Tabs queryString="manager">
<TabItem value="npm" label="NPM">

</TabItem>
<TabItem value="yarn" label="Yarn">

</TabItem>
<TabItem value="deno" label="Deno">

</TabItem>
</Tabs>

</TabItem>
<TabItem value="curl" label="Raw HTTP (CUrl)">

:::danger Not Yet Written!

TODO

:::

</TabItem>
</Tabs>

## Logging In

In order to access most services on the API, you need to log in via a 1D6 account first.\
Thankfully, its just a simple username-password combo. This will be changed later, but for right now this how you log in.

<Tabs groupId="languages" queryString>
<TabItem value="java" label="Java (Gradle)" default>

:::danger Not Yet Written!

TODO

:::

</TabItem>
<TabItem value="kotlin" label="Kotlin (Gradle)">

:::danger Not Yet Written!

TODO

:::

</TabItem>
<TabItem value="scala" label="Scala (SBT)" default>

:::danger Not Yet Written!

TODO

:::

</TabItem>
<TabItem value="csharp" label="C# (NuGet)">

:::danger Not Yet Written!

TODO

:::

</TabItem>
<TabItem value="javascript" label="Javascript (NPM)">

:::danger Not Yet Written!

TODO

:::

</TabItem>
<TabItem value="curl" label="Raw HTTP (CUrl)">

:::danger Not Yet Written!

TODO

:::

</TabItem>
</Tabs>
