# Time Wager Mobile App

---

![Time Wager Mobile App](https://res.cloudinary.com/mtruong/image/upload/v1616773643/FightFor15_TimeWageCalc_MobileApp_upcfeh.png)

---

### Motivation:
Sometimes we need a little perspective on how much material things are actually worth.

Everywhere we go, we are bombarded with advertisements, marketing strategies, and even gimmicks to convince us to buy more things. 

But if you're an average American that depends on **hourly minimum wages** to make a living, it's important to consider how much time you spent making that **“hard-earned” money**… just to purchase the things we enjoy and depend on. 

It's extremely useful to know **how you value your own time**. If you can figure out how much money each extra hour is worth to you, it'll help you make smarter decisions about your lifestyle habits, including: 

* Whether to take on additional part-time work, and at what rate. 
* Whether you should try to scale down your hours at your current job. 
* How long you should wait in line for a free item. 
* Whether taking a cab is worth the extra cost. 
* Whether it's worth it to hire a personal assistant, a laundry service, or other help. 

**Is it worth it?**

---

### Project Summary:

So this is our concept: **how much are things really worth?** 

In today's society, many Americans earn minimum hourly wages and it’s so engrained into our society that it’s not even extreme to say that a Starbucks coffee ($4) is worth about 16 minutes of a person’s time who earns ($15/hr the new minimum wage).

It also shows the privilege of people who earn higher wages in that it is worth such a small amount of time it’s almost negligible, like say someone who earns $13.4 million an hour (Jeff Bezos, Amazon CEO).

This mobile application is a "time wage calculator" app to help raise awareness for the **FightFor15** movement to increase the federal minimum wage from $7.25/hr to $15.00/hr. 

**Source**: (https://fightfor15.org/about-us/)

The original concept and UI design was created by **Kayla Trinh** and developed by **Michael Truong**.

---
## Figma Design Mockup:
![Mockup](https://res.cloudinary.com/mtruong/image/upload/v1616778270/Screens_xvtikx.png)

---

![StyleGuide](https://res.cloudinary.com/mtruong/image/upload/v1616778279/Guide_vpqr7y.png)

**Link To Figma:** (https://www.figma.com/file/ySAsP17KtBxGk3J1hf0cg5/UI-Design-Challenge?node-id=210%3A339)

---

### Features:
This mobile app is built using React Native to run on iOS and Android devices. It follows React's Component Driven Design (CDD) pattern and uses a number of built-in Core Components such as View, TouchableOpacity, and StyleSheet components. 

You can input your hourly wage and price of expense for a desired item into the calculator, and it determines the amount of time it took to earn it.

The calculator functionality of the mobile app performs an hours-to-time format conversion in the following way: 

1. How much you make hourly? (H) 
2. How much the item is? ($) 

$4/$15 = 0.266 hrs x 60 min/1hr = 16 min 0 seconds 
$4/$13,000,000 = 0.001 seconds 1ms 


**Source**: (https://www.calculatorsoup.com/calculators/time/decimal-to-time-calculator.php)

**Furey, Edward "Decimal to Time Calculator"; CalculatorSoup, https://www.calculatorsoup.com - Online Calculators**

---

### Code Examples:
- React Native uses a standalone library called React Navigation that allows for developers to build multi-screen mobile apps. The NavigationContainer component wraps multiple StackScreen components so that all child elements have access to the {navigation} prop to switch between screens.

```
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ title: 'Time Wage Calculator - Welcome Screen' }} />
        <Stack.Screen
          name="InfoScreen"
          component={InfoScreen}
          options={{ title: 'Info Screen' }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ title: 'Main Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
```
- React Native has a very awesome StyleSheet UI component that allows developers to build custom CSS style objects and apply them as attributes on React components. This makes React styling very intuitive, easy to reuse, and fun to build! 

```
const styles = StyleSheet.create({
    container: {
        flex: 3,
        flexDirection: "row", 
        justifyContent: 'space-between',
        padding: 10,
    },
    text: {
        color: 'black',
        fontSize: 30,
    },
})
```


---


### Technologies used:
1. React Native (https://reactnative.dev/doc/)
2. React Navigator (https://reactnavigation.org/docs/navigating)
3. Cocoapods (https://cocoapods.org/)
4. Figma (https://figma.com/)

---
## Issues and Resolutions

#### List of Errors.....

**ERROR**:
1. error Failed to build iOS project. “xcodebuild” command error code 65
2. Issues using the 'pod install' command in terminal.

**RESOLUTION**:
1. It was caused by installing react-native-vector-icons and incorrectly linking it to the react-native mobile app. We had to unlink react-native-vector-icons to successfully build the iOS and Android app.
2. The solution was to install cocoapods in terminal using the Homebrew package manager.

---

## Credits:
- Original idea and design by UX Designer - Kayla Trinh | [https://www.kaylangatrinh.com/] 
- Developed by Software Engineer - Michael Truong | [https://www.linkedin.com/in/m-truong] 