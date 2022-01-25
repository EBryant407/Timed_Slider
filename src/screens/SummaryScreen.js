import * as React from "react";
import { Text, View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const SummaryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>My Solution</Text>
        <Text style={styles.subHeader}>App.js</Text>
        <Text style={styles.textStyle}>
          I chose to go with a Bottom Tab Navigator for this project because of
          its simplicity in implementation, and ease of use. I added some custom
          icons for navigation buttons to make them easier to recognize at a
          glance. I added the custom icons though the screenOptions prop and
          have them dynamically changing based on which is tab focused.
        </Text>
        <Text style={styles.subHeader}>AppButton.js</Text>
        <Text style={styles.textStyle}>
          I decided to create a custom button component to compartmentalize the
          code, and allow it to be reused anywhere in the project. I used
          TouchableOpacity as the base component because it simulates the same
          effect that most users are familiar with. I went with the ADA
          compliant styling for the button allowing it to be accessible to
          everybody.
        </Text>
        <Text style={styles.subHeader}>Slider.js</Text>
        <Text style={styles.textStyle}>
          This one was challenging, but I enjoyed working through it. I started
          by making this its own component because I knew it was going to be a
          lot of code. First I imported a few hooks, useRef and useEffect. I
          then imported the AppButton reusable component I created earlier. I
          created a FlatList, set the scroll to horizontal, and adjusted the
          width to the screen width to ensure that only one item would be shown
          at a time. I next created a timer that calls the goToNextPage function
          every five seconds and initialized it in the useEffect hook. For the
          forward and back buttons, I assigned my previous and next functions
          and passed each a title.
        </Text>
        <Text style={styles.subHeader}>SliderScreen.js</Text>
        <Text style={styles.textStyle}>
          This screen is straightforward, its simply importing the Slider
          component.
        </Text>
        <Text style={styles.subHeader}>SummaryScreen.js</Text>
        <Text style={styles.textStyle}>
          I created different styles for the header, subHeader and text to make
          the text easier to read. I added a ScrollView so nothing was lost, and
          wrapped everything in a SafeAreaView to prevent text from being hidden
          behind the navigation header.
        </Text>

        <Text style={styles.header}>Noteworthy Challenge</Text>
        <Text style={styles.textStyle}>
          There is one outstanding bug in the project that I was unable to
          resolve. When the Next or Prev buttons are tapped to change the item,
          the timer does not reset. This results in the transition executing
          pre-maturely on the following slide. Ideally, the timer would be reset
          anytime the user manually changes the slide. In reality, there isn't a
          reset function for timers in React Native. The timer would need to be
          stopped and then restarted. I struggled to find an elegant way to
          accomplish this.
        </Text>

        <Text style={styles.header}>My Experience</Text>
        <Text style={styles.textStyle}>
          This exercise was a lot of fun! I had never considered writing a timed
          slider from scratch, but the challenge was there, and I am proud of
          seeing it work! I appreciate the opportunity that has been extended to
          me and thank you for it!
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 5,
  },
  subHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "gray",
    paddingTop: 10,
    paddingBottom: 5,
  },
  textStyle: {
    fontSize: 20,
  },
});

export default SummaryScreen;
