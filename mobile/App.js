import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInputComponent,
} from "react-native";
import api from "./src/services/api";

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("projeto").then((response) => {
      console.log(response.data);
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post('projeto', {
      title: `333333333`,
      dev: 'Dev test'
    })

    const project = response.data

    setProjects([...projects, project])

  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0c94ac" />
      <View style={styles.div}>
        <Text style={styles.title}>DevInDev</Text>
        <Text style={styles.description}>Developers In Development</Text>

        <Text style={styles.titleProjects}>Projetos:</Text>

        <FlatList
          style={styles.projectList}
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project} key={project.id}>
              {project.title}
            </Text>
          )}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar Projeto</Text>
        </TouchableOpacity>

        {/* <View style={styles.projects}>
          {projects.map((project) => (
              {project.title}
            </Text>
          ))}
        </View> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  div: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#0c94ac",
    fontSize: 55,
    fontWeight: "bold",
    marginTop: 60,
  },
  description: {
    color: "#fff",
    fontSize: 15,
  },
  projects: {
    marginTop: 40,
    alignItems: "center",
  },
  titleProjects: {
    color: "#0c94ac",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
  },
  project: {
    color: "#fff",
    fontSize: 20,
  },
  button: {
    alignSelf: "stretch",
    backgroundColor: "#0c94ac",
    margin: 20,
    height: 50,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
