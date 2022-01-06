import { useMemo, useState } from "react";
import { FlatList, Keyboard, SafeAreaView } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { Container, Title, Form, Input, Submit, Background } from "./styles";

import { RepoItem } from "../../components/RepoItem";

import { useQuery, useRealm } from "../../contexts/realm";

import RepositoryAPIService from "../../service/RepositoryAPIService";

import { Repository } from "../../models/Repository";

export function Main() {
  const result = useQuery(Repository);
  const repositories = useMemo(() => result.sorted("stars"), [result]);

  const realm = useRealm();

  const [input, setInput] = useState("");

  const [hasInputError, setHasInputError] = useState(false);

  async function handleAppRepository() {
    Keyboard.dismiss();

    if (!input) return setHasInputError(true);

    const repositoryData = await RepositoryAPIService.getRepository(input);

    setInput("");

    if (!repositoryData) return setHasInputError(true);

    realm.write(() => {
      realm.create<Repository>(
        "Repository",
        Repository.generate(repositoryData)
      );
    });
  }

  return (
    <Background>
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Title>Repositórios</Title>
          <Form>
            <Input
              onChangeText={setInput}
              value={input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Procurar repositório..."
              hasError={hasInputError}
              onFocus={() => setHasInputError(false)}
              onSubmitEditing={handleAppRepository}
              returnKeyType="send"
            />
            <Submit onPress={handleAppRepository}>
              <MaterialIcons name="add" size={24} color="#fff" />
            </Submit>
          </Form>
          <FlatList<Repository>
            keyboardShouldPersistTaps="handled"
            data={repositories}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item._id.toHexString()}
            renderItem={({ item }) => <RepoItem repo={item} />}
          />
        </Container>
      </SafeAreaView>
    </Background>
  );
}
