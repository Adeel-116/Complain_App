import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const DRAWER_WIDTH = screenWidth * 0.8; // 80% of screen width

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;

  // Function to open drawer
  const openDrawer = () => {
    setIsDrawerOpen(true);
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacity, {
        toValue: 0.5,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // Function to close drawer
  const closeDrawer = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: -DRAWER_WIDTH,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setIsDrawerOpen(false);
    });
  };

  // Toggle drawer function
  const toggleDrawer = () => {
    if (isDrawerOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Main Screen */}
      <View style={styles.mainScreen}>
        {/* Header with Menu Icon */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton} onPress={toggleDrawer}>
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Home Screen</Text>
          <View style={styles.menuButton} />
        </View>

        {/* Main Content */}
        <View style={styles.content}>
          <Text style={styles.welcomeText}>Welcome to Home Screen!</Text>
          <Text style={styles.instructionText}>
            Tap the menu icon in the top-left corner to open the drawer
          </Text>
        </View>
      </View>

      {/* Overlay (appears when drawer is open) */}
      {isDrawerOpen && (
        <Animated.View
          style={[
            styles.overlay,
            {
              opacity: overlayOpacity,
            },
          ]}
        >
          <TouchableOpacity
            style={styles.overlayTouchable}
            onPress={closeDrawer}
            activeOpacity={1}
          />
        </Animated.View>
      )}

      {/* Drawer Menu */}
      <Animated.View
        style={[
          styles.drawer,
          {
            transform: [{ translateX: slideAnim }],
          },
        ]}
      >
        {/* Drawer Header */}
        <View style={styles.drawerHeader}>
          <View style={styles.profileSection}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>JD</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>John Doe</Text>
              <Text style={styles.profileEmail}>john.doe@example.com</Text>
            </View>
          </View>
        </View>

        {/* Drawer Content */}
        <ScrollView style={styles.drawerContent}>
          <DrawerItem
            icon="🏠"
            title="Home"
            onPress={() => {
              console.log('Home pressed');
              closeDrawer();
            }}
          />
          <DrawerItem
            icon="👤"
            title="Profile"
            onPress={() => {
              console.log('Profile pressed');
              closeDrawer();
            }}
          />
          <DrawerItem
            icon="⚙️"
            title="Settings"
            onPress={() => {
              console.log('Settings pressed');
              closeDrawer();
            }}
          />
          <DrawerItem
            icon="📱"
            title="About"
            onPress={() => {
              console.log('About pressed');
              closeDrawer();
            }}
          />
          <DrawerItem
            icon="❤️"
            title="Favorites"
            onPress={() => {
              console.log('Favorites pressed');
              closeDrawer();
            }}
          />
          <DrawerItem
            icon="💬"
            title="Contact"
            onPress={() => {
              console.log('Contact pressed');
              closeDrawer();
            }}
          />
          
          {/* Drawer Footer */}
          <View style={styles.drawerFooter}>
            <DrawerItem
              icon="🚪"
              title="Logout"
              onPress={() => {
                console.log('Logout pressed');
                closeDrawer();
              }}
              isLogout={true}
            />
          </View>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};

// Reusable Drawer Item Component
const DrawerItem = ({ icon, title, onPress, isLogout = false }:any) => {
  return (
    <TouchableOpacity
      style={[styles.drawerItem, isLogout && styles.logoutItem]}
      onPress={onPress}
    >
      <Text style={styles.drawerItemIcon}>{icon}</Text>
      <Text style={[styles.drawerItemText, isLogout && styles.logoutText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  mainScreen: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  menuButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuLine: {
    width: 25,
    height: 3,
    backgroundColor: '#333',
    marginVertical: 2,
    borderRadius: 2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  instructionText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000',
    zIndex: 1,
  },
  overlayTouchable: {
    flex: 1,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: DRAWER_WIDTH,
    backgroundColor: '#fff',
    zIndex: 2,
    elevation: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  drawerHeader: {
    backgroundColor: '#6200EE',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6200EE',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: '#E8EAED',
  },
  drawerContent: {
    flex: 1,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  drawerItemIcon: {
    fontSize: 20,
    marginRight: 15,
    width: 25,
    textAlign: 'center',
  },
  drawerItemText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  drawerFooter: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  logoutItem: {
    borderBottomWidth: 0,
  },
  logoutText: {
    color: '#ff4444',
  },
});

export default App;