// import React from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
// } from 'react-native';

// const LoginScreen = () => {
//   return (
//     <View style={styles.container2}>
//       <Text style={styles.welcomeText}>Welcome, johnpetro335</Text>
//       <Text style={styles.subtitle}>wickApp</Text>
//       {/* space */}
//       <View style={styles.container}>
//       <View style={styles.content}>
//         <Text style={styles.title}>Link a Payment Method</Text>
//         <Text style={styles.subtitle}>
//           Add a payment method for faster and secure transactions.
//         </Text>
//       </View>
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Link Now</Text>
//       </TouchableOpacity>
//     </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1E1E1E',
//     paddingHorizontal: 20,
//     justifyContent: 'center',
//   },
//   welcomeText: {
//     fontSize: 28,
//     color: '#FFF',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#B0B0B0',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   formContainer: {
//     backgroundColor: '#FFF',
//     borderRadius: 15,
//     padding: 20,
//     elevation: 5,
//   },
//   inputContainer: {
//     marginBottom: 15,
//   },
//   inputLabel: {
//     fontSize: 14,
//     color: '#444',
//     marginBottom: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#E5E5E5',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     height: 40,
//     fontSize: 16,
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   eyeIcon: {
//     position: 'absolute',
//     right: 10,
//     padding: 5,
//   },
//   forgotPasswordButton: {
//     alignSelf: 'flex-end',
//   },
//   forgotPasswordText: {
//     fontSize: 14,
//     color: '#FFD700',
//   },
//   signInButton: {
//     backgroundColor: '#FFD700',
//     borderRadius: 8,
//     paddingVertical: 12,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   signInText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   footer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   footerText: {
//     fontSize: 14,
//     color: '#444',
//   },
//   signUpLink: {
//     color: '#FFD700',
//     fontWeight: 'bold',
//   },
//   orContinueWith: {
//     textAlign: 'center',
//     fontSize: 14,
//     color: '#888',
//     marginVertical: 15,
//   },
//   socialIcons: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     gap: 20,
//   },
//   socialIcon: {
//     width: 40,
//     height: 40,
//   },
//   container2: {
//     flexDirection: 'row',
//     backgroundColor: '#EAF1FF', // Light blue background
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginHorizontal: 20,
//     marginVertical: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   content: {
//     flex: 1,
//     marginRight: 15,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#1E3A8A', // Darker blue
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#5A7184', // Subtle grey-blue text
//     marginTop: 5,
//   },
//   button: {
//     backgroundColor: '#2563EB', // Blue button
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: '#FFF',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
// });

// export default LoginScreen;

import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  FlatList,
} from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function MainScreen() {
  const [isAmountVisible, setIsAmountVisible] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [news] = useState([
    { id: '1', title: 'Breaking News: Market Hits Record Highs!' },
    { id: '2', title: 'New Update: Banking App Adds More Features' },
    { id: '3', title: 'Tips: Save Money with These Simple Tricks' },
  ]);

  // Calculate greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    if (hour < 20) return 'Good Evening';
    return 'Good Night';
  };

  const toggleAmountVisibility = () => setIsAmountVisible(!isAmountVisible);

  // Automatic news slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % news.length);
    }, 2000); // 2 seconds
    return () => clearInterval(interval);
  }, [news.length]);

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topContainer}>
        {/* Retrieve from database */}
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }}
          style={styles.userImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.greeting}>{getGreeting()},</Text>
          <Text style={styles.userName}>johnpetro</Text>
        </View>

        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconMargin}>
            <Ionicons name="notifications-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>Accounts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Transaction</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Deposit</Text>
        </TouchableOpacity>
      </View>

      {/* Amount Box */}
      <View style={styles.amountBox}>
        {isAmountVisible ? (
          <Text style={styles.amountText}>0.00</Text>
        ) : (
          <Text style={styles.placeholderText}>**</Text>
        )}
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={toggleAmountVisibility}
        >
          <Text style={styles.toggleButtonText}>
            {isAmountVisible ? 'Hide' : 'View'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* News Slider */}
      <View style={styles.newsSlider}>
        <Animated.View style={styles.newsCard}>
          <Text style={styles.newsText}>{news[currentSlideIndex].title}</Text>
        </Animated.View>
      </View>

      {/* Bottom Tabs */}
      <View style={styles.bottomTabs}>
        <TouchableOpacity style={styles.bottomTab}>
          <MaterialIcons name="receipt-long" size={24} color="#007bff" />
          <Text style={styles.bottomTabText}>Statements</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab}>
          <Ionicons name="send-outline" size={24} color="#007bff" />
          <Text style={styles.bottomTabText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab}>
          <Ionicons name="cash-outline" size={24} color="#007bff" />
          <Text style={styles.bottomTabText}>Withdraw</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab}>
          <Ionicons name="card-outline" size={24} color="#007bff" />
          <Text style={styles.bottomTabText}>Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab}>
          <Ionicons name="settings-outline" size={26} color="#007bff" />
          <Text style={styles.bottomTabText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 25,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconMargin: {
    marginLeft: 15,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
  },
  activeTab: {
    backgroundColor: 'darkgreen',
  },
  tabText: {
    fontSize: 16,
    color: '#555',
  },
  activeTabText: {
    color: '#fff',
  },
  amountBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 80,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
    height: 200,
    marginTop: 10,
  },
  amountText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  placeholderText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#aaa',
  },
  toggleButton: {
    marginTop: 10,
    backgroundColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  toggleButtonText: {
    color: 'whitesmoke',
    fontWeight: 'bold',
  },
  newsSlider: {
    marginBottom: 20,
    height: 80,
    marginTop: 100,
  },
  newsCard: {
    backgroundColor: '#004d40',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    elevation: 2,
    height: 80,
    height: '100%',
  },
  newsText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  greeting: {
    fontSize: 18,
    color: '#004d40',
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004d40',
  },
  bottomTab: {
    alignItems: 'center',
  },
  bottomTabText: {
    fontSize: 12,
    color: 'darkgreen',
    marginTop: 5,
  },
});
