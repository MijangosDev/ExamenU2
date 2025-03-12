import React, { useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TextInput } from 'react-native';
import { StatusBar } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const posts = [
    {
      id: "1",
      user: "User 1",
      text: "This is my first post!",
      image: require("../../assets/150x150.png"),
    },
    {
      id: "2",
      user: "User 2",
      text: "Feeling great today!",
      image: require("../../assets/150x150.png"),
    },
    {
      id: "3",
      user: "User 3",
      text: "What a wonderful day!",
      image: require("../../assets/150x150.png"),
    },
  ];

  const friends = [
    { id: "1", name: "Friend 1", image: require("../../assets/150x150.png") },
    { id: "2", name: "Friend 2", image: require("../../assets/150x150.png") },
    { id: "3", name: "Friend 3", image: require("../../assets/150x150.png") },
    { id: "4", name: "Friend 4", image: require("../../assets/150x150.png") },
  ];


  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false); 
    };
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentContainer} nestedScrollEnabled>
     
        <View style={styles.header}>
          <Text style={styles.headerTitle}>facebook</Text>
          <View style={styles.headerIcons}>
            <Icon name="search" size={24} color="#000" style={styles.icon} />
            <Icon name="comment" size={24} color="#000" style={styles.icon} />
          </View>
        </View>

        
        <View style={styles.profileInfo}>
          <Image source={require("../../assets/150x150.png")} style={styles.coverImage} />
          <View style={styles.avatarContainer}>
            <Image source={require("../../assets/150x150.png")} style={styles.profileImage} />
            <Text style={styles.profileName}>Mijangos Daniel</Text>
            <Text style={styles.profileBio}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
          </View>
        </View>

        
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Editar Perfil</Text>
        </TouchableOpacity>

      
        <View style={styles.profileDetails}>
          <Text style={styles.detailLabel}>Details</Text>
          <View style={styles.profileDetail}>
            <Icon name="location-on" size={24} color="#555" style={styles.detailIcon} />
            <Text style={styles.profileDetailText}>Lives in: New York</Text>
          </View>
          <View style={styles.profileDetail}>
            <Icon name="school" size={24} color="#555" style={styles.detailIcon} />
            <Text style={styles.profileDetailText}>Studied at: Harvard University</Text>
          </View>
          <View style={styles.profileDetail}>
            <Icon name="work" size={24} color="#555" style={styles.detailIcon} />
            <Text style={styles.profileDetailText}>Works at: Facebook</Text>
          </View>
        </View>

        
        <TouchableOpacity style={styles.addStoryButton}>
          <Text style={styles.addStoryButtonText}>Añadir Historia</Text>
        </TouchableOpacity>

        
        <View style={styles.friendsSection}>
          <Text style={styles.sectionTitle}>Friends</Text>
          <FlatList
            horizontal
            data={friends}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.friendContainer}>
                <Image source={item.image} style={styles.friendImage} />
                <Text style={styles.friendName}>{item.name}</Text>
              </View>
            )}
          />
        </View>

        
        <View style={styles.postInputContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={require("../../assets/150x150.png")} style={styles.profilePic} />
            <TextInput
              style={styles.postInput}
              placeholder="¿Qué estás pensando?"
              placeholderTextColor="#999"
            />
          </View>
        </View>

       
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.postContainer}>
              <View style={styles.postHeader}>
                <Image source={item.image} style={styles.profilePic} />
                <View style={styles.postContent}>
                  <Text style={styles.postUser}>{item.user}</Text>
                  <Text style={styles.postText}>{item.text}</Text>
                </View>
                <Icon name="more-horiz" size={24} color="#000" style={styles.postIcon} />
              </View>
              <Image source={item.image} style={styles.postImage} />
            </View>
          )}
        />
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F2F5",
  },
  contentContainer: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1877F2",
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    marginHorizontal: 10,
  },
  profileInfo: {
    backgroundColor: "#FFFFFF",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  coverImage: {
    width: "100%",
    height: 200,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: -60,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: "#FFF",
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#1877F2",
  },
  profileBio: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    marginHorizontal: 20,
  },
  profileDetails: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  detailLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  profileDetail: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  profileDetailText: {
    fontSize: 16,
    color: "#555",
    marginLeft: 10,
  },
  detailIcon: {
    marginRight: 10,
  },
  friendsSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  friendContainer: {
    alignItems: "center",
    marginRight: 15,
  },
  friendImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  friendName: {
    fontSize: 14,
    marginTop: 5,
    color: "#333",
  },
  postInputContainer: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 10,
  },
  postInput: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F0F2F5",
    borderRadius: 20,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  postContent: {
    flex: 1,
    marginLeft: 10,
  },
  postUser: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postText: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  postIcon: {
    marginLeft: 10,
  },
  postImage: {
    width: "100%",
    height: 200,
    marginTop: 10,
  },
  editButton: {
    marginTop: 10,
    backgroundColor: "#1877F2",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignSelf: "center",
  },
  editButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  addStoryButton: {
    backgroundColor: "#1877F2",
    paddingVertical: 10,
    marginTop: 15,
    borderRadius: 20,
    marginHorizontal: 20,
  },
  addStoryButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ProfileScreen;
