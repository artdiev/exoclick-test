
Full Stack Test, Exoclick
Github Contributors List


## 🚀 Welcome to a Gatsby site

# 💫 Demo
Deployed using AWS Amplify
link:
[check it out](https://master.d17oxksszanbf2.amplifyapp.com/)

### Features
- Caching
- Load more
- Notifications and status updates
- Fast
- Apollo
- 1-1.5 hours

### Bugs and issues
- No props validation or tests are provided -easy fix
- Logic and presentation are mixed up together a little -easy fix
- Due to caching load more breaks when going back to already visited repositories. Needs to be
 fixed by using Apollo in-memory store instead of useState hook for pages.
- GH Graphql does not have a query to get contributors. Rest is used instead.
- ESLint issues

1.  **Start developing.**

    Navigate into site’s directory and start it up.

    ```shell
    cd exoclick-test/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._



