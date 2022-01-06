import { FontAwesome } from "@expo/vector-icons";
import { useRealm } from "../../contexts/realm";
import { Repository } from "../../models/Repository";
import RepositoryAPIService from "../../service/RepositoryAPIService";

import {
  Container,
  Name,
  Description,
  Stats,
  Stat,
  StatCount,
  DeleteButton,
} from "./styles";

type RepoProps = {
  repo: Repository;
};

export function RepoItem({ repo }: RepoProps) {
  const realm = useRealm();

  async function handleDeleteRepository() {
    realm.write(() => {
      realm.delete(repo);
    });
  }

  async function handleUpdateRepository() {
    const repositoryData = await RepositoryAPIService.getRepository(
      repo.fullName
    );

    if (!repositoryData) return;

    realm.write(() => {
      repo.name = repositoryData.name;
      repo.description = repositoryData.description;
      repo.stars = repositoryData.stars;
      repo.forks = repositoryData.forks;
    });
  }

  return (
    <Container onPress={handleUpdateRepository}>
      <Name>{repo.name}</Name>
      <Description>{repo.description}</Description>

      <Stats>
        <Stat>
          <FontAwesome name="star" size={16} color="#fde047" />
          <StatCount>{repo.stars}</StatCount>
        </Stat>
        <Stat>
          <FontAwesome name="code-fork" size={16} color="#16a34a" />
          <StatCount>{repo.forks}</StatCount>
        </Stat>
      </Stats>
      <DeleteButton onPress={handleDeleteRepository}>
        <FontAwesome name="times" size={16} color="#999" />
      </DeleteButton>
    </Container>
  );
}
