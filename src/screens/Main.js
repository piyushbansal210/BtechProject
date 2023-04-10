import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import LogoHeader from "../components/LogoHeader";
import NewsContainer from "../components/NewsContainer";

import NEWS from "../assets/data/News";
import { DataContext } from "../components/DataProvider";

const Main = ({ navigation }) => {
  const [inp, setInp] = useState("");
  const [out, setOut] = useState("");
  const [news, setNews] = useState([]);

  const data = useContext(DataContext).data;

  const fetchData = async (inpData) => {
    try {
      const response = await axios.post("http://10.10.0.67:8080/summarize", {
        text: inpData,
      });
      return response.data;
    } catch (error) {
      console.log("this is an error");
      console.error(error);
    }
  };

  async function askQues() {
    const input = inp;
    const output = await fetchData(input);
    setOut(output);
  }

  useEffect(() => {
    setOut(out);
  }, [out]);

  useEffect(() => {
    if (data) setNews(data.results);
  }, [data]);

  if (news.length === 0) return null;

  return (
    <ScrollView style={styles.container}>
      <LogoHeader />
      <View>
        <View>
          <TextInput
            value={inp}
            onChangeText={(e) => setInp(e)}
            style={[
              styles.inputContainer,
              {
                marginTop: 10,
              },
            ]}
            multiline={true}
            placeholderTextColor="white"
            placeholder={"Paste Your Data Here ..."}
          />
        </View>
        <View>
          <TextInput
            value={out}
            onChangeText={(e) => setOut(e)}
            style={styles.inputContainer}
            multiline={true}
            placeholderTextColor="white"
            placeholder={"You'll get your data here ..."}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => askQues()}>
        <Text style={styles.buttonText}>CONVERT</Text>
      </TouchableOpacity>

      <View style={styles.newsDisplayContainer}>
        <Text style={styles.legalNewsHeader}>LEGAL NEWS</Text>
        {news.map((item, key) => {
          return (
            <NewsContainer key={key} navigation={navigation} data={item} />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D242E",
  },
  legalNewsHeader: {
    color: "#DAA134",
    fontFamily: "CBold",
    alignItems: "center",
    fontSize: 25,
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  newsDisplayContainer: {
    marginBottom: 10,
  },
  inputContainer: {
    color: "white",
    fontFamily: "PMedium",
    backgroundColor: "rgba(0,0,0,0.3)",
    marginBottom: 10,
    marginHorizontal: 10,
    height: 200,
    textAlignVertical: "top",
    padding: 10,
  },
  button: {
    backgroundColor: "white",
    marginHorizontal: 10,
    marginTop: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "#DAA134",
    fontFamily: "PSBold",
  },
});

export default Main;
