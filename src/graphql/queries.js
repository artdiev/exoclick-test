import { gql } from '@apollo/client';

const QUERY_REPOSITORY_COLLABORATORS = gql`
    query GetContributors($owner: String!, $name: String!, $page: Int){
        repositoryContributors(owner: $owner, name: $name, page: $page) @rest(type: "Contributor", path: "repos/{args.owner}/{args.name}/contributors?page={args.page}", method: "GET") {
            login
            avatar_url
            html_url
            contributions
        }
    }`;

export default QUERY_REPOSITORY_COLLABORATORS;
