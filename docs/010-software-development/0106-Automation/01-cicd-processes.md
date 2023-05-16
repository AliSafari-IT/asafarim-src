---
sidebar_position: 1
title: "CI/CD automation steps"
slug: "/cicd/overview"
---

An example of the CI/CD automation process is shown in the table below:
<table>
  <tr>
    <th>Stage</th>
    <th>Description</th>
    <th>Tools</th>
  </tr>
  <tr>
    <td>Code Commit</td>
    <td>A developer makes changes to the codebase and commits them to the GitLab repository.</td>
    <td>GitLab</td>
  </tr>
  <tr>
    <td>Build</td>
    <td>GitLab CI/CD detects the new commit and starts the build process. The build process may involve compiling the code, creating a Docker image, or generating an executable file.</td>
    <td>GitLab CI/CD, Docker</td>
  </tr>
  <tr>
    <td>Test</td>
    <td>GitLab CI/CD runs a suite of tests on the built code to ensure that it meets quality standards. This may include unit tests, integration tests, and code quality checks.</td>
    <td>GitLab CI/CD, testing frameworks (e.g. Jest, Mocha)</td>
  </tr>
  <tr>
    <td>Deploy to Staging</td>
    <td>If the tests pass, GitLab CI/CD deploys the code changes to a staging environment for further testing and validation. This environment may be a Kubernetes cluster, a cloud provider like AWS or Azure, etc.</td>
    <td>GitLab CI/CD, Kubernetes, AWS, Azure</td>
  </tr>
  <tr>
    <td>Deploy to Production</td>
    <td>If the tests pass in the staging environment, GitLab CI/CD deploys the code changes to the production environment.</td>
    <td>GitLab CI/CD, Kubernetes, AWS, Azure</td>
  </tr>
</table>
