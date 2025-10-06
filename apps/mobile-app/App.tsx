import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const featureList = [
  'HD playback with offline sync',
  'Creator studio for uploads and analytics',
  'Real-time chat and reactions'
];

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>AuroraStream Mobile</Text>
        <Text style={styles.subtitle}>
          Companion experience delivering playlists, downloads, and chat on the go.
        </Text>
        <View style={styles.card}>
          {featureList.map((feature) => (
            <Text key={feature} style={styles.feature}>
              • {feature}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f172a'
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    padding: 24
  },
  title: {
    fontSize: 32,
    color: '#e0e7ff',
    fontWeight: '700'
  },
  subtitle: {
    fontSize: 16,
    color: '#c7d2fe',
    textAlign: 'center',
    lineHeight: 24
  },
  card: {
    width: '100%',
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 24,
    gap: 12
  },
  feature: {
    color: '#f1f5f9',
    fontSize: 16
  }
});
