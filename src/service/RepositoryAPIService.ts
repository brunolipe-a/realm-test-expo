import { AxiosResponse } from "axios";
import { api } from "../core/api";

interface RepositoryData {
  full_name: string;
  forks: number;
  stargazers_count: number;
  name: string;
  description: string;
}

interface RepositoryFormattedData {
  name: string;
  fullName: string;
  description: string;
  stars: number;
  forks: number;
}

class RepositoryAPIService {
  async getRepository(
    fullName: string
  ): Promise<RepositoryFormattedData | null> {
    try {
      const { data } = await api.get<any, AxiosResponse<RepositoryData>>(
        `/repos/${fullName}`
      );

      return {
        name: data.name,
        forks: data.forks,
        description: data.description,
        stars: data.stargazers_count,
        fullName: data.full_name,
      };
    } catch (error) {
      return null;
    }
  }
}

export default new RepositoryAPIService();
