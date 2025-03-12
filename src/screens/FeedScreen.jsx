import React from "react";
import { View, Text, FlatList, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const FeedScreen = ({ navigation }) => {
  const stories = [
    { id: "1", user: "User 1", image: require("../../assets/150x150.png") },
    { id: "2", user: "User 2", image: require("../../assets/150x150.png") },
    { id: "3", user: "User 3", image: require("../../assets/150x150.png") },
    { id: "4", user: "User 4", image: require("../../assets/150x150.png") },
    { id: "5", user: "User 5", image: require("../../assets/150x150.png") },
    { id: "6", user: "User 6", image: require("../../assets/150x150.png") },
  ];

  const posts = [
    {
      id: "1",
      user: "User 1",
      image: require("../../assets/150x150.png"),
      text: "post 1",
    },
    {
      id: "2",
      user: "User 2",
      image: require("../../assets/150x150.png"),
      text: "post 2",
    },
    {
      id: "3",
      user: "User 3",
      image: require("../../assets/150x150.png"),
      text: "post 3",
    },
    {
      id: "4",
      user: "User 4",
      image: require("../../assets/150x150.png"),
      text: "post 4",
    },
    {
      id: "5",
      user: "User 5",
      image: require("../../assets/150x150.png"),
      text: "post 5",
    },
    {
      id: "6",
      user: "User 6",
      image: require("../../assets/150x150.png"),
      text: "post 6",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>facebook</Text>
        <View style={styles.headerIcons}>
          <Icon name="search" size={24} color="#000" style={styles.icon} />
          <Icon name="chatbubble-outline" size={24} color="#000" style={styles.icon} />
        </View>
      </View>

      <ScrollView style={styles.contentContainer} nestedScrollEnabled>
        <View style={styles.navBar}>
          <Icon name="home-outline" size={28} color="#1877F2" />
          <Icon name="people-outline" size={28} color="#666" />
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Icon name="person-outline" size={28} color={"#1877F2"} />
          </TouchableOpacity>
          <Icon name="cart-outline" size={28} color="#666" />
          <Icon name="menu-outline" size={28} color="#666" />
        </View>

        <View style={styles.postInputContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={require("../../assets/150x150.png")} style={styles.profilePic} />
            <TextInput style={styles.postInput} placeholder="¿En qué estás pensando?" placeholderTextColor="#666" />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-around", margin: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <Icon name="videocam-outline" size={24} color="red" />
              <Text style={{ marginLeft: 5 }}>Live</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Icon name="image-outline" size={24} color="green" />
              <Text style={{ marginLeft: 5 }}>Foto</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Icon name="camera-outline" size={24} color="blue" />
              <Text style={{ marginLeft: 5 }}>Video</Text>
            </View>
          </View>
        </View>

        <FlatList
          horizontal
          data={stories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.storyContainer}>
              <Image source={item.image} style={styles.storyImage} />
              <Text style={styles.storyText}>{item.user}</Text>
            </View>
          )}
          style={styles.storiesList}
        />

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
                <Icon name="ellipsis-horizontal" size={24} color="#000" style={styles.postIcon} />
              </View>
              <Image source={item.image} style={styles.postImage} />

              {/* Like, Comment, Share Options */}
              <View style={styles.postOptions}>
                <TouchableOpacity style={styles.optionButton}>
                  <Icon name="thumbs-up-outline" size={24} color="#1877F2" />
                  <Text style={styles.optionText}>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                  <Icon name="chatbubble-outline" size={24} color="#1877F2" />
                  <Text style={styles.optionText}>Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                  <Icon name="share-social-outline" size={24} color="#1877F2" />
                  <Text style={styles.optionText}>Share</Text>
                </TouchableOpacity>
              </View>
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
  storiesList: {
    height: 250,
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
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
    marginTop: 32,
  },
  headerIcons: {
    flexDirection: "row",
    marginTop: 32,
  },
  icon: {
    marginRight: 5,
    marginLeft: 5,
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  storyContainer: {
    alignItems: "center",
    paddingRight: 15,
  },
  storyImage: {
    width: 125,
    height: 225,
    borderRadius: 10,
  },
  postContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    flex: 1,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  postContent: {
    flex: 1,
  },
  postUser: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postText: {
    marginTop: 5,
    fontSize: 14,
  },
  postImage: {
    width: "100%",
    height: 400,
    marginTop: 10,
    borderRadius: 10,
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
  postOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    marginLeft: 5,
    color: "#1877F2",
    fontWeight: "bold",
  },
});

export default FeedScreen;
