import { Dispatch } from 'redux';
import { ActionType } from 'typesafe-actions';
import GithubIDActionTypes from './githubID.types';

export type GithubIDAction = ActionType<typeof requestGithubUsers>;

interface GithubIDActionPayload {
  persona: string;
  position: number;
}
const requestGithubUsers = (payload: GithubIDActionPayload) => ({
  type: GithubIDActionTypes.GITHUBID_USERS_REQUEST,
  payload,
});

const userExists = (payload: GithubIDActionPayload) => ({
  type: GithubIDActionTypes.GITHUBID_USER_EXISTS,
  payload,
});

const storeUser = (payload: any) => ({
  type: GithubIDActionTypes.GITHUBID_STORE_USER,
  payload,
});

export const githubIDSearchKeyword = (payload: object) => ({
  type: GithubIDActionTypes.GITHUBID_USERS_INPUT_SEARCH_KEY,
  payload,
});

const noSuchUser = (payload: GithubIDActionPayload) => ({
  type: GithubIDActionTypes.GITHUBID_USER_DOES_NOT_EXIST,
  payload,
});

export const createNewTechnicalLeads = () => ({
  type: GithubIDActionTypes.NEW_GITHUB_ID_ENTRY,
});

export const searchGithubUsers = (query: string, persona: string, position: number) => (
  dispatch: Dispatch<GithubIDAction>,
) => {
  dispatch(requestGithubUsers({ persona, position }));
  fetch(`https://api.github.com/users/${query}`)
    .then(async (response) => {
      if (response.ok) {
        dispatch(userExists({ persona, position }));
        const data = await response.json();
        dispatch(storeUser({ persona, position, data }));
      } else {
        dispatch(noSuchUser({ persona, position }));
      }
    })
    .catch((err) => {
      dispatch(noSuchUser({ persona, position }));
      throw new Error('Error happened during fetching Github data!');
    });
};

export default githubIDSearchKeyword;
